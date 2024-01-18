import React from 'react';
import "./SideBar.css";

const Sidebar = ({ onFilterChange }) => {
    const handleButtonClick = (filter) => {
      onFilterChange(filter);
    };
  
    return (
      <div className='sidebar'>
        <button onClick={() => handleButtonClick('all')}>Show All</button>
        <button onClick={() => handleButtonClick('unpaidGarbageTax')}>Garbage Tax</button>
        <button onClick={() => handleButtonClick('unpaidPropertyTax')}>Property Tax</button>
        <button onClick={() => handleButtonClick('unpaidWaterTax')}>Water Tax</button>
      </div>
    );
  };
  
  export default Sidebar;