/* eslint-disable import/no-unresolved */
// React
import { lazy } from "react";

// Routes (Non splitted)
import LoginLayout from "Layouts/LoginLayout";
import TripleLayout from "Layouts/TripleLayout";

// Routes (Code splitting)
const Home = lazy(() => import("Pages/home/index.js"));
const Admin = lazy(() => import("Pages/admin/index.js"));

/**
|--------------------------------------------------
| PUBLIC ROUTES
|--------------------------------------------------
*/

export const publicRoutes = [
  {
    id: "home",
    title: "Homepage",
    description: "Homepage section",
    path: "",
    exact: true,
    component: Home,
    layout: TripleLayout
  },
  {
    id: "login",
    title: "Log in",
    description: "Log in section",
    path: "login",
    component: LoginLayout,
    layout: TripleLayout
  }
];

/**
|--------------------------------------------------
| PRIVATE ROUTES
|--------------------------------------------------
*/

export const privateRoutes = [
  {
    id: "admin",
    title: "Dashboard",
    description: "Dashboard section",
    path: "admin",
    component: Admin,
    layout: TripleLayout
  }
];
