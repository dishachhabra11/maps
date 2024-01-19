import React, { useState } from "react";
import './SideBar.css';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import HomeIcon from "@mui/icons-material/Home";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from "@mui/joy";

const drawerWidth = 250;
const drawerHeight = 100;
const navbarHeight = 64;
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  height: drawerHeight,
  width: drawerWidth,
  flexShrink: 0,
  marginTop: navbarHeight,
}));

const StyledList = styled(List)({
  width: drawerWidth,
});

const StyledListItemIcon = styled(ListItemIcon)({
  // Add your styles for ListItemIcon here
});

const StyledListItemText = styled(ListItemText)({
  // Add your styles for ListItemText here
});

const Sidebar = ({ onFilterChange }) => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleButtonClick = (filter) => {
    onFilterChange(filter);
  };

 const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <IconButton onClick={toggleSidebar} sx={{fontSize: 5, position: 'fixed', top: 10, left: 15, zIndex: 100000}}>
        {isSidebarOpen ? <CloseIcon sx={{ fontSize: 30 }}/> : <MenuIcon sx={{ fontSize: 30 }}/>}
      </IconButton>

      <StyledDrawer variant={"persistent"} anchor="left" open={isSidebarOpen}>
      <Typography level="h2" textColor="Blue" sx={{ mt: 2,ml: 6, textAlign: "center"}}>
          Digital Door
        </Typography>
        <StyledList sx={{ paddingTop: "20px" }}>
          <ListItem onClick={() => handleButtonClick("all")} sx={{
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#f0f0f0", // Change the background color on hover if desired
    },
  }}>
            <StyledListItemIcon sx={{ color: "blue" }}>
              <ViewModuleIcon />
            </StyledListItemIcon>
            <StyledListItemText primary="Show All" />
          </ListItem>
          <ListItem onClick={() => handleButtonClick("unpaidGarbageTax")} sx={{
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#f0f0f0", // Change the background color on hover if desired
    },
  }}>
            <StyledListItemIcon sx={{ color: "blue" }}>
              <DeleteIcon />
            </StyledListItemIcon>
            <StyledListItemText primary="Garbage Tax" />
          </ListItem>
          <ListItem onClick={() => handleButtonClick("unpaidPropertyTax")} sx={{
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#f0f0f0", // Change the background color on hover if desired
    },
  }}>
            <StyledListItemIcon sx={{ color: "blue" }}>
              <HomeIcon />
            </StyledListItemIcon>
            <StyledListItemText primary="Property Tax" />
          </ListItem>
          <ListItem onClick={() => handleButtonClick("unpaidWaterTax")} sx={{
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#f0f0f0", // Change the background color on hover if desired
    },
  }}>
            <StyledListItemIcon sx={{ color: "blue" }}>
              <LocalDrinkIcon />
            </StyledListItemIcon>
            <StyledListItemText primary="Water Tax" />
          </ListItem>
        </StyledList>
      </StyledDrawer>
    </>
  );
};

export default Sidebar;