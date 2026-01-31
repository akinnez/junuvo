import { resource, asReadonly } from "nabd";
import { readKey } from "openpgp";

export const securityContext = resource({
  fetch: async () => {
    // This runs during SSR or client boot
    // NEXT_PUBLIC_ is okay here because it's the PUBLIC key

    const rawKey = process.env.NEXT_PUBLIC_PGP_PUBLIC_KEY!;
    if (!rawKey) throw new Error("PGP public key missing");
    const armoredKey = rawKey.replace(/\\n/g, "\n").trim();
    if (!armoredKey.includes("BEGIN PGP PUBLIC KEY BLOCK")) {
      throw new Error("Invalid PGP public key format");
    }

    try {
      // 3. Perform the read
      const publicKey = await readKey({ armoredKey });
      return { publicKey };
    } catch (err) {
      throw err;
    }
  },
});

export const isSecurityReady = asReadonly(securityContext.loading);
