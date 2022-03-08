/* eslint-disable import/no-unresolved */
// React
import { lazy } from "react";

// Routes (Non splitted)
import LoginLayout from "Layouts/LoginLayout";
import StartLayout from "Layouts/StartLayout";
import TripleLayout from "Layouts/TripleLayout";

// Routes (Code splitting)
const Home = lazy(() => import("Pages/home/index.js"));
const Start = lazy(() => import("Pages/start/index.js"));
const MapView = lazy(() => import("Pages/map/index.js"));
const TableView = lazy(() => import("Pages/table/index.js"));
const Statistics = lazy(() => import("Pages/statistics/index.js"));

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
    layout: StartLayout
  },
  {
    id: "login",
    title: "Log in",
    description: "Log in section",
    path: "login",
    component: LoginLayout,
    layout: StartLayout
  }
];

/**
|--------------------------------------------------
| PRIVATE ROUTES
|--------------------------------------------------
*/

export const privateRoutes = [
  {
    id: "start",
    title: "Start",
    description: "Start page",
    path: "start",
    component: Start,
    layout: TripleLayout
  },
  {
    id: "map",
    title: "Map",
    description: "Map view",
    path: "map",
    component: MapView,
    layout: TripleLayout
  },
  {
    id: "table",
    title: "Table",
    description: "Table view",
    path: "table",
    component: TableView,
    layout: TripleLayout
  },
  {
    id: "statistics",
    title: "Statistics",
    description: "Statistisc",
    path: "statistics",
    component: Statistics,
    layout: TripleLayout
  }
];
