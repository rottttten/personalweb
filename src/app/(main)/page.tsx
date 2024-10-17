import React from 'react';
import PageContainer from "@mae/components/layout/PageContainer";
import Introduction from "@mae/components/frontpageBlocks/Introduction";
import {
    ToolBoxicon,
} from "@mae/components/frontpageBlocks/Tool";
import FrontpageSideblocks from "@mae/components/frontpageBlocks/FrontpageSideblocks";
import Link from "next/link";
import Button from "@mae/components/Button";
import HorizSeperator from "@mae/components/HorizSeperator";
import WebBadge from "@mae/components/WebBadge";
import Tool from '@mae/components/frontpageBlocks/Tool'
import Image from "next/image";
import Script from 'next/script'

export default function Home() {
    return (
        <div className="flex flex-row justify-center gap-2 lg:gap-8 lg:px-8 transition-all">
            <PageContainer>
                <Introduction />

                {/* sideblocks mobile */}
                <div className="max-[670px]:block hidden">
                    <FrontpageSideblocks />
                </div>
                <HorizSeperator />

                {/* backstory */}
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="block">
                        <Image
                            src="/assets/IronException_2b2t_Spawn_Render_June_2019.png"
                            width={1500}
                            height={500}
                            className="rounded-sm"
                            alt="_"
                            unoptimized={true}
                            style={{
                                boxShadow: "0px 2px 32px 8px rgb(166, 227, 161, 0.2)",
                                imageRendering: "pixelated"
                            }}
                        />
                    </div>
                    <div className="space-y-4 h-full">
                        <h2 className="text-2xl font-semibold">hi i am rotten</h2>
                        <p className="leading-6">
                            i mostly play 2b2t (a minecraft server).
                            <br />
                            <br />
                            if you would like to contact me please visit my <Link href="/contact" className="font-bold text-ctp-green">contact page</Link>.
                        </p>
                        <div className="mt-auto w-fit">
                        </div>
                    </div>
                </div>
                <HorizSeperator />


                <div className="flex justify-center flex-wrap gap-2">
                    <WebBadge href="https://venroy.moe" src="/assets/buttons/friends/venroy.png" alt="venroy" />
                    <WebBadge href="https://mrbruh.com" src="/assets/buttons/friends/mrbruh.png" alt="mrbruh" />
                    <WebBadge href="https://odpay.net/" src="/assets/buttons/friends/odpay.gif" alt="odpay" />

                </div>

                <HorizSeperator />
            </PageContainer>

            {/* sideblocks desktop */}
            <div className="min-[670px]:block hidden lg:mr-0 mr-4">
                <FrontpageSideblocks />
            </div>
        </div>
    );
}
