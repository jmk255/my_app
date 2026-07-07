//문제 1 : props 기본값 설정

//GreetingWithDefault라는 컴포넌트를 작성하여, name 속성이 전달되지 않았을 경우 "Guest"라는 기본값을 사용하여 인사말을 표시하세요.

export const GreetingWithDefault = ({ name = "Guest" }) => {
  return (
    <>
      <p>Hello, {name}!</p>
      <hr />
    </>
  )
};


//문제2 : 자식 컴포넌트로 props 전달

//ChildComponent라는 컴포넌트를 생성하세요.
//ParentComponent는 ChildComponent를 자식 컴포넌트로 가지고 있으며, ChildComponent에게 message라는 속성을 전달합니다.
//ChildComponent는 message를 화면에 표시합니다.
import ChildComponent from "./ChildComponent";

export const ParentComponent = () => {
  return (
    <>
      <ChildComponent message="Hello from parent" />
      <hr />
    </>
  )
};


//문제3 : 조건부 클래스 적용

//ConditionalComponent라는 컴포넌트를 작성하여, isActive라는 boolean 속성에 따라 클래스 이름을 변경하세요.(삼항 연산자 사용)
//isActive가 true일 때 클래스 이름은 active입니다.
//isActive가 false일 때 클래스 이름은 inactive입니다.
//isActive는 부모컴포넌트(App)에서 props로 전달 받습니다.
//이 컴포넌트는 "Status: [Active/Inactive]"라는 텍스트를 포함하는 <div> 요소를 반환합니다.

//조건식 ? "active" : "inactive"
import ConditionalComponent from "./ConditionalComponent";

export const ToggleComponent = () => {
  return (
    <>
      <h1>Toggle Component</h1>
      <ConditionalComponent isActive={false} />
      <hr />
    </>
  )
}