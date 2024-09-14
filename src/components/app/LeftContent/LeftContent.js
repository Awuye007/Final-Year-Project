import React from "react";
import "./LeftContent.css";
import { Link, useLocation } from "react-router-dom";

export const LeftContent = () => {
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
    <div className="text-white">
      <div className="bg-grey rounded-2xl overflow-hidden mb-10">
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
  );
};
