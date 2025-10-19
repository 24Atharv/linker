import { Hero } from "./Hero";
import { Middle } from "./Middle";
import { Navbar } from "./Navbar";

export function Dashboard() {
    return <div className="text-white bg-black">
        <Navbar />
        <hr className="mt-6 text-gray-700" />
        <Hero />
        <Middle />
    </div>
}

