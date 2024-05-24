import { authService } from "../services/authService.js";
import CryptoJS from "crypto-js";


const cleanKey = (publicKey) => {
  return publicKey
    .replace(/-----BEGIN PUBLIC KEY-----/, "")
    .replace(/-----END PUBLIC KEY-----/, "")
    .replace(/\n/g, "");
};

const hashPassword = (password) => {
  return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
};

const generateHMAC = (message, secret) => {
  try {
    if (!secret) {
      throw new Error("Secret key is undefined");
    }
    return CryptoJS.HmacSHA256(message, secret).toString(CryptoJS.enc.Hex);
  } catch (error) {
    console.error("Failed to generate HMAC:", error);
    throw error;
  }
};

const str2ab = (str) => {
  const buf = new Uint8Array(str.length);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};

const encryptData = async (data) => {
  const publicKey = await authService.getPublicKey();
  const encoded = new TextEncoder().encode(data);

  const encrypted = await window.crypto.subtle.encrypt(
    {
      name: "RSA-OAEP",
    },
    publicKey,
    encoded,
  );

  return window.btoa(String.fromCharCode(...new Uint8Array(encrypted)));
};


export { cleanKey, hashPassword, generateHMAC, str2ab, encryptData };
