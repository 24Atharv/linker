import arrrowLeft from '../assets/next.png'
import { Theme } from './Theme'

export function Hero() {
    return <div className="mt-25">
        <div className="flex flex-col justify-center relative left-56">
            <span className="flex flex-col justify-center">
                <span className="font-semibold text-5xl w-220 text-[#F7F8F8]">Linear is a purpose-built tool for planning and building products</span>
                <span className="mt-4 w-100 text-gray-400">Meet the system for modern software development. Streamline issues, projects, and product roadmaps.</span>
            </span>
            <span className="flex gap-3 mt-5">
                <span className="bg-white text-black px-3 py-2 rounded-sm cursor-pointer">Start building</span>
                <span className="hover:bg-gray-700 hover:text-gray-300 px-3 py-2 rounded-sm cursor-pointer flex items-center">New: Product Intelligence 
                    <img src={arrrowLeft} className='h-6 w-6 text-gray-700' />
                </span>
            </span>
        </div>
        <Theme />
    </div>
}

