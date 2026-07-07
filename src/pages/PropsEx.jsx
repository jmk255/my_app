import React from 'react'
//Message컴포넌트를 불러옴
import Message from '../components/Message'
import PersonTable from '../components/PersonTable'

function PropsEx() {
  //id는 map의 key값으로 활용
  let persons1 = [
    {id: 31, name : "홍길동", age : 16},
    {id: 32, name : "임꺽정", age : 19},
    {id: 33, name : "전우치", age : 20},
  ];
  //persons1배열에 있는 배열 요소를 전부 분해해서 새로운 배열로 persons2에 할당
  //Array.slice(시작_위치, 끝_위치) : 원본 배열에서 시작_위치에서 끝_위치 사이의 항목들을 리턴 한다
  let persons2 = persons1.slice(0);
  //배열의 순서를 뒤집는다
  //Array.reverce() :  배열의 순서를 뒤집는다.
  persons2.reverse();
  return (
    <div>
      {/*자식컴포넌트로 value와 color props전달 */}
      <Message value= "반갑습니다" color="red" size={20} />
      <Message value= "반갑습니다" color="red" size={30} />
      <Message value= "반갑습니다" color="red" size={40} />
      <hr />
      {/*PersonTable컴포넌트로 persons배열을 객체로 전달 */}
      <PersonTable persons={persons1} />
      <hr />
      <PersonTable persons={persons2} />
    </div>
  )
}

export default PropsEx