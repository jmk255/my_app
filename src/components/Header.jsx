import { Link } from "react-router";

function Header(){
  //Link컴포넌트는 a태그 대신 사용된다.
  //a태그는 페이지를 새로고침하기 때문에 애플리케이션의 상태를 잃어버리게된다
  //하지만 Link컴포넌트는 클릭 이벤트를 가지고 있지만 페이지를 새로고침하지 않으며 브라우저의 주소창의 URL을 변경시켜준다
  return (
    <nav>
      <Link to="/example">연습문제</Link>{" | "}
      <Link to="/">Home</Link>{" | "}
      <Link to="/about">About</Link>{" | "}
      <Link to="/props">Props</Link>{" | "}
      <Link to="/children">Children</Link>{" | "}
    </nav>
  )
}

export default Header;