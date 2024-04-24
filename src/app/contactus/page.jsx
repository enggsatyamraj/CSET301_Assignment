import Image from "next/image";
import React from "react";
import order_compelte from "../../../public/order-completed.svg";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KM5VZD9Z"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <div className="bg-normal min-h-[100vh] w-[100vw] overflow-hidden  relative">
        <div className="radial_one"></div>
        <div className="radial_three"></div>
        <div className="max-w-[1152px] py-8 w-[90%] min-h-[50vh] mt-[100px] bg-[#121212] rounded-lg bg-opacity-55 backdrop-blur-sm text-white mx-auto mb-[100px]">
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-semibold text-center ">
            Contact Us
          </h2>
          <div className="flex flex-col lg:flex-row items-center mt-4 gap-4 px-5">
            <Image
              className="flex-[1]"
              src={order_compelte}
              alt="buying discord account."
            />
            <div className="w-full flex-[1]">
              <div className="flex items-center mb-4 gap-5">
                <div className="w-[100%]">
                  <label
                    for="first_name"
                    class="block mb-[2px] text-md font-medium text-white dark:text-white"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john"
                    required
                  />
                </div>
                <div className="w-[100%]">
                  <label
                    for="last_name"
                    class="block mb-[2px] text-md font-medium text-white dark:text-white"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="wick"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  for="email"
                  class="block mb-[2px] text-md font-medium text-white dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="xyz@gmail.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="phone_number"
                  class="block mb-[2px] text-md font-medium text-white dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  id="phone_number"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+916202632130"
                  required
                />
              </div>
              <div>
                <label
                  for="first_name"
                  class="block mb-[2px] text-md font-medium text-white dark:text-white"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min-h-[150px]"
                  placeholder="Your message"
                  required
                />
              </div>
              <button className="bg-[#8b7bcf] text-white font-bold py-2 px-2 w-full mt-6 rounded-lg">
                send message
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
