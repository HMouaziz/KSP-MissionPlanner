const logError = (error) => {
  if (error.response) {
    const status = error.response.status;
    const errorMessage = error.response.data.error;
    const errorConfig = error.response.config
    const endpoint = error.response.config.url;
    const formattedError = formatErrorMessage(status, errorMessage, errorConfig);

    if (endpoint.includes('/auth/login')) {
      switch (errorMessage) {
        case 'Invalid password':
          console.info('Login failed. Invalid password.');
          return;
        case 'User not found':
          console.info('Login failed. User not found.');
          return;
        default:
          console.warn(`Login failed. Status: ${status}, Error: ${errorMessage}`);
          return;
      }
    }

    if (endpoint.includes('/auth/signup')) {
      console.warn(`Registration failed. Status: ${status}, Error: ${errorMessage}`);
      return;
    }

    switch (status) {
      case 400:
        console.warn('Bad Request. Please check your input and try again.');
        break;
      case 401:
        console.info('Unauthorized. Invalid credentials provided.');
        break;
      case 403:
        console.warn('Forbidden. You do not have the required permissions.');
        break;
      case 404:
        console.warn('Not Found. The requested resource could not be found.');
        break;
      case 500:
        console.error('Internal Server Error. Please try again later.');
        break;
      default:
        console.error(formattedError);
    }

    if (errorMessage) {
      const customMessage = getCustomErrorMessage(errorMessage);
      if (customMessage) {
        console.error(customMessage);
      }
    }
  } else if (error.request) {
    console.error('API call failed. No response received. Error:', error.message);
  } else {
    console.error('API call failed. Error setting up request:', error.message);
  }
};

const formatErrorMessage = (status, message, config) => {
  return `
    API call failed.
    Status: ${status}
    Message: ${message}
    Endpoint: ${config.url}
    Method: ${config.method.toUpperCase()}
    To debug further, please check the Network tab in your browser's developer tools.
  `;
};

const getCustomErrorMessage = (message) => {
  const errorMessages = {
    'Invalid Password': 'Login failed. Please check your password and try again.',
    'User Not Found': 'Login failed. No account found with the provided details.',
    'Email already exists': 'Registration failed. The email address is already registered.',
    'Token expired': 'Session expired. Please log in again.',
  };

  return errorMessages[message] || null;
};

export default logError;
