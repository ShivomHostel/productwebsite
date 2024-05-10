"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";

const data = [
	{
		title: "Unified Management:",
		description:
			"Oversee multiple businesses from one dashboard with S-mart. No more juggling platforms",
	},
	{
		title: "Streamlined Operations:",
		description:
			"Consolidate sales, expenses, and audits into a single location. Simplify workflows.",
	},
	{
		title: "Customized Access:",
		description:
			"Grant tailored permissions to team members for each business. Efficient delegation.",
	},
	{
		title: "Comprehensive Reporting:",
		description:
			"Access detailed reports for each business or generate cross-business insights easily.",
	},
	{
		title: "Seamless Integration:",
		description:
			"Integrate with existing systems smoothly. Experience cohesion across all businesses.",
	},
];

const MultipleBusiness = () => {
	useEffect(() => {
		const tl = gsap.timeline({ repeat: -1 });
		data.forEach((_, index) => {
			tl.to(`#highlight24-${index}`, {
				duration: 1.5,
				color: "#ff9a00",

				textShadow: "0 0 8px #fff",
				// fontSize: "1.2em",
				ease: "power1.out",
			});
			tl.to(`#highlight24-${index}`, {
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
					<div className="w-[10rem] h-[10rem] overflow-hidden rounded-full absolute -top-20 left-[16rem] bg-gray-100 flex items-center justify-around">
						<Image
							src="/media/multiplebusiness.png"
							alt=""
							width={450}
							height={450}
							className="object-cover p-3"
						/>
					</div>
					<div className="flex items-center gap-[1rem] ">
						<div className="lft text-center mx-20 my-4">
							<h1 className="text-black absolute z-50 my-3 text-center ml-12 font-medium text-4xl uppercase pb-3 ">
								ONE DASHBOARD FOR <br /> MULTIPLE BUSINESSES.
							</h1>
							<div className="mt-[7rem] ">
								{data.map((item, index) => (
									<div
										key={index}
										id={`highlight24-${index}`}
										className="text-center w-[30rem] text-md px-7 py-1 rounded-lg font-semibold"
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

export default MultipleBusiness;
