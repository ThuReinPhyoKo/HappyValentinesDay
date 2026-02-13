"use client"
import { useState, useEffect, PropsWithChildren } from "react"

export default function LoadingScreen({ children }: PropsWithChildren) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(timer);
    }, [3000]);

    if (isLoading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[linear-gradient(to_right,#ED4264,#FFEDBC)]">
                <div className="flex flex-col items-center gap-6">
                    <div className="w-32 h-32 flex items-center justify-center">
                        <div className="loader"></div>
                    </div>
                    <div className="text-center flex gap-2.5">
                        <div className="text-4xl tracking-widest font-romantic font-semibold text-rose-600">Loading</div>
                        <div className="mt-2 flex items-center justify-center gap-2">
                            <span className="w-2 h-2 bg-rose-500 rounded-full animate-bounce delay-75"></span>
                            <span className="w-2 h-2 bg-rose-500 rounded-full animate-bounce delay-150"></span>
                            <span className="w-2 h-2 bg-rose-500 rounded-full animate-bounce delay-225"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return <>{children}</>
}