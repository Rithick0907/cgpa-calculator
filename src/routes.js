import MainPage from "./pages/Main";
import Landing from "./pages/Landing";

const routes = [
  {
    name: "main",
    path: "/main",
    component: MainPage,
  },
  {
    name: "course",
    path: "/course/:courseName",
    component: Landing,
  },
];

export default routes;
