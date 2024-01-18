import "./App.css";
import NavBar from "./Navbar/Navbar";
import Map from "./Map";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <NavBar />
      <Map />
    </div>
  );
}

export default App;
