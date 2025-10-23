import { create } from "domain";

export const routes = {
  loginUser: "/auth/login",
  createUser: "/auth/create",
  forgotPassword: '/auth/forgotPassword',
  resetPassword: "/auth/resetPassword",
  dashboard: "/dashboard"
};

export const navigateRoute = {
  editUser: (id: string) => `/users/edit/${id}`
};
