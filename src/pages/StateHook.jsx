//useState를 임포트
import { useState } from "react"

function StateHook() {
  //리액트 상태 변수 만드는 코드
  //상태 변수의 현재 값이 리턴되어 count상수에 대입된다
  //상태 변수 값을 변경하려면, setCount함수를 호출해야 한다
  const [count, setCount] = useState(0);

  const increase = () => {
    //setCount함수 호출로 변경된 상태 변수 값은 다음 렌더링때 그값이 리턴되어 count상수에 대입된다.
    setCount(count+1)
    setCount(count+1)
  }
  
  const decrease = () => {
    setCount(count-1)
    setCount(count-1)
  }

  const [message, setMessage] = useState("hello");
  
  //체크박스 체크 또는 해제를 저장할 상태변수
  const [value, setValue] = useState(true);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>

      <hr />

      <p>{message}</p>
      {/*렌더링 될때 message 상태 값이 input태그에 채워진다 */}
      {/*input 태그에 값이 입력되면 setMessage함수가 호출되어 입려된 값이 message상태에 채워진다(양방향 연결)*/}
      <input 
        type="text" 
        style={{margin:"20px"}}
        onChange={e => setMessage(e.target.value)}
        value={message}
      />
      <hr />

      <div id="box">
        <p>{value ? "true" : "false"}</p>
        <input 
          type="checkbox"
          checked={value}
          onChange={e => setValue(e.target.checked)}
        />
      </div>

    </div>
  )
}

export default StateHook