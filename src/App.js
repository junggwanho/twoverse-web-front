import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './auth/Login';
import Signin from './auth/Signin';
import FindId from './auth/FindId';
import FindPw from './auth/FindPw';
import Email from './auth/Email';
import Main from './document/Main'
import palette from './lib/styles/palette';
import button from './document/img/button.png'
import styled from 'styled-components';

function App() {
  const [mode, setMode] = useState("MAIN");


  const MainBox = styled.div`
    width: 100%;
    height: 100%;
    background: ${palette.cyan[0]};
  `

  return (
    <MainBox>
      <Main />
    </MainBox>
  )
}

export default App;
