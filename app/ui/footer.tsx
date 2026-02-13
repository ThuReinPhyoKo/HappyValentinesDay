export default function Footer() {
    return (
        <footer className="px-10 py-5 bg-[#bb377d] border-t border-gray-800">
            <div className="flex flex-col items-center text-gradient-reason justify-center font-sand">
                <h2 className="text-3xl font-romantic">Made With Love</h2>
                <p className="font-medium text-lg mb-4">For my one and only Valentine</p>
                <div className="flex items-center justify-center gap-5 mb-4">
                    <img className="w-10 h-10 animate-bounce-soft" style={{ animationDelay: "0.1s"}} src="/svg/fluentSparklingHeart.svg" alt="Saprkling Heart" />                
                    <img className="w-10 h-10 animate-bounce-soft" style={{ animationDelay: "0.2s"}} src="/svg/ribbonHeart.svg" alt="Ribbon Heart" />                
                    <img className="w-10 h-10 animate-bounce-soft" style={{ animationDelay: "0.3s"}} src="/svg/arrowHeart.svg" alt="Arrow Heart" />                
                    <img className="w-10 h-10 animate-bounce-soft" style={{ animationDelay: "0.4s"}} src="/svg/growHeart.svg" alt="Grow Heart" />
                </div>                
                <p className="font-medium">Happy Valentine's Day 2026</p>
            </div>
        </footer>
    )
}