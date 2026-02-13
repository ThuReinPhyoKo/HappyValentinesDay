"use client"
import Image from "next/image"
import { Mail, MailOpen } from "lucide-react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function Letter() {
    const [ letterOpen, setLetterOpen ] = useState(false)
    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center -mt-px border-0 bg-[linear-gradient(to_bottom,#7aa1d2,#dfd3dd)]">
            <Image src="/svg/letter.svg" width="80" height="80" alt="letter-svg" />
            <h1 className="p-1 mb-4 h-24 text-4xl md:text-7xl font-romantic font-semibold text-gradient-reason">A Letter For You</h1>
            <p className="font-sand text-lg md:text-xl text-white text-gradient-reason font-semibold mb-6">Click the envelope to read my heart </p>
            <div
                className={`${ letterOpen ? "opacity-50 scale-95" : "hover:scale-105"} max-w-2xl w-full p-8 mb-5 shadow flex flex-col items-center justify-center rounded-2xl bg-pink-200 font-sand transition-all duration-700 cursor-pointer`} 
                onClick={() => setLetterOpen(!letterOpen)}
            >
                {letterOpen ? (
                    <>
                        <MailOpen className="w-14 h-14 text-rose-400 mb-4" />
                        <p className="font-semibold text-rose-500 text-lg">Click to close</p>
                    </>
                ) : (
                    <>
                        <Mail className="w-14 h-14 text-rose-400 mb-4 animate-wiggle" />
                        <p className="font-semibold text-rose-500 text-lg">Click to open</p>
                    </>
                )}
            </div>

            <AnimatePresence>
                {letterOpen && (

                    <motion.div 
                        className="max-w-2xl flex flex-col p-10 mb-10 justify-center w-full text-black/80 bg-white rounded-2xl font-sand"
                        layout
                        initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                        animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
                        exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <h2 className="font-romantic text-2xl mb-8">AThae,</h2>

                        <p className="font-medium font-romantic text-xl mb-4">
                           Thank you for being with me for nearly half of my life. I love you and I miss you so much. 
                           I made this little website just for you. I hope you like it. I wish I could give you the world. 
                           You deserve everything I could ever give. 🌎️
                        </p>

                        <p className="font-medium font-romantic text-xl mb-4">
                           You mean more to me than I could ever explain. I want to protect you from every storm
                            you may face and always be someone you can lean on. 👩🏻‍❤️‍👨🏻
                        </p>

                        <p className="font-medium font-romantic text-xl mb-8">
                           I love you so much that words could never be enough. My love for you is indescribable. You are my peace,
                            my serenity. Never doubt yourself. You are capable of so much more than you realize. 
                            And whenever you feel tired or unsure, just take my hand ... I'll always be here for you. 😉
                        </p>

                        <p className="ml-auto font-medium font-romantic text-xl">Forever and always yours</p>
                        <p className="ml-auto font-medium font-romantic text-xl">Until the last breath of forever</p>
                        <p className="ml-auto font-medium font-romantic text-xl">Ko Ko ❤️</p>
                    </motion.div>

                )}
            </AnimatePresence>
        </section>
    )
}