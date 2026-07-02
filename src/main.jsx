import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//RouterProvider는 라우터 설정(router)을 React 앱에 적용하는 역할을 합니다.
import { RouterProvider } from 'react-router'
//router.jsx파일에서 생성한 라우터 객체를 가져옵니다
import router from './router/router' 

createRoot(document.getElementById('root')).render(
  //RouterProvider에 router객체를 전달합니다.
  //react Router가 현재 URL을 확인하여 어떤 페이지를 보여줄지 결정합니다.
  <RouterProvider router={router} />
)
