import {Button} from "@/components/ui/button";
import Image from "next/image";
import Title from "@/components/title";
import {Separator} from "@/components/ui/separator";
import {Card, CardContent} from "@/components/ui/card";
import ScrollOpacity from "@/components/scrollopacity.client";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Videoplay from "@/components/videoplay";

export default function Home() {
    return (
        <div className="bg-black">
            <Title/>
            <div className="z-50 fixed top-4 left-4">
                <Image src="/tsinghua.png" alt="Logo" width={40} height={40} priority/>
            </div>
            <div className="z-50 fixed top-4 right-4 flex items-center justify-center">
                <Button className="text-indigo-500 bg-indigo-50 hover:bg-indigo-100">Contact Us</Button>
            </div>
            <div className="flex items-center justify-center h-screen ">
                <div className="w-1/4 h-screen relative hover-img z-0">
                    <Image className="w-full h-full object-cover brightness-50 hover:brightness-90 transition-all"
                           src="/img1.jpg" alt="pic1" width={1000} height={1000}/>
                </div>
                <div className="w-1/4 h-screen relative hover-img z-0">
                    <Image className="w-full h-full object-cover brightness-50 hover:brightness-90 transition-all"
                           src="/img2.jpg" alt="pic2" width={1000} height={1000}/>
                </div>
                <div className="w-1/4 h-screen relative hover-img z-0">
                    <Image className="w-full h-full object-cover brightness-50 hover:brightness-90 transition-all"
                           src="/img3.jpg" alt="pic3" width={1000} height={1000}/>
                </div>
                <div className="w-1/4 h-screen relative hover-img z-0">
                    <Image className="w-full h-full object-cover brightness-50 hover:brightness-90 transition-all"
                           src="/img4.webp" alt="pic4" width={1000} height={1000}/>
                </div>
            </div>
            <br/>

            <div className="relative">
                <img src="/bg1.webp" alt="bg1" className="w-full h-auto"/>
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
