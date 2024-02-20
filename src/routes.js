import React from "react";
import CollectionPage from "./pages/CollectionPage";
import NewHomePage from "./pages/NewHomePage";
import NotFound from "./pages/NotFound";
//list your routes here

export const routes = [
  { path: "/collections", element: <CollectionPage /> },
  { path: "/collections/:slug", element: <CollectionPage /> },
  { path: "/", element: <NewHomePage /> },
  { path: "*", element: <NotFound /> },
];
