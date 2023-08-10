// App.js

import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import Paraphrase from './components/Paraphrase'; // Import the Paraphrase component

import Api from './Apis/Api';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [text, setText] = useState('Enter text here');

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const [loading, setLoading] = useState(false);
  const [paraphrasedText, setParaphrasedText] = useState('');
  const [similarity, setSimilarity] = useState(0);

  const handleClick = async () => {
    setLoading(true);
    const res = await Api(text);
    setLoading(false);
    
    console.log(res, res.output, res.similarity)
    if (res && res.output && res.similarity !== undefined) {
      setParaphrasedText(res.output);
      setSimilarity(res.similarity);
    } else {
      // Handle the case when the response is not as expected
      console.error('Invalid response format:', res);
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/about"
              element={<About mode={mode} />}
            />
            <Route
              exact
              path="/"
              element={
                <>
                  <TextForm
                    showAlert={showAlert}
                    heading="Enter the text to analyze below"
                    text={text}
                    setText={setText}
                    mode={mode}
                  />
                  <div className="container my-3">
                    <Table text={text} mode={mode} />
                  </div>
                </>
              }
            />
          </Routes>
        </div>
        <Paraphrase
          loading={loading}
          paraphrasedText={paraphrasedText}
          similarity={similarity}
          handleClick={handleClick}
          mode={mode}
        />
      </Router>
    </>
  );
}

export default App;
