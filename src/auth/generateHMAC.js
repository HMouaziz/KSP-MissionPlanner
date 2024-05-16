import CryptoJS from "crypto-js";

const generateHMAC = (message, secret) => {
  try {
    if (!secret) {
      throw new Error('Secret key is undefined');
    }
    return CryptoJS.HmacSHA256(message, secret).toString(CryptoJS.enc.Hex);
  } catch (error) {
    console.error('Failed to generate HMAC:', error);
    throw error;
  }
};

export default generateHMAC;