'use client';
import SideblockWrapper from "@mae/components/frontpageBlocks/SideblockWrapper"
import dynamic from 'next/dynamic';
import { FakeAdPlaceholder } from '@mae/components/frontpageBlocks/sideblocks/FakeAd';

import SideBlock from '@mae/components/frontpageBlocks/SideBlock';
import LanyardBlock from '@mae/components/frontpageBlocks/sideblocks/LanyardBlock';
import SocialSpeeddialBlock from '@mae/components/frontpageBlocks/sideblocks/SocialSpeeddialBlock';
import ClockBlock from '@mae/components/frontpageBlocks/sideblocks/ClockBlock';
import LatestReleaseBlock from '@mae/components/frontpageBlocks/sideblocks/LatestReleaseBlock';
import { useEffect } from "react";

import { fakeAdHideCountState } from '@mae/store/fakeAdHideCount';
import { useRecoilState } from 'recoil';

const FakeAdBlock = dynamic(() => import('@mae/components/frontpageBlocks/sideblocks/FakeAd'), { 
  ssr: false, 
  loading: () => <FakeAdPlaceholder/>
})
const MaesweeperGameBlock = dynamic(() => import('@mae/components/games/Maesweeper'))

export default function FrontpageSideblocks() {
  const [hideCount, setHideCount] = useRecoilState(fakeAdHideCountState);

  if(hideCount >= 6) {
    return (
      <SideblockWrapper>
        { /* TODO uncomment when done */}
        {/* <MaesweeperGameBlock/> */}
        <FakeAdBlock/>
      </SideblockWrapper>
    )
  }

  return (
    <SideblockWrapper>
      <ClockBlock />

      {/* 
        lanyard block is specifically at the bottom
        so that it wont disrupt the ux flow of the blocks above it which are interactive
      */}

      <FakeAdBlock/>
    </SideblockWrapper>
  )
}