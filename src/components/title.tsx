import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import ProfileForm from "@/components/textareaform";
import Link from "next/link";

const Title = () => {
    return (
        <div>
            <Link href="/" className="z-50 fixed top-4 left-4 flex items-center">
                <Image src="/Tsinghua_University_Logo.svg" alt="Logo" width={70} height={70} priority/>
                <Image src="/University_of_Luxembourg.svg" alt="github" width={70} height={70} className="ml-8"/>
            </Link>
            <div className="z-50 fixed top-4 right-6 flex items-center justify-center mt-2">
                <a href="#" className="flex items-center justify-center mr-8">
                    <div className="text-white underline">
                        Paper Link↗︎
                    </div>
                    <Image src="/paper.svg" alt="contact" width={20} height={20} priority style={{margin: '5px'}}/>
                </a>
                <Link href="/about" className="flex items-center justify-center mr-8">
                    <div className="text-white underline">
                        About Us↗︎
                    </div>
                    <Image src="/about.svg" alt="contact" width={20} height={20} priority style={{margin: '5px'}}/>
                </Link>
                <a href="https://github.com/dreamfactory24/DreamFactory"
                   className="flex items-center justify-center mr-8">
                    <div className="text-white underline">
                        Github Page↗︎
                    </div>
                    <Image src="/github.svg" alt="contact" width={20} height={20} priority style={{margin: '5px'}}/>
                </a>
                <ProfileForm/>
            </div>
        </div>

    )
        ;
}

export default Title;

