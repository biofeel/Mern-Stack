import React, { useState } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import FormWrapper from './components/FormWrapper';
import Navbar from './components/NavBar';
import UserContext from './contexts/UserContext';

function App() {
  const [value, setValue] = useState("")

  console.log(value)
  return (
    <div>
      <UserContext.Provider value={{ value, setValue }}>
        <Wrapper>
          <Navbar />
          <FormWrapper />
        </Wrapper>
      </UserContext.Provider>
    </div>

  );
}

export default App;