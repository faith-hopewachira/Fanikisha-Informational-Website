"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdMail, MdPhone, MdLocationOn } from 'react-icons/md';
const Footer = () => {
  return (
    <footer id="contact" className="w-full work-sans">
      <div className="bg-[#2A88BD] text-white py-16 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between">
          <div className="mb-6 sm:mb-0 mr-9">
            <Image src="/myimg/fanikisha.png" alt="Fanikisha" width={120} height={48} className="object-contain" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-lg md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[25px] mb-3 flex items-center">
                <Link href="/contact" className="hover:underline">Contact Us</Link>
              </h3>
              <p className="flex items-center mb-2 text-sm md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px]">
                <span className="mr-2 min-w-[20px]" aria-hidden="true"><MdMail size={20} /></span>
                inganj@akirachix.com
              </p>
              <p className="flex items-center mb-2 text-sm md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px]">
                <span className="mr-2 min-w-[20px]" aria-hidden="true"><MdPhone size={20} /></span>
                +254 767 838 597
              </p>
            </div>
            <div className='sm:ml-9'>
              <p className="mb-2 text-sm md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px]">
                <Link href="#Homepage" className="hover:underline">Home</Link>
         </p>
        <p className="mb-2 text-sm md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px]">
            <Link href="#About" className="hover:underline">About Us</Link>
            </p>
         <p className="mb-2 text-sm md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px]">
         <Link href="#product" className="hover:underline">Product</Link>
      </p>
       <p className="text-sm md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px]">
                 <Link href="#team" className="hover:underline">Team</Link>
    </p>
            </div>
            <div>
              <h3 className="font-bold text-lg md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[25px] mb-3">Location</h3>
              <p className="flex items-center mb-2 text-sm md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px]">
                <span className="mr-2 min-w-[20px]" aria-hidden="true"><MdLocationOn size={26} /></span>
                616 Korongo Road, Nairobi-Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-3 px-4 text-center text-xs text-gray-600">
        <p>&copy; Inganji@AkiraChix 2024</p>
      </div>
    </footer>
  );
};
export default Footer;