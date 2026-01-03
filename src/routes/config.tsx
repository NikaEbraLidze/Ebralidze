import { lazy, Suspense } from "react";
import type { RouteConfig } from "./types";

const Home = lazy(() => import("@/pages/home/index"));
const Blog = lazy(() =>
  import("@/pages/blog/container").then((module) => ({
    default: module.BlogContainer,
  }))
);
const BlogPost = lazy(() =>
  import("@/pages/blog-post/container").then((module) => ({
    default: module.BlogPostContainer,
  }))
);

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

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

export const routeConfig: RouteConfig[] = [
  {
    path: "/",
    element: withSuspense(Home),
  },
  {
    path: "/blog",
    element: withSuspense(Blog),
  },
  {
    path: "/blog/:slug",
    element: withSuspense(BlogPost),
  },
];
