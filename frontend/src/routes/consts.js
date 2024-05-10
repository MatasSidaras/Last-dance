import Layout from "../layouts/Layout";
import Main from "../pages/MainPage/MainPage";
// import Clients from "../pages/Clients/Clients";
// import Register from "../pages/Register/Register";
// import Login from "../pages/Login/Login";
// import EditClient from "../pages/EditClient/EditClient";
// import AddClient from "../pages/AddClient/AddClient";

export const ROUTES = {
  MAIN: "/",


  CLIENTS: "/clients",
  // NEW_CLIENT: "/clients/add",
  // EDIT_CLIENT: "/clients/edit/:id",

  // REGISTER: "/register",
  // LOGIN: "/login",
};

export const routes = [
  {
    path: ROUTES.MAIN,
    Component: Main,
    Layout: Layout,
  },
  // {
  //   path: ROUTES.CLIENTS,
  //   Component: Clients,
  //   Layout: Layout,
  // },
  // {
  //   path: ROUTES.REGISTER,
  //   Component: Register,
  //   Layout: Layout,
  // },
  // {
  //   path: ROUTES.LOGIN,
  //   Component: Login,
  //   Layout: Layout,
  // },
  // {
  //   path: ROUTES.EDIT_CLIENT,
  //   Component: EditClient,
  //   Layout: Layout,
  // },
  // {
  //   path: ROUTES.NEW_CLIENT,
  //   Component: AddClient,
  //   Layout: Layout,
  // }
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