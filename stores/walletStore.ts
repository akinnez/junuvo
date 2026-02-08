import { getWallet, getVirtualAccount } from "@/services/walletService";
import { asReadonly, resource, signal, Signal } from "nabd";

export const wallet: Signal<Wallet[]> = signal([
  {
    id: 1,
    availableBalance: 0,
    virtualAccount: {
      accountName: "*******",
      accountNumber: "00000000000",
      bankName: "*******",
    },
    walletNumber: '**********'
  },
]);

export const accounts: Signal<VirtualAccount[]> = signal([
  {
    accountName: "*******",
    accountNumber: "00000000000",
    bankName: "*******",
  },
]);

const _wallet = resource<Wallet[]>({
  fetch: async () => {
    const res = await getWallet();
    wallet.set(res.data);
    return res.data;
  },
  tags: ["wallet"],
});

const _virtualAccounts = resource({
  fetch: async () => {
      const res = await getVirtualAccount();
      accounts.set(res.data);
      return res.data;
    },
    tags:['accounts']
  }
);
