import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import Avatar from "react-avatar";
import { useDispatch,useSelector } from "react-redux";
import { setUser, setsearchText } from "../redux/appSlice";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  const [input, setinput] = useState();
  const dispatch = useDispatch();
  const {user}=useSelector(store=>store.appSlice)

  useEffect(() => {
    dispatch(setsearchText(input));
  }, [input]);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu />
          </div>
          <img
            className="w-8"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt="gmail-logo"
          ></img>
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-gray-100 px-2 py-3 rounded-full">
          <IoSearch size={"24px"} className="text-gray-600" />
          <input
            onChange={(e) => setinput(e.target.value)}
            className="rounded-full w-full bg-transparent outline-none px-1"
            type="text"
            placeholder="Search"
          ></input>
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-slate-400 cursor-pointer">
            <IoIosHelpCircleOutline size={"30px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-slate-400 cursor-pointer">
            <IoIosSettings size={"30px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-slate-400 cursor-pointer">
            <CgMenuGridO size={"30px"} />
          </div>
          <div className="cursor-pointer">
            <Popup
              trigger={
                <button>
                  <Avatar
                    src={user?.photoURL}
                    size="40"
                    round={true}
                  />
                </button>
              }
              position="bottom right"
            >
              <div>
                <button onClick={signOutHandler}>Logout</button>
              </div>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
