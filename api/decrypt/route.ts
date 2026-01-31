import { NextResponse } from 'next/server';
import * as openpgp from 'openpgp';

export async function POST(req: Request) {
  try {
    const { encryptedData } = await req.json();

    const privateKey = await openpgp.decryptKey({
      privateKey: await openpgp.readPrivateKey({ armoredKey: process.env.PCG_PRIVATE_KEY! }),
      passphrase: process.env.PGP_PASSPHRASE!
    });

    const message = await openpgp.readMessage({ armoredMessage: atob(encryptedData) });
    const { data: decryptedText } = await openpgp.decrypt({
      message,
      decryptionKeys: privateKey,
      // We can also verify signatures here using the backend's public key
    });

    return NextResponse.json(JSON.parse(decryptedText as string));
  } catch (error) {
    return NextResponse.json({ error: "Decryption failed" }, { status: 400 });
  }
}