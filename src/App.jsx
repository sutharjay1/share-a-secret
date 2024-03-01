import React, { useEffect, useRef, useState } from 'react';
import Body from './components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import RevealMessage from './components/RevealMessage';
import { useSelector } from 'react-redux';
import ShareLink from './components/ShareLink';

function App() {
  return (
    <>
      <div className="w-full">
        <div className="max-w-4xl h-screen mx-auto ">
          <RouterProvider router={appRouter}>
            <Outlet />
          </RouterProvider>
        </div>
      </div>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
  },
  {
    path: '/share/reveal/:messageID',
    element: <RevealMessage />,
  },
  {
    path: '/share',
    element: <ShareLink />,
  },
]);

export default App;
