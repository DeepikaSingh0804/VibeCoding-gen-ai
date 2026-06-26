// import Navbar from "./components/Navbar/page";;
import Hero from "./components/Hero/page";
import Features from "./components/Features/page";
import Pricing from "./components/Pricing/page";
import Testimonials from "./components/Testimonials/page";
import CTA from "./components/CTA/page";
// import Footer from "./components/Footer/page";

export default function Home() {
  return (
    <>

      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
}