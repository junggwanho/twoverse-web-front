import React, { useState } from 'react';
import ProgressBar from './ProgressBar'
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 10px;
`

export default function ProgressBarList() {
    const [nowStep, setNowStep] = useState(60);
    const totalStep = 100;

    return (
        <Container>
            <h3>
                학생 공정별 진행도
            </h3>
            <hr />
            <ProgressBar totalStep={totalStep} nowStep={nowStep} />
            <ProgressBar totalStep={totalStep} nowStep={nowStep} />
            <ProgressBar totalStep={totalStep} nowStep={nowStep} />
            <ProgressBar totalStep={totalStep} nowStep={nowStep} />
        </Container>
    )
}