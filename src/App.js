import AuctionList from "./scenes/auctionList/AuctionList";
import CreateAuction from "./scenes/createAuction/CreateAuction";
import SideBar from "./scenes/global/SideBar";
import TopBar from "./scenes/global/TopBar";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className ="app">
      <SideBar/>
      <main className="content">
        <TopBar/>
        <Routes>
          <Route path="/" element={<AuctionList/>} />
          <Route path="/createAuction" element={<CreateAuction />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
