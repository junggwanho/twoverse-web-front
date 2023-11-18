import React from 'react';
import Dashbord from './Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideOpenbar from './sideOpenbar/SideOpenbar';
import ProblemSolvingEvaluation from './ProblemSolvingEvaluation';
import styled from "styled-components";
import TextLinkExample from './TextLinkExample';
const Container = styled.div`
    width:100vh;
    height:100vh;
    padding: 0px;
`;

const TopNavbar = styled.div`
    background-color: pink;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 0;
`

export default function Main() {
    return (
        
        <Container>
            <TopNavbar>
                <TextLinkExample />
            </TopNavbar>
            <BrowserRouter>
                {/* <div className="background">
                     mode 상태에 따라 Login, Signin, 또는 FindId 컴포넌트를 렌더링합니다.
                    {mode === "MAIN" ? <Main setMode={setMode} /> : mode === "EMAIL" ? <Email setMode={setMode} /> : mode === "SIGNIN" ? <Signin setMode={setMode} /> : <FindPw setMode={setMode} />}
                </div> */}
                <SideOpenbar>
                    <Routes>
                        <Route path="/" element={<Dashbord />} />
                        {/* <Route path="/" element={<Dashbord />} /> */}
                        <Route path="/Main" element={<ProblemSolvingEvaluation />} />
                    </Routes>
                </SideOpenbar>
            </BrowserRouter>
        </Container>
    );
}
