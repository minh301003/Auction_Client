import AuctionDetail from "./scenes/auctionDetail/AuctionDetail";
import AuctionList from "./scenes/auctionList/AuctionList";
import CreateAuction from "./scenes/createAuction/CreateAuction";
import SideBar from "./scenes/global/SideBar";
import TopBar from "./scenes/global/TopBar";
import {Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./scenes/login/Login";
import { useState, useEffect } from "react";
import { UserProvider } from "./context/UserContext";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Register from "./scenes/register/Register";


function App({ children }) {
  const [display, setDisplay] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }, [location]);
  return (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    {children}
    <UserProvider>
      <div className ="app">
        {display && <SideBar/>}
        <main className="content">
          {display && <TopBar/>}
          <ToastContainer theme='colored' position='top-center'></ToastContainer>
          <Routes>
            <Route path="/" element={<AuctionList/>} />
            <Route path="/auction/:auctionId" element={<AuctionDetail />}  />
            <Route path="/createAuction" element={<CreateAuction />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </UserProvider>
  </LocalizationProvider>
    
  );
}

export default App;
