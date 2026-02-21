import { authFactor } from "@/lib/encryption-closures/utils";

export default function EncryptionDemoPage() {
  const generateSecret = authFactor(); // closure with SECRET_KEY
  const token = generateSecret("user-123"); // HMAC for user 123

  const generateSecret2 = authFactor(); // closure with SECRET_KEY
  const token2 = generateSecret2("user-123"); // HMAC for user 123

  return (
    <div>
      <h1>Encrypted closure demo</h1>
      <p>Generated token: {token}</p>
      <p>Generated token: {token2}</p>
      <p>
        Inner function remembers secret, That’s a closure, which also encrypt
        the value
      </p>
      <p>Solves: Token tampering, Identity spoofing, Data exposure</p>
    </div>
  );
}
