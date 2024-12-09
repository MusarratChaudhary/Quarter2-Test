import React from 'react'

function Footer() {
  return (
    <div>  <div className="container mx-auto h-[555px] w-[1440px] top-[4497px] -mt-[700px]">
    <div className="flex gap-20 ml-10">
       <p className="mt-32 font-color text-sm">400 University Drive Suite 200 Coral<br/> Gables,<br/>FL 33134 USA</p>
        <div className="flex gap-40 mt-5">
          <h1 className="font-color leading-[60px]">Links
            <ul className="text-black font-bold ">
             <li>Home</li>
             <li>Shop</li>
             <li>About</li>
             <li>Contact</li>
            </ul>
          </h1>
          <h1 className="font-color leading-[60px]">Help 
            <ul className="text-black font-bold">
             <li>Payment Options</li>
             <li>Returns</li>
             <li>Privacy POlicies</li>
            </ul>
          </h1>
          <h1 className="font-color leading-[60px]">Newsletter
            <div className="flex gap-8 mt-5">
               <p className="text-sm">Enter Your Email Address<hr className="w-48  border-black"/></p>
               <p className="text-sm text-black font-semibold">Subscribe<hr className="w-20 border-black"/></p>
            </div>
          </h1>
        </div>
    </div>
     <div className="w-[1400px] border-[1px] border-gray-300 mt-10"></div>
      <p className="text-sm font-semibold mt-8">2022 Meubel House. All rights reverved</p>
     </div></div>
  )
}

export default Footer