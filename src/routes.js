import MainPage from "./pages/Main";
import Calculator from "./pages/Calculator";

const routes = [
  {
    name: "cgpa-calculator",
    path: "/cgpa-calculator",
    component: MainPage,
    exact: true,
  },
  {
    name: "course",
    path: "/course/:courseName",
    component: Calculator,
  },
];

export default routes;
