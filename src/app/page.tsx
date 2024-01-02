"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import UniversityList from "./universityList/page";
import Link from "next/link";

export default function Home() {
	const router = useRouter()
	const navigation = (routes: string) => {
router.push(routes)
	}
	const images = [
		{
			url: "/ageCalculator.jpg",
			title: "Calculate Age",
			route: "/ageCalculator"

		},
		{
			url: "/bitcoin.jpg",
			title: "Current Bitcoin Price",
			route: "/bitcoin"

		},
		{
			url: "/demographics.jpg",
			title: "Public information",
			route: "/publicData"

		},
		{
			url: "/jokes.jpg",
			title: "Unique Jokes",
			route: "/jokes"

		},
		{
			url: "/taxes.jpg",
			title: "Tax assessment",
			route: "/mortgagePayment"

		},
		{
			url: "/university.jpg",
			title: "Find University",
			route: "/universityList"

		},
	];
	return (
		<div className="  ">
			<header className="flex justify-evenly m-6 homePage  ">
				<p><Link href={"/universityList"}>Home</Link></p>
				<p>About</p>
				<p>Contact Us</p>
				<p>GitHub</p>
			</header>
			<section className="grid justify-around grid-cols-3  grid-rows-2 ">
				{images.map(({ url, title, route }) => {
					return (
						<div key={url} className=" items-center text-center mx-auto my-auto">
							<Image
							onClick={() =>navigation(route)}
								className="border rounded-md"
								src={url}
								width={300}
								height={200}
								alt={"Slow Internet"}
							/>
							<p onClick={() =>navigation(route)}>{title}</p>
						</div>
					);
				})}
			</section>
		</div>
	);
}
