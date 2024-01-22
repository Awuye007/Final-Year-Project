import React from "react";
import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RssFeedOutlinedIcon from "@mui/icons-material/RssFeedOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import AccountMenu from "../menu/Menu";

function Navbar() {
	const { toggle, darkMode } = useContext(DarkModeContext);

	return (
		<div className="navbar">
			<div className="navbar_top">
				<div className="navbar_left">
					<Link to="/" style={{ textDecoration: "none" }}>
						<span>Liv</span>
					</Link>
					{darkMode ? (
						<WbSunnyOutlinedIcon onClick={toggle} />
					) : (
						<DarkModeOutlinedIcon onClick={toggle} />
					)}
					<div className="search">
						<SearchOutlinedIcon />
						<input type="text" name="" id="" placeholder="Search..." />
					</div>
				</div>

				<div className="navbar_right">
					{/* <PersonOutlineOutlinedIcon /> */}
					<NotificationsOutlinedIcon />
					<AccountMenu />
				</div>
			</div>

			<div className="navbar_bottom">
				<Link to="/" className="navbar_bottomLinks">
					<HomeOutlinedIcon sx={{ fontSize: 20 }} />
				</Link>
				<Link to="/feed" className="navbar_bottomLinks">
					<RssFeedOutlinedIcon sx={{ fontSize: 20 }} />
				</Link>
				<Link to="/chats" className="navbar_bottomLinks">
					<MessageOutlinedIcon sx={{ fontSize: 20 }} />
				</Link>
				<Link to="videos" className="navbar_bottomLinks">
					<PlayCircleOutlinedIcon sx={{ fontSize: 20 }} />
				</Link>
				<Link to="/counsellors" className="navbar_bottomLinks">
					<Diversity1OutlinedIcon sx={{ fontSize: 20 }} />
				</Link>
				<Link to="/events" className="navbar_bottomLinks">
					<EventOutlinedIcon sx={{ fontSize: 20 }} />
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
