import apiStore from "@/apiClient/apiStore";
import {
  removeUser,
  updatePassword,
  uploadImage,
} from "@/services/userService";
import { getUser as GetUser } from "@/services/userService";
import { invalidate, resource, signal } from "nabd";
import { UpdatePassword } from "@/types/user";

export const user = signal<User | any>({
  firstName: "*******",
  lastName: "*******",
  email: "",
  phone: "",
  dateOfBirth: "",
  photo: null,
  isJoinedCardWaitList: false,
  isSetupPasscode: false,
  isPasscodeSet: false,
  isEmailNotificationSet: false,
  isPushNotificationSet: false,
  isLoginEmailAlertSet: false,
  notificationCount: 0,
  accountTier: {
    dailyTransactionLimit: 20000,
    id: 1,
    singleTransactionLimit: 50000,
    type: "TIER_1",
  },
  referralCode: "",
});

export const getUser = resource({
  fetch: async () => {
    try {
      const userProfile = await GetUser();
      user.set(userProfile.data);
      return userProfile.data;
    } catch (error) {
      throw error;
    }
  },
  tags: ["user"],
});

export const updateImageStore = apiStore(
  {
    mutation: (image: { imageFile: string }) => uploadImage(image),
    optimistic(data, current) {
      return { ...current, photo: data.imageFile };
    },
    onSuccess: (res: DataResponse<{ url: string }>, current) => {
      invalidate("user");
      // return {...current, photo: res.data.url};
      return res;
    },
  },
  user,
);

export const updatePasswordStore = apiStore({
  mutation: (update: UpdatePassword) => updatePassword(update),
  onSuccess: (res) => res,
});

export const deleteUser = apiStore({
  mutation: (password: { password: string }) => removeUser(password),
  onSuccess: (res: Response) => res,
});
