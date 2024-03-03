import React, { useEffect, useRef, useState } from 'react';
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
} from 'firebase/firestore';
import { app } from '../Firebase/firebase.config.js';
import { useDispatch, useSelector } from 'react-redux';
import usePutData from '../hooks/usePutData.js';
import useGetData from '../hooks/useGetData.js';
import { Link, Navigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { FaRegCopy } from 'react-icons/fa6';

const Body = () => {
  const dispatch = useDispatch();
  const messageID = useSelector((state) => state?.message?.messageID);
  const message = useSelector((state) => state?.message?.message);

  const messageRef = useRef();

  const { putData } = usePutData(messageRef);

  const { getData } = useGetData(messageID);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="min-w-[85%] h-auto py-4 lg:mt-52 mt-20 m-10">
          <h1 className="text-6xl font-bold text-left bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
            Share a Secret
          </h1>
          <h2 className="w-[70%] text-3xl text-zinc-300 font-semibold text-left mt-5">
            …with a link that only works one time and then self-destructs.
          </h2>
        </div>

        {!messageID ? (
          <div className="min-w-[85%] text-left bg-black/40 px-6 py-12 backdrop-blur-xl rounded-md">
            <div className="block">
              <textarea
                ref={messageRef}
                type="text"
                value={messageRef?.current?.value}
                placeholder="Enter Message Here"
                className="block p-2.5 w-full text-base outline-none active:outline-none text-zinc-300 bg-black/20 border rounded-sm"
              />
            </div>
            <div className="lg:flex md:flex w-full flex items-center lg:justify-end md:justify-end justify-center mt-7">
              <button
                onClick={putData}
                type="button"
                className={`lg:w-none md:w-auto w-full flex items-center justify-center gap-2 py-[0.375rem] px-4 rounded-[0.25rem] bg-gradient-to-r from-fuchsia-600/50 to-purple-600/40  text-lg font-medium text-zinc-300  transition-all `}
              >
                Create Secret Link
              </button>
            </div>
          </div>
        ) : (
          <>
            <Navigate to={`/share`} />
          </>
        )}
      </div>
    </>
  );
};

export default Body;
