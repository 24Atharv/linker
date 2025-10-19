import logo from '../assets/icons8-trademark-50.png'

export function Navbar() {
    return <div className='p-4 flex items-center gap-3 justify-around'>
        <span className='flex gap-2 items-center'>
        <img src={logo} className='text-white bg-white rounded-3xl h-8' alt="" />
        <h1 className='font-bold text-2xl'>Linear</h1>
        </span>
        <span className='flex gap-14 text-gray-400'>
            <span>Product</span>
            <span>Resources</span>
            <span>Pricing</span>
            <span>Customers</span>
            <span>Now</span>
            <span>Contact</span>
        </span>
        <span className='flex gap-3'>
            <span className='px-3 py-1 rounded-sm text-gray-400'>Log in</span>
            <span className='px-3 py-1 rounded-sm bg-white text-gray-800 font-sans font-semibold'>Sign up</span>
        </span>
    </div>
}
