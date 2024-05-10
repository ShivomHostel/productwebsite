"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const data = [
	{
		title: "S-mart's sales manager",
		description:
			"Streamlines rent collection effortlessly through an advanced auto billing system, minimizing administrative burdens",
	},
	{
		title: "Our platform facilitates seamless sharing",
		description:
			"Allowing users to easily distribute billing, reports, statements, and payment reminders via WhatsApp and our dedicated app.",
	},
	{
		title: "With S-mart's Expense Manager",
		description:
			"Tracking, creating, updating, and deleting expenses is simplified, with categorization for enhanced organization.",
	},
	{
		title: "Accessing accountant reports is efficient",
		description:
			"Enabling users to filter, track, and download monthly sales and expense reports for informed financial decision-making.",
	},
	{
		title: "The S-mart audit system",
		description:
			"Manages monthly profit and loss, comprehensive records on a monthly, quarterly, and yearly basis.",
	},
];

const SmartDigitalAccount = () => {
	useEffect(() => {
		const tl = gsap.timeline({ repeat: -1 });
		data.forEach((_, index) => {
			tl.to(`#highlight5-${index}`, {
				duration: 1.5,
				color: "#ff9a00",

				textShadow: "0 0 8px #fff",
				// fontSize: "1.2em",
				ease: "power1.out",
			});
			tl.to(`#highlight5-${index}`, {
				duration: 1.5,
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
					<div className="w-[10rem] h-[10rem] rounded-full absolute -top-20 overflow-hidden left-[16rem] bg-gray-100 flex items-center justify-around">
						<Image
							src="/media/accountant.png"
							alt=""
							width={500}
							height={500}
							className="object-cover p-3"
						/>
					</div>
					<div className="flex items-center gap-[1rem] ">
						<div className="lft text-center mx-20 my-4">
							<h1 className="text-black absolute z-50   font-medium text-4xl uppercase pb-3 ">
								S-mart Digital Accountant
							</h1>
							<div className="mt-14">
								{data.map((item, index) => (
									<div
										key={index}
										id={`highlight5-${index}`}
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

export default SmartDigitalAccount;
