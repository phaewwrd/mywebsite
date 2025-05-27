'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {Leaf} from '@/components/background/Leaf'
import {Stars} from '@/components/background/Stars'
import Fog from './Fog'

export default function BackGroundImg() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen ">
    <Stars/>
    <Fog/>
    <Leaf />
         <div className="w-full absolute bottom-0">
        <Image
          src={isMobile ? '/bg-mobile.png' : '/bg.png'}
          alt="background"
          width={1440}
          height={1200}
          className=""
        />
      </div>
    </div>
  )
}
