import { Cards } from "@/components/Cards";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import QuickSelection from "@/components/QuickSelection";
import Testimonials from "@/components/Testimonials";
import {TTSForm} from "@/components/TTS/TTSForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <Hero/>
      <TTSForm/>
      <QuickSelection/>
      <Cards/>
      <Testimonials />
      <Faq/>
      <div className="w-full flex justify-center items-center p-5">
        <p className="text-white">@copyrights speakify</p>
      </div>
    </div>
  );
}
