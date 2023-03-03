import React from "react";
import {useState} from "react";
import '../App.css'

const EnrollmentForm = (props) => {
    // 폼에 입력한 이름/성을 기억하기 위해 state형 변수 선언
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // state형 변수에 저장된 이름/성을 환영메세지로 출력하기 위해 선언
    const [welcomeMessage, setWelcomeMessage] = useState("");

    // '등록하기' 버튼 클릭시 이름/성을 환영메세지로 만들어
    // 폼 아래쪽에 나타냄
    const handleSubmit = (e) => {
         setWelcomeMessage(`환영합니다, ${lastName} ${firstName}님 !!`)
            //굳이 return 할 필요가 없다 바로 작성하게끔
        e.preventDefault(); // submit 기능 전파 중지  -> 요거 없으면 계속 submit 실행
    };
    return (
        <div>
            <form className='enrolForm' onSubmit={handleSubmit}>
            <h1>{props.chosenProgram} 등록 양식</h1>
            <div><label>First Name</label>
                {/* onBlur 이벤트 발생시 입력한 이름/성은 firstName, lastName 변수에 저장*/}
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