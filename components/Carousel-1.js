"use client";
import Link from "next/link";
import { useEffect } from "react";

const Home = () => {
	const carouselData = [
		{
			bgColor: "bg-gray-100",
			textColor: "text-gray-500",
			pcolor: "text-orange-600",
			title: "NO WORRY FOR HUSTLE",
			description: "TO GIVE YOUR HOSTEL / PG ON RENT",
			description1: "S-MART WAY TO RENT YOUR PROPERTY",
			buttonColor: "text-gray-600",
			buttonText: "NOW",
			buttonborder: "border-black",
			imgSrc: "/media/wow.png",
			textSize: "text-7xl",
			h4Size: "text-5xl",
		},
		{
			bgColor: "bg-[#C2B280]",
			textColor: "text-gray-600",
			pcolor: "text-white",
			title: "Hostel/PG management On your finger tip",
			description:
				"Are you tired of juggling multiple tasks and struggling? To keep up with the demands of running a hostel or PG business..!",
			description1:
				"Say goodbye to stress & troubles Hello to efficiency with our innovative System.You assuredly boost you businesses with this S-mart system.",
			buttonColor: "text-white",
			buttonText: "One Stop Solution",
			buttonborder: "border-white",
			imgSrc: "/media/wow.png",
			textSize: "text-5xl",
			h4Size: "text-5xl",
		},
		{
			bgColor: "bg-[#30302f]",
			textColor: "text-orange-600",
			pcolor: "text-white",
			title: "To manage your all business",
			description:
				"Manage all your business in just one dashboard. 10 second is much enough to access your multiple branches.",
			description1:
				"S-Mart system provides you digital platform for hassle free management to your multiple businesses, free from paper work, provides you S-Mart team , all things you needed on just one click with super secured cloud storage",
			buttonColor: "text-gray-300",
			buttonText: "One app",
			buttonborder: "border-white",
			imgSrc: "/media/wow.png",
			textSize: "text-7xl",
			h4Size: "text-5xl",
		},
		{
			bgColor: "bg-[#d3e7f1]",
			textColor: "text-gray-600",
			pcolor: "text-gray-800",
			title:
				"Accessibility Anywhere, Anytime:  Seamlessly manage your business from  any device, Mobile-Tab-Desktop Compatibility",
			description: "Tailored Applications for Every Platform",
			description4: "IOS",
			description2: "ANDROID",
			description3: "WINDOWS",
			buttonColor: "text-orange-600",
			buttonText: "WOW",
			buttonborder: "border-white ",
			imgSrc: "/media/wow.png",
			textSize: "text-7xl",
			h4Size: "text-4xl",
			border:"border",
			borderBlack: "border-black",
		},
	];

	useEffect(() => {
		const initializeCarousel = () => {
			const carousel = document.getElementById("myCarousel");
			if (carousel) {
				const interval = 3000; // Interval in milliseconds 3000
				let slideIndex = 0; // Initialize slide index

				const slides = carousel.querySelectorAll(".carousel-item");
				const totalSlides = slides.length;

				const showSlide = (index) => {
					slides.forEach((slide) => {
						slide.classList.remove("active");
					});

					slides[index].classList.add("active");
				};

				const nextSlide = () => {
					slideIndex = (slideIndex + 1) % totalSlides;
					showSlide(slideIndex);
				};

				const prevSlide = () => {
					slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
					showSlide(slideIndex);
				};

				let intervalId = setInterval(nextSlide, interval);

				carousel.addEventListener("mouseenter", () =>
					clearInterval(intervalId)
				);
				carousel.addEventListener("mouseleave", () => {
					clearInterval(intervalId);
					intervalId = setInterval(nextSlide, interval);
				});

				// const prevButton = document.querySelector(".carousel-control-prev");
				// const nextButton = document.querySelector(".carousel-control-next");

				// prevButton.addEventListener("click", prevSlide);
				// nextButton.addEventListener("click", nextSlide);
			}
		};

		initializeCarousel();
	}, []);

	return (
		<div
			id="myCarousel"
			className="carousel slide carousel-fade  relative font-['Berlin_Sans_FB']"
			data-ride="carousel"
		>
			<div className="carousel-inner">
				{carouselData.map((item, index) => (
					<div key={index} className={`carousel-item ${item.bgColor} active`}>
						<div className="mask absolute top-0 left-0 h-full w-full  flex-center">
							<div className="container">
								<div className="row ">
									<div className="col-md-6 mt-4  col-12 order-md-1  order-2">
										<a
											href="/CommingSoon"
											className={`${item.textSize} ${item.buttonColor} ${item.buttonborder} border-2 mb-5 text-start no-underline  pl-1 pr-8 ml-4 rounded-xl py-1 inline-block`}
										>
											{item.buttonText}
										</a>
										<h4
											className={`${item.h4Size} mb-[15px] ${item.textColor} text-center font-normal`}
										>
											{item.title}
										</h4>
										<div
											className={`text-2xl mb-[15px] ${item.pcolor} text-center`}
										>
											<p>{item.description}</p>
											<p>{item.description1}</p>
											<div className="text-xl text-center flex ml-28 gap-5 items-center ">
												<p
													className={` px-3 y-2 ${item.border}  ${item.borderBlack} items-center rounded  `}
												>
													{item.description4}
												</p>
												<p
													className={` px-3 y-2 ${item.border} ${item.borderBlack} items-center rounded  `}
												>
													{item.description2}
												</p>
												<p
													className={` px-3 y-2 ${item.border} ${item.borderBlack} items-center rounded  `}
												>
													{item.description3}
												</p>
											</div>
										</div>
									</div>
									<div className="col-xl-5 lg:w-50  order-1">
										<img
											src={item.imgSrc}
											className="mx-auto lg:my-24 h-[20rem]  w-[90vw]"
											alt="slide"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
