"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const data = [
	{
		title: "E-Registration system:",
		description:
			"Efficiently manage admissions and registrations through our S-mart digital platform, saving valuable time",
	},
	{
		title: "All detail in one place",
		description:
			"Access all tenant details in one convenient location, including registration forms and essential documents.",
	},
	{
		title: "Streamline booking process",
		description:
			"Facilitate hassle-free bookings with intuitive functionality, enhancing operational efficiency.",
	},
	{
		title: "Save data for lifetime",
		description:
			"No trouble to find leaved tenant detail. Also restore admission when they again back to you.",
	},
	{
		title: "Switch room-seat",
		description:
			"Switch tenant to other room/seat without change their registration, also track modified history",
	},
];

const RegistrationBoard = () => {
	useEffect(() => {
		const tl1 = gsap.timeline({ repeat: -1 });

		data.forEach((_, index) => {
			tl1.to(`#highlight22-${index}`, {
				duration: 1.5,
				color: "#52e2ee",
				ease: "power1.out",
			});
			tl1.to(`#highlight22-${index}`, {
				duration: 1.5,
				color: "#fff",
				ease: "power1.out",
			});
		});
	}, []);

	return (
		<div className="relative">
			<div className="w-full  my-20">
				<div className="pt-10 relative bg-gray-500  text-white">
					<div className="w-[10rem] h-[10rem] rounded-full absolute -top-20 overflow-hidden left-[16rem] bg-gray-500 flex items-center justify-around">
						<Image src="/media/registration.png" alt="" width={200} height={300} className="object-cover p-3 ml-1" />
					</div>
					<div className="flex items-center gap-[1rem] ">
						<div className="lft text-center mx-20 my-4">
							<h1 className=" absolute z-50  text-center ml-7 font-medium text-4xl uppercase pb-3 ">
							Admissions & Registration 
							</h1>
							<div className="mt-14">
								{data.map((item, index) => (
									<div
										key={index}
										id={`highlight22-${index}`}
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

export default RegistrationBoard;
