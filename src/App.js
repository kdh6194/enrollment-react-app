// import React from "react";
import { React, useState } from "react";
import EnrollmentForm from './components/EnrollmentForm'
import EnrolList from './components/EnrolList'



// EnrollmentForm이라는 폼을 return 하도록
// 정의된 App 컴퍼넌트
const App = () => {

    const [ program, setProgram ] = useState("대학생");  // 프로그램 종류
    const [ugseats,setUgseats] = useState(60);
    const [pgseats,setPgseats] = useState(40);


    // 과정 등록한 학생 정보를 저장하는 변수 선언
    const [studentDetails,setStudentDetails] = useState({});

    const [action,setAction] = useState();                          // 작업종류 지정
    const [selItemKey,setSelItemKey] = useState();                  // 등록정보 키

    const handleChange = (e) => {
        setProgram(e.target.value);
    };

    // 프로그램별 참가가능 인원수를 변경하는 함수
    const setUpdateSeats = (modify) => {
        if (program === "대학생") {setUgseats(modify)}
        if (program === "대학원생") {setPgseats(modify)}
    };

    // 작업종류,키 설정 함수
    const handleItemSelection = (action,key) => {
            setAction(action)
            setSelItemKey(key)
    }
    return(
        <div className="App">
            <div  className="programs">
                <h3 className="title"> 프로그램 등록양식 </h3>
                <ul className="ulEnrol">
                    <li onChange={handleChange} className="parentLabels">
                        <input type="radio" name="programGroup" value="대학생" defaultChecked />학사과정     {/* input 처럼 혼자오는 태그는 뒤에 /가 필요하다*/}
                        <input type="radio" name="programGroup" value="대학원생" />석사과정
                    </li>
                    <li>{program}참가 가능 인원 : {(program === "대학생") ? ugseats : pgseats}</li>
                </ul>
            </div>
            <EnrollmentForm chosenProgram={program}
                currentSeat={(program === "대학생") ? ugseats : pgseats} setUpdateSeats={setUpdateSeats}
                    setStudentDetails={setStudentDetails} handleItemSelection={handleItemSelection} />
            <EnrolList studentDetails={studentDetails} setStudentDetails={setStudentDetails} action={action} selectedItemKey={selItemKey} />
        </div>
    )
}

// 컴퍼넌트나 모듈형태로 작성하는 경우
// 기본적으로 내보내기할 함수명 지정
export default App;