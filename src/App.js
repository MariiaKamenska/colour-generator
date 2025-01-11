import React, {useState} from "react";

function App() {
  const [colour, setColour] = useState('#fff')

  const generateColour = () => {
      const randomColour = `#${Math.floor(Math.random() * 16999999).toString(16)}`
    setColour(randomColour);
  };
  return (
    <div style={{...styles.container, backgroundColor: colour}}>
      <h1>Colour generator</h1>
      <p style={styles.p}>The colour is {colour}</p>
      <button onClick={generateColour} style={styles.button}>Generate</button>
      <div class="rectangle">ee</div>
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
  },
  // rectangle: {
  //   width: '300px',
  //   height: '100px',
  //   backgroundColor: '#696969',
  //   marginBottom: '20px',
  // }
}

export default App;
