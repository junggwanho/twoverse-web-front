import './App.css';
import React, { useState } from 'react';
import Login from './auth/Login';
import Signin from './auth/Signin';
import FindId from './auth/FindId';
import FindPw from './auth/FindPw';
import Email from './auth/Email';
import Main from './document/Main';
import Chart from './document/Chart';

function App() {
  const [mode, setMode] = useState("MAIN");

  return (
    <>
      <div className="background">
        {/* mode 상태에 따라 Login, Signin, 또는 FindId 컴포넌트를 렌더링합니다. */}
        {mode === "MAIN" ? <Main setMode={setMode} /> : mode === "EMAIL" ? <Email setMode={setMode} /> : mode === "SIGNIN" ? <Signin setMode={setMode} /> : <FindPw setMode={setMode} />}
      </div>
    </>
  );
}

export default App;
