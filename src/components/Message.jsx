import React from 'react'
//부모 컴포넌트에서 전달받은 props 객체를 매개변수로 받음
function Message(props) {
  //prop.color값을 이용하여 글자 색상을 지정하는 스타일 객체 생성
  const msgStyle = {color: props.color, fontSize: props.size}

  return (
    //style속성에 msgStyle 객체를 적용하여 글자 색상 변경
    <div style={msgStyle}>
      {/*props.value에 전달된 문자열을 화면에 출력 */}
      {props.value}
    </div>
  )
}

export default Message