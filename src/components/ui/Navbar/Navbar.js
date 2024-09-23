import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../../shared/context/UserContext";

export const Navbar = ({ open, setOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const { user, logout } = useUserContext();

  return (
    <div className="flex py-4">
      <div className="flex-1 flex items-center gap-4">
        <button
          className="hover:opacity-80 transition flex items-center sm:block md:hidden"
          onClick={toggleSidebar}
        >
          <i className="fa-solid fa-bars text-white text-xl"></i>
        </button>
        <h1 className="text-white">LIV</h1>
      </div>
      <div className="flex-1 justify-end flex items-center gap-4">
        <div className="flex gap-10">
          <button
            className="hover:opacity-80 transition flex items-center gap-3"
            onClick={() => navigate("/chats")}
          >
            <i className="fa-solid fa-envelope text-lightgrey text-xl"></i>
          </button>
          <button className="hover:opacity-80 transition flex items-center gap-3">
            <i className="fa-solid fa-bell text-lightgrey text-xl"></i>
          </button>
        </div>
        <div className="flex gap-4 border-l border-opacity-50 pl-4 border-l-slate-300">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="flex items-center gap-3 bg-grey p-2 py-1 rounded-full hover:opacity-80 transition-all">
                <img
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/user-male-circle.png"
                  alt="Profile"
                  className="rounded-full"
                  width={35}
                />
                <span className="text-muted text-base hidden md:block">
                  {user?.first_name + " " + user?.last_name}
                </span>
                <i className="fa-solid fa-sort-down text-lightgrey relative -top-1 hidden md:block"></i>
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-grey shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <Link
                    to={"/profile"}
                    className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-500"
                  >
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-500"
                  >
                    Support
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                    className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-500"
                  >
                    Change Password
                  </a>
                </MenuItem>
                <MenuItem>
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      navigate("/auth/login");
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-white data-[focus]:bg-gray-500"
                  >
                    Sign out
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
};
