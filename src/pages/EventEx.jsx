function EventEx(){
  //경고창을 띄우는 함수 생성
  const onClickHandler = () => alert("버튼1 클릭");
  //count변수에 0을 할당
  let count = 0;
  //increase함수를 호출하면 count값을 1증가시키고 콘솔창에 count값을 출력
  const increase = () => {++count; console.log(count)}
  //decrease함수를 호출하면 count값을 1감소시키고 콘솔창에 count값을 출력
  const decrease = () => {--count; console.log(count)}
  return (
    <div>
      {/*virtual DOM 이벤트 이름은 카멜케이스로 표기 */}
      <button onClick={onClickHandler}>버튼1</button>
      {/*다음과 같이 바로 함수를 구현할 수 있다*/}
      <button onClick={() => alert("버튼2 클릭")}>버튼2</button>
      
      <hr />

      <p>{count}</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </div>
  )
}

export default EventEx