import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import ProfileForm from "@/components/textareaform";

const Band = () => {
    return (

        <div className="absolute w-full top-64">
            <div className="flex flex-col justify-center items-center z-50">
                <div className="justify-center z-50" style={{
                    pointerEvents: "none",
                    userSelect: "none",
                }}>
                    <img src="/title.png" alt="title" width={500}/>
                </div>
            </div>
        </div>
    );
}

export default Band;

