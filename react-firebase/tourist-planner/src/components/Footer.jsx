import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaSquareFacebook,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="lg:p-12 p-5 bg-secondary text-white">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 items-start">
          {/* RoamRover */}
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="text-2xl font-medium cursor-pointer flex gap-2 items-center"
            >
              RoamRover
            </a>
            <a href="#" className="text-sm hover:underline duration-500">
              RoamRover@support.com
            </a>
            <a href="#" className="text-sm hover:underline duration-500">
              RoamRover@cutomersupport.com
            </a>
            <a href="#" className="text-sm hover:underline duration-500">
              +91 9638527410
            </a>
          </div>
          {/* Pricing */}
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="text-2xl font-medium cursor-pointer flex gap-2 items-center"
            >
              Pricing
            </a>
            <a href="#" className="text-sm hover:underline duration-500">
              Overview
            </a>
            <a href="#" className="text-sm hover:underline duration-500">
              Affilate Programe
            </a>
            <a href="#" className="text-sm hover:underline duration-500">
              Promotions
            </a>
          </div>
          {/*Company */}
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="text-2xl font-medium cursor-pointer flex gap-2 items-center"
            >
              Company
            </a>
            <a href="#" className="text-sm hover:underline duration-500">
              About Us
            </a>
            <a href="#" className="text-sm hover:underline duration-500">
              Careers
            </a>
          </div>
          {/* social */}
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-medium cursor-pointer flex gap-2 items-center">
              Social
            </div>
            <div className="text-sm hover:underline duration-500 flex items-center gap-1">
              <FaInstagram size={16} /> Instagram
            </div>
            <div className="text-sm hover:underline duration-500 flex items-center gap-1">
              <FaSquareFacebook size={16} /> Facebook
            </div>
            <div className="text-sm hover:underline duration-500 flex items-center gap-1">
              <FaWhatsapp size={16} /> Whatsapp
            </div>
            <div className="text-sm hover:underline duration-500 flex items-center gap-1">
              <FaXTwitter size={16} /> X
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
