import React from "react";
import  './SideBar.css';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  
} from "@mui/material";
import { styled } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import HomeIcon from "@mui/icons-material/Home";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

const drawerWidth = 240;
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
  const handleButtonClick = (filter) => {
    onFilterChange(filter);
  };

  return (
    <StyledDrawer variant={"permanent"} anchor="left">
      <div />
      <StyledList sx={{ paddingTop: "80px" }}>
        <ListItem  onClick={() => handleButtonClick("all")}>
          <StyledListItemIcon sx={{ color: "blue" }}>
            <ViewModuleIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Show All" />
        </ListItem>
        <ListItem  onClick={() => handleButtonClick("unpaidGarbageTax")}>
          <StyledListItemIcon sx={{ color: "blue" }}>
            <DeleteIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Garbage Tax" />
        </ListItem>
        <ListItem  onClick={() => handleButtonClick("unpaidPropertyTax")}>
          <StyledListItemIcon sx={{ color: "blue" }}>
            <HomeIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Property Tax" />
        </ListItem>
        <ListItem  onClick={() => handleButtonClick("unpaidWaterTax")}>
          <StyledListItemIcon sx={{ color: "blue" }}>
            <LocalDrinkIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Water Tax" />
        </ListItem>
      </StyledList>
    </StyledDrawer>
  );
};

export default Sidebar;