

import Home from "@/components/Carousel-1";
import Homepage from "@/components/Homepage";
import Services from "@/components/Services";
import App from "@/components/CheckCarousel";
import Tenant from "@/components/Tenant";
import Subscription from "@/components/Subscription";



const page = () => {
	return (
		<div>
		
			<Home />
			<Homepage />
			
			<Services />
			<App />
			<Tenant />
			<Subscription />
		</div>
	);
};

export default page;
