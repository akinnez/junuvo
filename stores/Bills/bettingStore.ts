import {
  getProviders,
  getValidateBettingService,
  getVerifyBettingTransaction
} from "@/services/Bills/bettingService";
import { action, asReadonly, resource } from "nabd";

const _provider = resource({
  fetch: async () => {
    const res = await getProviders();
    return res.data;
  },
});

export const validateAccount = action((service: string, accountId: string) => {
  resource({
    fetch: async () => {
      const res = await getValidateBettingService(service, accountId);
      return res.data;
    },
  });
});

export const validateTransaction = action((transactionIdentifier: string) => {
  resource({
    fetch: async () => {
      const res = await getVerifyBettingTransaction(transactionIdentifier);
      return res.data;
    },
  });
});

export const isPending = asReadonly(_provider.loading);
export const provider = asReadonly(_provider.data);
