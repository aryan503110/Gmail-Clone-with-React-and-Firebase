import React from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedEmail } from "../redux/appSlice";

function Message({email}) {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const openMail = () => {
    dispatch(setSelectedEmail(email))
    navigate(`/mail/${email.id}`);
  };
  return (
    <div
      onClick={openMail}
      className="flex items-start justify-between border-b border-gray-200 py-2 px-4 hover:cursor-pointer hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <MdCheckBoxOutlineBlank className="h-5 w-5" />
        </div>
        <div className="flex-none text-gray-300">
          <FaRegStar className="h-5 w-5" />
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p className="text-gray-600 max-w-full truncate inline-block">
          {email?.message}
        </p>
      </div>
      <div className="flex-none text-gray-400 text-sm"><p>{new Date(email?.createdAt?.seconds * 1000).toUTCString()}</p></div>
    </div>
  );
}

export default Message;
