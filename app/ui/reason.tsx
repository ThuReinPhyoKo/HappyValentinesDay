import Carousel from "./carousel"

export default function Reasons() {
    return (
        <section className="w-full min-h-screen p-3 flex flex-col items-center -mt-px border-0 bg-[linear-gradient(to_top,#7aa1d2,#d9a7c7)]">
            <h1 className="mt-16 p-1 mb-4 md:h-24 text-5xl md:text-7xl font-romantic font-semibold text-gradient-reason">Reasons I Love You</h1>
            <p className="font-sand text-lg md:text-xl text-gradient-reason font-semibold mb-6">Here are just a few of the million reasons ...</p>
            <Carousel />
        </section>
    )
}