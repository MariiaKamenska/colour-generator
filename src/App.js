import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [colour, setColour] = useState('#fff');

  const [colorList, setColorList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/colors').then((response) => setColorList(response.data)).catch((error) => console.error('Помилка з завантаженням кольорів:', error));
  }, [])

  const generateColour = () => {
      const randomColour = `#${Math.floor(Math.random() * 16999999).toString(16)}`
    setColour(randomColour);
    axios.get('http://localhost:5000/colors', { color: randomColour })
    // .then((response) => setColorList( -))
    .catch((error) => console.error('Помилка з додаванням кольору:', error));

  };

  return (
    <div style={{...styles.container, backgroundColor: colour}}>
      <h1>Colour generator</h1>
      <p style={styles.p}>The colour is {colour}</p>
      <button onClick={generateColour} style={styles.button}>Generate</button>
      
      <h2></h2>
      <ul>

      </ul>
    </div>
  
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  p: {
    color: '#696969',
  },
  button: {
    backgroundColor: '#288BA8',
  }
  // rectangle: {
  //   width: '300px',
  //   height: '100px',
  //   backgroundColor: '#696969',
  //   marginBottom: '20px',
  // }
}

export default App;
