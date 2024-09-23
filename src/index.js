import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Login } from "./pages/Login/Login";
import { Chat } from "./pages/Main/Chat/Chat";
import Counsellors from "./pages/Main/Counsellors/Counsellors";
import Events from "./pages/Main/Events/Events";
import Feed from "./pages/Main/Feed/Feed";
import { Home } from "./pages/Main/Home/Home";
import { Main } from "./pages/Main/Main";
import Profile from "./pages/Main/Profile/Profile";
import Videos from "./pages/Main/Videos/Videos";
import { NotFound } from "./pages/NotFound/NotFound";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./shared/context/UserContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/chats",
        element: <Chat />,
      },
      {
        path: "/counsellors",
        element: <Counsellors />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
    errorElement: <NotFound />,
  },

  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
