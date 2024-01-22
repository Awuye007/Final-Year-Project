import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
	//TEMPORARY
	const posts = [
		{
			id: 1,
			name: "John Doe",
			userId: 1,
			profilePic:
				"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
			img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
		},
		{
			id: 2,
			name: "Jane Doe",
			userId: 2,
			profilePic:
				"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
			desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
		},
		{
			id: 2,
			name: "Jane Doe",
			userId: 2,
			profilePic:
				"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
			desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
			img: "https://images.unsplash.com/photo-1699134115052-bd7899efddcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 2,
			name: "Jane Doe",
			userId: 2,
			profilePic:
				"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
			desc: "Si vis Pacem Parabellum",
			img: "https://images.unsplash.com/photo-1611651336487-802fe164d3e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9yc2NoZSUyMDkxMXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			id: 2,
			name: "Jane Doe",
			userId: 2,
			profilePic:
				"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
			desc: "Si vis Pacem Parabellum",
			img: "https://images.unsplash.com/photo-1601278840447-9af5ac4ed157?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9yc2NoZSUyMDkxMXxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			id: 2,
			name: "Jane Doe",
			userId: 2,
			profilePic:
				"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
			desc: "Min Bebis",
			img: "https://plus.unsplash.com/premium_photo-1663013243019-c7ea3e7b8d98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdoaXRlJTIwaG9yc2V8ZW58MHx8MHx8fDA%3D",
		},
	];

	return (
		<div className="posts">
			{posts.map((post) => (
				<Post post={post} key={post.id} />
			))}
		</div>
	);
};

export default Posts;
