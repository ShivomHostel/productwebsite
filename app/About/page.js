import AboutUs from "@/components/About";
import Image from "next/image";
import React from "react";

const aboutPage = () => {
	
	return (
		// <div className="w-full  lg:mt-16">
		// 	<div className="flex lg:flex-row flex-col items-center justify-between lg:gap-10 ">
		// 		<div className="lft lg:p-10 py-5 lg:w-[50vw] w-[70vw] lg:-mt-[10rem]">
		// 			<div className="flex items-center gap-3 mb-8 ">
		// 				<div className="h-[13px] w-[13px] rounded-full bg-black"></div>
		// 				<h3 className="text-sm  ">WE TURN IDEAS INTO REALITY</h3>
		// 			</div>

		// 			<h1 className="text-6xl font-['PP_Neue_Machina_Inktrap_Medium'] text-[#ED7C24]">
		// 				Meet S-mart
		// 			</h1>
		// 		</div>
		// 		<div className="font-['PP_Neue_Machina_Inktrap_Medium'] lg:w-[50vw] w-[70vw] lg:p-20  mb-9 flex flex-col items-center gap-7 ">
		// 			<p>
		// 				We’re a collective of unapologetically bold visionaries, crafting
		// 				health technology by putting people first. Always.
		// 			</p>
		// 			<p>
		// 				Our expert designers and technologists have decades of experience in
		// 				tech, health, and data. We build tools that solve real problems and
		// 				make managing health an empowering and intuitive experience.
		// 			</p>
		// 			<p>
		// 				We believe that technology must put people first. Find our more
		// 				about the future we’re building.
		// 			</p>
		// 		</div>
		// 	</div>

		// 	<div className=" flex flex-col items-center  gap-4  lg:mx-[10rem] mx-12 mb-10 ">
		// 		<h1 className="text-[#ED7C24] font-['PP_Neue_Machina_Inktrap_Medium'] text-2xl">
		// 			A Short Glimpse About Us
		// 		</h1>
		// 		<Image src="/media/heart.png" alt="heart" height={60} width={40} />
		// 		<div className=" shadow-xl lg:p-20 p-4 text-sm border-2 border-gray-300 font-['PP_Neue_Machina_Inktrap_Medium'] ">
		// 			<p>
		// 				Shivom Securanation envisions a world, where people have a
		// 				meaningful experience with the smart and advanced technologies and
		// 				solutions be it a digital security or digital management. We are the
		// 				one where every digital interaction counts, be it through a web app,
		// 				Android/Ios App, or through some other means like emails or text
		// 				messages.
		// 			</p>
		// 		</div>
		// 	</div>

		// 	<div className="flex items-center flex-col gap-10 w-full  my-10  bg-[#000000ca] p-14 ">
		// 		<h1 className="text-3xl text-[#ED7C24] font-['PP_Neue_Machina_Inktrap_Medium']">
		// 			Our History
		// 		</h1>
		// 		<p className="text-sm text-white  font-['PP_Neue_Machina_Inktrap_Medium']">
		// 			With the years of analysis of various sectors and societies, The
		// 			Shivom Securanation established in providing the ultimate security
		// 			solutions to the schools and the other various organizations, in order
		// 			to ensure their safety and to transform them typical and tedious
		// 			workflow into easily accessible digital services. For more than 3
		// 			years of survey and analysis, Shivom Securanation has helped the
		// 			schools and various other organizations to manage their Record/Data in
		// 			an ultimate fashion and helping parents to get rid of the scare about
		// 			their school going children. Our world-class products are designed
		// 			with various advanced technologies by our creative team and expert
		// 			advisors. Our products are designed to ensure the full proof safety of
		// 			kid and women of our country and to provide actionable insights for
		// 			them. Today, the products and the security and management solutions of
		// 			Shivom Securanation are helping number of prestigious organizations of
		// 			various sectors to reduce the crime against women and kids globally.
		// 		</p>
		// 	</div>

		// 	<div className="text-[#ED7C24] my-20 lg:p-20 flex items-center flex-col gap-10">
		// 		<h1 className="text-3xl font-['PP_Neue_Machina_Inktrap_Medium']">
		// 			Our Mission
		// 		</h1>
		// 		<p className="p-6 font-bold  ">
		// 			We are determined to be an organization, who is solely dedicated to
		// 			building a nation free of fears, scares, and crime. We follow a simple
		// 			but powerful rule, 'Always give more to the people than they expect'.
		// 			That's why we put extra efforts in designing and manufacturing
		// 			innovative solutions using advanced technologies. We are constrained
		// 			to provide a safe and scare-free future for the next generation.
		// 			That's why we are developing advanced security and management
		// 			solutions for the society so that they can tackle these serious
		// 			consequences. This is what we are and this is how we work.
		// 		</p>
		// 	</div>

		// 	<div className="flex lg:flex-row flex-col items-center justify-between lg:gap-10 ">
		// 		<div className="lft lg:p-10 pl-5 lg:w-[20vw] w-[70vw] ">
		// 			<div className="flex items-center gap-2 mb-8 ">
		// 				<div className="h-[12px] w-[12px] rounded-full bg-black"></div>
		// 				<h3 className="text-sm text-[#ED7C24] ">
		// 					EMPOWERING HUMANITY THROUGH INNOVATION
		// 				</h3>
		// 			</div>

		// 			<h1 className="text-6xl mb-5 text-[#ED7C24] font-['PP_Neue_Machina_Inktrap_Medium']">
		// 				Our Core Values
		// 			</h1>
		// 		</div>
		// 		<div className="font-['PP_Neue_Machina_Inktrap_Medium'] lg:w-[50vw] w-[70vw] lg:p-10 mb-9 flex flex-col items-center gap-7 ">
		// 			<div className="flex lg:flex-row flex-col lg:-ml-[13rem] gap-8 text-sm">
		// 				<div className="lg:h-[20vw] lg:w-[20vw] h-[70vw] w-[70vw] bg-black text-white rounded-full text-center flex flex-col items-center p-[2rem] gap-3  ">
		// 					<Image
		// 						src="/media/conscientiousIcon.png"
		// 						alt=""
		// 						width={60}
		// 						height={60}
		// 					/>
		// 					<h3 className=" font-extrabold text-lg">Conscientious</h3>
		// 					<p>Hardwork is the Identification of Honest Thinking.</p>
		// 				</div>
		// 				<div className="lg:h-[20vw] lg:w-[20vw] h-[70vw] w-[70vw] bg-black text-white rounded-full text-center flex flex-col items-center p-[2rem] gap-3 ">
		// 					<Image
		// 						src="/media/relationshipicon.png"
		// 						alt=""
		// 						width={60}
		// 						height={60}
		// 					/>
		// 					<h3 className=" font-extrabold text-lg">Relationship</h3>
		// 					<p>Your Belief Relation Around Life</p>
		// 				</div>
		// 				<div className="lg:h-[20vw] lg:w-[20vw] h-[70vw] w-[70vw] bg-black text-white rounded-full text-center flex flex-col items-center p-[2rem] gap-3 ">
		// 					<Image
		// 						src="/media/Solutionsicon.png"
		// 						alt=""
		// 						width={60}
		// 						height={60}
		// 					/>
		// 					<h3 className=" font-extrabold text-lg">Solutions</h3>
		// 					<p>Security, Solutions to End Social Problems.</p>
		// 				</div>
		// 			</div>
		// 			<div className="flex lg:flex-row flex-col gap-8 text-sm">
		// 				<div className="lg:h-[20vw] lg:w-[20vw] lg:-ml-[13rem] h-[70vw] w-[70vw] bg-black text-white rounded-full text-center flex flex-col items-center p-[2rem] gap-3 ">
		// 					<Image
		// 						src="/media/Innovativeicon.png"
		// 						alt=""
		// 						width={60}
		// 						height={60}
		// 					/>
		// 					<h3 className="font-extrabold text-lg">Innovative</h3>
		// 					<p>Combine Hardwork, With Research and technology</p>
		// 				</div>
		// 				<div className="lg:h-[20vw] lg:w-[20vw] h-[70vw] w-[70vw] bg-black text-white rounded-full text-center flex flex-col items-center p-[2rem] gap-3 ">
		// 					<Image
		// 						src="/media/Articticicon.png"
		// 						alt=""
		// 						width={60}
		// 						height={60}
		// 					/>
		// 					<h3 className=" font-extrabold text-lg">Artistry</h3>
		// 					<p>Artistic Thinking, New Inventions will Born.</p>
		// 				</div>
		// 				<div className="lg:h-[20vw] lg:w-[20vw] h-[70vw] w-[70vw] bg-black text-white rounded-full text-center flex flex-col items-center p-[2rem] gap-3 ">
		// 					<Image
		// 						src="/media/Trustworthyicon.png"
		// 						alt=""
		// 						width={60}
		// 						height={60}
		// 					/>
		// 					<h3 className="font-extrabold text-lg">Trustworthy</h3>
		// 					<p>Your Trust, Our Motive</p>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>

		<AboutUs />

	);
};

export default aboutPage;
