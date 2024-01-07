import React from 'react';
import { BottomNavigation, BottomNavigationAction, useMediaQuery, useTheme, Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ 
            width: '100%', 
            position: isMobile ? 'fixed' : 'relative', // Sticky for mobile, static/relative for desktop
            bottom: isMobile ? 0 : 'auto',
            left: 0,
            right: 0,
        }}>
            {isMobile ? (
                // Mobile Footer
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    sx={{
                        color: 'primary.contrastText',
                        '& .MuiBottomNavigationAction-root': {
                            minWidth: 0,
                            maxWidth: 'none',
                            padding: '6px 0'
                        }
                    }}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Search" icon={<SearchIcon />} />
                    <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Location" icon={<LocationOnIcon />} />
                    <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
                </BottomNavigation>
            ) : (
                // Desktop Footer
                <Box 
                    sx={{ backgroundColor: 'primary.main', color: 'white', textAlign: 'center', py: 2 }}
                >
                    <Typography variant="body1">© 2024 Your Company Name</Typography>
                    {/* Additional desktop footer content here */}
                </Box>
            )}
        </Box>
    );
};

export default Footer;
