import React from 'react';
import './Main.css';
import button from "./img/button.png"
import Chart from './Chart'

function Main(props) {
    return (
        <div>
            <div className="navbar">
                <div className="img-logo">
                    <img src={button} className="secret-bar-button" />
                        <h2> 이차버스</h2>
                </div>
                <h2>OOO님 환영합니다</h2>
            </div>
            <div className="body-container">
                <div className="main">
                    <div className="Job-evaluation-dashboard">
                        <Chart />
                    </div>
                    <div className="progress-dashbord">
                        2
                    </div>
                    <div className="feedback">
                        3
                    </div>
                </div>
                <div className="sidebar">
                </div>
            </div>
        </div>
    );
}

export default Main;