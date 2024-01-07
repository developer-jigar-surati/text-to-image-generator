import React from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme, Button, Box } from '@mui/material';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar position={isMobile ? 'fixed' : 'static'}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: isMobile ? 'center' : 'inherit' }}>
                    AI
                </Typography>
                {!isMobile && (
                    <Box sx={{ display: 'flex' }}>
                        <Button color="inherit">Menu 1</Button>
                        <Button color="inherit">Menu 2</Button>
                        <Button color="inherit">Menu 3</Button>
                        <Button color="inherit">Menu 4</Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
