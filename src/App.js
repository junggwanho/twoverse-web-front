import './App.css';
import React, { useState } from 'react';
import Login from './auth/Login';
import Signin from './auth/Signin';
import FindId from './auth/FindId';
import FindPw from './auth/FindPw';
import Email from './auth/Email';

function App() {
  const [mode, setMode] = useState("LOGIN");

  return (
    <>
      <div className="background">
        {/* mode 상태에 따라 Login, Signin, 또는 FindId 컴포넌트를 렌더링합니다. */}
        {mode === "LOGIN" ? <Login setMode={setMode} /> : mode === "EMAIL" ? <Email setMode={setMode} /> : mode === "SIGNIN" ? <Signin setMode={setMode} /> : <FindPw setMode={setMode} />}
      </div>
    </>
  );
}

export default App;
