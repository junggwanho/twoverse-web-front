import './Dashboard.css';
// import button from "./img/button.png"
import Chart from './Dashboard-content/Chart'
import InputBox from './Dashboard-content/InputBox';
import StudentUser from './Dashboard-content/StudentLi/StudentUser';
import ProgressBarList from './Dashboard-content/ProgressBarList';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DashboardContainer = styled.div`
    width: 80vw;
    height: 100vh;
    display: flex;
    magin: auto;
    justify-content: center;
    align-items: center;
`


export default function Dashbord() {
    return (
        <DashboardContainer>
            {/* <div className="body-container">
                <div className="main">
                    <div className="Job-evaluation-dashboard">
                        <Chart />
                    </div>
                    <div className="progress-dashbord">
                        <ProgressBarList />
                    </div>
                    <div className="feedback">
                        <InputBox />
                    </div>
                </div>
                {/* <div className="sidebar">
                    <StudentUser />
                </div> */}
            {/* </div> */}
            <Container>
                <Row>
                    <Col>
                        <Chart />
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <ProgressBarList />
                    </Col>
                    <Col className="feedback">
                        <InputBox />
                    </Col>
                </Row>
                {/* <div className="sidebar">
                    <StudentUser />
                </div> */}
            </Container>
        </DashboardContainer>
    );
}