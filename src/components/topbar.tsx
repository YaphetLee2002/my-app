import Image from "next/image";
import {Button} from "@/components/ui/button";

const Topbar = () => {
    return (
        <div
            className="h-16 sticky top-0 z-50 w-full">
            <div className="flex items-center pl-4 py-2 pr-4 container">
                <Image src="/tsinghua.png" alt="Logo" width={40} height={40} priority/>
                <div className="items-center justify-center ml-auto">
                    <Button className="text-indigo-500 bg-indigo-50 hover:bg-indigo-100">Contact Us</Button>
                </div>
            </div>
        </div>
    );
}

export default Topbar;

