import Image from "next/image";
import React from "react";

const FeatureHomepage = () => {
  return (
		<div className="bgFeature relative h-[85vh] overflow-x-hidden">
			<div className="  flex items-center justify-center gap-5 font-['Berlin_Sans_FB'] ">
				<div className="left">
					<h1 className="text-7xl text-gray-500 py-3 font-light">Ranked#1</h1>
					<h3 className="text-4xl text-gray-700 font-light leading-[3rem]">
						Special S-mart Feature &gt; Totally <br /> Different from others
						&gt; No worry to <br />
						Vacant hostel/PG
					</h3>
				</div>
				<div className="rgt mt-3">
					<Image src="/media/SERVICES.png" width={600} height={800} />
				</div>
			</div>
			<div className="footer_bg_one "></div>
			<div className="footer_bg_two"></div>
		</div>
	);
};

export default FeatureHomepage;
