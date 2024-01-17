import { Routes,Route } from "react-router";
import NavBar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes> 
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
