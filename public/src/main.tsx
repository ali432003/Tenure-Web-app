import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import SignUp from './pages/SignUp/SignUp.tsx';
import Login from './pages/Login/Login.tsx';
import Forgetpassword from './pages/ForgetPassword/ForgetPassword.tsx';
import Step1 from './pages/OnBoarding/Step1.tsx';
import Step2 from './pages/OnBoarding/Step2.tsx';
import Step3 from './pages/OnBoarding/Step3.tsx';
import Step4 from './pages/OnBoarding/Step4.tsx';
import Step4_dc from './pages/OnBoarding/Step4_dc.tsx';
import Step4_sucess from './pages/OnBoarding/Step4_sucess.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element:  <App />,
  },
  {
    path: '/Home',
    element:  <Home />,
  },
  {
    path: '/SignUp',
    element:  <SignUp />,
  },
  {
    path: '/Login',
    element:  <Login />,
  },
  {
    path: '/Forgetpassword',
    element:  <Forgetpassword />,
  },
  {
    path: '/OnBoarding1',
    element:  [<Step1 />],
  },
  {
    path:'/OnBoarding2',
    element: <Step2/>
  },
  {
    path:'/OnBoarding3',
    element: <Step3/>
  },
  {
    path:'/OnBoarding4',
    element: [<Step4/>,<Step4_sucess/>,<Step4_dc/>]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
);
