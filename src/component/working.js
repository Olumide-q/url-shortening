import working from '../images/illustration-working.svg'
import Image from "next/image";
export default function WorkingSection() {
    return(
      <div className="w-full">
        <div className='grid lg:grid-cols-2 py-42 items-center w-9/12 container mx-auto gap-8 '>
        <div className=' order-2 lg:order-1 text-center lg:text-left'>
           <div className='mb-6 flex flex-col gap-4 '>
           <h1 className="lg:text-[70px] text-4xl text-slate-800 font-extrabold lg:font-bold">More than just shorter links</h1>
           <p className='text-slate-400 font-semibold text-md lg:w-[65%]  '>Build your brand's recognition  and get detailed insight on how your links are performing.</p>
           </div>
            <button className="text-white py-3 px-8 cursor-pointer rounded-3xl bg-[#2acfcf] text-sm font-bold ">Get started</button>
        </div>
        <div className='order-1 lg:order-2'>
        <Image  alt="Logo" src={working} />
        </div>
        </div>
      </div>
    )
  }