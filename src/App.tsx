import { AppRoutes } from "./routes/container";
import { Layout } from "./components/layout/index";

function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;
