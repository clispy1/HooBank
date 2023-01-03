import { useState } from "react";

import { logo, close, menu } from "../assets";

import { navLinks } from "../constants";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className="w-full flex py-6 justify-between items-center navbar">
			<img src={`${logo}`} alt="hooBank logo" className="w-32 h-8" />
			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-poppins font-normal text-base cursor-pointer p-1 ${
							nav.index === nav.length - 1 ? "mr-0" : "mr-8"
						} text-white `}
					>
						{nav.title}
					</li>
				))}
			</ul>

			<div className={`sm:hidden flex flex-1 justify-end items-center`}>
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-7 h-7 object-cover cursor-pointer"
					onClick={() => setToggle((prev) => !prev)}
				/>
			</div>

			<div
				className={`${
					toggle ? "flex" : "hidden"
				} sm:hidden p-6 bg-black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[200px] rounded-xl sidebar`}
			>
				<ul className="list-none flex flex-col justify-end items-start flex-1">
					{navLinks.map((nav, index) => (
						<li
							key={nav.id}
							className={`font-poppins font-normal text-base cursor-pointer p-1 ${
								nav.index === nav.length - 1 ? "mr-0" : "mb-6"
							} text-white `}
						>
							{nav.title}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
