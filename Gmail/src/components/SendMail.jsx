import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function SendMail() {
  const open = useSelector((store) => store.appSlice.open);
  const dispatch = useDispatch();
  const [to, setto] = useState();
  const [subject, setsubject] = useState();
  const [message, setmessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "emails"), {
      to,
      subject,
      message,
      createdAt: serverTimestamp(),
    });
    dispatch(setOpen(false));
  };
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}
    >
      <div className="flex px-3 py-2 bg-gray-400 justify-between items-center rounded-t-md ">
        <h1>New Message</h1>
        <div
          onClick={() => dispatch(setOpen(false))}
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <IoClose size={"20px"} />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col p-3 gap-2">
        <input
          onChange={(e) => setto(e.target.value)}
          type="email"
          placeholder="To"
          className="outline-none py-1"
        ></input>
        <input
          onChange={(e) => setsubject(e.target.value)}
          type="text"
          placeholder="Subject"
          className="outline-none py-1"
        ></input>
        <textarea
          onChange={(e) => setmessage(e.target.value)}
          name="message"
          cols={30}
          rows={10}
          className="outline-none py-1"
        ></textarea>
        <button
          type="submit"
          className="rounded-full w-fit px-4 text-white font-medium bg-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default SendMail;
