import React from "react";
import {useState} from "react";
import '../App.css'

const EnrollmentForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [welcomeMessage, setWelcomeMessage] = useState("");

    const handleSubmit = (e) => {
         setWelcomeMessage(`환영합니다, ${lastName} ${firstName}님 !!`)
            //굳이 return 할 필요가 없다 바로 작성하게끔
        e.preventDefault(); // submit 기능 중지  -> 요거 없으면 계속 submit 실행
    };
    return (
        <div>
            <form className='enrolForm' onSubmit={handleSubmit}>
            <h1>대학생 등록 양식</h1>
            <div><label>First Name</label>
                <input type="text" name="fname"
                onBlur={(e) => setFirstName(e.target.value)} /></div>
                {/* 대상(e)이 동작(이벤트 발생)을 한다면 setFirstName에 대상의 입력된 값을 넘겨줘
                        => 선언형 프로그래밍*/}
            <div><label>Last Name</label>
                <input type="text" name="lname"
                onBlur={(e) => setLastName(e.target.value)} /></div>

            <div><button type='submit' >등록하기</button></div>

            <label id="studentMsg" className="message">{welcomeMessage}</label>
            </form>
        </div>
    )
}

export default EnrollmentForm;