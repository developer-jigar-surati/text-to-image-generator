import React from 'react';
import { Box, Grid, Paper, Button, TextField } from '@mui/material';
import Header from '../../components/header';
import Footer from '../../components/footer';

const TextToImageGenerator = () => {
  const imageUrl = "https://via.placeholder.com/500";

  return (
    <>
      <Header />
      <Paper elevation={3} sx={{ 
        margin: { xs: 2, md: 4, lg: 6 }, 
        marginTop: { xs: 10, md: 4 }, 
        marginBottom: { xs: 10, md: 4 },
      }}>
        <Box sx={{ padding: { xs: 2, sm: 3, md: 5 } }}>
          <Grid container spacing={3}>

            {/* Left Box: Form */}
            <Grid item xs={12} md={6} lg={4}>
              <TextField
                multiline
                placeholder='Description of what you want to generate'
                rows={4} // Adjust based on need
                type={'text'}
                id={'positive-prompt'}
                label={'Positive Prompt'}
                variant="outlined"
                name={'positive-prompt'}
                fullWidth
                required
                sx={{ marginBottom: 2 }}
              />
              <TextField
                multiline
                placeholder='What you want to avoid generating'
                rows={4} // Adjust based on need
                type={'text'}
                id={'negative-prompt'}
                label={'Negative Prompt'}
                variant="outlined"
                name={'negative-prompt'}
                fullWidth
                required
              />
              <Button variant="contained" sx={{ color: "#fff", marginTop: 2, width: { xs: '100%', sm: 'auto' } }}>
                Generate
              </Button>
            </Grid>

            {/* Right Box: Image Placeholder */}
            <Grid item xs={12} md={6} lg={8}>
              <Box sx={{
                height: { xs: '250px', sm: '300px', md: '400px' }, // Responsive height
                border: "1px dashed grey", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                padding: 2
              }}>
                <img 
                  src={imageUrl} 
                  alt="Generated" 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    width: 'auto', 
                    height: 'auto' 
                  }} 
                />
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Paper>
      <Footer />
    </>
  );
};

export default TextToImageGenerator;
