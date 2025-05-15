import Image from "next/image";
import brand from '../images/icon-brand-recognition.svg'
import item from '../images/icon-detailed-records.svg'
import custom from '../images/icon-fully-customizable.svg'
export default function Statistics() {
    return(
      <div className="bg-gray-100 w-full pb-10 lg:pb-60 md:pt-78 lg:pt-92 pt-150 py-29">
      <div className="w-9/12 container mx-auto flex flex-col gap-18 ">
     <div className="flex flex-col text-center lg:w-[35%] mx-auto gap-4 ">
     <h2 className="font-bold text-2xl  xl:text-3xl">Advanced Statistics</h2>
     <p className="text-slate-400 font-semibold ">Track how your links are performing across the web with our advanced statistics dashboard </p>
     </div>
      <div className="flex flex-col lg:flex-row  justify-center  items-center  p-6 lg:px-16 xl:px-20">
       <div className="text-center lg:text-left">
       <div className="relative bg-white pb-14 pt-18 px-6 lg:px-10 rounded-sm shadow ">
           <div className="absolute -top-8 left-8  bg-[#3b3054] rounded-full py-4 px-4">
            <Image className=""  alt="Logo" src={brand} />
           </div>
           <div className="flex flex-col gap-4  ">
            <h2 className="font-bold text-xl">Brand Recognition</h2>
            <p className="text-slate-400 font-medium">Boost your brand Recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content</p>
        </div>
        </div>
       </div>
       <div className="w-[8px] h-[50px] lg:w-[50px] lg:h-[4px] bg-[#2acfcf]"></div>
      <div className="lg:mt-15 text-center lg:text-left ">
      <div  className="relative bg-white pt-18 pb-14  px-6 lg:px-10 rounded-sm shadow">
        <div className="absolute -top-8 left-8  bg-[#3b3054] rounded-full py-4 px-4">
            <Image className=""  alt="Logo" src={item} />
           </div>
           <div className="flex flex-col gap-4 ">
            <h2 className="font-bold text-xl">Detailed Records</h2>
            <p className="text-slate-400 font-medium">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
           </div>
        </div>
      </div>
      <div className="w-[8px] h-[50px] lg:w-[50px] lg:h-[4px] bg-[#2acfcf]"></div>
        <div className="lg:mt-30 text-center lg:text-left ">
        <div  className="relative bg-white  pt-18 pb-10 px-6 lg:px-10 rounded-sm shadow">
        <div className="absolute -top-8 left-8  bg-[#3b3054] rounded-full py-4 px-4">
            <Image className=""  alt="Logo" src={custom} />
           </div>
           <div className="flex flex-col gap-4 ">
            <h2 className="font-bold text-xl">Fully Customizable</h2>
            <p className="text-slate-400  font-medium">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
           </div>
        </div>
        </div>
      </div>
      </div>
      </div>
    )
  }
  

