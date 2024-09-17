import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./LeftContent.css";

export const LeftContent = ({ toggleSidebar, sidebarOpen }) => {
  const location = useLocation();

  const navigations = [
    {
      icon: "fa-solid fa-house",
      name: "Home",
      route: "/",
    },
    {
      icon: "fa-solid fa-bars",
      name: "Articles",
      route: "/feed",
    },
    {
      icon: "bi bi-chat-left-dots-fill",
      name: "Chats",
      route: "/chats",
    },
    {
      icon: "bi bi-play-circle",
      name: "Videos",
      route: "/videos",
    },
    {
      icon: "bi bi-people-fill",
      name: "Counsellors",
      route: "/counsellors",
    },
    // {
    //   icon: "bi bi-question-circle",
    //   name: "Questions",
    //   route: "/questions",
    // },
    {
      icon: "fa-solid fa-calendar-days",
      name: "Events",
      route: "/events",
    },
  ];

  return (
    <>
      <div
        className={`absolute top-0 left-0 -translate-x-full h-screen sm:w-1/4 z-10 md:relative md:top-0 md:left-0 md:translate-x-0 md:h-auto md:w-auto md:z-0 transition duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-[100vw]"
        }`}
      >
        <div className="bg-grey overflow-hidden mb-10 text-white sm:rounded-none md:rounded-2xl h-screen md:h-auto w-64 md:w-auto">
          <div className="flex items-center justify-between p-4 mb-3 md:hidden">
            <h1 className="font-medium text-lg">LIV</h1>
            <i
              onClick={toggleSidebar}
              className="fa-solid fa-bars text-xl cursor-pointer"
            ></i>
          </div>
          <div className="flex flex-col gap-5 p-4">
            {navigations.map((navigation, index) => (
              <Link
                className={
                  "flex items-center gap-3 rounded-full p-3 py-1 hover:bg-white navigation" +
                  (navigation.route === location.pathname ? " bg-white" : "")
                }
                to={navigation.route}
                key={index}
              >
                <i
                  className={
                    navigation.icon +
                    (navigation.route === location.pathname
                      ? " text-blue-400"
                      : "") +
                    " text-xl"
                  }
                ></i>
                <span
                  className={
                    (navigation.route === location.pathname
                      ? " text-slate-950"
                      : "text-slate-100") + " text-sm hover:text-slate-950"
                  }
                >
                  {navigation.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {sidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="absolute top-0 left-0 w-screen h-screen bg-black z-0 opacity-50"
        ></div>
      )}
    </>
  );
};
