"use client"
import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

const LoadingScreen = dynamic(() => import("../ui/loadingScreen"), {
  ssr: false
});

export default function ClientWrapper({children} : PropsWithChildren) {
    return (
        <LoadingScreen>
            {children}
        </LoadingScreen>
    )
}