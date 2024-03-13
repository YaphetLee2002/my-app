import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";

const Title = () => {
    return (
        <div className="absolute w-full top-32">
            <div className="flex flex-col justify-center items-center">
                <div className="justify-center z-50">
                    <div
                        className="relative  text-center drop-shadow-lg text-indigo-50 font-extrabold font-serif select-none pointer-events-none animate-fade-in-slide-down"
                        style={{fontSize: '2.5vw'}}
                    >
                        <Separator/>
                        <p>DREAM FACTORY</p>
                        <Separator/>
                    </div>
                </div>

                <div className="justify-end z-50">
                    <div
                        className="relative font-serif  drop-shadow-lg text-indigo-50 select-none pointer-events-none animate-fade-in-slide-down"
                        style={{fontSize: '0.8vw'}}
                    >
                        <p>—Building your own movie company</p>
                        <br/>
                    </div>
                </div>
                <div className="justify-center z-50 w-1/4 mx-auto">
                    <div
                        className="relative font-serif  text-center drop-shadow-lg text-indigo-50 text-balance select-none pointer-events-none animate-fade-in-slide-down"
                        style={{fontSize: '1.1vw'}}
                    >
                        <p>DreamFactory is an automatic framework for multi scene long video synthesis. It is also a
                            company
                            based on Collaborative LLM-GPTs-based Agents.</p>
                    </div>
                </div>
                <div className="justify-center z-50">
                    <div
                        className="relative  font-extrabold font-mono text-center drop-shadow-lg text-indigo-50 select-none pointer-events-none animate-fade-in-slide-down"
                        style={{fontSize: '1.3vw'}}
                    >
                        <p>Customize your own company now!</p>
                    </div>
                </div>
                <div className="sticky justify-center z-50">
                    <div
                        className="relative font-light font-serif  text-center drop-shadow-lg text-indigo-50 select-none pointer-events-none animate-fade-in-slide-down"
                        style={{fontSize: '0.7vw'}}
                    >
                        <p>All videos on this page were generated directly by Sora without modification.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Title;

