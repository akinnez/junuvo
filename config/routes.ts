import { string } from "zod";
import { da } from "zod/locales";


export const authRoutes = {
  login: "/login",
  forgotPassword: '/forgotPassword',
  resetPassword: "/resetPassword",
  createUser: "/create",
};


const routes = {
  dashboard: "/dashboard",
  bills:'/bills',
  transfers: '/transfers',
  onboarding: "/onboarding/",
  transactions: "/transactions",
  notifications: "/notifications",
  settings: "/settings",
}

export const navigateRoute = {
  dashboard: (type: userType) => getRoutes(type).dashboard,
   convertFunds: (type: userType) => `${getRoutes(type).dashboard}/convert`,
  accountDetails: (type: userType) => `${getRoutes(type).dashboard}/details`,
  
  airtime: (type: userType) => `${getRoutes(type).bills}/internet/airtime`,
 data: (type: userType) => `${getRoutes(type).bills}/internet/data`,
prepaid:(type: userType) => `${getRoutes(type).bills}/electricity/prepaid`,
postpaid:(type: userType) => `${getRoutes(type).bills}/electricity/postpaid`,
cable:(type: userType) => `${getRoutes(type).bills}/cabletv`,
giftcard:(type: userType) => `${getRoutes(type).bills}/giftcard`,
betting:(type: userType) => `${getRoutes(type).bills}/betting`,
stocks:(type: userType) => `${getRoutes(type).bills}/stocks`,

flight:(type: userType, route: string) => `${getRoutes(type).bills}/flight/route?type=${route}`,


  fundTransfer: (type: userType) => `${getRoutes(type).transfers}/fund`,
bankTransfer: (type: userType) => `${getRoutes(type).transfers}/bank`,
multipleTransfer: (type: userType, id:string) => `${getRoutes(type).transfers}/multiple/${id}`,
saveBeneficiary: (type: userType) => `${getRoutes(type).transfers}/beneficiary`,

  transactions: (type: userType) => getRoutes(type).transactions,
  viewTransactions: (type: userType,id: string) => `${getRoutes(type).transactions}/${id}`,

 
  createWallet: (type: userType) => `${getRoutes(type).onboarding}/createWallet`,
  verifyPhone: (type: userType) =>`${getRoutes(type).onboarding}/verify-phone`, 
  
  createUser: (type: string) => `${authRoutes.createUser}/${type}`,
};

function getRoutes(appType: userType) {
  const prefix = `/${appType}`;
  return Object.fromEntries(
    Object.entries(routes).map(([key, path]) => [key, prefix + path])
  ) as typeof routes;
}