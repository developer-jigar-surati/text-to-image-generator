import React from 'react';
import { Box, Grid, Paper, Button } from '@mui/material';

import { BASE_URL } from '../../global/';
import Header from '../../components/header';

const notFound = () => {

    return (
        <>
            <Header />
            <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%", marginTop: "2%" }}>
                <Box sx={{ padding: 5 }}>
                    <Grid container spacing={3} style={{ display:'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Grid item xs={12} sm={4}>
                            <h1 style={{ textAlign: 'center' }}>OPPS!</h1>
                            <img
                                src={`${BASE_URL}404.png`}
                                srcSet={`${BASE_URL}404.png`}
                                alt="Page Not Found"
                                loading="lazy"
                            />
                            <div style={{ textAlign: 'center' }}>Page not found</div>
                            <Button href="/" variant="contained" sx={{ color: "#fff", marginTop: "5%", display:'flex', alignItems: 'center', justifyContent: 'center' }}>
                                Back to home
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    )
};

export default notFound;