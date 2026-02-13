import AnniversaryCountdown from "./countdown"
import CountingDate from "./counting"

export default function Gallery() {
    return (
        <section id="timeline" className="w-full min-h-screen flex flex-col gap-5 -mt-px border-0 bg-[linear-gradient(to_top,#d9a7c7,#fffcdc)]">
            <CountingDate />
            <AnniversaryCountdown />
        </section>
    )
}