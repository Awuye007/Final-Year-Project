import React, { useContext } from "react";
import "./login.scss";
import { AuthContext } from "../../context/authContext";

function Login() {
	const { login } = useContext(AuthContext);

	const handleLogin = () => {
		login();
	};

	return (
		<div className="login">
			<div className="card">
				<div className="left">
					<h1>LIV</h1>
					<p>
						{" "}
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
						corporis repudiandae dolor natus perspiciatis provident harum
						dignissimos eius nam illo ea voluptas atque, nobis ducimus non
						molestiae. Inventore, illo a.{" "}
					</p>
				</div>
				<div className="right">
					<h1>Login</h1>
					<form action="">
						<input type="text" placeholder="Username" id="" />
						<input type="password" placeholder="Password" id="" />
						<button onClick={handleLogin}   >Login</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
