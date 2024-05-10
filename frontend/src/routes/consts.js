import Layout from "../layouts/Layout";
import Main from "../pages/MainPage/MainPage";
import Clients from "../pages/Clients/Clients";
import AddClient from "../pages/AddClient/AddClient"
import EditClient from "../pages/EditClient/EditClient";


export const ROUTES = {
  MAIN: "/",
  CLIENTS: "/clients",
  NEW_CLIENT: "/clients/add",
  EDIT_CLIENT: "clients/edit/:id" // Pakeičiame kelią
};

export const routes = [
  {
    path: ROUTES.MAIN,
    Component: Main,
    Layout: Layout,
  },
  {
    path: ROUTES.CLIENTS,
    Component: Clients,
    Layout: Layout,
  },
  {
    path: ROUTES.NEW_CLIENT,
    Component: AddClient,
    Layout: Layout,
  },
  {
    path: ROUTES.EDIT_CLIENT,
    Component: EditClient,
    Layout: Layout,
  }
];

export const navigationBarLinks = [
  {
    text: "Pagrindinis",
    path: ROUTES.MAIN,
  },
  {
    text: "Registracija į renginį",
    path: ROUTES.CLIENTS,
  },
];