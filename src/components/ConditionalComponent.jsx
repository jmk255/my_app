import '../styles/PropsExample.css'; // 클래스 정의가 있는 CSS 파일을 import

//이곳에 작성
const ConditionalComponent = ({isActive}) => {
  //isActive가 true면 active를 false면 inactive를 className 에 할당
  const className = isActive ? "active" : "inactive"
  return (
    //div의 클래스를 className값으로 할당
    <div className={className}>
      {/*isActive가 true면 "Active"를 false면 "Inactive"를 출력 */}
      Status: {isActive ? "Active" : "Inactive"}
    </div>
  )
};

export default ConditionalComponent;