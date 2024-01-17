import React from 'react';

const Sidebar = ({ onFilterChange }) => {
    const handleButtonClick = (filter) => {
      onFilterChange(filter);
    };
  
    return (
      <div>
        <button onClick={() => handleButtonClick('all')}>Show All</button>
        <button onClick={() => handleButtonClick('unpaidWaterTax')}>Unpaid Water Tax</button>
        <button onClick={() => handleButtonClick('unpaidPropertyTax')}>Unpaid Property Tax</button>
        <button onClick={() => handleButtonClick('unpaidGarbageTax')}>Unpaid Garbage Tax</button>
      </div>
    );
  };
  
  export default Sidebar;