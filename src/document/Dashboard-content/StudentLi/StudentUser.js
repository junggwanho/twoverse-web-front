import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../../../common/Button';
import './StudentUser.css';

const StyleButton = styled(Button)`
    font-size: 14px;
    height: 1.5rem;

    ${(props) =>
        props.isSelected &&
        css`
            background-color: #36b37e; /* 선택된 색상으로 설정 */
            color: #ffffff; /* 선택된 텍스트 색상으로 설정 */
        `}
`;

export default function StudentUser() {
    const studentList = [
        { id: 1, name: '이상욱' },
        { id: 2, name: '최이제' },
        { id: 3, name: '김동건' },
        // 다른 학생들의 정보도 추가
    ];

    const [selectedStudentId, setSelectedStudentId] = useState(null);

    const handleStudentClick = (id) => {
        setSelectedStudentId(id);
    };

    return (
        <>
            <h3>학생정보창</h3>
            <hr />
            <ul className='studentUserList'>
                {studentList.map((student) => (
                    <li className='studentUserListItem' key={student.id}>
                        <div className={`studentUser ${selectedStudentId === student.id ? 'selected' : ''}`}>
                            <span className='userName'>{student.name}</span>
                        </div>
                        <StyleButton cyan isSelected={selectedStudentId === student.id} onClick={() => handleStudentClick(student.id)}>
                            change
                        </StyleButton>
                    </li>
                ))}
            </ul>
        </>
    );
}
