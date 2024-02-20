import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { routes } from "./routes";

function App() {
  // react query stop refetch when switch browser tabs
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
