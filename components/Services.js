"use client";
import React, { useState } from "react";

const Services = () => {
	const features = [
		{
			title: "ROOM SEATS MANAGEMENT",
			description:
				"MANAGE YOUR ROOMS, SEATS, SERVICES, RECORDS & RENTS SMARTLY",
			imgSrc: "/media/roomicon.png",
			alt: "Team",
		},
		{
			title: "ADMISSIONS & REGISTRATION",
			description:
				"KEEP DIGITAL RECORDS OF TENANT, ALLOT SEATS/ROOM & MANAGE DIGITAL ADMISSION WITH ZERO PAPER WORK.",
			imgSrc: "/media/registration.png",
			alt: "Team",
		},
		{
			title: "S-MART DIGITAL ACCOUNTANT",
			description:
				"S-MART BILLING FOR RENT COLLECTION & PAYMENTS, KEEP RECORDS OF EXPENSE WITH CATEGORIES, & PROFIT-LOSS REPORT",
			imgSrc: "/media/accountant.png",
			alt: "Team",
		},
		{
			title: "MULTIPLE USERS",
			description:
				"MANAGE YOUR BUSINESSES BY YOUR S-MART TEAM WORK, MAKE ROLES & RESPONSIBILITIES.",
			imgSrc: "/media/team.png",
			alt: "Team",
		},
		{
			title: "ONE DASHBOARD FOR MULTIPLE BUSINESSES.",
			description: "CREATE MULTIPLE ACCOUNTS ON 1 S-MART APP.",
			imgSrc: "/media/multiplebusiness.png",
			alt: "Team",
		},
		{
			title: "ONLINE BUNSINESS PLATFORM",
			description:
				"MARKET YOUR S-MART PROPERTY ONLINE, GET MORE LEADS & CONVERT LEADS INTO TENANT MORE FASTER",
			alt: "Team",
			imgSrc: "/media/businessplatform.png",
		},
		{
			title: "SPECIAL S-MART FEATURES",
			description:
				"MANAGE:FOOD MENU, CUSTOM SALES, MONTHLY REPORTS, OFFERS ZONE, NOTIFY ON WHATSAPP, TENANT NOTICE, COMPLAINT&LEADS",
			imgSrc: "/media/smartapp.png",
			alt: "Team",
		},
		{
			title: "DIFFERENT FROM OTHERS",
			description:
				"MANAGE; KITCHEN STOCKS, EMPLOYEE ATTENDANCE & SALARY, ELECTRICITY BILL AND SMART TENANT & EMPLOYEE VERIFICATION",
			imgSrc: "/media/differentfromothers.png",
			alt: "Team",
		},
		{
			title: "S-MART TENANT APP",
			description:
				"FOR TANSPARANCY, EASY RECORDS AND HASSLE FREE COMMUNICATION.",
			imgSrc: "/media/tenantapp.png",
			alt: "Team",
		},
	];
	return (
		<div>
			{/* <div className="decoration-none text-white  bg-gray-200 px-2 py-10 font-['PP_Neue_Machina_Inktrap_Medium']">
				<div id="features" className="mx-auto max-w-6xl">
					<p className="text-center text-[#b0751c] uppercase  text-base  font-bold leading-7 text-primary-500">
						--- <span> How the app can benefit hostel and PG owners</span> ---
					</p>
					<h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
						Explore our <span className="text-[#9e6818]">S-mart Features</span>
					</h2>
					<ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
						<li className="rounded-xl decoration-none bg-[#fff] px-6 py-8 hover:bg-[#ED7C24] hover:transition hover:text-white shadow-sm">
							<a href="/Services">
								<img
									src="/media/team.png"
									alt=""
									className="mx-auto h-[5rem] w-[5rem]"
								/>
								<img
									src="/media/smart-hostel-1.png"
									alt=""
									className="mx-auto h-[3rem] w-[8rem]"
								/>
								<h3 className="my-3 font-display text-black font-black">
									ROOM SEATS MANAGEMENT
								</h3>
								<p className="mt-1.5 text-sm leading-5 text-secondary-500 ">
									MANAGE YOUR ROOMS, SEATS, SERVICES, RECORDS & RENTS SMARTLY
								</p>
							</a>
						</li>
						<li className="rounded-xl bg-[#fff] px-6 py-8 hover:bg-[#ED7C24] hover:transition hover:text-white shadow-sm">
							<a href="/Services">
								<img
									src="/media/team.png"
									alt=""
									className="mx-auto h-[5rem] w-[5rem]"
								/>
								<img
									src="/media/smart-hostel-1.png"
									alt=""
									className="mx-auto h-[3rem] w-[8rem]"
								/>
								<h3 className="my-3 font-display text-black font-black">
									ADMISSIONS & REGISTRATION
								</h3>
								<p className="mt-1.5 text-sm leading-6 text-secondary-500">
									KEEP DIGITAL RECORDS OF TENANT, ALLOT SEATS/ROOM & MANAGE
									DIGITAL ADMISSION WITH ZERO PAPER WORK.
								</p>
							</a>
						</li>
						<li className="rounded-xl bg-[#fff] px-6 py-8 hover:bg-[#ED7C24] hover:transition hover:text-white shadow-sm">
							<a href="/Services">
								<img
									src="/media/team.png"
									alt=""
									className="mx-auto h-[5rem] w-[5rem]"
								/>
								<img
									src="/media/smart-hostel-1.png"
									alt=""
									className="mx-auto h-[3rem] w-[8rem]"
								/>
								<h3 className="my-3 font-display text-black font-black">
									S-MART DIGITAL ACCOUNTANT
								</h3>
								<p className="mt-1.5 text-sm leading-6 text-secondary-500">
									S-MART BILLING FOR RENT COLLECTION & PAYMENTS, KEEP RECORDS OF
									EXPENSE WITH CATEGORIES, & PROFIT-LOSS REPORT
								</p>
							</a>
						</li>
						<li className="rounded-xl bg-[#fff] b px-6 py-8 hover:bg-[#ED7C24] hover:transition hover:text-white shadow-sm">
							<a href="/Services" className="group">
								<img
									src="/media/team.png"
									alt=""
									className="mx-auto h-[5rem] w-[5rem]"
								/>
								<img
									src="/media/smart-hostel-1.png"
									alt=""
									className="mx-auto h-[3rem] w-[8rem]"
								/>
								<h3 className="my-3 font-display text-black font-black group-hover:text-primary-500">
									MULTIPLE USERS
								</h3>
								<p className="mt-1.5 text-sm leading-6 text-secondary-500">
									MANAGE YOUR BUSINESSES BY YOUR S-MART TEAM WORK, MAKE ROLES &
									RESPONSIBILITIES.
								</p>
							</a>
						</li>
						<li className="rounded-xl bg-[#fff] px-6 py-8 hover:bg-[#ED7C24] hover:transition hover:text-white shadow-sm">
							<a href="/Services" className="group">
								<img
									src="/media/team.png"
									alt=""
									className="mx-auto h-[5rem] w-[5rem]"
								/>
								<img
									src="/media/smart-hostel-1.png"
									alt=""
									className="mx-auto h-[3rem] w-[8rem]"
								/>
								<h3 className="my-3 font-display text-black font-black group-hover:text-primary-500">
									ONE DASHBOARD FOR MULTIPLE BUSINESSES.
								</h3>
								<p className="mt-1.5 text-sm leading-6 text-secondary-500">
									ONE DASHBOARD FOR MULTIPLE BUSINESSES. CREATE MULTIPLE
									ACCOUNTS ON 1 S-MART APP.
								</p>
							</a>
						</li>
						<li className="rounded-xl bg-[#fff] px-6 py-8 hover:bg-[#ED7C24] hover:transition hover:text-white shadow-sm">
							<a href="/Services" className="group">
								<img
									src="/media/team.png"
									alt=""
									className="mx-auto h-[5rem] w-[5rem]"
								/>
								<img
									src="/media/smart-hostel-1.png"
									alt=""
									className="mx-auto h-[3rem] w-[8rem]"
								/>
								<h3 className="my-3 font-display text-black font-black group-hover:text-primary-500">
									ONLINE BUNSINESS PLATFORM
								</h3>
								<p className="mt-1.5 text-sm leading-6 text-secondary-500">
									MARKET YOUR S-MART PROPERTY ONLINE, GET MORE LEADS & CONVERT
									LEADS INTO TENANT MORE FASTER
								</p>
							</a>
						</li>
						<li className="rounded-xl bg-[#fff] px-6 py-8 hover:bg-[#ED7C24] hover:transition hover:text-white shadow-sm">
							<a href="/Services" className="group decoration-none">
								<img
									src="/media/team.png"
									alt=""
									className="mx-auto h-[5rem] w-[5rem]"
								/>
								<img
									src="/media/smart-hostel-1.png"
									alt=""
									className="mx-auto h-[3rem] w-[8rem]"
								/>
								<h3 className="my-3 font-display text-black font-black group-hover:text-primary-500">
									SPECIAL S-MART FEATURES
								</h3>
								<p className="mt-1.5 text-sm leading-6 text-secondary-500">
									MANAGE: FOOD MENU, CUSTOM SALES, MONTHLY REPORTS, OFFERS ZONE,
									NOTIFY ON WHATSAPP, TENANT NOTICE, COMPLAINT & LEADS
								</p>
							</a>
						</li>
						<li className="rounded-xl bg-[#fff] px-6 py-8 hover:bg-[#ED7C24] hover:transition hover:text-white shadow-sm">
							<a href="/Services" className="group">
								<img
									src="/media/team.png"
									alt=""
									className="mx-auto h-[5rem] w-[5rem]"
								/>
								<img
									src="/media/smart-hostel-1.png"
									alt=""
									className="mx-auto h-[3rem] w-[8rem]"
								/>
								<h3 className="my-3 font-display text-black font-black group-hover:text-primary-500">
									DIFFERENT FROM OTHERS
								</h3>
								<p className="mt-1.5 text-sm leading-6 text-secondary-500">
									MANAGE; KITCHEN STOCKS, EMPLOYEE ATTENDANCE & SALARY,
									ELECTRICITY BILL AND SMART TENANT & EMPLOYEE VERIFICATION
								</p>
							</a>
						</li>
						<li className="rounded-xl bg-[#fff] px-6 py-8 hover:bg-[#ED7C24] hover:transition hover:text-white shadow-sm">
							<a href="/Services" className="group">
								<img
									src="/media/team.png"
									alt=""
									className="mx-auto h-[5rem] w-[5rem]"
								/>
								<img
									src="/media/smart-hostel-1.png"
									alt=""
									className="mx-auto h-[3rem] w-[8rem]"
								/>
								<h3 className="my-3 font-display text-black font-medium group-hover:text-primary-500">
									S-MART TENANT APP
								</h3>
								<p className="mt-1.5 text-sm leading-6 text-secondary-500">
									FOR TANSPARANCY, EASY RECORDS AND HASSLE FREE COMMUNICATION.
								</p>
							</a>
						</li>
					</ul>
				</div>
			</div> */}

			<div className="decoration-none text-white bg-gray-200 w-full  py-10 font-['PP_Neue_Machina_Inktrap_Medium']">
				<div id="features" className=" max-w-3xl md:max-w-xl lg:max-w-6xl">
					<p className="text-center text-[#b0751c] uppercase text-base font-bold leading-7 text-primary-500">
						--- <span> How the app can benefit hostel and PG owners</span> ---
					</p>
					<h2 className="text-center font-display text-3xl mb-[10rem] font-bold tracking-tight text-slate-900 md:text-4xl">
						Explore our <span className="text-[#9e6818] ">S-mart Features</span>
					</h2>
					<ul className="grid grid-cols-1 gap-[10rem] text-center text-slate-700 mr-5 lg:mr-0 md:mx-auto lg:ml-[4rem]  xl:grid-cols-3">
						{features.map((feature, index) => (
							<li
								key={index}
								className="rounded-xl bg-[#fff]  -mt-[8rem] text-[#797979] xl:w-[25rem] xl:h-[15rem]  px-4 py-2 hover:bg-[#a5a4a4]  hover:text-white shadow-sm"
							>
								<div className="decoration-none no-underline hover:text-white">
									<div className="mx-auto h-[5rem] w-[5rem] overflow-hidden">
										<img
											src={feature.imgSrc}
											alt={feature.alt}
											className="object-cover"
										/>
									</div>

									<img
										src="/media/smart-hostel-1.png"
										alt=""
										className="mx-auto h-[3rem] w-[8rem]"
									/>
									<h3 className="my-1 font-display text-lg text-black font-black decoration-none no-underline ">
										{feature.title}
									</h3>
									<p className="mt-1.5 text-sm leading-5   decoration-none no-underline ">
										{feature.description}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Services;
