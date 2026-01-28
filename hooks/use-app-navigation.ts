"use client";

import { useParams } from "next/navigation";
import { getRoutes, navigateRoute, AppType } from "@/config/routes";

export function useAppNavigation() {
  const params = useParams();

  // Ensure we fall back to 'personal' if the param is missing
  const appType = params.appType ? (params.appType as AppType) : (params.accountType as AppType);

  return {
    appType,
    routes: getRoutes(appType),
    navigate: navigateRoute,
    // Helper to call navigateRoute functions with the current appType
    getPath: (routeName: keyof typeof navigateRoute, id: string) =>
      navigateRoute[routeName](appType, id),
  };
}
