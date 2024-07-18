import React from "react";
import landscape from "../../../../public/landscape_image.jpeg";
import Image from "next/image";
import Link from "next/link";
import BlogsCard from "@/components/BlogsCard";
import rightbutton from "../../../../public/RightButton.svg";
import Footer from "@/components/Footer";

const page = () => {
  const sampleArray = [
    {
      heading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, similique?",
      time: "4 mins Read | 1 month Ago",
    },
    {
      heading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, similique?",
      time: "4 mins Read | 1 month Ago",
    },
    {
      heading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, similique?",
      time: "4 mins Read | 1 month Ago",
    },
  ];
  return (
    <div className="bg-normal text-white pt-[100px]">
      <div className="max-w-[1000px] relative min-h-[80vh] rounded-[5px] mx-auto  border-2 border-[#A1AEBF]  mb-[40px] md:p-5 p-3">
        <Image
          src={landscape}
          className="rounded-[30px] h-[300px] object-cover  "
          alt="Discord Image"
        />
        <h1 className="md:text-4xl sm:text-3xl text-2xl my-5 uppercase tracking-wider">
          How to make clickable thumbnails using photoshop
        </h1>
        <div className="flex items-center flex-wrap mt-[20px] gap-3 justify-between">
          <div className="text-[15px]">4 mins Read | 1 Month Ago</div>
          <div className="flex gap-3 items-center">
            <Link
              className="border-[1.5px] bg-[#F36969] text-white border-black  rounded-lg px-2 py-1"
              href={"#"}
            >
              Buy Now
            </Link>
            <div>
              <Link
                href={"/blogs/3213"}
                className="flex gap-1 items-center font-semibold border-[1.5px] border-[#A1AEBF] rounded-lg px-2 py-1"
              >
                <span className="text-[13px]">Explore</span>
              </Link>
            </div>
          </div>
        </div>
        <p className="text-[15px] md:text-[17px] mt-[20px] leading-[25px] opacity-70 text-center mx-auto md:w-[90%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          aliquid corrupti inventore error, aperiam pariatur asperiores eius
          similique iure, alias accusamus. Veritatis dolores labore error
          tempore aut eaque harum numquam officia distinctio, optio ex atque
          libero repellat earum porro dignissimos modi facilis. Facere quae fuga
          repudiandae consectetur corrupti, possimus voluptatem?
        </p>
        <p className="text-[15px] md:text-[17px] mt-[10px] leading-[25px] opacity-70 text-center mx-auto md:w-[90%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
          exercitationem quaerat, suscipit libero doloremque beatae voluptas.
          Consectetur in voluptas incidunt, praesentium magni aut quo aliquam!
          Fuga sed illo laudantium porro deserunt dicta alias obcaecati
          repudiandae, ut esse dignissimos rerum inventore tempore dolore
          veniam. In obcaecati ea velit modi? Laudantium nobis excepturi
          reprehenderit, deserunt delectus nisi consequatur nihil, sapiente quas
          aliquid, consectetur quae maxime earum eveniet nulla est? Quo,
          corporis autem?
        </p>
        <p className="text-[15px] md:text-[17px] mt-[10px] leading-[25px] opacity-70 text-center mx-auto md:w-[90%]">
          Deleniti iste sint necessitatibus fugit dolores impedit ipsam debitis
          fuga labore rerum saepe placeat animi similique porro iure ut aliquid
          voluptatum, tenetur nihil tempora amet, ad cumque numquam id! Incidunt
          repellat numquam repudiandae dolor earum voluptate quidem tempora
          recusandae magni quasi. Recusandae suscipit facere aperiam corrupti,
          reiciendis deserunt nesciunt corporis quam aspernatur quae labore
          officia adipisci vero aliquam illum velit autem inventore sapiente
          harum illo porro provident. Necessitatibus, quia! Adipisci
          consequuntur explicabo reprehenderit nesciunt ex necessitatibus eos
          hic vel asperiores, magni sunt,
        </p>

        <Link
          href={"#"}
          className="text-[15px] opacity-70 md:text-[17px] underline underline-offset-[5px] mx-auto mt-[50px] mb-[30px] block text-center"
        >
          Share Now
        </Link>
        <div className="radial_one"></div>
      </div>
      <div className="max-w-[1000px] mx-auto">
        <h5 className="text-[25px] md:text-[35px] mt-[50px] mb-[20px]">
          You May Also Read..
        </h5>
        <div className="grid grid-cols-1 gap-y-14 mb-[40px] sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sampleArray.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center h-full"
              >
                <BlogsCard
                  headingBackgroundColor={"bg-[#FFC700]"}
                  heading={item.heading}
                  time={item.time}
                  className="h-full"
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
