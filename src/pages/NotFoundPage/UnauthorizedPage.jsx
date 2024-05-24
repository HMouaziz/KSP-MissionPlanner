import image from '../../assets/images/404.png'
const UnauthorizedPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <img src={image} className="text-4xl" alt='401'></img>
        <p className="text-lg text-gray-600">Houston, we have a problem...</p>
        <p className="text-md mt-4 text-gray-500">You do not have permission to view this page. Please log in.</p>
      </div>
    </div>
  );
};

export default UnauthorizedPage;