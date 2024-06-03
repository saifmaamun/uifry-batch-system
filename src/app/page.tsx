import HeroSection from "@/components/ui/HeroSection";
import Features from "./features/page";
import FeatureSection from "@/components/ui/FeatureSection";
import Advantages from "@/components/ui/Advantages";
import Testimonial from "@/components/ui/Testimonial";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Advantages />
      <Testimonial />
    </>
  );
};

export default Home;
