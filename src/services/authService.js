import apiService from "./apiService";
import {cleanKey, str2ab} from "@/utils/authentication.js";

const authService = {
  getPublicKey: async () => {
    const publicKeyPem = await apiService.get("/auth/public-key");
    const cleanedKey = cleanKey(publicKeyPem)
    return await window.crypto.subtle.importKey(
      "spki",
      str2ab(atob(cleanedKey)),
      {
        name: "RSA-OAEP",
        hash: "SHA-256",
      },
      true,
      ["encrypt"],
    );
  },
  registerUser: async (payload, hmac, requestId) => {
    try {
      await apiService.post(
        "/auth/signup",
        { data: payload },
        {
          headers: {
            "x-hmac": hmac,
            requestId: requestId,
            "Content-Type": "application/json",
          },
        },
      );
    } catch (error) {
      if (error.response && error.response.status === 409) {
        throw new Error("UserAlreadyExists");
      } else {
        throw error;
      }
    }
  },
  loginUser: async (payload, hmac, requestId) => {
    try {
      await apiService.post(
        "/auth/login",
        { data: payload },
        {
          headers: {
            "x-hmac": hmac,
            requestId: requestId,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error('UserNotFound');
      } else if (error.response && error.response.status === 401) {
        throw new Error('PasswordMismatch');
      } else {
        throw error;
      }
    }
  },
  logoutUser: async () => {
    await apiService.post("/auth/logout");
  },
  getSecretKey: async () => {
    return apiService.get("/auth/secret");
  },
  verifyToken: async () => {
    return await apiService.get("/auth/verify");
  },
};

export {authService};