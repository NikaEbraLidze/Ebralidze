import { AppRoutes } from "./routes/container";
import { Layout } from "./components/layout/index";
import { ThemeProvider } from "./utils/hooks/themeContext";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
