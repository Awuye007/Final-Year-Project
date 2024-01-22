import "./profile.scss";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
	return (
		<div className="profile">
			<div className="images">
				<img
					src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt=""
					className="coverPic"
				/>
				<img
					src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
					alt=""
					className="profilePic"
				/>
			</div>
			<div className="profileContainer">
				<div className="uInfo">
					<div className="left"></div>
					<div className="center">
						<span >John Doe</span>
						<button>follow</button>
					</div>
					<div className="right">
						<EmailOutlinedIcon />
						<MoreVertIcon />
					</div>
				</div>
				<div style={{paddingLeft:"10px"}}>
				<Posts />
				</div>
			</div>
		</div>
	);
};

export default Profile;
