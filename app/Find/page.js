
import Search from "@/components/Search";
import Image from "next/image";
import React from "react";

const Findpage = () => {
	return (
		<div className=" w-full relative h-screen lg:mt-20">
			<div className="overflow-hidden w-full relative ">
				<Image
					src="/media/search-bg-6.gif"
					alt=""
					height={1024}
					width={1600}
					className="object-cover -mt-[23rem] "
				/>
			</div>
			<div className="absolute z-[10] top-[6rem] p-2 lg:left-[10rem] text-center">
				<h1 className="text-7xl font-['PP_Neue_Machina_Inktrap_Medium']">
					Find Your Hostels and PGs
				</h1>
				<h3 className="text-xl p-5 font-semibold">
					Wherever you prefer. Whenever you need
				</h3>

				<div className="lg:ml-[15rem] -mt-[.5rem]">
					<Search />
				</div>
			</div>
		</div>
	);
};

export default Findpage;
