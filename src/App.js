import "./App.css";
import {
	createBrowserRouter,
	Outlet,
	RouterProvider,
	// Route,
	Navigate,
} from "react-router-dom";
import Leftsidebar from "./components/leftsidebar/Leftsidebar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Chats from "./pages/chats/Chats";
import Feed from "./pages/feed/Feed";
import Videos from "./pages/videos/Videos";
import Counsellors from "./pages/counsellors/Counsellors";
import Events from "./pages/events/Events";
import Questions from "./pages/questions/Questions";
import { AuthContext } from "./context/authContext";

function App() {
	const { currentUser } = useContext(AuthContext);

	const { darkMode } = useContext(DarkModeContext);

	const Layout = () => {
		return (
			<div className={`theme-${darkMode ? "dark" : "light"}`}>
				<Navbar />
				<div style={{ display: "flex", marginTop: "17px" }}>
					<Leftsidebar />
					<div style={{ flex: 4.2 }}>
						<Outlet />
					</div>
					<Rightbar />
				</div>
			</div>
		);
	};

	const Layout2 = () => {
		return (
			<div className={`theme-${darkMode ? "dark" : "light"}`}>
				<Navbar />
				<div style={{ display: "flex" }}>
					<Leftsidebar />
					<div style={{ flex: 5 }}>
						<Outlet />
					</div>
				</div>
			</div>
		);
	};

	// If there is no user logged in only show login page else you can show other pages if there is a connected user

	const ProtctedRoute = ({ children }) => {
		if (!currentUser) {
			return <Navigate to="/login" />;
		}
		return children;
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<ProtctedRoute>
					{" "}
					<Layout />{" "}
				</ProtctedRoute>
			),
			children: [
				{
					path: "/",
					element: <Home />,
				},

				{
					path: "/profile/:id",
					element: <Profile />,
				},
			],
		},

		{
			path: "/",
			element: (
				<ProtctedRoute>
					{" "}
					<Layout2 />{" "}
				</ProtctedRoute>
			),

			children: [
				{
					path: "/feed",
					element: <Feed />,
				},

				{
					path: "/chats",
					element: <Chats />,
				},

				{
					path: "/videos",
					element: <Videos />,
				},

				{
					path: "/counsellors",
					element: <Counsellors />,
				},

				{
					path: "/events",
					element: <Events />,
				},
			],
		},

		{
			path: "/login",
			element: <Login />,
		},

		{
			path: "/feed",
			element: <Feed />,
		},

		{
			path: "/chat",
			element: <Chats />,
		},

		{
			path: "/videos",
			element: <Videos />,
		},

		{
			path: "/counsellors",
			element: <Counsellors />,
		},

		{
			path: "/question",
			element: <Questions />,
		},

		{
			path: "/events",
			element: <Events />,
		},
	]);
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
