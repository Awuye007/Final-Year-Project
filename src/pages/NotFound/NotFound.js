import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/images/404.svg";

export const NotFound = () => {
  return (
    <div className="bg-primary h-svh overflow-y-hidden max-h-svh px-14 flex flex-col justify-center items-center gap-5">
      <img src={NotFoundImg} alt="404" className="w-3/4" />
      <div className="relative flex flex-col gap-5 text-center items-center -top-24">
        <h1 className="text-white text-3xl">Page Not Found</h1>
        <p className="text-slate-400">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};
