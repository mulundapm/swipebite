import React from 'react'
import { BottomNavigation } from '@mui/material';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import { Link as RouterLink} from 'react-router-dom';

function NavBar() {

  return (
    <div className='navbar'>
        <Paper elevation={3} >
            <BottomNavigation>
                {/* showLabelsç
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }} */}
                <BottomNavigationAction component={RouterLink} to="/" label="Home" icon={<HomeIcon />} />
                {/* <BottomNavigationAction component={RouterLink} to="/" label="Search" icon={<SearchIcon />} /> */}
                <BottomNavigationAction component={RouterLink} to="/favourites" label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction component={RouterLink} to="/login" label="Profile" icon={<AccountCircleIcon />} />
            </BottomNavigation>
        </Paper>
    </div>

  )
}

export default NavBar