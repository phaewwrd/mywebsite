import Image from 'next/image'
import React from 'react'

export default function Phone3D() {
  return (
    <div className='flex justify-center '>
       <div className='animate-marquee-phone transition-all'>
        <Image src="/phone.png" alt="3D Phone" width={300} height={500} className=" " />
       </div>
        {/* <div className='relative'> */}
        <Image src="/phone-bg.png" alt="3D Phone" width={250} height={500} className=" absolute w-80 bottom-20 right-70 -z-10" />
        {/* </div> */}
        
    </div>
  )
}
