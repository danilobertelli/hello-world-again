import "./App.css";
import AppRoutes from "./routes";

function App() {
  console.log("Testing...");

  // Read environment variable from Vite
  const name = import.meta.env.VITE_HUGGINGFACE_API_TOKEN;

  console.log(`API Key = ${name ? "Loaded" : "Not Found"}`);

  return <AppRoutes />;
}

export default App;
