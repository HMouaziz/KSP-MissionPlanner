import { authService } from '../services/authService.js'

export async function encryptData(data) {
  const publicKey = await authService.getPublicKey();
  const encoded = new TextEncoder().encode(data);

  const encrypted = await window.crypto.subtle.encrypt(
    {
      name: "RSA-OAEP",
    },
    publicKey,
    encoded
  );

  return window.btoa(String.fromCharCode(...new Uint8Array(encrypted)));
}