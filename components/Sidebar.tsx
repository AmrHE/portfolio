import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
	return (
		<div>
			<img
				src="https://media-exp1.licdn.com/dms/image/D5635AQF1hBgfy7tIzQ/profile-framedphoto-shrink_200_200/0/1629160168676?e=1644858000&v=beta&t=OewpM7aQGepoPBWdo-D_CHuOneArX35vySQYOiCYOg0"
				alt="avatar"
				className="w-32 h-32 mx-auto rounded-full"
			/>
			<h3 className="my-4 text-3xl font-medium tracking-wider">
				<span>Amr </span>
				Hassan
			</h3>
			<p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
			<a
				className="px-2 py-1 my-3 bg-gray-200 rounded-full"
				href=""
				download="name"
			>
				<GiTie className="w-6 h-6" />
				Download Resume
			</a>

			{/* TODO SOCIAL ICONS SHOULD TAKE PLACE HERE */}
			<div>
				<a href="">
					<AiFillGithub className="w-8 h-8" />
				</a>
				<a href="">
					<AiFillLinkedin className="w-8 h-8" />
				</a>
				<a href="">
					<AiFillYoutube className="w-8 h-8" />
				</a>
			</div>

			{/* ADDRESS SHOULD TAKE PLACE HERE */}
			<div>
				<div>
					<GoLocation />
					<span>Cairo, Egypt</span>
				</div>
				<p>amr.hassan.emam@gmail.com</p>
				<p>01156659665 - 01023085616</p>
			</div>

			{/* Email Button */}
			<button>Email Me</button>

			{/* TOGGLE THEME */}
			<button>Toggle Theme</button>
		</div>
	);
};

export default Sidebar;
