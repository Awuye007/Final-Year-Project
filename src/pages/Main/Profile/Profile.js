import React from "react";
import { Link } from "react-router-dom";
import Post from "../../../components/app/Post/Post";

const Profile = () => {
	return (
		<div className="w-full overflow-y-auto pb-20 bg-gray-950">
			<img
				src="https://wallpapercave.com/wp/wp4889244.jpg"
				alt="profile-background"
				className="w-full h-64 object-cover mb-10"
			/>
			<div className="w-3/4 mx-auto bg-grey p-5 rounded-3xl relative">
				<img
					src="https://picsum.photos/200/300"
					alt="profile"
					className="w-36 h-36 rounded-full mx-auto mb-5 absolute -top-16 left-0 right-0"
				/>
				{/* <div className="flex gap-5 justify-end">
          <Link to="/chats">
            <i class="fa-solid fa-envelope text-slate-100 text-2xl"></i>
          </Link>
          <button className="bg-slate-100 rounded-full p-2 text-sm text-darkgrey w-24 hover:bg-slate-200 transition font-medium">
            Edit Profile
          </button>
        </div> */}
				<div className="text-center mt-20">
					<h1 className="text-2xl font-bold mb-2">John Doe</h1>
					<Link to="/chats">
						<i class="fa-solid fa-envelope text-slate-100 text-2xl"></i>
					</Link>
					{/* <p className="text-gray-600 mb-4">Software Engineer</p> */}
				</div>
			</div>
			{Array(10)
				.fill(0)
				.map((_, index) => (
					<div className="w-3/4 mx-auto my-10" key={index}>
						<Post />
					</div>
				))}
		</div>
	);
};

export default Profile;
