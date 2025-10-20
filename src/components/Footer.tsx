import logo from '../assets/icons8-trademark-50.png'

export function Footer() {
    return <div>
        <hr className="mt-6 text-gray-700" />
        <div className="mt-15">
            <div className="flex gap-21 justify-center pb-20">
                <span>
                    <img src={logo} className='h-8 w-8 text-white bg-white rounded-4xl' />
                </span>
                <span className="font-semibold">
                    Features
                    <div className="flex flex-col gap-2 text-gray-500 font-normal text-sm mt-7">
                        <li className="list-none">Plan</li>
                        <li className="list-none">Build</li>
                        <li className="list-none">Insights</li>
                        <li className="list-none">Customer Requests</li>
                        <li className="list-none">Linear Asks</li>
                        <li className="list-none">Security</li>
                        <li className="list-none">Mobile</li>
                    </div>
                </span>
                <span className="font-semibold">
                    Product
                    <div className="flex flex-col gap-2 text-gray-500 font-normal text-sm mt-7">
                        <li className="list-none">Pricing</li>
                        <li className="list-none">Method</li>
                        <li className="list-none">Integrations</li>
                        <li className="list-none">Changelog</li>
                        <li className="list-none">Documentation</li>
                        <li className="list-none">Download</li>
                        <li className="list-none">Switch</li>
                    </div>
                </span>
                <span className="font-semibold">
                    Company
                    <div className="flex flex-col gap-2 text-gray-500 font-normal text-sm mt-7">
                        <li className="list-none">About</li>
                        <li className="list-none">Customers</li>
                        <li className="list-none">Careers</li>
                        <li className="list-none">Now</li>
                        <li className="list-none">README</li>
                        <li className="list-none">Quality</li>
                        <li className="list-none">Brand</li>
                    </div>
                </span>
                <span className="font-semibold">
                    Resources
                    <div className="flex flex-col gap-2 text-gray-500 font-normal text-sm mt-7">
                        <li className="list-none">Developers</li>
                        <li className="list-none">Status</li>
                        <li className="list-none">Startups</li>
                        <li className="list-none">Report vulnerability</li>
                        <li className="list-none">DPA</li>
                        <li className="list-none">Privacy</li>
                        <li className="list-none">Terms</li>
                    </div>
                </span>
                <span className="font-semibold">
                    Connect
                    <div className="flex flex-col gap-2 text-gray-500 font-normal text-sm mt-7">
                        <li className="list-none">Contact us</li>
                        <li className="list-none">Community</li>
                        <li className="list-none">X (Twitter)</li>
                        <li className="list-none">GitHub</li>
                        <li className="list-none">Youtube</li>
                    </div>
                </span>
            </div>
        </div>
    </div>
}

