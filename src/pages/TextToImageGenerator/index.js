import React, { useState } from 'react';
import { Box, Grid, Paper, Button, TextField, Typography, CircularProgress } from '@mui/material';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'; // For validation

import Header from '../../components/header';
import Footer from '../../components/footer';

import { postRequest } from '../../services/axiosService';

const TextToImageGenerator = () => {

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageSeed, setImageSeed] = useState("");

  const initialFormValues = { 
    positivePrompt: '', 
    negativePrompt: '' 
  };

  // Form validation schema using Yup
  const validationSchema = Yup.object().shape({
    positivePrompt: Yup.string().required('Description of what you want to generate'),
  });

  const handleGenerate = async (values) => {
    try {
      console.log(values);
      setLoading(true);
      let prompts = [{
        "text": values.positivePrompt
      }]
      if (values.negativePrompt !== '') {
        prompts.push({ "text": values.negativePrompt })
      }

      const reqData = {
        steps: 40,
        width: 1024,
        height: 1024,
        seed: 0,
        cfg_scale: 5,
        samples: 1,
        text_prompts: prompts,
      };
      console.log('reqData', reqData);
      const response = await postRequest('generation/stable-diffusion-xl-1024-v1-0/text-to-image', reqData);
      console.log('response', response);
      
      const base64Image = response.data.artifacts[0].base64;
      const base64ImageSeed = response.data.artifacts[0].seed;
      setImageUrl(`data:image/jpeg;base64,${base64Image}`);
      setImageSeed(base64ImageSeed);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Paper elevation={3} sx={{ 
        margin: { xs: 2, md: 4, lg: 6 }, 
        marginTop: { xs: 10, md: 4 }, 
        marginBottom: { xs: 10, md: 4 },
      }}>
        <Box sx={{ padding: { xs: 2, sm: 3, md: 5 } }}>
          <Formik
            initialValues={initialFormValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              // Perform your image generation logic here
              // For now, just log the values and simulate a submission
              handleGenerate(values);
              setSubmitting(false);
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <Grid container spacing={3}>
                  {/* Left Box: Form */}
                  <Grid item xs={12} md={6} lg={4}>
                    <Field
                      as={TextField}
                      multiline
                      placeholder='Description of what you want to generate'
                      rows={4} // Adjust based on need
                      type={'text'}
                      id={'positivePrompt'}
                      label={'Positive Prompt'}
                      variant="outlined"
                      name={'positivePrompt'}
                      fullWidth
                      error={touched.positivePrompt && !!errors.positivePrompt}
                      helperText={touched.positivePrompt && errors.positivePrompt}
                      sx={{ marginBottom: 2 }}
                    />
                    <Field
                      as={TextField}
                      multiline
                      placeholder='What you want to avoid generating'
                      rows={4} // Adjust based on need
                      type={'text'}
                      id={'negativePrompt'}
                      label={'Negative Prompt'}
                      variant="outlined"
                      name={'negativePrompt'}
                      fullWidth
                      error={touched.negativePrompt && !!errors.negativePrompt}
                      helperText={touched.negativePrompt && errors.negativePrompt}
                    />
                    <Button  
                      disabled={loading} 
                      variant="contained" 
                      type="submit"
                      sx={{ color: "#fff", marginTop: 2, width: { xs: '100%', sm: 'auto' } }}
                    >
                      {loading ? 
                        <CircularProgress 
                          size={24} // Adjust size to match the button text
                          sx={{ color: "inherit", width: { xs: '100%', sm: 'auto' } }}
                        /> 
                      : 
                        'Generate'
                      }
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
                      {imageUrl ? (
                        <Box sx={{ textAlign: 'center', paddingBottom: 2 }}>
                          <img src={imageUrl} alt="Generated" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                          <br />
                          <Button href={imageUrl} target='_blank' download={`image_${imageSeed}.jpg`} variant="contained" sx={{ marginTop: 2 }}>
                            Download Image
                          </Button>
                        </Box>
                      ) : (
                        <Typography variant="body1">No Image Generated</Typography>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Paper>
      <Footer />
    </>
  );
};

export default TextToImageGenerator;
