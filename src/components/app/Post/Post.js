import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
	const [show, setShow] = React.useState(false);

	const [input, setInput] = React.useState("");
	const handleSubmit = () => {
		// Database stuff

		setInput("");
	};

	//  Initialize state for the like count
	const [likeCount, setLikeCount] = React.useState(0);

	//  Create a function to handle the like button click
	const handleLike = () => {
		setLikeCount(likeCount + 1); // Increments the like count by 1
	};

	const [comments, setComments] = React.useState([
		{
			id: 1,
			name: "Elon Musk",
			comment: "This is a comment",
			time: new Date(),
		},
		{
			id: 2,
			name: "Elon Musk",
			comment: "This is a comment",
			time: new Date("2022-01-01T04:34:00"),
		},
		{
			id: 3,
			name: "Elon Musk",
			comment:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est sem, pretium sed condimentum eu, tempor ut felis. Curabitur ex purus, interdum at gravida ut, malesuada at augue. Suspendisse elementum arcu non lacus imperdiet ornare. Curabitur aliquet augue eget urna condimentum malesuada. Integer luctus dapibus dolor eget rutrum.",
			time: new Date("2022-01-01T04:34:00"),
		},
	]);

	return (
		<div className="bg-grey p-4 rounded-2xl mb-5">
			<div className="flex justify-around gap-5 ">
				<div className="flex flex-col flex-1 gap-5">
					<div className="flex gap-3 justify-between">
						<div className="flex gap-3">
							<img
								src="https://picsum.photos/200/300"
								alt="profile"
								className="w-12 h-12 rounded-full"
							/>
							<div>
								<Link to={"/profile"}>
									<div className="flex gap-2 items-center">
										<h1 className="text-white font-medium">Mabel Awuye</h1>
										{/* <i class="bi bi-patch-check-fill text-blue-600 text-xl"></i> */}
										{/* <h3 className="text-slate-400 text-sm">@elonmusk</h3> */}
									</div>
								</Link>
								<small className="text-slate-400">Few minutes ago</small>
							</div>
						</div>
						<a className="text-slate-400 text-xl" href="/">
							<i className="bi bi-three-dots"></i>
						</a>
					</div>
					<p className="md:ms-14 text-slate-300 text-sm pe-4 line-clamp-3">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						varius lorem tristique, cursus sem non, luctus lorem. Duis facilisis
						nibh a bibendum mollis. Etiam in fringilla justo, vitae varius
						magna. Donec convallis maximus dapibus. Pellentesque molestie, nunc
						vestibulum viverra semper, neque mi auctor purus, vel varius lorem
						leo ac dolor. Proin dignissim eu nunc eget semper. Mauris sit amet
						faucibus turpis. Pellentesque leo purus, condimentum at congue at,
						tristique sed lectus.
					</p>
					<div className="md:ms-14 flex gap-3 items-center justify-between mb-4">
						<div className="flex gap-1 items-center">
							<span className="bg-red-500 transition w-6 h-6 flex items-center justify-center rounded-full">
								<i className="fa-solid fa-heart text-white text-sm"></i>
							</span>
							<span className="text-slate-400 text-sm">
								{likeCount} {likeCount === 1 ? "Like" : "Likes"}
							</span>
						</div>
						<a
							className="text-slate-500 text-sm ms-2 hover:underline transition"
							href="/"
							onClick={(e) => {
								e.preventDefault();
								setShow(!show);
							}}
						>
							45 Comments
						</a>
					</div>
					<div className="md:ms-14 flex items-center gap-3">
						<button
							className="bg-darkgrey p-3 px-4 w-full rounded-2xl flex items-center gap-3 hover:opacity-70 transition justify-center text-sm"
							onClick={(e) => {
								e.preventDefault();
								handleLike();
							}}
						>
							<i className="fa-solid fa-heart text-white text-xl"></i>
							Like
						</button>
						<button
							className="bg-darkgrey p-3 px-4 w-full rounded-2xl flex items-center gap-3 hover:opacity-70 transition justify-center text-sm"
							onClick={(e) => {
								e.preventDefault();
								setShow(!show);
							}}
						>
							<i className="fa-solid fa-comment-dots text-white text-xl"></i>
							Comment
						</button>
						{/* <button className="border-slate-100 border p-3 px-4 rounded-2xl flex items-center gap-3 hover:opacity-70 transition justify-center">
							<i class="bi bi-upload text-white text-xl"></i>
						</button> */}
					</div>
				</div>
			</div>
			{/* Comment section */}
			{show && (
				<div className="mt-4">
					<div className="flex items-center gap-2">
						<img
							src="https://picsum.photos/200/300"
							alt="profile"
							className="w-6 h-6 rounded-full"
						/>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							className="bg-darkgrey text-white placeholder:text-slate-400 w-full outline-none text-sm rounded-xl p-2 h-12 px-4"
							placeholder="Add a comment..."
						/>
						<button
							className="bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out text-white w-full rounded-xl p-2 h-12 px-4"
							onClick={handleSubmit}
						>
							Submit
						</button>
					</div>
					{/* Comments */}
					{comments.map((comment, index) => (
						<div key={index} className="mt-5">
							<div className="flex gap-2">
								<img
									src="https://picsum.photos/200/300"
									alt="profile"
									className="w-8 h-8 rounded-full"
								/>
								<div className="flex flex-col justify-between w-full gap-2 bg-darkgrey p-5 rounded-2xl rounded-tl-none">
									<div className="flex gap-3 justify-between items-center">
										<h3 className="text-slate-400 mb-1">{comment.name}</h3>
										<small className="text-slate-400 text-sm whitespace-nowrap">
											{Intl.DateTimeFormat("en-US", {
												year: "numeric",
												month: "short",
												day: "2-digit",
											}).format(comment.time)}
										</small>
									</div>
									<p className="text-slate-300 text-sm">{comment.comment}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Post;
