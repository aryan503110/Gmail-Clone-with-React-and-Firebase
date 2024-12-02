import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdRefresh } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { MdInbox } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { MdOutlinePeople } from "react-icons/md";
import Messages from "./Messages";

const mailType = [
  {
    icon: <MdInbox size={"24px"} />,
    text: "Primary",
  },
  {
    icon: <FaTag size={"24px"} />,
    text: "Promotion",
  },
  {
    icon: <MdOutlinePeople size={"24px"} />,
    text: "Social",
  },
];

function Inbox() {
  const [mailTypeSelected, setmailTypeSelected] = useState(0);
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-whi' rounded-xl mx-5">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2 text-gray-600 py-2">
            <div className="flex items-center gap-1">
              <MdCheckBoxOutlineBlank size={"24px"} />
              <IoMdArrowDropdown size={"24px"} />
            </div>
            <div className="p-2 rounded-full cursor-pointer hover:bg-gray-400">
              <IoMdRefresh size={"24px"} />
            </div>
            <div className="p-2 rounded-full cursor-pointer hover:bg-gray-400">
              <IoMdMore size={"24px"} />
            </div>
          </div>
        </div>
        <div className="h-[90vh] overflow-y-auto">
          <div className="flex items-center gap-1">
            {mailType.map((item, index) => {
              return (
                <button
                  className={`${
                    mailTypeSelected == index
                      ? "w-50 hover:bg-gray-200 flex items-center gap-5 p-4  border-b-4 border-b-blue-300"
                      : "w-50 hover:bg-gray-200 flex items-center gap-5 p-4 "
                  }`}
                  key={index}
                  onClick={() => setmailTypeSelected(index)}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </button>
              );
            })}
          </div>
          <Messages/>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
