import React from "react";
import { Outlet } from "react-router-dom";
import ChangePassword from "../../components/app/ChangePassword/ChangePassword";
import { LeftContent } from "../../components/app/LeftContent/LeftContent";
import { Navbar } from "../../components/ui/Navbar/Navbar";

export const Main = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bg-primary h-svh overflow-y-hidden max-h-svh px-4">
      <Navbar open={open} setOpen={setOpen} />
      <div className="flex gap-4 h-full">
        <LeftContent />
        <Outlet />
        <ChangePassword open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};
