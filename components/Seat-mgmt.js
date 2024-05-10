"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
	{
		title: "User Profile Creation",
		description:
			"  Easily create an online business profile for your hostel or PG.",
	},
	{
		title: "Gallery & Amenities Listing",
		description:
			"Showcase your property with a visually appealing gallery. Highlight your amenities to attract potential tenants.",
	},
	{
		title: "Online Marketing Tools",
		description: " Boost your business online and reach a wider audience.",
	},
	{
		title: "Offer Creation",
		description: "Make special offers to attract and retain customers",
	},
	{
		title: "Search Functionality",
		description:
			"Tenants can easily search for listed hostels or PGs from anywhere.",
	},
];

const SeatMgmt = () => {
	useEffect(() => {
		const tl = gsap.timeline({ repeat: -1 });

		data.forEach((_, index) => {
			tl.to(`#highlight18-${index}`, {
				duration: 1.51,
				color: "#ff9a00",
				// textShadow: "0 0 8px #fff",
				// ease: "power1.out",
			});
			tl.to(`#highlight18-${index}`, {
				duration: 1.51,
				color: "#000",
				// textShadow: "none",
				// ease: "power1.out",
			});
		});
	}, []);

	// useEffect(() => {
	// 	const intervalId = setInterval(() => {
	// 		data.forEach((item) => {
	// 			const element = document.getElementById(`highlight-${item.id}`);
	// 			if (element) {
	// 				element.style.color = "#ff9a00";
	// 				element.style.textShadow = ;
	// 			}
	// 		});
	// 	}, 1510);
	// 	return () => clearInterval(intervalId);
	// }, []);

	return (
		<div className="relative">
			<div className="w-full sticky bg-gray-100 my-20">
				<div className="pt-10 relative bg-gray-100">
					<div className="w-[10rem] h-[10rem] overflow-hidden rounded-full absolute -top-20 left-[16rem] bg-gray-100 flex items-center justify-around">
						<Image
							src="/media/roomicon.png"
							className="object-cover p-3"
							alt=""
							width={200}
							height={200}
						/>
					</div>
					<div className="flex items-center gap-[1rem] ">
						<div className="lft text-center mx-20 my-4">
							<h1 className="text-animation  text-black absolute  z-50   font-medium text-4xl uppercase pb-3 ">
								ONLINE BUSINESS PLATFORM
							</h1>
							<div className="mt-14">
								{data.map((item, index) => (
									<div
										key={index}
										id={`highlight18-${index}`}
										className="text-center w-[30rem] text-md px-7 py-2 rounded-lg font-semibold"
									>
										<h3 className="text-xl">{item.title}</h3>
										<p className="-mt-2 text-sm">{item.description}</p>
									</div>
								))}
							</div>
						</div>
						<div className="rgtImg -mt-7 rounded-full h-[40rem] w-[40rem] flex items-center justify-center overflow-hidden">
							<video
								height={1000}
								width={1000}
								autoPlay
								muted
								loop
								className="object-cover "
							>
								<source src="/videos/ok.mp4" type="video/mp4" />
							</video>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SeatMgmt;
