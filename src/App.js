import logo from './logo.svg';
import React from 'react';
import Chat from './chat';
import './App.css';

function App() {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150
  };

  return (
    <div className="App">
      <div style={style}>
        <Chat />
      </div>
    </div>
  );
}

export default App;
