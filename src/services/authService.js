import apiService from "./apiService";
import {str2ab} from "@/auth/str2ab.js";

const authService = {
  getPublicKey: async () => {
    const response = await apiService.get("/auth/public-key");
    const publicKeyPem = await response.text();

    return await window.crypto.subtle.importKey(
      "spki",
      str2ab(atob(publicKeyPem)),
      {
        name: "RSA-OAEP",
        hash: "SHA-256",
      },
      true,
      ["encrypt"],
    );
  },
};

export {authService};