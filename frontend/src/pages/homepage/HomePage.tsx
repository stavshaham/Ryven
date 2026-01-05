import Hero from "../../components/hero/Hero.tsx";
import Features from "../../components/features/Features.tsx";
import AboutUs from "../../components/about/AboutUs.tsx";
import Contact from "../../components/contact/Contact.tsx";

function HomePage() {
    return (
        <>
            <Hero/>
            <Features/>
            <AboutUs/>
            <Contact />
        </>
    )
}

export default HomePage;
