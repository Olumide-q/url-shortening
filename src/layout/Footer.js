import Image from "next/image";
import logo from '../images/footerlogo copy.svg' 
import facebook from '../images/icon-facebook.svg'
import pinterest from '../images/icon-pinterest.svg'
import insta from '../images/icon-instagram.svg'
import twitter from '../images/icon-twitter.svg'
import Link from 'next/link';
export default function Footer() {
    return(
      <div className="bg-[#232127] w-full py-10">
        <div className="w-9/12 container mx-auto text-white flex  flex-col lg:flex-row items-center text-center gap-8 ">
        <div className="w-[30%] lg:mb-32  ">
          <Link href="/"><Image className=""  alt="Logo" src={logo} /></Link>
          {/* <h2 className="font-bold text-3xl text-left  ">Shortly</h2> */}
        </div>
        <div className="flex flex-col lg:flex-row gap-6 w-[70%] mx-auto justify-between">
          <div>
          <h4  className="font-bold mb-5 ">Features</h4>
            <ul className="text-slate-300 text-sm flex flex-col gap-3 font-medium">
              <li className="hover:text-[#2acfcf] cursor-pointer">Link shortening</li>
              <li className="hover:text-[#2acfcf] cursor-pointer">Branded Links</li>
              <li className="hover:text-[#2acfcf] cursor-pointer ">Analytics</li>
            </ul>
          </div>
          <div>
          <h4  className="font-bold mb-5">Resources</h4>
            <ul className="text-slate-300 text-sm flex flex-col gap-3 font-medium">
              <li className="hover:text-[#2acfcf] cursor-pointer">Blog</li>
              <li className="hover:text-[#2acfcf] cursor-pointer">Developers</li>
              <li className="hover:text-[#2acfcf] cursor-pointer">Support</li>
            </ul>
          </div>
          <div>
          <h4 className="font-bold mb-5">Company</h4>
            <ul className="text-slate-300 text-sm flex flex-col gap-3 font-medium">
              <li className="hover:text-[#2acfcf] cursor-pointer">About</li>
              <li className="hover:text-[#2acfcf] cursor-pointer">Our Team</li>
              <li className="hover:text-[#2acfcf] cursor-pointer">Careers</li>
              <li className="hover:text-[#2acfcf] cursor-pointer">Contacts</li>
            </ul>
          </div>
          <div className="flex h-5 gap-6 justify-between ">
             <Image className="hover:bg-[#2acfcf] active:bg-[#2acfcf] hover:rounded-full cursor-pointer"  alt="Logo" src={facebook} />
             <Image className="hover:bg-[#2acfcf] active:bg-[#2acfcf] hover:rounded-full cursor-pointer"  alt="Logo" src={twitter} />
             <Image className="hover:bg-[#2acfcf] active:bg-[#2acfcf] hover:rounded-full cursor-pointer"  alt="Logo" src={pinterest} />
             <Image className="hover:bg-[#2acfcf] active:bg-[#2acfcf] hover:rounded-full cursor-pointer"  alt="Logo" src={insta} />
          </div>
        </div>
        </div>
      </div>
    )
  }