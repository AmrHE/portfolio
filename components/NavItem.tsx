import { route } from "next/dist/server/router";
import Link from "next/link";
import { FunctionComponent, useState } from "react";

const NavItem: FunctionComponent<{
	activeItem: string;
	setActiveItem: Function;
	name: string;
	route: string;
}> = ({ activeItem, setActiveItem, route, name }) => {
	return activeItem !== name ? (
		<Link href={route}>
			<a>
				<span
					className="hover:border-b-0 hover:text-green hover:border-green"
					onClick={() => setActiveItem(name)}
				>
					{name}
				</span>
			</a>
		</Link>
	) : null;
};

export default NavItem;
