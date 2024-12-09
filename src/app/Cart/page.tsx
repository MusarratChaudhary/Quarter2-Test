import React from 'react'
import Image from 'next/image'
import img1 from '../Shop/img1.png'

import logoImg from './logoImg.png'
import arrowImg from './arrowImg.png'

function page() {
  return (
    <div className='conatiner mx-auto h-[1796px] w-[1440px]'>
        <div className="">
            <Image src={img1} alt='Image'/>

            <div className='ml-96 -mt-[600px]'>
               <Image src={logoImg} alt='Meubel House'/>
               <h1>Cart</h1>
               <h2>Home<Image src={arrowImg} alt='Arrow'/><h3>Cart</h3></h2>
            </div>
        </div>
    </div>
  )
}

export default page