import Image from 'next/image'

export default function Phone3D() {
  return (
    <div className='flex justify-center '>
       <div className='animate-marquee-phone transition-all'>
        <Image src="/phone.png" alt="phone" width={300} height={500} className="w-60 xl:w-80" />
       </div>
        <Image src="/phone-bg.png" alt="phone-bg" width={250} height={500} className="absolute xl:w-80 w-60 bottom-80 md:right-60 xl:right-60 2xl:right-130 -z-10" />
        
    </div>
  )
}
