import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TextToImageGenerator from './components/TextToImageGenerator';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TextToImageGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
