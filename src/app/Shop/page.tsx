import React from 'react'
import Image from 'next/image'
import img1 from './img1.png'
import filterimg from './filterimg.png'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import pic1 from '../pic1.png'
import pic2 from '../pic2.png'
import pic3 from '../pic3.png'
import pic4 from '../pic4.png'
import shopImg1 from './shopImg1.png'
import shopImg2 from './shopImg2.png'
import shopImg3 from './shopImg3.png'
import shopImg4 from './shopImg4.png'
import shopImg5 from './shopImg5.png'
import shopImg6 from './shopImg6.png'
import shopImg7 from './shopImg7.png'
import shopImg8 from './shopImg8.png'
import shopImg9 from './shopImg9.png'
import shopImg10 from './shopImg10.png'
import shopImg11 from './shopImg11.png'
import shopImg12 from './shopImg12.png'
import shopImg13 from './shopImg13.png'
import logoImg from '../Contact/logoImg.png'
import arrowImg from '../Contact/arrowImg.png'


function page() {
  return (
    <div className='container mx-auto h-[3100px] w-[1440px]'>

      {/*SECTION-1 */}
        <div className='h-[316px] w-[1440px]'>
          <Image src={img1} alt='Image'/>
          <Image className='ml-[700px] -mt-[250px] h-20 w-20' src={logoImg} alt='Logo'/>
        <h1 className='ml-[688px] -mt-2 text-5xl font-semibold'>Shop</h1>
        <h2 className='ml-[699px] text-sm flex tracking-tight mt-2'>Home<Image src={arrowImg} alt='Arrow'/><h2 className='text-sm'>Shop</h2></h2>
        </div>

       {/*SECTION-2 */}
        <div className='h-[100px] w-[1440px] frame2-color mt-4'>
            <div className='flex  gap-96 ml-20'>
                <div className='flex items-center gap-5 mt-6'>
                    <Image src={filterimg} alt='filter'/>
                    <Image src={icon1} alt='Icon'/>
                    <Image src={icon2} alt='Icon'/>
                    <p>Showing 1–16 of 32 results</p>
                </div>
                <div className='flex gap-8 mt-10 ml-10'>
                    <h1 className='text-black text-sm mt-1'>Show</h1><button className='h-8 w-8 border-[1px] main-color text-gray-500 text-center content-center hover:bg-pink-100'>16</button>
                    <h1 className='text-black text-sm mt-1'>Short by</h1><button className='h-8 w-28 main-color text-center content-center text-gray-400 hover:bg-pink-100'>Default</button>
                </div>
            </div>
        </div>

      {/*SECTION-3 */}
      <div className='h-[1808px] w-[1440px] main-color'>
        {/*Frame-1 */}
          <div className="flex gap-10">
            <Image className=" h-[300px] w-[300px]" src={pic1} alt="Trenton modular sofa_3"/>
            <Image className="h-[300px] w-[300px]" src={pic2} alt="Granite dining table with dining chair"/>
            <Image className="h-[300px] w-[300px]" src={pic3} alt="Outdoor bar table and stool"/>
            <Image className="h-[300px] w-[300px]" src={pic4} alt="Plain console with teak mirror"/>
          </div>
          <div className="flex gap-44 mt-5 ml-4">
            <h1 className="text-black text-sm font-semibold">Trenton modular sofa_3<p className="font-semibold text-xl mt-3">Rs. 25,000.00</p></h1>
            <h1 className="text-black text-sm font-semibold">Granite dining table with<br/> dining chair<p className="font-semibold text-xl mt-3">Rs. 25,000.00</p></h1>
            <h1 className="text-black text-sm font-semibold">Outdoor bar table and<br/> stool<p className="font-semibold text-xl mt-3">Rs. 25,000.00</p></h1>
            <h1 className="text-black text-sm font-semibold">Plain console with teak<br/> mirror<p className="font-semibold text-xl mt-3">Rs. 25,000.00</p></h1>
          </div>

        {/*Frame-2 */}   
        <div className="flex gap-10">
            <Image className=" h-[300px] w-[300px]" src={shopImg1} alt="Grain coffee table"/>
            <Image className="h-[300px] w-[300px]" src={shopImg2} alt="Kent coffee table"/>
            <Image className="h-[300px] w-[300px]" src={shopImg3} alt="Round coffee table_color 2"/>
            <Image className="h-[300px] w-[300px]" src={shopImg4} alt="Reclaimed teak coffee table"/>
          </div>
          <div className="flex gap-52 mt-5 ml-5">
            <h1 className="text-black text-sm font-semibold">Grain coffee table<p className="font-semibold text-xl mt-3">Rs. 15,000.00</p></h1>
            <h1 className="text-black text-sm font-semibold">Kent coffee table<p className="font-semibold text-xl mt-3">Rs. 225,000.00</p></h1>
            <h1 className="text-black text-sm font-semibold">Round coffee table_color <br/>2<p className="font-semibold text-xl mt-3">Rs. 251,000.00</p></h1>
            <h1 className="text-black text-sm font-semibold -ml-14">Reclaimed teak coffee<br/> table<p className="font-semibold text-xl mt-3">Rs. 25,200.00</p></h1>
          </div>

        {/*Frame-3 */}
          <div className="flex gap-10">
            <Image className=" h-[300px] w-[300px]" src={shopImg5} alt="Plain console_"/>
            <Image className="h-[300px] w-[300px]" src={shopImg6} alt="Reclaimed teak Sideboard"/>
            <Image className="h-[300px] w-[300px]" src={shopImg7} alt="SJP_0825"/>
            <Image className="h-[300px] w-[300px]" src={shopImg8} alt="Bella chair and table"/>
          </div>
          <div className="flex gap-44 mt-5 ml-6">
            <h1 className="text-black text-sm font-semibold">Plain console_<p className="font-semibold text-xl mt-3">Rs. 258,200.00</p></h1>
            <h1 className="text-black text-sm font-semibold">Reclaimed teak Sideboard<p className="font-semibold text-xl mt-3">Rs. 20,000.00</p></h1>
            <h1 className="text-black text-sm font-semibold">SJP_0825 <p className="font-semibold text-xl mt-3">Rs. 200,000.00</p></h1>
            <h1 className="text-black text-sm font-semibold">Bella chair and table<p className="font-semibold text-xl mt-3">Rs. 100,000.00</p></h1>
          </div>

           {/*Frame-4 */}
           <div className="flex gap-10">
            <Image className=" h-[300px] w-[300px]" src={shopImg9} alt="Granite square side table"/>
            <Image className="h-[300px] w-[300px]" src={shopImg10} alt="Asgaard sofa"/>
            <Image className="h-[300px] w-[300px]" src={shopImg11} alt="Maya sofa three seater"/>
            <Image className="h-[300px] w-[300px]" src={shopImg12} alt="Outdoor sofa set"/>
          </div>
          <div className="flex gap-44 mt-5 ml-6">
            <h1 className="text-black text-sm font-semibold">Granite square side table<p className="font-semibold text-xl mt-3">Rs. 258,800.00</p></h1>
            <h1 className="text-black text-sm font-semibold">Asgaard sofa<p className="font-semibold text-xl mt-3">Rs. 250,000.00</p></h1>
            <h1 className="text-black text-sm font-semibold">Maya sofa three seater<p className="font-semibold text-xl mt-3">Rs. 115,000.00</p></h1>
            <h1 className="text-black text-sm font-semibold">Outdoor sofa set<p className="font-semibold text-xl mt-3">Rs. 244,000.00</p></h1>
          </div>
 
          {/*Frame-5 */}
          <div className='mt-32 ml-[500px]'>
            <Image src={shopImg13} alt='next'/>
          </div>
      </div>
 
        {/*LAST SECTION*/}
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