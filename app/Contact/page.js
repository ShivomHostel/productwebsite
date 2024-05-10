import Link from "next/link";
import React from "react";

const Contactpage = () => {
	return (
		// <div className=" w-full lg:mt-20">
		// 	<div className="flex lg:flex-row flex-col items-center justify-between lg:gap-10 ">
		// 		<div className="lft lg:p-10 py-5 lg:w-[50vw] w-[70vw] lg:-mt-[3rem]">
		// 			<div className="flex items-center gap-3 mb-8 ">
		// 				<div className="h-[13px] w-[13px] rounded-full bg-black"></div>
		// 				<h3 className="text-sm  ">COLLABORATIONS THAT DRIVE REAL CHANGE</h3>
		// 			</div>

		// 			<h1 className="text-6xl font-['PP_Neue_Machina_Inktrap_Medium']">
		// 				Get In Touch
		// 			</h1>
		// 		</div>
		// 		<div className="font-['PP_Neue_Machina_Inktrap_Medium'] lg:w-[50vw] w-[70vw] lg:p-20  mb-9 flex flex-col items-center gap-7 ">
		// 			<p>
		// 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor
		// 				unde sapiente. Sunt voluptates consectetur aliquid eos reprehenderit
		// 				amet eum quam laudantium, hic temporibus perferendis!
		// 			</p>
		// 		</div>
		// 	</div>

		// 	<div className="  lg:h-[70vh] w-[70vw] bg-blue-50 border mb-10 border-black lg:mx-[10rem] mx-12 rounded-xl">
		// 		<div className="flex lg:flex-row gap-10 flex-col lg:p-20 py-10 justify-between">
		// 			<div className="flex flex-col gap-2 text-center lg:w-1/3 ">
		// 				<svg
		// 					xmlns="http://www.w3.org/2000/svg"
		// 					viewBox="0 0 24 24"
		// 					width="64"
		// 					height="64"
		// 					fill="currentColor"
		// 					className="ml-[5.5rem] mb-2"
		// 				>
		// 					<path d="M2 5.5V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5ZM0 10H5V12H0V10ZM0 15H8V17H0V15Z"></path>
		// 				</svg>
		// 				<h1 className="text-xl font-bold">Email</h1>
		// 				<h6>s-mart@gmail.com</h6>
		// 			</div>
		// 			<div className="flex flex-col gap-2 text-center lg:w-1/3">
		// 				<svg
		// 					xmlns="http://www.w3.org/2000/svg"
		// 					viewBox="0 0 24 24"
		// 					width="64"
		// 					height="64"
		// 					fill="currentColor"
		// 					className="ml-[5.5rem] mb-2"
		// 				>
		// 					<path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
		// 				</svg>
		// 				<h1 className="text-xl font-bold">Phone</h1>
		// 				<h6>+91 9876543210</h6>
		// 			</div>
		// 			<div className="flex flex-col gap-2 text-center lg:w-1/3">
		// 				<svg
		// 					xmlns="http://www.w3.org/2000/svg"
		// 					viewBox="0 0 24 24"
		// 					width="64"
		// 					height="64"
		// 					fill="currentColor"
		// 					className="ml-[5.5rem] mb-2"
		// 				>
		// 					<path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
		// 				</svg>
		// 				<h1 className="text-xl font-bold">office</h1>
		// 				<h6>
		// 					B-33,1st floor,Kasturba Nagar,near Chetak Bridge, Bhopal, MP,
		// 					462023
		// 				</h6>
		// 			</div>
		// 		</div>
		// 		<div>
		// 			<div>
		// 				<iframe
		// 					src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58660.65055592322!2d77.39887795128725!3d23.232507830682255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x397c4269e09fe1bf%3A0x680f5a969dc28a6c!2sShivom%20Securanation%2C%20Choudhary%20Villa%2C%20B-33%2C%20Sector%20B%2C%20Kasturba%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462023!3m2!1d23.232504!2d77.4400797!5e0!3m2!1sen!2sin!4v1715161702734!5m2!1sen!2sin"
		// 					width="600"
		// 					height="450"
		// 					style={{ border: 0 }}
		// 					allowfullscreen=""
		// 					loading="lazy"
		// 					className="h-[100%] w-[100%	]"
		// 					referrerpolicy="no-referrer-when-downgrade"
		// 				></iframe>
		// 			</div>
		// 			{/* <Link href="https://www.google.com/maps/dir/23.2473031,77.4816688/Shivom+Securanation,+Choudhary+Villa,+B-33,+Sector+B,+Kasturba+Nagar,+Bhopal,+Madhya+Pradesh+462023/@23.2420372,77.4204466,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x397c4269e09fe1bf:0x680f5a969dc28a6c!2m2!1d77.4400797!2d23.232504?entry=ttu">
		// 				<button
		// 					type="button"
		// 					className="lg:ml-[18rem] ml-4  flex items-center gap-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300  font-bold rounded-lg  px-5 py-2.5 text-center me-2 mb-6"
		// 				>
		// 					Visit Us
		// 					<svg
		// 						xmlns="http://www.w3.org/2000/svg"
		// 						viewBox="0 0 24 24"
		// 						width="30"
		// 						height="30"
		// 						fill="currentColor"
		// 					>
		// 						<path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
		// 					</svg>
		// 				</button>
		// 			</Link> */}
		// 		</div>
		// 	</div>
		// </div>

		<div>
			<div className="bg-gray-100 py-8">
				<div className="container contactBg h-[30rem] w-[90vw] mx-auto">
					<div className="text-center flex flex-col justify-around  h-[100%] text-white ">
						<h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
						<p className="text-lg font-semibold">
							We operate from our office located in the heart of Bhopal city.
							<br />
							Feel free to contact us for any support or visit our office during
							business hours.
						</p>
					</div>
				</div>
			</div>
			<div className="container bg-gray-200 mx-auto px-4">
				<h1 className="text-center text-3xl text-bold pt-4">Contact us</h1>
				<div className="py-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
					{/* Phone section */}
					<div className="text-center">
						<div className="py-4">
							<img
								src="/media/phonelogo.png"
								className="mx-auto w-24"
								alt="Phone Logo"
							/>
						</div>
						<p className="text-xl font-bold">CALL US</p>
						<p className="text-lg">
							<b>0755-493-7957, </b>
							<br />
							<b>7879868904</b>
						</p>
					</div>

					{/* Visit section */}
					<div
						className="text-center  sm:border-0"
						style={{
							"border-left": "1px solid black",
							"border-right": "1px solid black",
						}}
					>
						<div className="py-4">
							<img
								src="/media/house.png"
								className="mx-auto w-24"
								alt="House Icon"
							/>
						</div>
						<p className="text-xl font-bold">VISIT US</p>
						<p className="font-medium">
							<b>
								D-3, Vidya Vihar,
								<br /> In Front of BU, <br /> Narmadapuram Road, <br /> Bhopal
								MP-462026
							</b>
						</p>
					</div>

					{/* Email section */}
					<div className="text-center  sm:border-0">
						<div className="py-4">
							<img
								src="/media/mail.png"
								className="mx-auto w-24"
								alt="Mail Icon"
							/>
						</div>
						<p className="text-xl font-bold">CONTACT US</p>
						<p className="text-lg font-semibold">
							contact@shivomsecuranation.com
						</p>
					</div>
				</div>
			</div>

			{/* Find Us section */}
			<div className="container mx-auto px-4 py-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold mb-4">Find Us</h2>
					<div className="w-full overflow-hidden">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58660.65055592322!2d77.39887795128725!3d23.232507830682255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x397c4269e09fe1bf%3A0x680f5a969dc28a6c!2sShivom%20Securanation%2C%20Choudhary%20Villa%2C%20B-33%2C%20Sector%20B%2C%20Kasturba%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462023!3m2!1d23.232504!2d77.4400797!5e0!3m2!1sen!2sin!4v1715161702734!5m2!1sen!2sin"
							width="600"
							height="450"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							className="w-full"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>

			{/* Enquiry Form section */}
			<div className="bg-gray-100 py-8">
				<div className="container mx-auto px-4">
					<div className="text-center">
						<h2 className="text-3xl font-bold mb-4">Enquiry Here</h2>
						<p className="text-lg text-gray-600">
							Fields marked with an * are required
						</p>
					</div>
					<form className="mt-8">
						<div className="flex flex-wrap -mx-4">
							{/* Name & Email */}
							<div className="w-full md:w-1/2 px-4 mb-4">
								<input
									type="text"
									className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-lg focus:outline-none"
									placeholder="Enter Name"
								/>
							</div>
							<div className="w-full md:w-1/2 px-4 mb-4">
								<input
									type="email"
									className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-lg focus:outline-none"
									placeholder="Enter Email"
								/>
							</div>
							{/* Contact & Address */}
							<div className="w-full md:w-1/2 px-4 mb-4">
								<input
									type="text"
									className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-lg focus:outline-none"
									placeholder="Enter Contact Number"
								/>
							</div>
							<div className="w-full md:w-1/2 px-4 mb-4">
								<input
									type="text"
									className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-lg focus:outline-none"
									placeholder="Enter Address"
								/>
							</div>
							{/* Subject */}
							<div className="w-full px-4 mb-4">
								<input
									type="text"
									className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-lg focus:outline-none"
									placeholder="Subject"
								/>
							</div>
							{/* Message */}
							<div className="w-full px-4 mb-4">
								<textarea
									className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-lg focus:outline-none"
									rows="5"
									placeholder="Enter Your Message"
								></textarea>
							</div>
							{/* Submit Button */}
							<div className="w-full px-4 mb-4">
								<button
									type="submit"
									className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-md text-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
								>
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contactpage;
