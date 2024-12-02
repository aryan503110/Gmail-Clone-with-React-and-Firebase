import React, { useState, useEffect } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice";

function Messages() {
  const dispatch = useDispatch();
  const {emails,searchText} = useSelector((store) => store.appSlice);
  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setEmails(allEmails));
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe when component unmounts
  }, []);
  

  return (
    <div>
      {
        emails && emails?.map((email)=>      <Message email={email} />)
      }
    </div>
  );
}

export default Messages;
