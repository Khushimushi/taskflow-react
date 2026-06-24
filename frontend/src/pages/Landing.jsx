import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from "../components/Navbar";

function Landing() {
    return (
        <div className="min-h-screen flex flex-col">

            <main className="flex-grow">
                <Hero />
                <Features />
            </main>

            <Footer />
            
        </div>
    );
}

export default Landing;
