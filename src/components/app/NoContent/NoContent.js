import React from "react";
import NotFoundImg from "../../../assets/images/404.svg";

export const NoContent = ({
  title = "No Content Found",
  description = "The content you are looking for does not exist.",
}) => {
  return (
    <div className="bg-primary h-full overflow-y-hidden max-h-svh px-14 flex flex-col justify-center items-center gap-5">
      <img src={NotFoundImg} alt="404"  />
      <div className="relative flex flex-col gap-5 text-center items-center -top-10">
        <h1 className="text-white text-3xl">{title}</h1>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
};
