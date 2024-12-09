import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import icon1 from '../components/icon1.png'
import icon2 from '../components/icon2.png'
import icon3 from '../components/icon3.png'
import icon4 from '../components/icon4.png'


function Header() {
  return (
    <div className='container mx-auto h-[100px] w-[1440px] frame1-color'>
       <div className='flex justify-end'>
          <div className='text-end content-end mt-5 gap-10'>
            <ul className='flex text-black gap-20 font-semibold text-sm '>
              <li className='hover:bg-yellow-200'><Link href='/'>Home</Link></li>
              <li className='hover:bg-yellow-200'><Link href='/Shop'>Shop</Link></li>
              <li className='hover:bg-yellow-200'>About</li>
              <li className='hover:bg-yellow-200'><Link href='/Contact'>Contact</Link></li>
            </ul>
          </div>
            <div className='flex items-end mr-28 ml-48 gap-10 '>
            <Image src={icon1} alt='Icon Image'/>
            <Image src={icon2} alt='Icon Image'/>
            <Image src={icon3} alt='Icon Image'/>
            <Image src={icon4} alt='Icon Image'/>
          </div>
        </div>
    </div>
  )
}

export default Header