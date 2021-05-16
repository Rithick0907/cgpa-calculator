import MainPage from "./pages/Main";
import CSPage from "./pages/CS";
import ITPage from "./pages/IT";

const routes = [
  {
    name: "main",
    path: "/main",
    component: MainPage,
  },
  {
    name: "CS",
    path: "/cs",
    component: CSPage,
  },
  {
    name: "IT",
    path: "/it",
    component: ITPage,
  },
];

export default routes;
