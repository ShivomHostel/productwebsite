import App from "@/components/CheckCarousel";
import Services from "@/components/Services";
import FeatureHomepage from "@/components/FeatureHomepage";
import SmartFeaturesForYou from "@/components/SmartFeaturesForYou";
import MultiItemCarousel from "@/components/MultiItemCarousel";

const servicePage = () => {
	return (
		<div>
			<FeatureHomepage />
			<Services />
			<App />
			<SmartFeaturesForYou />
			{/* <MultiItemCarousel /> */}
		</div>
	);
};

export default servicePage;
