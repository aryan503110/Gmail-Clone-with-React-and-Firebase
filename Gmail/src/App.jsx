import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mail from "./components/Mail";
import Inbox from "./components/Inbox";
import SendMail from "./components/SendMail";
import Login from "./components/Login";
import { useSelector } from "react-redux";

function App() {
  const {user} = useSelector(store=>store.appSlice);
  return (
    <div className="bg=[#F6F8FC] overflow-hidden h-screen w-screen">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <div className="absolute w-[30%] bottom-0 right-20 z-10">
              <SendMail />
            </div>
            <Routes>
              <Route path="/" element={<Inbox />}></Route>
              <Route path="/mail/:id" element={<Mail />}></Route>
            </Routes>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
