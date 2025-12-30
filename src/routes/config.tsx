import { lazy, Suspense } from "react";
import type { RouteConfig } from "./types";

const Home = lazy(() => import("../pages/home/index"));

const Loading = () => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    Loading...
  </div>
);

const withSuspense = (
  Component: React.LazyExoticComponent<React.ComponentType>
) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

export const routeConfig: RouteConfig[] = [
  {
    path: "/",
    element: withSuspense(Home),
  },
  // აქ შეგიძლია დაამატო სხვები ისე, მაგალითად:
  // { path: "/about", element: withSuspense(About) }
];
