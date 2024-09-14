import React from "react";
import HIVImage from '../../../assets/images/hiv-image.jpeg'
import "./RightContent.css";

export const RightContent = () => {
  return (
    <div className="flex-0-4 text-white">
      <div className="bg-grey rounded-2xl overflow-hidden mb-10 px-3">
        <img src={HIVImage} alt="HIV" className="w-full object-cover my-3" />     
        {/* <div className="flex items-center justify-between p-4 mb-3">
          <h1 className="font-medium text-lg">Trend for you</h1>
          <a href="/" className="text-white text-lg">
            <i class="fa-solid fa-gear"></i>
          </a>
        </div>
        <div className="flex flex-col gap-3 p-4 pt-0">
          <p className="text-slate-400 text-sm uppercase mb-3">
            Trending in Ghana
          </p>
          <div className="flex gap-3 justify-between items-center mb-2">
            <div>
              <h1 className="text-base font-medium ">#Minions</h1>
              <p className="text-slate-400 text-sm">97.7k Tweets</p>
            </div>
            <a href="/" className="text-slate-400">
              <i class="fa-solid fa-ellipsis"></i>
            </a>
          </div>
          <div className="flex gap-3 justify-between items-center mb-2">
            <div>
              <h1 className="text-base font-medium ">#SeninBarokah</h1>
              <p className="text-slate-400 text-sm">97.7k Tweets</p>
            </div>
            <a href="/" className="text-slate-400">
              <i class="fa-solid fa-ellipsis"></i>
            </a>
          </div>
        </div>
        <hr
          className="text-slate-400 opacity-50 mx-auto mb-5"
          style={{ width: "95%" }}
        />
        <div className="flex flex-col gap-3 p-4 pt-0">
          <p className="text-slate-400 text-sm uppercase mb-3">
            NFT <i class="bi bi-dot"></i> Trending
          </p>
          <div className="flex gap-3 justify-between items-center mb-2">
            <div>
              <h1 className="text-base font-medium ">#Texos</h1>
              <p className="text-slate-400 text-sm">122.7k Tweets</p>
            </div>
            <a href="/" className="text-slate-400">
              <i class="fa-solid fa-ellipsis"></i>
            </a>
          </div>
        </div>
        <hr
          className="text-slate-400 opacity-50 mx-auto mb-5"
          style={{ width: "95%" }}
        />
        <div className="flex flex-col gap-3 p-4 pt-0">
          <p className="text-slate-400 text-sm uppercase mb-3">
            Football <i class="bi bi-dot"></i> Trending
          </p>
          <div className="flex gap-3 justify-between items-center mb-2">
            <div>
              <h1 className="text-base font-medium ">#Minions</h1>
              <p className="text-slate-400 text-sm">97.7k Tweets</p>
            </div>
            <a href="/" className="text-slate-400">
              <i class="fa-solid fa-ellipsis"></i>
            </a>
          </div>
          <div className="flex gap-3 justify-between items-center mb-2">
            <div>
              <h1 className="text-base font-medium ">#Minions</h1>
              <p className="text-slate-400 text-sm">97.7k Tweets</p>
            </div>
            <a href="/" className="text-slate-400">
              <i class="fa-solid fa-ellipsis"></i>
            </a>
          </div>
          <div className="flex gap-3 justify-between items-center mb-2">
            <div>
              <h1 className="text-base font-medium ">#Minions</h1>
              <p className="text-slate-400 text-sm">97.7k Tweets</p>
            </div>
            <a href="/" className="text-slate-400">
              <i class="fa-solid fa-ellipsis"></i>
            </a>
          </div>
        </div>
        <button className="text-blue-400 text-sm p-4">Show more</button> */}
      </div>
    </div>
  );
};
