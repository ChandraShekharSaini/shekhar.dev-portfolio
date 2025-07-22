import React from "react";

const ConatctForm = () => {
  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2x md:text-3xl lg:text-[2.5rem] font-bold">
        Let's work together!
      </h1>

      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        jhbhvghvfg
      </p>

      <form className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="First name"
            className="flex-1 bg-black text-white placeholder:text-gray-600  px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-0 w-full"
          />

          <input
            type="text"
            placeholder="Last name"
            className="flex-1 bg-black text-white placeholder:text-gray-600  px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-0 w-full"
          />
        </div>

        <div className="flex flex-col mt-5 md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 bg-black text-white placeholder:text-gray-600  px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-0 w-full"
          />

          <input
            type="phone"
            placeholder="Phone Number"
            className="flex-1 bg-black text-white placeholder:text-gray-600  px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-0 w-full"
          />
        </div>

        <div>
          <select className="mt-5 w-full bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md  border-[1.5px] border-gray-200  border-opacity-15 outline-0">
            <option value={""} disabled>
              Select an Option
            </option>

            <option value={"frontend"}>Fronted Development</option>

            <option value={"backend"}>Backend Development</option>

            <option value={"fullstack"}>Full Stack Development</option>
          </select>
        </div>

        <textarea
          rows={7}
          className="mt-5 w-full bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md  border-[1.5px] border-gray-200  border-opacity-15 outline-0"
        ></textarea>

        <div className="mt-4">
          <button className="px-8 py-3.5 bg-[#7947df] hover:bg-[#5c2fb2] text-white text-base outline-0 border-0 cursor-pointer transition-all duration-300 rounded-full">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConatctForm;
