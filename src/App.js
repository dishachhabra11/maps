
import './App.css';
import NavBar from './Navbar/Navbar';
import Map from './Map';
// import Sidebar from './SideBar/SideBar';
import { StoreProvider } from './utils/mapToNavbar';

function App() {
  return (
    <div>
      <StoreProvider>
        <NavBar />
        <Map />
      </StoreProvider>
    </div>
    
  );
}

export default App;
