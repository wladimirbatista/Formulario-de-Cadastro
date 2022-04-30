import React from "react";
import Main from "./components/Styles/Main";
import Form from "./components/Form/Form"
import Welcome from "./components/Welcome/Welcome";
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [userState, setUserState] = useState([])
  
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Form userState={userState} setUserState={setUserState}/>}/>
        <Route path="/welcome/:name" element={<Welcome />}/>
      </Routes>
    </Main>
  );
}

export default App;
