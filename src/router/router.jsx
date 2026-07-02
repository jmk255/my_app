//브라우저 라우터를 생성하는 메서드
import {createBrowserRouter} from "react-router"

import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

//브라우저 라우터를 생성합니다.
//배열 안에 모든 페이지(URL)를 등록합니다.
const router = createBrowserRouter([
  {
    path: "/", //브라우저 주소가 "/"부터 시작하면 이 라우트를 사용합니다
    element: <App />, //가장 먼저 App컴포넌트를 화면에 출력합니다.
    children: [ //App안에서 변경될 페이지들을 등록합니다
      {
        index: true, //기본 페이지(index)
        element: <Home />, //Outlet 위치에 Home컴포넌트를 출력합니다
      },
      {
        path: "about", // "/about"으로 접속하면 
        element: <About /> //Outlet위치에 About 컴포넌트를 출력합니다
      },
    ]
  },
  { //*는 와일드카드로 "위에서 정의한 모든 경로와 일치하지 않으면 여기로 와" 라는 의미입니다
    path: "*",
    element: <NotFound />
  }
]);

export default router;