import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
//import AuthWrapper from './auth/AuthWrapper';
import { Auth, ForgotPassword, Login, Register } from './pages/auth';
import PrivateRoutes from './utility/PrivateRoutes';
import { Desktop } from './pages/desktop';
import { Bios } from './pages/bios';
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import DeathScreenWithoutReturn from './pages/components/deathScreen/deathScreenWithoutReturn';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const helmetContext = {};
  const routes = useRoutes([
    {
      path: "/",
      element: <HelmetProvider context={helmetContext}><PrivateRoutes><Desktop /></PrivateRoutes></HelmetProvider>,
      children: [
        
      ]
    },
    {
      path: "/login",
      element: <HelmetProvider context={helmetContext}><Login /></HelmetProvider>,
      index: true,
    },
    {
      path: "/register",
      element: <HelmetProvider context={helmetContext}><Register /></HelmetProvider>,
    },
    {
      path: "/forgotpassword",
      element: <HelmetProvider context={helmetContext}><ForgotPassword /></HelmetProvider>,
    }
  ]);

  return isDesktop ? routes : <HelmetProvider context={helmetContext}> <DeathScreenWithoutReturn error={'DEVICE_IS_NOT_VALID'} steps={'Access from another Device'}/> </HelmetProvider>;

  // return (
  //   <div className='App'>
      
  //       <Routes>
  //         <Route element={<PrivateRoutes/>}> 
  //           <Route element={<Desktop />} path='/' exact/>
  //         </Route>
  //         <Route path='bios' element={<Bios />} />
  //         <Route path='auth' element={<Auth />}>
  //           <Route element={<Login />} path='login' />
  //           <Route element={<Register />} path='register' />
  //           <Route element={<ForgotPassword />} path='forgotpassword' />
  //         </Route>
  //       </Routes>

  //   </div>
  // );
}

export default App;
