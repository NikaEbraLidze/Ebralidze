import { Routes, Route } from "react-router-dom";
import { routeConfig } from "./config";

export const AppRoutes = () => {
  return (
    <Routes>
      {routeConfig.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
