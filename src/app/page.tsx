import FaeturedCourses from "@/components/FaeturedCourses";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
   <main className="max-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">{/* /* bujte hobe ?? */ }
   {/* antialiased ki? */}
    <HeroSection/>
    <FaeturedCourses/>
   </main>
  );
}
