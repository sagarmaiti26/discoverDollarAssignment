import MenuItems from './MenuItems';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const Dropdown = ({ submenus, items,dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
  console.log(submenus);
  
  return (
    <>
    
       <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
       <Autocomplete
       forcePopupIcon={false}
      disablePortal
      id="combo-box-demo"
      options={items.submenu}
      className='w-full'
      renderInput={(params) => <TextField {...params} label={items.label} />}
    />
    
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
    </>
   
  );
};

export default Dropdown;
