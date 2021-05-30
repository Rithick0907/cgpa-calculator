import MainPage from "./pages/Main";
import Calculator from "./pages/Calculator";

const routes = [
  {
    name: "main",
    path: "/main",
    component: MainPage,
  },
  {
    name: "course",
    path: "/course/:courseName",
    component: Calculator,
  },
];

export default routes;
