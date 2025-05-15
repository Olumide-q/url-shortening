'use client';
import Image from "next/image";
import logo from '../images/logo.svg' 
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Close mobile menu when screen size changes to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Desktop Navigation */}
      <div className="container  mx-auto lg:w-9/12 px-4 md:px-5 flex justify-between fixed z-50 right-0 left-0 bg-white shadow items-center  lg:p-8 py-6 md:py-10">
        <div className="flex items-center">
        <Link href="/"><Image className=""  alt="Logo" src={logo} /></Link>
          {/* <h2 className="font-bold text-2xl md:text-3xl text-black">Shortly</h2> */}
          
          {/* Desktop Menu Items */}
          <div className="hidden md:flex gap-8 ml-10 text-slate-400 font-bold">
          <Link href="#"> <p className="font-bold hover:text-black text-sm cursor-pointer">Features</p></Link>
              <Link href="#"><p className="font-bold hover:text-black text-sm cursor-pointer">Pricing</p></Link>
              <Link href="#"><p className="font-bold hover:text-black text-sm cursor-pointer">Resources</p></Link>
          </div>
        </div>
        
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-8 items-center text-slate-400 font-bold">
          <Link href="#"><p className="font-bold hover:text-black text-sm cursor-pointer">Login</p></Link>
          <Link href="#"><button className="text-sm bg-[#2acfcf] rounded-3xl cursor-pointer py-2 px-6 text-white">
            Sign Up
          </button></Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-gray-500 focus:outline-none"
          >
            {isMenuOpen ? (
              <IoCloseOutline className="w-6 h-6" />
            ) : (
              <RxHamburgerMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 md:pt-25 " ref={menuRef}>
          <div className="bg-[#3b3054] text-white rounded-lg mt-4 py-8 px-6">
            <div className="flex flex-col items-center space-y-6">
             <Link href="#"> <p className="font-bold text-lg cursor-pointer">Features</p></Link>
              <Link href="#"><p className="font-bold text-lg cursor-pointer">Pricing</p></Link>
              <Link href="#"><p className="font-bold text-lg cursor-pointer">Resources</p></Link>
              
              <div className="w-full border-t border-gray-600 my-2"></div>
              
              <p className="font-bold text-lg cursor-pointer">Login</p>
              <button className="w-full bg-[#2acfcf] rounded-full py-3 px-6 text-white font-bold hover:opacity-80 transition-opacity">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}








// 'use client';
// import { RxHamburgerMenu } from 'react-icons/rx';
// import { IoCloseOutline } from 'react-icons/io5';
// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';

// export default function Nav() {
//     return(
//       <div className="w-full bg-white ">
//         <div className=" w-9/12 container mx-auto flex pt-10  text-gray-400 font-bold cursor-pointer ">
//             <div className="flex w-[60%] gap-10 text-center items-center">
//             <h2 className="font-bold text-3xl text-black ">Shortly</h2>
//             <p className="hover:text-black text-sm  ">Features</p>
//             <p className="hover:text-black text-sm ">Pricing</p>
//             <p className="hover:text-black text-sm ">Resources</p>
//             </div>
//             <div className="flex gap-10 item-end w-[40%] justify-end items-center ">
//             <p className=" text-sm hover:bg-[#2acfcf] hover:rounded-3xl hover:py-2 hover:px-6 hover:text-white">Login</p>
//             <p className="text-sm  hover:bg-[#2acfcf] hover:rounded-3xl hover:py-2 hover:px-6 hover:text-white ">SignUp</p>
//             </div>
//         </div>
//       </div>
//     )
//   }