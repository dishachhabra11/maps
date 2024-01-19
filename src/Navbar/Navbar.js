import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import { Typography } from "@mui/joy";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState, useEffect } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import Select from "react-select";
import { useContext } from "react";
import { Store } from "../utils/mapToNavbar";
import logo from "../assests/IMC_logo.png"

const NavBar = () => {
  const { obj } = useContext(Store);
  console.log("obj", obj);
  const handleClick = () => {
    
  }
  return (

    <AppBar>
       
      <Toolbar sx={{ bgcolor: "white", boxShadow: 4 }}>
        <Typography level="h2" textColor="Blue" sx={{ml:"50px"}}>
          Digital Door
        </Typography>
        
        {obj && <PlaceAutoComplete map={obj} />}
        
        <IconButton sx={{ marginLeft: "auto" }} variant="contained">
         
          <img src={logo} alt="" srcset="" style={{height: '50px'}}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};


function PlaceAutoComplete({ map }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const [selectOptions, setSelectOptions] = useState([]);

  useEffect(() => {
    if (status === "OK") {
      setSelectOptions(
        data.map(({ description }) => ({
          value: description,
          label: description,
        }))
      );
    } else {
      setSelectOptions([]);
    }
  }, [status, data]);

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const pos = getLatLng(results[0]);

    if (map) {
      map.panTo(pos);
      map.setZoom(16);
    }
  };

  const customStyles = {
    control: (baseStyles) => ({
      ...baseStyles,
      marginLeft: "54em",
      width: "20em",
    }),
    option: (provided, state) => ({
      ...provided,
      color: "black",
    }),
  };

  return (
    <Select
      styles={customStyles}
      value={value}
      onInputChange={(text) => setValue(text)}
      onChange={(address) => handleSelect(address.value)}
      options={selectOptions}
      isDisabled={!ready}
      placeholder="Search an address"
    />
  );
}

export default NavBar;