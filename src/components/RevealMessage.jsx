import React from 'react';
import useGetData from '../hooks/useGetData';
import { useSelector } from 'react-redux';
import Background from './Background';
import { Link, useParams } from 'react-router-dom';
import { FaRegCopy, FaTrash } from 'react-icons/fa6';
import useFlushData from '../hooks/useFlushData';
import { BsReplyFill } from 'react-icons/bs';

const RevealMessage = () => {
  const { messageID } = useParams();

  const revealMessage = useSelector((state) => state?.message?.revealMessage);

  const { getData } = useGetData(messageID);

  const { flushData } = useFlushData(messageID);

  const message = useSelector(
    (state) => state?.message?.retrieveMessage?.message
  );
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="min-w-[85%] h-auto py-4 mt-52 mb-5">
          <h1 className="text-6xl font-bold text-left bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
            Knock Knock
          </h1>
          <h2 className="text-3xl text-zinc-300 font-semibold text-left mt-5">
            You received a secret.
          </h2>
        </div>

        <div className="min-w-[85%] flex flex-col items-center justify-center">
          <div className="w-full bg-black/40 px-7 py-8 backdrop-blur-xl rounded-md border-[1px] border-zinc-600 ">
            {revealMessage && (
              <div className="w-full mb-5">
                <h1 className="w-full px-4 py-4 font-semibold  placeholder:font-normal border bg-black/20 rounded-md focus:outline-none">
                  {messageID && <p>{message}</p>}
                </h1>
              </div>
            )}

            <div
              className={`flex items-center ${
                revealMessage ? 'justify-end' : 'justify-start'
              } gap-3 ${revealMessage && 'mt-5'}`}
            >
              {revealMessage ? (
                <button
                  onClick={flushData}
                  type="button"
                  className="flex items-center justify-end gap-2 py-[0.375rem] px-4  rounded-[0.25rem]  text-lg font-medium text-zinc-300  hover:bg-gradient-to-r hover:from-purple-600/40 hover:to-fuchsia-600/50 transition-all"
                >
                  Destory Secret
                </button>
              ) : (
                <div className="w-full">
                  <p>
                    Be aware! The following secret can only be revealed one
                    time.
                  </p>
                </div>
              )}

              {revealMessage ? (
                <button
                  className="flex items-center justify-center gap-2  py-[0.375rem] px-4  rounded-[0.25rem]  bg-gradient-to-r from-fuchsia-600 to-purple-600  text-lg font-medium text-zinc-300  hover:bg-gradient-to-r hover:from-purple-600 hover:to-fuchsia-600 transition-all"
                  onClick={(e) => {
                    window.navigator.clipboard.writeText(message);
                    e.target.innerText = 'Copied!';
                    setTimeout(() => {
                      e.target.innerText = 'Copy';
                    }, 2000);
                  }}
                >
                  <FaRegCopy />
                  Copy
                </button>
              ) : (
                <button
                  onClick={getData}
                  type="button"
                  className={`${
                    !revealMessage && 'w-full'
                  }  flex items-center justify-center gap-2 py-[0.375rem] px-4  rounded-[0.25rem] bg-gradient-to-r from-fuchsia-600/50 to-purple-600/40  text-lg font-medium text-zinc-300  hover:bg-gradient-to-r hover:from-purple-600/5 hover:to-fuchsia-600/5 transition-all`}
                >
                  Reveal Message
                </button>
              )}
            </div>
          </div>
        </div>
        {revealMessage && (
          <div className="min-w-[85%] mt-2  flex items-center justify-start ">
            <Link to="/">
              <a className="flex items-center justify-center bg-transparent hover:bg-zinc-900/10 backdrop-blur-xl text-zinc-500 font-semibold hover:text-zinc-400 py-2 px-4 rounded-sm">
                <span className="mr-2 text-lg">
                  <BsReplyFill />
                </span>
                REPLY WITH A SECRET
              </a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default RevealMessage;
