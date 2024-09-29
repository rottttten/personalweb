import PageContainer from '@mae/components/layout/PageContainer'
import PageHeader from '@mae/components/layout/PageHeader'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import anime from 'animejs';
import { Metadata } from 'next';
import { StringLiteral } from 'typescript';

export const metadata: Metadata = {
  title: 'rotten.cc',
  description: 'info on how and where to contact me'
}

export default function page() {
  return (
    <PageContainer>
      <PageHeader title="📱 contact">
        wanna talk? send me an email or dm me on any platform below
      </PageHeader>

      <div>
        please <b className="text-red-300">do not</b> contact me regarding:
        <ul className="list-disc list-inside">
          <li>collaborations</li>
          <li>advertisement</li>
        </ul>
      </div>

      <div className='flex justify-between flex-wrap space-y-4 sm:space-y-0'>
        <div className='flex flex-col'>
          <h3 className='font-semibold'>preferred</h3>
          <ContactLink text='_roootten' icon='bxl-discord-alt' className='text-ctp-green'
            link="https://discord.com/users/719047648568672258"/>
        </div>

        <div className='flex flex-col'>
          <h3 className='font-semibold'>less likely to answer</h3>
          <ContactLink text='rotten' icon='bxl-steam' className='text-ctp-teal'
            link="https://steamcommunity.com/id/online_harassment/"/>
        </div>

        

      </div>
    </PageContainer>
  );
}

function ContactLink({text, className, icon, link}: {text: string; className?: string; icon: string; link: string;}) {
  return (
    <Link
      href={link}
      className={'space-x-1 ' + className}
    >
      <i className={'bx bx-sm align-bottom ' + icon}></i>
      <span>{text}</span>
    </Link>
  )
}
