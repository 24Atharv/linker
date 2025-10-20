import img1 from '../assets/middle-1.png'
import img2 from '../assets/middle-2nd.png'
import img3 from '../assets/middle-3rd.png'

export function MiddleBar() {
    return <div className="mt-30 flex gap-3">
        <span className='flex flex-col p-6 border rounded-3xl bg-[#08090A] border-none'>
            <img src={img1} className='w-85' />
            <span className='flex items-center gap-3'><span className='font-bold text-xl w-60'>Purpose-built for product development</span>
                <svg width="100%" height="100%" viewBox="0 0 24 24" className='h-11 w-11 bg-[#08090A] text-[#62666D] border rounded-3xl p-3' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
        </span>

        <span className='flex flex-col p-6 border rounded-3xl bg-[#08090A] border-none'>
            <img src={img2} className='w-85' />
            <span className='flex items-center gap-3'><span className='font-bold text-xl w-60'>Design to move fast</span>
                <svg width="100%" height="100%" viewBox="0 0 24 24" className='h-11 w-11 bg-[#08090A] text-[#62666D] border rounded-3xl p-3' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
        </span>

        <span className='flex flex-col p-6 border rounded-3xl bg-[#08090A] border-none'>
            <img src={img3} className='w-85' />
            <span className='flex items-center gap-3'><span className='font-bold text-xl w-60'>Crafted to perfection</span>
                <svg width="100%" height="100%" viewBox="0 0 24 24" className='h-11 w-11 bg-[#08090A] text-[#62666D] border rounded-3xl p-3' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
        </span>
    </div>
}
