import "./App.css";
import AppRoutes from "./routes";

function App() {
  console.log("Testing...")
  const name = process.env.MY_NAME as string
  console.log(`Testing name = ${name}`)
  return <AppRoutes />;
}

export default App;
