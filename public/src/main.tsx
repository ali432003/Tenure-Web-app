import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import SignUp from './pages/SignUp/SignUp.tsx';
import Login from './pages/Login/Login.tsx';
import Forgetpassword from './pages/ForgetPassword/ForgetPassword.tsx';
import Sucess from './pages/ForgetPassword/Sucess.tsx';
import Email_sent from './pages/ForgetPassword/Email_sent.tsx';
import Step1 from './pages/OnBoarding/Step1.tsx';
import Step2 from './pages/OnBoarding/Step2.tsx';
import Step3 from './pages/OnBoarding/Step3.tsx';
import Step4 from './pages/OnBoarding/Step4.tsx';
import Step4_dc from './pages/OnBoarding/Step4_dc.tsx';
import Step4_sucess from './pages/OnBoarding/Step4_sucess.tsx';
import Step4_error from './pages/OnBoarding/Step4_error.tsx';
import Empty from './pages/Dashboard/Empty.tsx';
import Employees from './pages/Employees/Employees.tsx';
import Reciever from './pages/Employees/Reciever/Reciever.tsx';
import Purchase from './pages/Employees/Purchase/Purchase.tsx';



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
    element:  [<Forgetpassword />,<Sucess/>,<Email_sent/>],
  },
  {
    path: '/OnBoarding',
    element:  [<Step1 />,<Step2/>,<Step3/>,<Step4/>,<Step4_sucess/>,<Step4_error/>,<Step4_dc/>],
    
  },
  {
    path: '/Dashboard',
    element:  <Empty />,
  },
  {
    path: '/Employees',
    element:  <Employees />,
  },
  {
    path: '/Reciever',
    element:  <Reciever />,
  },
  {
    path: '/Purchase',
    element:  <Purchase />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
);
