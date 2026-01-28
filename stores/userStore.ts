import apiStore from "@/api/apiStore";
import { updateUser, createTransactionPin } from "@/api/services/userService";
import { getUser } from "@/api/services/userService";
import { action, invalidate, resource, Signal, signal } from "nabd";
import { Response } from "@/types/auth";

export const user = signal({ name: "Guest", email: "" });

export const getSingleUser = action((id: string) =>
  resource({
    fetch: () => getUser(id),
    tags: ["user"],
  }),
);

export const transactionPin = apiStore({
  mutation: (pin: { pin: string }) => createTransactionPin(pin),
  onSuccess: (res: Response) => res
});


export const updateSingleUser = apiStore({
  mutation: (update: any) => {
    const { id, ...data } = update;
    return updateUser(id, data);
  },
  optimistic: (val, current) => ({ ...current, ...val }),
  onSuccess: (res) => {
    invalidate("user");
    return res.data;
  },
}, user);
