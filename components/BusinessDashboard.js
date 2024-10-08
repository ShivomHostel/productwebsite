"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";

const data = [
	{
		title: "Manage rooms according to their seats:",
		description:
			"Make your room platform according to their seating capacity & their type",
	},
	{
		title: "Track occupancy and availability",
		description: "No waste of time to indentify how many seats are available",
	},
	{
		title: "Easy room and bed booking",
		description:
			"20 second is much enough to allot room and seat for your tenant",
	},
	{
		title: "Manage room rent",
		description:
			"Fix room rent according to room type and seating capacity separately",
	},
	{
		title: "Add, remove & update",
		description:
			"Add room, remove room and update their seating capacity and rent easily",
	},
];

const BusinessDashboard = () => {
	useEffect(() => {
		const tl = gsap.timeline({ repeat: -1 });
		data.forEach((_, index) => {
			tl.to(`#highlight25-${index}`, {
				duration: 1.5,
				color: "#52e2ee",

				textShadow: "0 0 8px #52e2ee",
				// fontSize: "1.2em",
				ease: "power1.out",
			});
			tl.to(`#highlight25-${index}`, {
				duration: 1.5,
				color: "#fff",
				textShadow: "none",

				// fontSize: "1em",
				ease: "power1.out",
			});
		});
	}, []);

	return (
		<div className="relative">
			<div className="w-full my-20">
				<div className="pt-10 relative bg-gray-500 text-white">
					<div className="w-[10rem] h-[10rem] overflow-hidden rounded-full absolute -top-20 left-[16rem] bg-gray-500 flex items-center justify-around">
						<Image
							src="/media/differentfromothers.png"
							alt=""
							width={500}
							height={500}
							className="object-cover p-3"
						/>
					</div>
					<div className="flex items-center gap-[1rem] ">
						<div className="lft text-center mx-20 my-4">
							<h1 className="text-black absolute z-50  ml-5 font-medium text-4xl uppercase pb-3 ">
								DIFFERENT FROM OTHERS
							</h1>
							<div className="mt-14">
								{data.map((item, index) => (
									<div
										key={index}
										id={`highlight25-${index}`}
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

export default BusinessDashboard;
