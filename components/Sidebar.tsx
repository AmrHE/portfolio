import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
	// TODO CHANGE THE IMAGE
	return (
		<div>
			<img
				src="https://media-exp1.licdn.com/dms/image/D5635AQF1hBgfy7tIzQ/profile-framedphoto-shrink_200_200/0/1629160168676?e=1645124400&v=beta&t=8CgaV6CnrXCeB2a2KFAHWJcM7R6s3jDFPQQgFsB-oKM"
				// src="https://media-exp1.licdn.com/dms/image/D5635AQF1hBgfy7tIzQ/profile-framedphoto-shrink_200_200/0/1629160168676?e=1644858000&v=beta&t=OewpM7aQGepoPBWdo-D_CHuOneArX35vySQYOiCYOg0"
				alt="avatar"
				className="w-32 h-32 mx-auto rounded-full"
			/>
			<h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
				<span className="text-green">Amr </span>
				Hassan
			</h3>
			<p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
			<a
				className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
				href=""
				download="name"
			>
				<GiTie className="w-6 h-6" />
				Download Resume
			</a>

			{/* TODO SOCIAL ICONS SHOULD TAKE PLACE HERE */}
			<div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
				<a href="">
					<AiFillGithub className="w-8 h-8 cursor-pointer" />
				</a>
				<a href="">
					<AiFillLinkedin className="w-8 h-8 cursor-pointer" />
				</a>
				<a href="">
					<AiFillYoutube className="w-8 h-8 cursor-pointer" />
				</a>
			</div>

			{/* ADDRESS SHOULD TAKE PLACE HERE */}
			<div
				className="py-4 my-5 bg-gray-200"
				style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
			>
				<div className="flex items-center justify-center space-x-2">
					<GoLocation />
					<span>Cairo, Egypt</span>
				</div>
				<p className="my-2 ">amr.hassan.emam@gmail.com</p>
				<p className="my-2">01156659665 - 01023085616</p>
			</div>

			{/* Email Button */}
			<button
				onClick={() => window.open("mailto:amr.hassan.emam@gmail.com")}
				className="w-8/12 px-5 py-2 my-2 text-white rounded-full focus:outline-none bg-gradient-to-r from-green to-blue-400"
			>
				Email Me
			</button>
			{/* TOGGLE THEME */}
			<button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
				Toggle Theme
			</button>
		</div>
	);
};

export default Sidebar;
