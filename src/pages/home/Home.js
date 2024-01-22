import React from "react";
import "./home.scss";
import Messagesender from "../../components/message_sender/messageSender";
import Posts from "../../components/posts/Posts";

function Home() {
	return (
		<div className="home">
			<Messagesender />
			<Posts />
		</div>
	);
}

export default Home;
