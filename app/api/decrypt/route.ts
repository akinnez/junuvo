import { NextResponse } from 'next/server';
import {decryptKey, readPrivateKey, readMessage, decrypt} from 'openpgp';

export async function POST(req: Request) {
  try {
    const { encryptedData } = await req.json();
    
    const privateKey = await decryptKey({
      privateKey: await readPrivateKey({ armoredKey: process.env.PCG_PRIVATE_KEY! }),
      passphrase: process.env.PGP_PASSPHRASE!
    });

    const message = await readMessage({ armoredMessage: atob(encryptedData) });
    const { data: decryptedText } = await decrypt({
      message,
      decryptionKeys: privateKey,
      // We can also verify signatures here using the backend's public key
    });

    return NextResponse.json(JSON.parse(decryptedText as string));
  } catch (error) {
    return NextResponse.json({ error: "Decryption failed" }, { status: 400 });
  }
}