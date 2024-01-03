import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>Externatic</div>
      <Outlet />
    </div>
  );
}

export default App;
