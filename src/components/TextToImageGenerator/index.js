// src/components/TextToImageGenerator.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CardContent, Select, MenuItem, TextareaAutosize } from '@mui/material';
import './TextToImageGenerator.css';

const TextToImageGenerator = () => {
  const [inputText1, setInputText1] = useState('');
  const [inputText2, setInputText2] = useState('');
  const [inputText3, setInputText3] = useState('');
  const [inputText4, setInputText4] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleInputChange = (setStateFunction) => (event) => {
    setStateFunction(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const generateImage = async () => {
    // Implement image generation logic here
    // Update setGeneratedImage with the generated image URL
  };

  return (
    <div className="container">
      <Card className="card">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Text to Image Generator
          </Typography>

          <div className="form-container">
            {/* Label and Input for Text 1 */}
            <div className="form-group">
              <label htmlFor="text1">Text 1:</label>
              <TextField
                id="text1"
                variant="outlined"
                fullWidth
                margin="normal"
                value={inputText1}
                onChange={handleInputChange(setInputText1)}
              />
            </div>

            {/* Repeat for Text 2, Text 3, and Text 4 */}

            {/* Label and Dropdown for Select Option */}
            <div className="form-group">
              <label htmlFor="selectOption">Select Option:</label>
              <Select
                id="selectOption"
                variant="outlined"
                value={selectedOption}
                onChange={handleDropdownChange}
                fullWidth
                margin="normal"
              >
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                {/* Add more menu items as needed */}
              </Select>
            </div>

            {/* Label and Textarea */}
            <div className="form-group">
              <label htmlFor="textarea">Textarea:</label>
              <TextareaAutosize
                id="textarea"
                aria-label="textarea"
                placeholder="Textarea"
                minRows={3}
                value={textareaValue}
                onChange={handleInputChange(setTextareaValue)}
              />
            </div>

            {/* Generate Image Button */}
            <Button variant="contained" color="primary" onClick={generateImage}>
              Generate Image
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Display Area for Image */}
      <div className="image-container">
        {generatedImage && (
          <div>
            <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
              Generated Image:
            </Typography>
            <img src={generatedImage} alt="Generated" className="generated-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TextToImageGenerator;
