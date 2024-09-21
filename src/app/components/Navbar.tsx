'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Discord from '../assets/discord.svg'
import Logo from '../assets/wager.svg'
import Telegram from '../assets/telegram.svg'
import IconButton from './Button'
import { DotGothic16 } from 'next/font/google'

const dg16 = DotGothic16({ subsets: ['latin'], weight: ['400'] })
type NavbarProps = {
  isHome?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ isHome = false }) => {
  const pathname = usePathname()

  return (
    <nav
      className={`z-10 flex items-center justify-between bg-transparent px-6 lg:px-16 ${
        isHome ? 'py-6' : 'py-3'
      }`}
    >
      <div className='flex items-center space-x-4'>
        <Link
          href='/'
          className='text-2xl font-bold text-teal-400 min-w-[60px] md:min-w-[130px]'
        >
          <Image src={Logo} height={32} width={130} alt='the wager logo' />
        </Link>
        <IconButton
          icon={Discord}
          title='Discord'
          href='#'
          classes='hidden md:inline-flex '
        />
        <IconButton
          icon={Telegram}
          title='Telegram'
          href='#'
          classes='hidden md:inline-flex '
        />
      </div>
    </nav>
  )
}

export default Navbar
