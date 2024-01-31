import NewHomePage from "./pages/NewHomePage";
import NotFound from "./pages/NotFound";
//list your routes here
export const routes = [
  { path: "/", element: <NewHomePage /> },
  { path: "*", element: <NotFound /> },
];
