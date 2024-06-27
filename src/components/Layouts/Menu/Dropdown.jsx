import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItems from './MenuItems';

const Dropdown = ({ submenus, items, dropdown, depthLevel }) => {
  const [open, setOpen] = React.useState(false);
  const [inputFocused, setInputFocused] = React.useState(false);
  const navigate = useNavigate();
  
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';

  const options = items.submenu && Array.isArray(items.submenu) 
    ? items.submenu.map(item => ({ label: item.label, url: item.url }))
    : [];

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
      <li onClick={(e) => e.stopPropagation()}>
        <Autocomplete
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          disablePortal
          id="combo-box-demo"
          options={options}
          className='w-full'
          renderInput={(params) => (
            <TextField 
              {...params} 
              label={items.label}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
          )}
          onChange={(event, newValue) => {
            if (newValue && newValue.url) {
              navigate(newValue.url);
              
            }
          }}
        />
      </li>
      {!inputFocused && submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;