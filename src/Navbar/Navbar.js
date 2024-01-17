import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import { Typography } from "@mui/joy";
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
  return(
    <AppBar>
      <Toolbar sx={{bgcolor: 'white', boxShadow: 4}}>
        <Typography level='h2' textColor='Blue'>
          Digital Door
        </Typography>
        <OutlinedInput placeholder="Search" size="small" sx={{ml: 10}}/>
        <Button variant="contained" sx={{ ml: 1}}><SearchIcon /></Button>
        <IconButton sx={{marginLeft: 'auto'}} variant='contained'>
          <AccountCircleIcon fontSize="large"/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;