import React from 'react'
//Message컴포넌트를 불러옴
import Message from '../components/Message'

function PropsEx() {
  return (
    <div>
      {/*자식컴포넌트로 value와 color props전달 */}
      <Message value= "반갑습니다" color="red" size={20} />
      <Message value= "반갑습니다" color="red" size={30} />
      <Message value= "반갑습니다" color="red" size={40} />
    </div>
  )
}

export default PropsEx