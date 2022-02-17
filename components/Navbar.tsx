import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavItem from "./NavItem";

const Navbar = () => {
	const [activeItem, setActiveItem] = useState<string>("");

	const { pathname } = useRouter();

	useEffect(() => {
		if (pathname === "/") setActiveItem("About");
		if (pathname === "/projects") setActiveItem("Projects");
		if (pathname === "/resume") setActiveItem("Resume");
	}, []);
	return (
		<div className="flex justify-between px-5 py-3 my-3">
			<span className="mr-3 text-xl font-bold border-b-2 text-green border-green md:text-2xl">
				{activeItem}
			</span>
			<div className="flex space-x-5 text-lg md:text-xl ">
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name="About"
					route="/"
				/>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name="Projects"
					route="/projects"
				/>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name="Resume"
					route="/resume"
				/>
				{/* {activeItem !== "About" && (
					<Link href="/">
						<a>
							<span onClick={() => setActiveItem("About")}>About</span>
						</a>
					</Link>
				)}
				{activeItem !== "Projects" && (
					<Link href="/projects">
						<a>
							<span onClick={() => setActiveItem("Projects")}>Projects</span>
						</a>
					</Link>
				)}
				{activeItem !== "Resume" && (
					<Link href="/resume">
						<a>
							<span onClick={() => setActiveItem("Resume")}>Resume</span>
						</a>
					</Link>
				)} */}
				{/* TODO ADD POSTS FEATURE */}
				{/* {activeItem !== "Posts" && (
					<Link href="/posts">
						<a>
							<span>Posts</span>
						</a>
					</Link>
				)} */}
			</div>
		</div>
	);
};

export default Navbar;
