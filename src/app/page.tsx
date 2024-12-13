import Image from "next/image";
import singleSeater from '../app/singleSeater.png'
import tablepic from '../app/tablepic.png'
import sofapic from '../app/sofapic.png'
import pic1 from '../app/pic1.png'
import pic2 from '../app/pic2.png'
import pic3 from '../app/pic3.png'
import pic4 from '../app/pic4.png'
import asgaardSofa from '../app/asgaardSofa.png'
import pic5 from '../app/pic5.png'
import pic6 from '../app/pic6.png'
import pic7 from '../app/pic7.png'
import icon from '../app/icon.png'

export default function Home() {
  return (
    <>
       <div className="container mx-auto h-[5090px] w-[1440px] -top-[512px] -left-[720px] main-color">

        {/*SECTION-1 */}
        <div className="h-auto lg:h-[900px] w-full lg:w-[1440px] bg-frame1-color flex flex-col lg:flex-row items-center lg:items-start">
          <div className="flex">
            <h1 className="text-black text-3xl lg:text-[64px] font-[poppins] leading-tight lg:leading-[96px] w-full lg:w-[440px] text-center lg:text-left mt-10 lg:mt-96 px-4 ml-72 ">Rocket single seater
            <h2 className="text-xl mt-5 font-semibold scale-95">Shop Now<hr className="w-[85px] border-[1.5px] border-gray-600 mt-1"/></h2>
            </h1>
          <div>
           <Image className="h-auto w-full lg:h-[1000px] lg:w-[853px]" src={singleSeater} alt='Rocket single seater'/>
          </div>
        </div>
      </div>

       {/*SECTION-2 */}
       <div className="h-[672px] w-[1440px] top-[996px] frame2-color">
             <div className="flex">
                 <Image className="mt-16 ml-10 h-[550px] w-[600px]" src={tablepic} alt="Side Table"/>
                 <Image className="mt-14 h-[550px] w-[700px]" src={sofapic} alt="Sofa"/>
              </div>
              <div className="flex">
               <h1 className="-mt-32 ml-60 font-black font-[poppins] text-3xl">Side table<h2 className="text-lg leading-[60px]">View More<hr className="w-20 border-[0.5px] border-gray-800 -mt-3"/></h2></h1>
               <h1 className="-mt-32 ml-[450px] font-black font-[poppins] text-3xl">Side table<h2 className="text-lg leading-[60px]">View More<hr className="w-20 border-[1px] border-gray-800 -mt-3"/></h2></h1>
              </div>
        </div>
 
        {/*SECTION-3 */}
        <div className="h-[777px] w-[1440px] top-[1663px]">
           <div>
               <h1 className="text-black font-semibold text-3xl text-center mt-10 leading-loose">Top Picks For You</h1>
               <p className="font-color text-center text-sm  scale-110">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
          </div>
          <div className="flex gap-10 mt-20">
            <Image className=" h-[300px] w-[300px]" src={pic1} alt="Trenton modular sofa_3"/>
            <Image className="h-[300px] w-[300px]" src={pic2} alt="Granite dining table with dining chair"/>
            <Image className="h-[300px] w-[300px]" src={pic3} alt="Outdoor bar table and stool"/>
            <Image className="h-[300px] w-[300px]" src={pic4} alt="Plain console with teak mirror"/>
          </div>
          <div className="flex gap-44 mt-5">
            <h1 className="text-black text-sm font-semibold">Trenton modular sofa_3<p className="font-semibold text-xl mt-3">Rs. 25,000.00</p></h1>
            <h1 className="text-black text-sm font-semibold">Granite dining table with<br/> dining chair<p className="font-semibold text-xl mt-3">Rs. 25,000.00</p></h1>
            <h1 className="text-black text-sm font-semibold">Outdoor bar table and<br/> stool<p className="font-semibold text-xl mt-3">Rs. 25,000.00</p></h1>
            <h1 className="text-black text-sm font-semibold">Plain console with teak<br/> mirror<p className="font-semibold text-xl mt-3">Rs. 25,000.00</p></h1>
          </div>
          <div className="flex justify-center mt-14"> 
            <p className="text-black font-semibold text-lg leading-loose">View More<hr className="w-24 border-[1px] border-gray-800 text-center mt-1"/></p></div>
        </div>

         {/*SECTION-4 */}
         <div className="h-[639px] w-[1440px] top-[2469px] frame3-color">
          <div className="flex">
            <Image className="h-[600px] w-[900px]" src={asgaardSofa} alt="Asgaarf Sofa" />
            <div className="mt-48 ml-20">
            <h1 className="text-black text-2xl font-semibold ml-14">New Arrivals</h1>
            <h1 className="text-black text-5xl font-bold mt-4">Asgaard sofa</h1>
            <button className="h-12 w-52 border-[1px] border-black mt-7 ml-10 text-center content-center text-black text-sm font-semibold shadow-md shadow-gray-700 hover:bg-indigo-100">Order Now</button>
            </div>
          </div>
        </div>

        {/*SECTION-5 */} 
        <div className="h-[944px] w-[1440px] top-[3108px]">
         <div className="text-center mt-16">
              <h1 className="text-black text-3xl font-semibold">Our Blogs</h1>
              <p className="font-color text-sm font-semibold mt-4 tracking-wide">Find a bright ideal to suit your taste with our great selection</p>
          </div>
          <div className="flex gap-7 ml-24 mt-14">
            <Image className="h-[393px] w-[393px] rounded-[10px]" src={pic5} alt="millennial design"/>
            <Image className="h-[393px] w-[393px] rounded-[10px]" src={pic6} alt="millennial design"/>
            <Image className="h-[393px] w-[393px] rounded-[10px]" src={pic7} alt="millennial design"/>
          </div>
          <div className="flex gap-36 mt-10 ml-32">
            <p className="text-black text-lg ">Going all-in with millennial design
                <p className="text-black font-semibold text-xl justify-center mt-3 ml-20">Read More <hr className="w-24 border-[1px] border-black mt-2"/></p><Image className="mt-5 ml-4 scale-90" src={icon} alt="Icon"/></p>
            <p className="text-black text-lg">Going all-in with millennial design
                <p className="text-black font-semibold text-xl justify-center mt-3 ml-20">Read More <hr className="w-24 border-[1px] border-black"/></p><Image className="mt-5 ml-4 scale-90" src={icon} alt="Icon"/></p>
            <p className="text-black text-lg ">Going all-in with millennial design
                <p className="text-black font-semibold text-xl justify-center mt-3 ml-20">Read More <hr className="w-24 border-[1px] border-black"/></p><Image className="mt-5 ml-4 scale-90" src={icon} alt="Icon"/></p>
           </div>
           <div className="flex justify-center mt-20"> 
            <p className="text-black font-semibold text-lg leading-loose">View All Post<hr className="w-28 border-[1px] border-gray-800 text-center mt-1"/></p>
           </div>
        </div>
 
         {/*LAST-SECTION */}
         <div className="h-[450px] w-[1440px] top-[4052px] frame4-color">
          <div className="text-center content-center">
            <h1 className="text-black font-bold text-5xl mt-32">Our Instagram</h1>
            <p className=" text-black text-sm font-semibold mt-6">Follow our store on Instagram</p>
            <button className="h-16 w-48 border-[1px] button-color rounded-full shadow-xl shadow-slate-300 text-center content-center text-black font-semibold text-lg mt-8 m hover:bg-slate-200">Follow Us</button>
          </div>
         </div>
      </div>
   </>

    );
  }
      
