import React, { useRef } from "react";
import Post from "../Post/Post";
import "./MiddleContent.css";

export const MiddleContent = () => {
	const [input, setInput] = React.useState("");
	const submitButtonRef = useRef(null);

	const handleSubmit = () => {
		// Database stuff

		setInput("");
	};

	return (
		<div className="flex-1 flex-grow text-white overflow-y-auto pb-20 scroll-bg-darkgrey pe-2">
			<div className="bg-grey flex justify-around gap-5 p-7 rounded-2xl mb-5  message-sender">
				<img
					src="https://picsum.photos/200/300"
					alt="profile"
					className="w-12 h-12 rounded-full"
				/>
				<div className="flex flex-1 gap-5 ">
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								// Trigger form submit when Enter key is pressed
								handleSubmit();
							}
						}}
						className="bg-darkgrey text-white placeholder:text-slate-400 w-full outline-none text-sm rounded-xl p-2 h-12 px-4"
						placeholder="What's happening?"
					/>

					{/* <div className="flex gap-3 items-center">
            <button className="border-slate-100 border p-2 px-4 rounded-full flex items-center gap-3 hover:bg-slate-500 transition">
              <i className="fa-solid fa-image text-green-400 text-xl"></i>
              Picture
            </button>
            <button className="border-slate-100 border p-2 px-4 rounded-full flex items-center gap-3 hover:bg-slate-500 transition">
              <i class="fa-solid fa-circle-play text-blue-400 text-xl"></i>
              Video
            </button>
            <button className="border-slate-100 border p-2 px-4 rounded-full flex items-center gap-3 hover:bg-slate-500 transition">
              <i className="fa-solid fa-calendar-days text-yellow-400 text-xl"></i>
              Schedule
            </button>
          </div> */}
				</div>
			</div>
			{Array.from({ length: 10 }).map((_, i) => (
				<Post key={i} />
			))}
		</div>
	);
};
