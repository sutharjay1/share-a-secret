import React, { useEffect } from 'react';
import { FaRegCopy } from 'react-icons/fa6';
import { IoChevronBack } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { shareLink } from '../store/messageSlice';
import { BsCheckLg } from 'react-icons/bs';

const ShareLink = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const messageID = useSelector((state) => state?.message?.messageID);

  const generateLink = window.location.href + '/reveal/' + messageID;

  useEffect(() => {
    dispatch(shareLink(generateLink));
  }, [messageID]);

  const shareableLink = useSelector((state) => state?.message?.shareLink);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="min-w-[85%] h-auto py-4 mt-52 m-10">
          <h1 className="text-6xl font-bold text-left bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
            Success!
          </h1>
          <h2 className="w-[70%] text-3xl text-zinc-300 font-semibold text-left mt-5">
            Your secret link has been created - now share it with your
            confidant.
          </h2>
        </div>
        <div className="min-w-[85%] mb-2 flex items-center justify-start">
          <Link to="/">
            <button
              className="flex items-center justify-center bg-transparent hover:bg-zinc-900/10 backdrop-blur-xl text-zinc-500 font-semibold hover:text-zinc-400 py-2 px-4 rounded-sm"
              onClick={(e) => console.log(e.stopPropagation())}
            >
              <span className="mr-2 text-lg">
                <IoChevronBack />
              </span>
              CREATE NEW SECRET
            </button>
          </Link>
        </div>
        <div className="lg:min-w-[85%] sm:min-w-[70%] flex items-center justify-center px-6 bg-black/40  py-7 backdrop-blur-xl rounded-md border-[1px] lg:mx-auto md:mx-auto sm:mx-4 mx-8 border-zinc-600 ">
          <div className="w-full flex items-center justify-center   text-black text-base">
            {messageID && (
              <div className="w-full flex flex-col items-center justify-center">
                <p className="w-full text-xl -tracking-tight font-medium flex items-center justify-center text-zinc-300">
                  {shareableLink}
                </p>
                <div className="w-full flex items-center justify-end ">
                  <button
                    className="flex items-center justify-center gap-2 mt-6  py-[0.375rem] px-4  rounded-[0.25rem]  bg-gradient-to-r from-fuchsia-600 to-purple-600  text-lg font-medium text-zinc-300  hover:bg-gradient-to-r hover:from-purple-600 hover:to-fuchsia-600 transition-all"
                    onClick={(e) => {
                      window.navigator.clipboard.writeText(shareableLink);
                      e.target.innerText = 'Copied!';
                      setTimeout(() => {
                        e.target.innerText = 'Copy';
                      }, 2000);
                    }}
                  >
                    <FaRegCopy />
                    Copy
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareLink;
