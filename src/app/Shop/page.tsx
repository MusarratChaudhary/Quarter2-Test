import React from 'react'
import Image from 'next/image'
import img1 from './img1.png'
import filterimg from './filterimg.png'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
import pic4 from './pic4.png'
import pic5 from './pic5.png'
import logoImg from '../Cart/logoImg.png'
import arrowImg from '../Cart/arrowImg.png'


function page() {
  return (
    <div className='container mx-auto h-[3320px] w-[1440px]'>
        <div className='h-[316px] w-[1440px]'>
          <Image src={img1} alt='Image'/>
          <Image className='ml-[700px] -mt-[250px] h-20 w-20' src={logoImg} alt='Logo'/>
        <h1 className='ml-[688px] -mt-2 text-5xl font-semibold'>Shop</h1>
        <h2 className='ml-[699px] text-sm flex tracking-tight mt-2'>Home<Image src={arrowImg} alt='Arrow'/><h2 className='text-sm'>Shop</h2></h2>
        </div>

        <div className='h-[100px] w-[1440px] frame2-color'>
            <div className='flex  gap-96 ml-20 mt-4'>
                <div className='flex items-center gap-5 mt-8'>
                    <Image src={filterimg} alt='filter'/>
                    <Image src={icon1} alt='Icon'/>
                    <Image src={icon2} alt='Icon'/>
                    <p>Showing 1–16 of 32 results</p>
                </div>
                <div className='flex gap-8 mt-10 ml-10'>
                    <h1 className='text-black text-sm mt-1'>Show</h1><p className='h-8 w-8 border-[1px] main-color text-gray-500'>16</p>
                    <h1 className='text-black text-sm mt-1'>Short by</h1><p className='h-8 w-28 main-color text-center content-center text-gray-400 '>Default</p>
                </div>
            </div>
        </div>

        <div className='h-[1808px] w-[1440px] main-color'>
            <div className='mt-5 ml-20'>
              <Image src={pic1} alt="All Furniture"/>
              <Image src={pic2} alt="All Furniture"/>
              <Image src={pic3} alt="All Furniture"/>
              <Image src={pic4} alt="All Furniture"/>
              <Image className='ml-96 mt-32' src={pic5} alt='All Furniture'/>
            </div> 
        </div>

        <div className='h-[300px] w-[1440px] frame2-color'>
          <div className='flex ml-40 gap-40'>
            <h1 className='text-black text-xl font-semibold mt-20'>Free Delivery<p className='font-color text-sm'>For all oders over $50, consectetur<br/> adipim scing elit.</p></h1>
            <h1 className='text-black text-xl font-semibold mt-20' >90 Days Return<p className='font-color text-sm'>If goods have problems, consectetur<br/> adipim scing elit.</p></h1>
            <h1 className='text-black text-xl font-semibold mt-20'>Secure Payment<p className='font-color text-sm'>100% secure payment, consectetur <br/>adipim scing elit.</p></h1>
          </div>
        </div>

    </div>
  )
}

export default page