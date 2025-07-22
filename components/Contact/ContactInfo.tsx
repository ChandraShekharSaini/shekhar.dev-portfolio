import React from "react";
import { FaPhone , FaAddressCard } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

import { contactData } from "@/Data/data";

const ContactInfo = () => {
  return (
    <div>
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full  bg-gradient-to-r from-emerald-500 to bg-emerald-900 flex items-center justify-center  flex-col">
          <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Phone</h1>
          <p className="text-base sm:text-lg text-white text-opacity">
            {contactData.phone}
          </p>
        </div>
      </div>

      <div className="flex mt-8 mb-8 items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full  bg-gradient-to-r from-emerald-500 to bg-emerald-900 flex items-center justify-center  flex-col">
          <MdMarkEmailUnread  className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">
            Email Address
          </h1>
          <p className="text-base sm:text-lg text-white text-opacity">
            {contactData.email}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full  bg-gradient-to-r from-emerald-500 to bg-emerald-900 flex items-center justify-center  flex-col">
          <FaAddressCard className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Address</h1>
          <p className="text-base sm:text-lg text-white text-opacity">
            {contactData.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
