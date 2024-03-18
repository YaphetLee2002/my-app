import Image from "next/image";
import Title from "@/components/title";
import {Card, CardContent} from "@/components/ui/card";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Videoplay from "@/components/videoplay";
import ProfileForm from "@/components/textareaform";
import {Separator} from "@/components/ui/separator";
import DropdownMenuRadioGroupButton from "@/components/language-choose";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function Home() {

    return (
        <div className="bg-black">
            <Title/>
            <div className="z-50 fixed top-4 left-4 flex items-center">
                <Image src="/Tsinghua_University_Logo.svg" alt="Logo" width={70} height={70} priority/>
                <Image src="/University_of_Luxembourg.svg" alt="github" width={70} height={70} className="ml-8"/>
            </div>
            <div className="z-50 fixed top-4 right-6 flex items-center justify-center mt-2">
                <a href="#" className="flex items-center justify-center mr-8">
                    <div className="text-white underline">
                        Paper Link↗︎
                    </div>
                    <Image src="/paper.svg" alt="contact" width={20} height={20} priority style={{margin: '5px'}}/>
                </a>
                <a href="#about" className="flex items-center justify-center mr-8">
                    <div className="text-white underline">
                        About Us↗︎
                    </div>
                    <Image src="/about.svg" alt="contact" width={20} height={20} priority style={{margin: '5px'}}/>
                </a>
                <a href="https://github.com/dreamfactory24/DreamFactory"
                   className="flex items-center justify-center mr-8">
                    <div className="text-white underline">
                        Github Page↗︎
                    </div>
                    <Image src="/github.svg" alt="contact" width={20} height={20} priority style={{margin: '5px'}}/>
                </a>
                <ProfileForm/>
                {/*<DropdownMenuRadioGroupButton/>*/}

            </div>
            <div className="flex items-center justify-center h-screen ">
                <div className="w-1/4 h-screen relative hover-img z-0">
                    <Image className="w-full h-full object-cover brightness-75 hover:brightness-125 transition-all"
                           src="/img4.jpg" alt="pic1" width={1000} height={1000}/>
                </div>
                <div className="w-1/4 h-screen relative hover-img z-0">
                    <Image className="w-full h-full object-cover brightness-50 hover:brightness-90 transition-all"
                           src="/img2.jpg" alt="pic2" width={1000} height={1000}/>
                </div>
                <div className="w-1/4 h-screen relative hover-img z-0">
                    <Image className="w-full h-full object-cover brightness-50 hover:brightness-90 transition-all"
                           src="/img3.webp" alt="pic3" width={1000} height={1000}/>
                </div>
                <div className="w-1/4 h-screen relative hover-img z-0">
                    <Image className="w-full h-full object-cover brightness-50 hover:brightness-90 transition-all"
                           src="/img1.jpg" alt="pic4" width={1000} height={1000}/>
                </div>
            </div>
            <br/>
            <br/>
            <a id="about"></a>
            <div className="relative flex justify-center items-center">
                <img src="/bg3.png"/>
                <div className="absolute top-32 left-32 font-serif justify-center items-center drop-shadow-2xl flex">
                    <div className="text-white font-bold" style={{fontSize: '4vw'}}>|</div>
                    <div className="text-white" style={{fontSize: '4vw', marginLeft: '-0.7vw'}}>|</div>
                    <div className="text-white" style={{fontSize: '3vw', marginLeft: '-0.5vw'}}>&nbsp;Idea of
                        DreamFactory
                    </div>
                </div>

                <div className="w-2/3 absolute text-center justify-center items-center flex">
                    <div className="w-1/3">
                        <div className=" text-white font-serif" style={{fontSize: '2.5vw'}}>|Automatic|</div>
                        <div className=" text-white font-serif" style={{fontSize: '1.6vw'}}>&quot;Your idea, a click
                            away from the full film&quot;
                        </div>
                    </div>
                    <div className="m-10 w-1/3">
                        <div className=" text-white font-serif drop-shadow-2xl" style={{fontSize: '2.5vw'}}>|Powerful|
                        </div>
                        <div className=" text-white font-serif" style={{fontSize: '1.6vw'}}>&quot;Top-tier film crew
                            configuration, professional, flawless&quot;
                        </div>
                    </div>
                    <div className=" w-1/3">
                        <div className=" text-white font-serif drop-shadow-2xl"
                             style={{fontSize: '2.5vw'}}>|Practical|
                        </div>
                        <div className=" text-white font-serif" style={{fontSize: '1.6vw'}}>&quot;Available anytime,
                            anywhere, averaging 20s per scene.&quot;
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <br/>

            <div className="relative flex-col">
                <div className="mb-16 w-full text-center">
                    <div className=" text-white font-serif" style={{fontSize: '1.7vw'}}>
                        AGI assists you in everything, conceiving interesting plots, designing aesthetic shots, and
                        creating diverse characters.
                    </div>
                </div>

                <div className="ml-32 mr-32 text-center justify-center items-center flex">
                    <div className="w-1/2">
                        <Image src="/round1.png" alt="round1" style={{margin: '0 auto'}} width={500} height={500}/>
                        <br/>
                        <div className="text-white font-serif mt-5" style={{fontSize: '1.6vw'}}>
                            I. Role Definition
                        </div>
                        <div className="text-white font-mono mt-5" style={{fontSize: '1.6vw'}}>
                            You are a director!
                        </div>
                    </div>
                    <div className="m-10 w-1/8">
                        <Image src="/arrow1.png" alt="arrow1" width={200} height={200}/>
                    </div>
                    <div className="m-10 w-1/2">
                        <div className="text-white font-serif mb-5" style={{fontSize: '1.6vw'}}>
                            II. Role Playing
                        </div>
                        <div className="text-white font-mono mb-5" style={{fontSize: '1.6vw'}}>
                            3 2 1 Action!
                        </div>
                        <Image src="/round2.png" alt="round2" style={{margin: '0 auto'}} width={350} height={350}/>
                    </div>
                    <div className="m-10 w-1/8">
                        <Image src="/arrow2.png" alt="arrow2" width={200} height={200}/>
                    </div>
                    <div className=" w-1/2">
                        <Image src="/round3.png" alt="round3" style={{margin: '0 auto'}} width={500} height={500}/>
                        <br/>
                        <div className="text-white font-serif mt-5" style={{fontSize: '1.6vw'}}>
                            III. Movies Done !
                        </div>
                    </div>
                </div>

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="relative">
                <div className="image-container-top">
                    <img src="/bg1.webp" alt="bg1" className="w-full h-auto"/>
                </div>
                <div className="absolute-center1 text-center justify-center items-center">
                    <img src="/bg2.png" alt="bg2"/>
                    <div className="absolute-center2 text-center justify-center items-center">

                        <Carousel className="w-full">
                            <CarouselContent>
                                <CarouselItem key={1}>
                                    <div className="p-1">
                                        <Card className="bg-black border-0 bg-opacity-60 ">
                                            <CardContent className="flex aspect-[16/9] items-center justify-center p-6">
                                                <Videoplay/>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>

                                <CarouselItem key={2}>
                                    <div className="p-1">
                                        <Card className="bg-black border-0 bg-opacity-60 ">
                                            <CardContent className="flex aspect-[16/9] items-center justify-center p-6">
                                                <Videoplay/>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious/>
                            <CarouselNext/>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>


    );
}
