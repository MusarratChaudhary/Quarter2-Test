import React from 'react'
import Image from 'next/image'
import contactImg from './contactImg.png'
import img1 from '../Shop/img1.png'
import logoImg from '../Cart/logoImg.png'
import arrowImg from '../Cart/arrowImg.png'

function page() {
  return (
    <>
    <div className='container mx-auto h-[2500px] w-[1440px] main-color'>
      <div className='h-[316px] w-[1440px]'>
        <Image src={img1} alt='img'/>
        <Image className='ml-[700px] -mt-[250px] h-20 w-20' src={logoImg} alt='Logo'/>
        <h1 className='ml-[670px] -mt-2 text-4xl font-semibold'>Contact</h1>
        <h2 className='ml-[680px] text-sm flex tracking-tight mt-2'>Home<Image src={arrowImg} alt='Arrow'/><h2 className='text-sm'>Contact</h2></h2>
      </div>
        <div className='h-[1000px] w-[1440px] main-color'>
            <h1 className='text-black text-4xl scale-90 text-center content-center py-10'>Get In Touch With Us</h1>
            <p className='font-color text-center text-sm'>For More Information About Our Product & Services. Please Feel Free To Drop Us<br/> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            <div className='flex mt-20 ml-10'>
                <Image className='ml-60 mt-10' src={contactImg} alt='Image'/>
                <div className='mt-28 ml-28'>
                    <h1>Your name</h1>
                      <button className='h-10 w-60 border-[1px] border-gray-400 rounded-md '></button>
                    <h1>Email address</h1>
                      <button className='h-10 w-60 border-[1px] border-gray-400 rounded-md mt-2'></button>
                    <h1>Subject</h1>
                      <button className='h-10 w-60 border-[1px] border-gray-400 rounded-md '></button>
                    <h1>message</h1>
                      <button className='h-20 w-60 border-[1px] border-gray-400 rounded-md mt-2'></button>
                      <div>
                      <button className='h-10 w-40 border-[1px] border-gray-500 mt-6 text-center content-center rounded-md'>Submit</button>
                      </div>
                </div>
            </div>
        </div>
        
        <div className='container mx-auto h-[300px] w-[1440px] frame2-color'>
          <div className='flex ml-40 gap-40'>
            <h1 className='text-black text-xl font-semibold mt-20'>Free Delivery<p className='font-color text-sm'>For all oders over $50, consectetur<br/> adipim scing elit.</p></h1>
            <h1 className='text-black text-xl font-semibold mt-20' >90 Days Return<p className='font-color text-sm'>If goods have problems, consectetur<br/> adipim scing elit.</p></h1>
            <h1 className='text-black text-xl font-semibold mt-20'>Secure Payment<p className='font-color text-sm'>100% secure payment, consectetur <br/>adipim scing elit.</p></h1>
          </div>
        </div>
    </div>
 </>   
  )
}

export default page