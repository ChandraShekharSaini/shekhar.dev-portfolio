import React from "react";
import ConatctForm from "./ConatctForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[80%] mx-auto items-center gap-10 mt-10 ">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <ConatctForm />
        </div>

        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-anchor-placement="top-center"
          className="xl:mx-auto"
        >
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
