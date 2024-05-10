import BasicLayout from "../layouts/BasicLayout";
import Main from "../pages/Main/Main";
import Clients from "../pages/Clients/Clients";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import EditClient from "../pages/EditClient/EditClient";
import AddClient from "../pages/AddClient/AddClient";

export const ROUTES = {
  MAIN: "/",

  CARS: "/cars",
  NEW_CAR: "/cars/add",
  EDIT_CAR: "/cars/edit/:id",

  CLIENTS: "/clients",
  NEW_CLIENT: "/clients/add",
  EDIT_CLIENT: "/clients/edit/:id",

  ORDERS: "/orders",
  NEW_ORDER: "/orders/add",
  EDIT_ORDER: "/orders/edit/:id",

  SERVICE: "/services",
  NEW_SERVICE: "/services/add",
  EDIT_SERVICE: "/services/edit/:id",

  REGISTER: "/register",
  LOGIN: "/login",
};

export const routes = [
  {
    path: ROUTES.MAIN,
    Component: Main,
    Layout: BasicLayout,
  },
  {
    path: ROUTES.CLIENTS,
    Component: Clients,
    Layout: BasicLayout,
  },
  {
    path: ROUTES.REGISTER,
    Component: Register,
    Layout: BasicLayout,
  },
  {
    path: ROUTES.LOGIN,
    Component: Login,
    Layout: BasicLayout,
  },
  {
    path: ROUTES.EDIT_CLIENT,
    Component: EditClient,
    Layout: BasicLayout,
  },
  {
    path: ROUTES.NEW_CLIENT,
    Component: AddClient,
    Layout: BasicLayout,
  }
];

export const navigationBarLinks = [
  {
    title: "Home",
    path: ROUTES.MAIN,
  },
  {
    title: "Clients",
    path: ROUTES.CLIENTS,
  },
];