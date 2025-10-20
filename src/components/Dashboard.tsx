import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Lower } from "./Lower";
import { Middle } from "./Middle";
import { Navbar } from "./Navbar";

export function Dashboard() {
    return <div className="text-white bg-black">
        <Navbar />
        <hr className="mt-6 text-gray-700" />
        <Hero />
        <Middle />
        <Lower />
        <Footer />
    </div>
}


