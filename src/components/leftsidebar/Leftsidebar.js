import React, { useContext } from "react";
import "./leftsidebar.scss";
import {
	// RssFeed,
	// Chat,
	PlayCircleFilledOutlined,
	// Group,
 	HelpOutline,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

import Events from "../../assets/icons8-planner-48.png";
import Home from "../../assets/icons8-home-48.png";
import Group from "../../assets/icons8-group-48.png";
import Chat from "../../assets/icons8-chat-48.png";
import Feed from "../../assets/icons8-news-feed-48.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

function Leftsidebar() {
	const { currentUser } = useContext(AuthContext);

	return (
		<div className="leftbar">
			<div className="container">
				<ul className="sidebarList">
					<Link className="sidebarLinks" to="/">
						<li className=" sidebarListItem  sidebarListItem--active">
							{/* <Home className="sidebarIcon"  /> */}

							<img src={Home} alt="" />
							<span className="sidebarListItemText">Home</span>
						</li>
					</Link>
					<Link className="sidebarLinks" to="/feed">
						<li className="sidebarListItem">
							{/* <RssFeed className="sidebarIcon" /> */}

							<img src={Feed} alt="" />
							<span className="sidebarListItemText">Feed</span>
						</li>
					</Link>
					<Link className="sidebarLinks" to="/chats">
						<li className="sidebarListItem">
							{/* <Chat className="sidebarIcon" /> */}

							<img src={Chat} alt="" />
							<span className="sidebarListItemText">Chats</span>
						</li>
					</Link>
					<Link className="sidebarLinks" to="/videos">
						<li className="sidebarListItem">
							<PlayCircleFilledOutlined className="sidebarIcon" />
							<span className="sidebarListItemText">Videos</span>
						</li>
					</Link>
					<Link className="sidebarLinks" to="/counsellors">
						<li className="sidebarListItem">
							{/* <Group className="sidebarIcon" /> */}

							<img src={Group} alt="" />
							<span className="sidebarListItemText">Counsellors</span>
						</li>
					</Link>
					{/* <li className="sidebarListItem">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarks</span>
            </li> */}
					<Link className="sidebarLinks" to="/questions">
						<li className="sidebarListItem">
							<HelpOutline className="sidebarIcon" />
							<span className="sidebarListItemText">Questions</span>
						</li>
					</Link>

					<Link className="sidebarLinks" to="/events">
						<li className="sidebarListItem">
							{/* <Event className="sidebarIcon" /> */}

							<img src={Events} alt="" />
							<span className="sidebarListItemText">Events</span>
						</li>
					</Link>
				</ul>
				<hr />

				<div className="user">
					<Avatar
						src={currentUser.profilePicture}
						sx={{ height: "55px", width: "55px" }}
						style={{ margin: "3px" }}
					/>
					<h4 className="user_name">{currentUser.name}</h4>
				</div>
			</div>
		</div>
	);
}

export default Leftsidebar;
