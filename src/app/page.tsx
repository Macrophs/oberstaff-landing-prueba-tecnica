import Header from "@/components/molecules/Header";
import AboutUs from "@/components/organisms/AboutUs";
import Clients from "@/components/organisms/Clients";
import ContactUs from "@/components/organisms/ContactUs";
import FAQ from "@/components/organisms/FAQ";
import Footer from "@/components/organisms/Footer";
import HeroBanner from "@/components/organisms/HeroBanner";
import HowItWorks from "@/components/organisms/HowItWorks";
import WhyUs from "@/components/organisms/WhyUs";

export default function Home() {
	return (
		<>
			<Header />

			<HeroBanner />

			<AboutUs />

			<HowItWorks />

			<WhyUs />

			<Clients />

			<FAQ />

			<ContactUs />

			<Footer />
		</>
	);
}
