import React from "react";

const WhyChoose = () => {
  const pointsArray = [
    {
      title:"Expertise",
      description : "With years of experience in the industry, our team brings unmatched expertise and insights to every project, ensuring top-notch results tailored to your specific goals."
    },
    {
      title:"Quality Assurance",
      description:"We guarantee the highest quality in all our products and services, including aged social media accounts, Discord services, reaction services, and more, providing you with reliable solutions for your digital endeavors."
    },
    {
      title:"Customer Satisfaction",
      description:"Our priority is your satisfaction. We strive to exceed your expectations with personalized attention, prompt support, and solutions that drive real, measurable results for your business."
    },
    {
      title:"Innovation",
      description:"We are committed to staying ahead of the curve. By constantly innovating and adapting to the latest trends and technologies, we ensure that your strategies are always cutting-edge and effective."
    },
    {
      title:"Transparent Pricing",
      description:"We believe in transparent and fair pricing. You can trust us to offer competitive rates without compromising on the quality or integrity of our services."
    },
    {
      title:"Tailored Solutions:",
      description:"Every business is unique, and we understand that. We offer personalized solutions that are customized to your specific needs, ensuring that you get exactly what you need to succeed in your digital endeavors."
    },
  ]
  return (
    <div className="bg-[#121212] text-white">
      <div className="max-w-[1280px] min-h-[60vh] flex flex-col justify-center px-4 pb-12">
        <div className=" ">
          <h2 class="md:text-4xl text-3xl font-semibold mb-6 w-[98%] sm:w-[80%] md:w-[70%] lg:w-[60%]">Elevate Your Strategy with Our Trusted Solutions</h2>
            <ul>
              {
                pointsArray.map((item, index) => {
                  return (
                    <li key={index} className="mb-8 relative max-w-[900px] border-[1px] p-4 rounded-lg">
                      <h1 className="sm:text-[17px] text-[15px] font-semibold absolute bg-[#dcdcdc] px-2 text-[#121212] rounded-md -top-[15px]">{item.title}</h1>
                      <p>{item.description}</p>
                    </li>
                  );
                })
              }
            </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
