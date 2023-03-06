import { React, useEffect } from "react";
import '../EnrolList.css';
import {DetailsList} from '@fluentui/react/lib/DetailsList';

// 현재 컬럼 앞뒤로 수정, 삭제 버튼 추가
// 과정 등록 학생 리스트 컬럼 정의
const columns = [
    {   key : 'edit' , name : '수정' , fieldName : 'edit', minWidth: 50, isResizable: false
    },
    {
        key : 'fname' , name : 'First Name' , fieldName : 'fname', minWidth: 90, isResizable: false
    },
    {
        key : 'lname' , name : 'Last Name' , fieldName : 'lname', minWidth: 90, isResizable: false
    },
    {
        key : 'program' , name : '과정 종류' , fieldName : 'program', minWidth: 90, isResizable: false
    },
    {
        key : 'email' , name : '이메일' , fieldName : 'email', minWidth: 90, isResizable: false
    },
    {   key : 'delete' , name : '삭제' , fieldName : 'delete', minWidth: 50, isResizable: false
    }
]

// 테스트용 데이터 삽입 - 컬럼 정의시 사용했던 fieldName으로 값 초기화
// -> for문을 사용해서 직접적으로 정보를 넣어서 확인하는용도 후 for문 삭제
let items = [];


const EnrolList = (props) => {
    // 과정 등록 학생 데이터가 추가될때 마다 UI를 재렌더링하기 위해
    // useEffect 리액트 훅 사용
    // useEffect : 컴퍼넌트 생명주기에 따라 dom 랜더링 처리
    // props 객체에 값이 존재할 때 마다 detailsList에 렌더링해서 화면에 표시
    useEffect(() => {
        const curItemkey = props.studentDetails.key;
        if (curItemkey) {
            items = [ ...items,props.studentDetails ];
            props.setStudentDetails({});
        }
        // 삭제 기능 수행
        const action = props.action
        if (action === 'delete') {
            // 삭제 대상 아이템을 키로 가져옴
            const deleteItem = items.filter( (item) => item.key === props.selectedItemKey )[0] // [0]이라고 써야 제대로 값을 가져온다
            // 삭제 대상 아이템만 제외하고 다시 items 객체 생성  => 정확하게는 삭제하는것이 아닌 해당 값만 제외하고 다시 작성
            items = items.filter( (item) => item !== deleteItem )
        }// 삭제는 하지만 업데이트가 너무 느리다 -> 새로운 등록되야만 업데이트를 하고있으니
    },[props]);


    return (
        <div className="enrolList">
            <DetailsList items={items} columns={columns} />
        </div>
    );
}


export default EnrolList