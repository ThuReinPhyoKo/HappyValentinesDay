"use client"
import React, { PropsWithChildren, useState, useEffect, useRef } from "react";
import { Eye, EyeOff, LockOpen } from "lucide-react"
import Image from "next/image";

export default function PasscodeGate({children} : PropsWithChildren) {
    const [ code, setCode ] = useState("");
    const [ isUnlocked, setIsUnlocked ] = useState(false);
    const [ error, setError] = useState(false);
    const [ show, setShow ] = useState(false);
    const [ isSuccess, setIsSuccess ] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    const passcode = "UntilTheLastBreathOfForever";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault() 
        if(code === passcode) {
            setError(false);
            setIsSuccess(true);
            setTimeout(() =>{ 
                setIsUnlocked(true);
            }, 2000)
        } else {
            setError(true);
        }
    }

    if(!isUnlocked){
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-[linear-gradient(to_right,#ED4264,#FFEDBC)]">
                <div className="p-4 rounded-xl w-[370] md:w-[600] bg-black/40">
                    <div className="w-full flex items-center justify-center gap-1 md:gap-2.5">
                        <h2 className="font-romantic text-center text-[#ededed] text-4xl m-4 font-medium">Enter Secret Code</h2>
                        <Image src="/svg/sparklingHeart.svg" alt="heart" width="50" height="50" preload />
                    </div>
                    <p className="font-sand text-center text-[#ededed] font-medium text-xl my-2">What does the acronym U.T.L.B.O.F stand for?</p>
                    <p className="font-sand text-center text-[#ededed]">Type the passcode in this format without space - ThisIsAnOrangeCat</p>

                    {error && (
                        <div className="flex items-center justify-center gap-2.5">
                            <Image src="/png/angry.png" width="150" height="200" alt="angry-cat" />
                            <div className="flex flex-col items-center justify-center gap-2.5">
                                <p className="text-white font-angry text-4xl">What?!!</p>
                                <p className="text-white font-angry text-xl">How Dare You?</p>
                            </div>
                        </div>
                    )}

                    {isSuccess && (
                        <div className="flex items-center justify-center gap-2.5">
                            <Image src="/png/wink.png" width="150" height="200" alt="wink-cat" preload />
                            <div className="flex flex-col items-center justify-center gap-2.5">
                                <p className="text-white font-romantic text-4xl">YaY!!</p>
                                <p className="text-white font-angry text-xl">You've Opened My Heart</p>
                            </div>
                        </div>
                    )}

                    <form className="relative w-full my-4" onSubmit={handleSubmit}>
                        <input
                          ref={inputRef}
                          type={ show? "text" : "password"}
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                          placeholder="ExamplePasscode"
                          className={`w-full p-2 text-black ${error ? "border-2 border-red-400" : ""} bg-gray-200 rounded-lg`}
                        />
                        <button className="absolute top-2 right-2 text-black/70" onClick={() => setShow(!show)} type="button">
                            { show ? (
                                <Eye className="cursor-pointer" />
                            ) : (
                                <EyeOff className="cursor-pointer" />
                            )
                            }
                        </button>
                        <button
                          type="submit"
                          className="w-full my-4 text-[#ededed] cursor-pointer border border-white/50 bg-[linear-gradient(to_right,#D38312,#A83279)] p-2 rounded-xl text-lg font-medium flex items-center justify-center gap-2.5"
                        >
                          <LockOpen className="w-5 h-5" />Unlock My Heart
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    return children;
}