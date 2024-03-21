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
                src: "https://p2.music.126.net/va9D07KDeS1ovOYAsoXE9A==/7929677859630995.jpg",
                text: "测试文字",
                scale: 1,
            },
            {
                src: "https://ts1.cn.mm.bing.net/th/id/R-C.b0ea268fa1be279d112489ce83ad4696?rik=qItsh%2fBiy33hlg&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140303%2f1-140303215009.jpg&ehk=S6PLWamt%2bMzQV8uO9ugcU5d5M19BpXtCpNz2cRJ7q9M%3d&risl=&pid=ImgRaw&r=0",
                text: "测试文字2",
                scale: 572 / 982,
            },
            {
                src: "https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg",
                text: "测试文字3",
                scale: 581 / 434,
            },
            {
                src: "https://ts1.cn.mm.bing.net/th/id/R-C.5245459c4835900f30183bebecb3cb55?rik=koS%2bxytGvrBRHw&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0723%2fsdidjj4.jpg&ehk=WJLRakwfHBZS2aO2sK%2bCdh4ijkXwyYijy5Z2BFUdnz4%3d&risl=&pid=ImgRaw&r=0",
                text: "测试文字4",
                scale: 575 / 356,
            },
            {
                src: "https://ts1.cn.mm.bing.net/th/id/R-C.f40ba86561918519b95431a5921e4f5d?rik=9AIbo9AhOYel0w&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f131210%2f1-131210210248.jpg&ehk=v81JiWKphT%2baLBzbhrxRkTUUwwnhJ5F2PFkm4xn4nEM%3d&risl=&pid=ImgRaw&r=0",
                text: "测试文字5",
                scale: 578 / 327,
            },
            {
                src: "https://ts1.cn.mm.bing.net/th/id/R-C.0dee2228031e4ef5b03d0c5734aef866?rik=BD%2bnjbFbllVmEQ&riu=http%3a%2f%2fimg.zcool.cn%2fcommunity%2f01cf02554336f10000019ae9df1dad.jpg%403000w_1l_2o_100sh.jpg&ehk=zvcYgjHlqK2U2x9ploUbmiBIk7BewUd6lyA0AIswegQ%3d&risl=&pid=ImgRaw&r=0",
                text: "测试文字6",
                scale: 581 / 868,
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
