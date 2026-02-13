import { ReactLenis } from "lenis/react"
import PasscodeGate from "./ui/passcodeGate";
import Hero from "./ui/hero";
import ClientWrapper from "./wrapper/clientWrapper";
import FloatingHearts from "./ui/floatingHearts";
import Gallery from "./ui/gallery";
import Reasons from "./ui/reason";
import Letter from "./ui/letter";
import SendKiss from "./ui/sendKiss";
import AudioWaveButton from "./ui/audioButton";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <>
        <ClientWrapper>
          <PasscodeGate>
            <ReactLenis root>
              <Hero />
              <FloatingHearts />
              <AudioWaveButton />
              <Gallery />
              <Reasons />
              <Letter />
              <SendKiss />
              <Footer />
            </ReactLenis>
          </PasscodeGate>
        </ClientWrapper>
    </>
  );
}
