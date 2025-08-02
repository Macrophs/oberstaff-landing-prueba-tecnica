import Header from "@/components/molecules/Header";
import AboutUs from "@/components/organisms/AboutUs";
import HeroBanner from "@/components/organisms/HeroBanner";

export default function Home() {
	return (
		<>
			<Header />

			<HeroBanner/>

			<AboutUs/>
		</>
	);
}
