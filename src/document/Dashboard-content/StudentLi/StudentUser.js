import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../../../common/Button';
import './StudentUser.css';
import Form from 'react-bootstrap/Form';

const Container = styled.div`
    display:flex;
    flex-direction: column;
`

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
    const initialStudentList = [
        { id: 1, name: '이상욱' },
        { id: 2, name: '최이제' },
        { id: 3, name: '김동건' },
    ];

    const [studentList, setStudentList] = useState(initialStudentList);
    const [selectedStudentId, setSelectedStudentId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleStudentClick = (id) => {
        setSelectedStudentId(id);
    };

    const handleSearch = () => {
        const filteredStudents = initialStudentList.filter((student) =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setStudentList(filteredStudents);
    };

    return (
        <Container>
            <h3>학생정보창</h3>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="outline-success" onClick={handleSearch}>
                    Search
                </Button>
            </Form>
            <hr />
            <ul className='studentUserList'>
                {studentList.map((student) => (
                    <li className='studentUserListItem' key={student.id}>
                        <div className={`studentUser ${selectedStudentId === student.id ? 'selected' : ''}`}>
                            <span className='userName'>{student.name}</span>
                        </div>
                        <StyleButton
                            cyan
                            isSelected={selectedStudentId === student.id}
                            onClick={() => handleStudentClick(student.id)}
                        >
                            change
                        </StyleButton>
                    </li>
                ))}
            </ul>
        </Container>
    );
}