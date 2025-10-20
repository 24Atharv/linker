import { MiddleBar } from "./MiddleBar";

export function Middle() {
    return <div className="mt-30 flex flex-col items-center justify-center">
        <span className="flex flex-col items-center"><span className="">Powering the world’s best product teams.</span>
            <span className="text-gray-400">From next-gen startups to established enterprises.</span>
        </span>
        <div className="flex flex-col gap-12 text-white mt-14 font-bold text-2xl">
            <div className="flex justify-around gap-34">
                <span>Open AI</span>
                <span>Cash App</span>
                <span>Scale</span>
                <span>ramp</span>
            </div>
            <div className="flex justify-around gap-34">
                <span>Vercel</span>
                <span>Coinbase</span>
                <span>Boom</span>
                <span>Cursor</span>
            </div>
        </div>
        <div className="flex gap-3 items-center justify-center mt-30">
            <span className="font-bold text-6xl w-150">Made for modern product teams</span>
            <span className="w-100 text-gray-400">Linear is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft.
                <span className="text-white"> Make the switch</span></span>
        </div>
        <MiddleBar />
    </div>
}

