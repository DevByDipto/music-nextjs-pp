import FaeturedCourses from "@/components/FaeturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpCommingWebinars from "@/components/UpCommingWebinars";
import WhyChoseUs from "@/components/WhyChoseUs";

export default function Home() {
  return (
   <main className="max-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">{/* /* bujte hobe ?? */ }
   {/* antialiased ki? */}
    <HeroSection/>
    <FaeturedCourses/>
    <WhyChoseUs/>
    <TestimonialCards/>
    <UpCommingWebinars/>
    <Instructors/>
   </main>
  );
}
