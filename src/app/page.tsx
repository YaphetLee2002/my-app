import {Button} from "@/components/ui/button";
import Image from "next/image";
import Topbar from "@/components/topbar";

export default function Home() {
    return (
        <div>
            <Topbar/>
            <div className="flex items-center justify-center h-screen absolute top-0">
                <div className="w-1/4 h-screen relative hover-img">
                    <Image className="w-full h-full object-cover brightness-50 hover:brightness-90 transition-all"
                           src="/img1.jpg" alt="pic1" width={1000} height={1000}/>
                </div>
                <div className="w-1/4 h-screen relative hover-img">
                    <Image className="w-full h-full object-cover brightness-50 hover:brightness-90 transition-all"
                           src="/img2.jpg" alt="pic2" width={1000} height={1000}/>
                </div>
                <div className="w-1/4 h-screen relative hover-img">
                    <Image className="w-full h-full object-cover brightness-50 hover:brightness-90 transition-all"
                           src="/img3.jpg" alt="pic3" width={1000} height={1000}/>
                </div>
                <div className="w-1/4 h-screen relative hover-img">
                    <Image className="w-full h-full object-cover brightness-50 hover:brightness-90 transition-all"
                           src="/img4.webp" alt="pic4" width={1000} height={1000}/>
                </div>
            </div>
            <div className="relative top-32 text-center drop-shadow-lg text-indigo-50 text-7xl  font-extrabold">
                <p>DreamFactory</p>
            </div>
            <div className="relative top-64 text-center drop-shadow-lg text-indigo-50 text-3xl">
                <p>a automatic framework for long-video generation</p>
            </div>
        </div>

    );
}
