'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Discord from '../assets/discord.svg'
import Logo from '../assets/wager.svg'
import Telegram from '../assets/telegram.svg'
import IconButton from './Button'


type NavbarProps = {
  isHome?: boolean
}

const Navbar: React.FC<NavbarProps> = () => {


  return (
    <nav
      className={`z-10 flex items-center justify-between bg-transparent px-6 lg:px-16 py-6`}
    >
      <div>
        <Link
          href='/'
          className='text-2xl font-bold text-teal-400 min-w-[60px] md:min-w-[130px]'
        >
          <Image src={Logo} height={32} width={130} alt='the wager logo' />
        </Link>
      </div>
      <div>
        <IconButton
          icon={Discord}
          title='Discord'
          href='#'
          classes='hidden md:inline-flex mr-4'
        />
        <IconButton
          icon={Telegram}
          title='Telegram'
          href='#'
          classes='hidden md:inline-flex mr-6'
        />
      </div>
    </nav>
  )
}

export default Navbar
