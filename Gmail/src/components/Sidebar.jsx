import React from "react";
import { GoPencil } from "react-icons/go";
import { MdInbox } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { TbBrandPagekit } from "react-icons/tb";
import { IoMdArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";

const sidebaritems = [
  {
    icon: <MdInbox size={"24px"} />,
    text: "Inbox",
  },
  {
    icon: <CiStar size={"24px"} />,
    text: "Starred",
  },
  {
    icon: <CiClock1 size={"24px"} />,
    text: "Snoozed",
  },
  {
    icon: <IoMdSend size={"24px"} />,
    text: "Sent",
  },
  {
    icon: <TbBrandPagekit size={"24px"} />,
    text: "Drafts",
  },
  {
    icon: <IoMdArrowDown size={"24px"} />,
    text: "More",
  },
];

function Sidebar() {
  const dispatch=useDispatch()
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button onClick={()=>dispatch(setOpen(true))} className="flex items-center gap-2 rounded-3xl p-4 hover:shadow-lg bg-[#C2E7FF]">
          <GoPencil size={"24px"} />
          Compose
        </button>
      </div>
      <div className="text-gray-600">
        {sidebaritems.map((item, index) => (
          <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-[#C2E7FF]">
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
