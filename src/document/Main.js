import React from 'react';
import Dashbord from './Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideOpenbar from './sideOpenbar/SideOpenbar';
import ProblemSolvingEvaluation from './ProblemSolvingEvaluation';
import styled from "styled-components";
import { Button, Navbar, Container, Nav, NavDropdown, Carousel, Offcanvas, Form } from 'react-bootstrap';

const MainCotainer = styled.div`
    max-height: 100vh;
`

export default function Main() {
    return (
        <MainCotainer>
            <BrowserRouter>
                {[false].map((expand) => (
                    <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark" sticky="top">
                        <Container fluid>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Brand href="#">이차버스</Navbar.Brand>
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Brand href="#">○○○님</Navbar.Brand>
                            <Navbar.Brand href="#">로그아웃</Navbar.Brand>
                            <Navbar.Offcanvas
                                // className="custom-offcanvas"
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                style={{ width: '30px' }}
                            >
                                {/* <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header> */}
                                {/* <Offcanvas.Body
                                    className="custom-offcanvas"> */}
                                    {/* <div className="background">
                                    mode 상태에 따라 Login, Signin, 또는 FindId 컴포넌트를 렌더링합니다.
                                    {mode === "MAIN" ? <Main setMode={setMode} /> : mode === "EMAIL" ? <Email setMode={setMode} /> : mode === "SIGNIN" ? <Signin setMode={setMode} /> : <FindPw setMode={setMode} />}
                                </div> */}
                                    <SideOpenbar />
                                    
                                {/* </Offcanvas.Body> */}
                                {/* <Nav className="justify-content-end flex-grow-1 pe-3"></Nav> */}
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>))}
                <Routes>
                    <Route path="/" element={<Dashbord />} />
                    <Route path="/" element={<Dashbord />} />
                    <Route path="/Main" element={<ProblemSolvingEvaluation />} />
                </Routes>
            </BrowserRouter>
        </MainCotainer>
    );
}
