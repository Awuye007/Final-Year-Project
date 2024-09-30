import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { UserProvider, useUserContext } from "./shared/context/UserContext";

// Auth guard
const ProtectedRoute = ({ children, path }) => {
  const { isLoggedIn } = useUserContext();

  if (!isLoggedIn() && path !== "/auth/login") {
    return <Navigate to="/auth/login" />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute path="/">
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/feed",
        element: (
          <ProtectedRoute path="/feed">
            <Feed />
          </ProtectedRoute>
        ),
      },
      {
        path: "/videos",
        element: (
          <ProtectedRoute path="/videos">
            <Videos />
          </ProtectedRoute>
        ),
      },
      {
        path: "/chats",
        element: (
          <ProtectedRoute path="/chats">
            <Chat />
          </ProtectedRoute>
        ),
      },
      {
        path: "/counsellors",
        element: (
          <ProtectedRoute path="/counsellors">
            <Counsellors />
          </ProtectedRoute>
        ),
      },
      {
        path: "/events",
        element: (
          <ProtectedRoute path="/events">
            <Events />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute path="/profile">
            <Profile />
          </ProtectedRoute>
        ),
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
      <ToastContainer />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
