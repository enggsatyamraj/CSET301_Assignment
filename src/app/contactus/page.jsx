"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import order_completed from "../../../public/order-completed.svg";
import form_submit from "../../../public/Group.svg";
import Footer from "@/components/Footer";
import { generateMetadata } from "./metadata";
import Link from "next/link";

generateMetadata();

const Page = () => {
  const [result, setResult] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isFormSubmitted = localStorage.getItem("formSubmitted");
    if (isFormSubmitted) {
      setFormSubmitted(true);
    }
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Append your Web3Forms access key to the form data
    formData.append("access_key", "3f857728-a8e4-4797-9439-82309b39f633");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setFormSubmitted(true);
        localStorage.setItem("formSubmitted", true);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

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

          {formSubmitted ? (
            <div className="w-[100%] min-h-[20vh] px-4 py-3 flex flex-col justify-center items-center">
              <p className="text-center mb-2 opacity-80">
                Thank you for contacting us! We appreciate you taking the time
                to reach out.
              </p>

              <p className="text-center mb-2 md:w-[70%] sm:w-[85%] w-[98%] opacity-80">
                One of our representatives will review your inquiry and respond
                as soon as possible. Our typical response time is within 24-48
                hours, Monday through Friday.
              </p>

              <p className="text-center mb-2 md:w-[70%] sm:w-[85%] w-[98%] opacity-80">
                If your inquiry is regarding an order, you can also check the
                status by visiting the link below
              </p>

              <Link
                target="_blank"
                className="underline mb-6 bg-[#a5a6f6] text-black px-3 text-[17px] py-2 rounded-sm"
                href={"https://yoyohoni.mysellix.io/contact"}
              >
                Order inquiry
              </Link>

              <Image
                src={form_submit}
                alt="form submitted"
                className="max-w-[300px] md:w-[60%] w-[80%] h-auto"
              />
            </div>
          ) : (
            <>
              <p className="md:text-[1.15rem] opacity-90 md:w-[70%] text-[0.9rem] mt-5">
                We are here to assist you with any questions or concerns you may
                have. Our knowledgeable team is ready to provide you with the
                information and support you need.
              </p>

              <p className="md:text-[1.05rem] opacity-90 text-[0.9rem] mt-3">
                To ensure we can provide you with the best possible service,
                please have the following details ready:
              </p>

              <ul className="opacity-70 text-[0.85rem]">
                <li> - Your name, email and phone number</li>
                <li> - A clear and concise description of your inquiry</li>
              </ul>

              <p className="mt-3 mb-5 opacity-80 md:w-[60%]">
                By providing us with these details upfront, we can streamline
                the process and address your query more efficiently.
              </p>
              <p className="mb-2  opacity-80">
                If your inquiry is regarding an order, you can also check the
                status by visiting the link below
              </p>
              <Link
                target="_blank"
                className="underline mb-3  bg-[#a5a6f6] text-black px-3 text-[17px] py-2 rounded-sm"
                href={"https://yoyohoni.mysellix.io/contact"}
              >
                Order inquiry
              </Link>
              <div className="flex flex-col lg:flex-row items-center mt-4 gap-4 px-5">
                <Image
                  className="flex-[1]"
                  src={order_completed}
                  alt="buying discord account."
                />
                <div className="w-full flex-[1]">
                  <form onSubmit={onSubmit}>
                    <div className="flex items-center mb-4 gap-5">
                      <div className="w-[100%]">
                        <label
                          htmlFor="first_name"
                          className="block mb-[2px] text-md font-medium text-white dark:text-white"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          name="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="w-[100%]">
                        <label
                          htmlFor="last_name"
                          className="block mb-[2px] text-md font-medium text-white dark:text-white"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          id="last_name"
                          name="last_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Wick"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block mb-[2px] text-md font-medium text-white dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="xyz@gmail.com"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="phone_number"
                        className="block mb-[2px] text-md font-medium text-white dark:text-white"
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone_number"
                        name="phone_number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="+916202632130"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-[2px] text-md font-medium text-white dark:text-white"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min-h-[150px]"
                        placeholder="Your message"
                        required
                      />
                    </div>
                    <button className="bg-[#8b7bcf]  text-white font-bold py-2 px-2 w-full mt-6 rounded-lg">
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
