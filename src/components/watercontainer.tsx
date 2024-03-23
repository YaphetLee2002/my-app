"use client";

import Waterfall, {waterfallItem} from "@/components/Waterfall";
import {useRef} from "react";


export function WaterFall() {
    const scrollRef = useRef<HTMLDivElement>(null);

    /**测试的列表数据 */
    interface item extends waterfallItem {
        /**图片路径 */
        src: string;
        /**图片描述 */
        text: string;
    }

    const getList = () => {
        const newList: item[] = [
            {
                src: "/output/cat_and_boy/photos/DALL·E 2024-02-29 19.41.00 - Create a highly detailed image of a small white kitten standing on an icy surface looking towards the camera. The image should have a complementary co.webp",
                text: "测试文字",
                scale: 1,
            },
            {
                src: "/output/cat_and_boy/photos/DALL·E 2024-02-29 19.41.19 - A white kitten is walking towards the young boy from Iceland who is fishing on the frozen lake surface. The scene includes soft lighting and sharp det.webp",
                text: "测试文字2",
                scale: 1,
            },
            {
                src: "/output/cat_and_boy/photos/DALL·E 2024-02-29 19.47.18 - A young boy from Iceland is giving a small fish to the white kitten by the frozen lake. The image should capture the moment the boy extends the fish t.webp",
                text: "测试文字3",
                scale: 1,
            },
            {
                src: "/output/cat_and_boy/photos/DALL·E 2024-02-29 20.10.47 - A young boy in a cozy brown jacket is tenderly holding a fluffy white kitten in his arms. They are on a beach with soft lighting enhancing the warm an.webp",
                text: "测试文字4",
                scale: 1,
            },
            {
                src: "/output/desert/1.png",
                text: "测试文字5",
                scale: 1,
            },
            {
                src: "/output/desert/2.png",
                text: "测试文字6",
                scale: 16 / 9,
            },
            {
                src: "/output/desert/3.png",
                text: "测试文字7",
                scale: 16 / 9,
            },
            {
                src: "/output/desert/4.png",
                text: "测试文字8",
                scale: 1,
            },
            {
                src: "/output/desert/5.png",
                text: "测试文字9",
                scale: 1,
            },
            {
                src: "/output/desert/6.png",
                text: "测试文字10",
                scale: 16 / 9,
            },
            {
                src: "/output/desert/7.png",
                text: "测试文字11",
                scale: 16 / 9,
            },
            {
                src: "/output/girl/1.png",
                text: "测试文字12",
                scale: 9 / 16,
            },
            {
                src: "/output/girl/2.png",
                text: "测试文字13",
                scale: 9 / 16,
            },
            {
                src: "/output/girl/3.png",
                text: "测试文字14",
                scale: 9 / 16,
            },
            {
                src: "/output/girl/4.png",
                text: "测试文字15",
                scale: 9 / 16,
            },
            {
                src: "/output/girl/5.png",
                text: "测试文字16",
                scale: 9 / 16,
            },
            {
                src: "/output/girl/6.png",
                text: "测试文字17",
                scale: 9 / 16,
            },
        ];
        //使用定时器模拟HTTP请求，延时1s返回数据
        return new Promise<item[]>((resolve) => setTimeout(() => resolve(newList), 1000));
    };
    return (
        <main style={{width: "100vw", height: "100vh", overflow: "auto"}} ref={scrollRef}>
            <div className="flex justify-center text-center mt-20 mb-10 font-serif" style={{fontSize: "5vw"}}>
                <div className="font-semibold">
                    ｜
                </div>
                <div>
                    GALLERY
                </div>
                <div className="font-semibold">
                    ｜
                </div>
            </div>
            <Waterfall
                scrollRef={scrollRef}
                getList={getList}
                cols={4}
                marginX={3}
                itemRender={(item, i) => {
                    return (
                        <div key={i} style={{padding: "3px"}}>
                            <img src={item.src} width={"100%"}/>
                            {/*<div>{item.text}</div>*/}
                        </div>
                    );
                }}
            />
        </main>
    );
}

export default WaterFall;
