import "./App.css";
import AppRoutes from "./routes";

function App() {
  console.log("Testing...")
  const name = process.env.REACT_APP_HF_KEY as string
  console.log(`Testing name = ${name}`)
  return <AppRoutes />;
}

export default App;
