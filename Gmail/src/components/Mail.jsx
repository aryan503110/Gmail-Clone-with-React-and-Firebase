import React from "react";
import Sidebar from "./Sidebar";
import { IoMdArrowBack } from "react-icons/io";
import { IoArchiveOutline } from "react-icons/io5";
import { GoStop } from "react-icons/go";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { LuFolderInput } from "react-icons/lu";
import { IoMdMore } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

function Mail() {
  const navigate = useNavigate();
  const { selectedEmail } = useSelector((store) => store.appSlice);
  const params = useParams();

  const deleteMailById = async (id) => {
    try {
      await deleteDoc(doc(db, "emails", id));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-white rounded-xl mx-5">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2 text-gray-700 py-2">
            <div
              onClick={() => navigate("/")}
              className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <IoMdArrowBack size={"24px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <IoArchiveOutline size={"24px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <GoStop size={"24px"} />
            </div>
            <div
              onClick={() => deleteMailById(params.id)}
              className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <FaRegTrashCan size={"24px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <MdMarkEmailUnread size={"24px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <FaRegClock size={"24px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <BsCheck2Circle size={"24px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <LuFolderInput size={"24px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <IoMdMore size={"24px"} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="hover:rounded-full hover:bg-gray-200">
              <IoIosArrowBack size={"24px"} />
            </button>
            <button className="hover:rounded-full hover:bg-gray-200">
              <IoIosArrowForward size={"24px"} />
            </button>
          </div>
        </div>
        <div className="h-[90vh] overflow-auto p-4">
          <div className="flex items-center justify-between bg-white gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-medium">{selectedEmail?.subject}</h1>
              <span className="text-sm bg-gray-200 rounded-md px-2">Inbox</span>
            </div>
            <div className="flex-none text-gray-400 my-5 text-sm">
              <p>
                {new Date(
                  selectedEmail?.createdAt?.seconds * 1000
                ).toUTCString()}
              </p>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            <h1>{selectedEmail?.to}</h1>
            <span>to me</span>
          </div>
          <div className="my-10">
            <p>{selectedEmail?.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mail;
