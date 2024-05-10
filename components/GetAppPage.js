import React from "react";

const GetAppPage = () => {
	return (
		<div className="lg:h-[120vh] font-['PP_Neue_Machina_Inktrap_Medium']  w-full h-full bg-gray-100 flex flex-col lg:flex-row gap-[6rem] items-center justify-center">
			<div className="relative shadow-lg">
				<div className="square  relative h-[28vw] w-[20vw] rounded-lg bg-white">
					<div className="absolute z-40 text-center ">
						<div className="flex items-center  mx-4 p-2">
							<img
								src="/media/apple.png"
								alt=""
								className="h-[5rem] w-[5rem] mt-2 "
							/>
							<h3 className="text-xl mt-3">IOS APP</h3>
						</div>
						<div className="text-center mt-1 ml-5">
							<h3 className="text-[1.5rem] font-bold ">click on </h3>
							<button
								type="button"
								class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
							>
								Download
							</button>
							<h3 className="text-[1.5rem] font-bold ">Or Scan</h3>
						</div>
					</div>
					<div className="circle bg-white absolute top-[12rem] -left-10 flex items-center justify-center h-[26vw] w-[26vw] overflow-hidden   rounded-full">
						<img
							src="/media/QR.png"
							className=" text-center h-[20rem] w-[20rem] mt-4"
						/>
					</div>
				</div>
			</div>
			<div className="w-[20rem] h-96 bg-white clip-div">
				<div className="">
					<div className="flex flex-col items-center p-2">
						<img
							src="/media/windows.png"
							alt=""
							className="h-[5rem] w-[5rem] mt-1"
						/>
						<h3 className="text-xl mt-4">DESKTOP APP</h3>
					</div>
					<div className="text-center ">
						<h3 className="text-[1.5rem] font-bold ">click on </h3>
						<button
							type="button"
							class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
						>
							Download
						</button>
					</div>
				</div>
			</div>

			<div className="relative shadow-lg">
				<div className="square  relative h-[28vw] w-[20vw] rounded-lg bg-white">
					<div className="absolute z-40">
						<div className="flex items-center mx-4 p-2">
							<img
								src="/media/playstore.png"
								alt=""
								className="h-[5rem] w-[5rem] mt-2"
							/>
							<h3 className="text-lg whitespace-nowrap pl-1 mt-3">
								ANDROID APP
							</h3>
						</div>
						<div className="text-center mt-1 ml-5 ">
							<h3 className="text-[1.5rem] font-bold ">click on </h3>
							<button
								type="button"
								class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
							>
								Download
							</button>
							<h3 className="text-[1.5rem] font-bold ">Or Scan</h3>
						</div>
					</div>
					<div className="circle bg-white absolute top-[12rem] -left-10 flex items-center justify-center h-[26vw] w-[26vw] overflow-hidden   rounded-full">
						<img
							src="/media/QR.png"
							className=" text-center h-[20rem] w-[20rem] mt-4"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetAppPage;
