import { Outlet } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Layout />
      <div>Externatic</div>
      <Outlet />
    </div>
  );
}

export default App;
