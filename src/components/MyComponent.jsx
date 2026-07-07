import React from 'react'

//객체 구조 분해 할당을 사용하면 필요한 속성만 바로 꺼낼 수 있다
function MyComponent({name = "기본 이름", children}) {
  //children은 컴포넌트의 시작 태그와 종료 태그 사이의 내용을 자동으로 전달받는 특별한 props입니다
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.<br />
      children값은 {children}입니다
    </div>
  )
}

export default MyComponent