import Header from "@/components/molecules/Header";
import AboutUs from "@/components/organisms/AboutUs";
import HeroBanner from "@/components/organisms/HeroBanner";
import HowItWorks from "@/components/organisms/HowItWorks";
import WhyUs from "@/components/organisms/WhyUs";

export default function Home() {
	return (
		<>
			<Header />

			<HeroBanner/>

			<AboutUs/>

			<HowItWorks/>

			<WhyUs/>
		</>
	);
}
