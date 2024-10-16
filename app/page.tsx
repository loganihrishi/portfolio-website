import { navItems } from "@/data";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { FloatingNav } from "@/components/ui/FloatingNav";
import HomePage from "@/components/HomePage";
import Work from "@/components/Work";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col">
      <div className="fixed top-0 left-0 right-0 h-[6px] sm:h-6 bg-[#F0F0F3] dark:bg-[#18191B] z-50"></div>
      <div className="fixed bottom-0 left-0 right-0 h-[6px] sm:h-6 bg-[#F0F0F3] dark:bg-[#18191B] z-50"></div>
      <div className="fixed right-6 max-[640px]:right-[32px] min-[1200px]:right-9 top-9 scale-1 z-[99]"><ModeToggle /></div>
      <FloatingNav className='max-[640px]:hidden' navItems={navItems} />
      <HomePage />
      <Skills />
      <Work />
      <About />
      <Testimonial />
      <Footer />
    </main>
  );
}
