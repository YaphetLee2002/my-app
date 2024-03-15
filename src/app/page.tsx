import Image from "next/image";
import Title from "@/components/title";
import {Card, CardContent} from "@/components/ui/card";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Videoplay from "@/components/videoplay";
import ProfileForm from "@/components/textareaform";
import {Separator} from "@/components/ui/separator";


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
                <a href="#" className="flex items-center justify-center mr-8">
                    <div className="text-white underline">
                        Github Page↗︎
                    </div>
                    <Image src="/github.svg" alt="contact" width={20} height={20} priority style={{margin: '5px'}}/>
                </a>
                <ProfileForm/>

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
            <div className="text-indigo-50 font-mono ml-48 mr-48"
                 style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className="image-container-bottom" style={{position: 'relative'}}>
                    <Image src="/icon-bg.png" alt="icon" className="brightness-75" width={3000} height={3000}
                           style={{objectFit: 'cover'}}/>
                    <div className="animate-fade-in-slide-down" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        fontSize: '1.2vw',
                    }}>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <div>
                                <Separator className="h-[7px]"/>
                                <p className="text-left font-serif font-extrabold" style={{
                                    fontSize: '2vw',
                                }}>
                                    The Idea of DreamFactory
                                </p>
                                <Separator className="h-[3px]"/>
                            </div>
                        </div>


                        <br/>
                        <p className="text-left">
                            &nbsp;&nbsp;The DreamFactory framework is a cutting-edge multi-agent system designed to
                            generate
                            multi-scene videos. This innovative framework leverages the collaborative efforts of
                            multiple agents, each specialized in different aspects of video production, such as
                            scripting, animation, sound design, and scene transition, to create complex and coherent
                            video narratives.
                        </p>
                        <br/>

                        <p className="text-left">
                            &nbsp;&nbsp;At its core, DreamFactory utilizes a decentralized approach where each agent
                            operates
                            semi-autonomously, contributing its expertise to various segments of the video. This
                            multi-agent collaboration ensures that each scene is crafted with attention to detail,
                            ensuring consistency in style, narrative flow, and thematic elements across different
                            scenes.
                        </p>
                        <br/>

                        <p className="text-left">
                            &nbsp;&nbsp;Overall, working with DreamFactory is akin to having a team of employees in a
                            company
                            working together. Each agent, like an individual employee, contributes their unique skills
                            and expertise towards achieving a common goal, collaborating and coordinating their efforts
                            in a way that enhances the overall performance and outcome of the team.
                        </p>
                    </div>
                </div>
                <br/>
            </div>
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
