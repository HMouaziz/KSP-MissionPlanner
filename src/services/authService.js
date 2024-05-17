import apiService from "./apiService";
import { str2ab } from "@/auth/str2ab.js";

const authService = {
  getPublicKey: async () => {
    const publicKeyPem = await apiService.get("/auth/public-key");
    const cleanedKey = publicKeyPem
      .replace(/-----BEGIN PUBLIC KEY-----/, "")
      .replace(/-----END PUBLIC KEY-----/, "")
      .replace(/\n/g, "");
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
  getSecretKey: async () => {
    return apiService.get("/auth/secret");
  },
  registerUser: async (payload, hmac, requestId) => {
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
  },
  loginUser: async (payload, hmac, requestId) => {
    await apiService.post(
      "/auth/login",
      { data: payload },
      {
        headers: {
          "x-hmac": hmac,
          requestId: requestId,
          "Content-Type": "application/json",
        },
      },
    );
  },
  logoutUser: async () => {
    await apiService.post("/auth/logout");
  },
  verifyToken: async () => {
    return await apiService.get("/auth/verify");
  },
};

export {authService};