
// import Image from "next/image";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import WorkManagement from "./components/WorkManagement";
import YourWork from "./components/YourWork";
import Sponsers from "./components/Sponsers";

export default function Home() {
	return (
		<div>
			<Navbar />
      <HeroSection />
      <WorkManagement/>
      <YourWork />
      <Sponsers />
      <Footer />
      
		</div>
	);
}
