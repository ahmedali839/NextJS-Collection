import crypto from "crypto";

const secret = process.env.SECRET_KEY;

export function authFactor(secretKey = secret) {
  return function generateSecret(userId) {
    if (!secretKey) {
      throw new Error("Secret Key not defined");
    }
    return crypto.createHmac("sha256", secretKey).update(userId).digest("hex");
  };
}
