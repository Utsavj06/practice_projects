import { useState } from 'react';
import './App.css';
import Box from './components/Box';

function App() {
  
  return (
    <div className="App">
      <Box head="Your Total Expenditure" selector='this month' Item='SAR' />
    </div>
  );
}

export default App;
