"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";

const data = [
	{
		title: "Food Menu Management",
		description:
			"Easily update and manage your food offerings. Easy and time saving",
	},
	{
		title: "Custom Sales Tracking",
		description:
			"Tailor sales data to your business needs. Boost your attached business",
	},
	{
		title: "Monthly Reports Generation",
		description: "Access comprehensive reports for informed decision-making.",
	},
	{
		title: "Offers Zone Integration & Notifications",
		description:
			"Highlight special promotions to attract customers. Stay connected with customers through whatsapp msg updates.",
	},
	{
		title: "Tenant Management & CRM leads",
		description:
			"Effectively communicate with tenants regarding notices, complaint and updates. Monitor leads efficiently with S-mart lead manager  no worry to vacant hostel/pg	",
	},
];

const SPECIALSMARTFEATURES = () => {
	useEffect(() => {
		const tl = gsap.timeline({ repeat: -1 });
		data.forEach((_, index) => {
			// console.log("index", index);

			tl.to(`#highlight26-${index}`, {
				duration: 2.5,
				color: "#ff9a00",

				textShadow: "0 0 8px #fff",
				// fontSize: "1.2em",
				ease: "power1.out",
			});
			tl.to(`#highlight26-${index}`, {
				duration: 2.5,
				color: "#000",
				textShadow: "none",

				// fontSize: "1em",
				ease: "power1.out",
			});
		});
	}, []);

	return (
		<div className="relative">
			<div className="w-full sticky bg-gray-100 my-20">
				<div className="pt-10 relative bg-gray-100">
					<div className="w-[10rem] h-[10rem]  rounded-full absolute -top-20 left-[16rem] bg-gray-100 flex items-center justify-around">
						<Image
							src="/media/smartapp.png"
							className="object-cover p-3	 "
							alt="smart app"
							width={500}
							height={500}
						/>
					</div>
					<div className="flex items-center gap-[1rem] ">
						<div className="lft text-center mx-20 my-4">
							<h1 className="text-black absolute z-50   font-medium text-4xl uppercase pb-3 ">
								SPECIAL S-MART FEATURES
							</h1>
							<div className="mt-14">
								{data.map((item, index) => (
									<div
										key={index}
										id={`highlight26-${index}`}
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

export default SPECIALSMARTFEATURES;
