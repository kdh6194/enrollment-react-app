// import React from "react";
import { React, useState } from "react";
import EnrollmentForm from './components/EnrollmentForm'
// import AppDropDown from './components/AppDropDown'


// EnrollmentForm이라는 폼을 return 하도록
// 정의된 App 컴퍼넌트
const App = () => {

    const [ program, setProgram ] = useState("대학생")
    const handleChange = (e) => {
        setProgram(e.target.value)
        e.preventDefault();
    };

    return(
        <div className="App">
            <div  className="programs">
                <label>프로그램 종류 : </label>
                <select  className="appDropDowns"
                         onChange={handleChange} value={program}>
                    <option value="대학생">학사과정(대학생)</option>
                    <option value="대학원생">석사과정(대학원생)</option>
                </select>
            </div>
            <EnrollmentForm chosenProgram={program} />
        </div>
    )
}

// 컴퍼넌트나 모듈형태로 작성하는 경우
// 기본적으로 내보내기할 함수명 지정
export default App;