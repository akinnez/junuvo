

export const authRoutes = {
  login: "/login",
  forgotPassword: '/forgotPassword',
  resetPassword: "/resetPassword",
  createUser: "/create",
};


const routes = {
  dashboard: "/dashboard",
  transactions: "/transactions",
  viewTransactions: "/transactions/:id",
  notifications: "/notifications",
  settings: "/settings",
}

export const navigateRoute = {
  viewTransactions: (type: AppType,id: string) => `${getRoutes(type).transactions}/${id}`,
  createUser: (accountType: string) => `${authRoutes.createUser}/${accountType}`,
};

export type AppType = "personal" | "business";

export function getRoutes(appType: AppType) {
  const prefix = `/${appType}`;
  return Object.fromEntries(
    Object.entries(routes).map(([key, path]) => [key, prefix + path])
  ) as typeof routes;
}