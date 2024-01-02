import React from "react";
import Image from "next/image";
import github from "../../../public/github-6980894.svg";
export default async function Header() {
	return (
		<div>
			<header className="flex  justify-around p-5 ">
				<button>Home</button>
				<div className="flex justify-between">
					<Image src={github} width={50} className="rounded-lg" height={50} alt="Loading..." />
				</div>
			</header>
		</div>
	);
}
