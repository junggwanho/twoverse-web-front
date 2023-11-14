import './Dashboard.css';
// import button from "./img/button.png"
import Chart from './Dashboard-content/Chart'
import InputBox from './Dashboard-content/InputBox';
import StudentUser from './Dashboard-content/StudentLi/StudentUser';
import ProgressBarList from './Dashboard-content/ProgressBarList';
import TextLinkExample from './Dashboard-content/TextLinkExample';

export default function Dashbord() {
    return (
        <div>
            {/* <div className="navbar"> */}
            <TextLinkExample />
            {/* <div className='auth-logout'>
                    <h2>OOO님</h2>
                    <h2> || </h2>
                    <h2>LogOut</h2>
                </div> */}
            {/* </div> */}
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
                <div className="sidebar">
                    <StudentUser />
                </div>
            </div>
        </div>
    );
}