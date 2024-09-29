import dayjs from 'dayjs'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex justify-center z-10 sticky'>
      <div className='w-full p-8 border-0 shadow-ctp-mantle bg-ctp-base flex justify-center'
      style={{
        boxShadow: "0px 0px 32px 8px var(--tw-shadow-color)",
      }}>
        <div className='mx-8 max-w-[1024px] w-full text-sm flex flex-col-reverse gap-4 sm:flex-row'>
          <div className='flex flex-col w-1/3'>
            <h4 className='font-bold text-2xl'></h4>
            <p className='text-xs'>
              ©️ 2018-{dayjs().year()} rotten.cc
            </p>
            <p>
          rotten
            </p>
            <Link href="/privacy" className='text-ctp-green'>
                privacy
            </Link>
          </div>
          <div className='flex gap-16 sm:justify-end w-full'>
            <div className='flex flex-col'>
              <h3 className='font-semibold text-lg'>About</h3>
              <Link href="/" className='text-ctp-green'>
                Home
              </Link>
              <Link href="/contact" className='text-ctp-green'>
                Contact
              </Link>
            </div>
            <div className='flex flex-col'>
            </div>
            <div className='flex flex-col'>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
