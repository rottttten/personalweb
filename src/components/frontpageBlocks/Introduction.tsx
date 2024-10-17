'use client'
import Image from 'next/image'
import Link from 'next/link';
import { Tooltip } from 'react-tooltip'
import { useLayoutEffect } from 'react';
import Chip from '../Chip';

import anime from 'animejs/lib/anime.es';

export default function Introduction() {
  useLayoutEffect(() => {
    anime({
      targets: '[data-anim="initslide"]',
      opacity: [0, 1],
      duration: 1000,
      translateX: [-6, 0],
      delay: anime.stagger(50)
    })

    anime.timeline({
      targets: '[data-anim="goober"]',
      delay: anime.stagger(20)
    })
    .add({
      translateY: [-5, 5],
      rotateX: [-2, 0],
      easing: "easeInExpo",
      opacity: [0, 1],
      duration: 200
    })
    .add({
      scaleY: 1,
      scaleX: 1,
      translateY: 0,
      easing: "easeOutExpo",
      duration: 200
    })

    anime({
      targets: '[data-anim="tags"] div',
      translateY: [-20, 0],
      easing: "easeOutExpo",
      opacity: [0, 1],
      delay: anime.stagger(200)
    })
  })
  return (
    <div className='flex flex-col my-16'>
      <div className='relative'>
        <div className='absolute left-1/2 -translate-x-1/2 w-1/3 h-24 bg-ctp-green blur-3xl opacity-80 -z-10'/>
      </div>
      <h1 className='text-6xl font-bold tracking-tight text-center' data-anim="goober">
        <span className='inline-block mr-4'>
        </span>
        hi! i'm rotten
      </h1>
      
      <div className='flex justify-center gap-2 mt-4' data-anim="tags">
        <Chip text='🇰🇵 en-kr' hideDot={true} className='bg-ctp-surface0 text-ctp-text select-none shadow-xl'></Chip>
      </div>
    </div>
  )
}
