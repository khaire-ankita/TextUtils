
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }

  }
  const redMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '	#702963';
      showAlert("Red mode is enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Red mode is disabled", "success");
    }

  }
  const greenMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#355E3B';
      showAlert("green mode is enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("green mode is disabled", "success");
    }

  }
  return (
    <>
    <Router>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} redMode={redMode} greenMode={greenMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
        <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}>
         
          </Route>
        
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
