import './Dashboard.css';
// import button from "./img/button.png"
import Chart from './Dashboard-content/Chart'
import InputBox from './Dashboard-content/InputBox';
import StudentUser from './Dashboard-content/StudentLi/StudentUser';
import ProgressBarList from './Dashboard-content/ProgressBarList';
import styled from 'styled-components';

const DashboardContainer = styled.div`
    width: 100vh;
    height: 100vh;
`



export default function Dashbord() {
    return (
        <DashboardContainer>
            <div className="body-container">
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
            </div>
        </DashboardContainer>
    );
}