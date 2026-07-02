//Outlet은 현재 URL에 해당하는 페이지(Home, About등)를 출력하는 자리입니다
import { Outlet } from "react-router"

function App() {

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
