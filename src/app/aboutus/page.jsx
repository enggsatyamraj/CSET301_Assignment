import Footer from "@/components/Footer";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-normal w-[100%]">
        <div className="max-w-[1280px] mx-auto px-7 sm:px-12 text-white relative min-h-[60vh] w-[100%] ">
          <div className="min-h-[90vh] relative flex flex-col justify-center z-4">
            <h1 className="text-[#A5A6F6] font-bold md:text-3xl text-2xl my-3 tracking-widest">
              About us
            </h1>
            <p className="text-4xl sm:text-5xl mb-6 md:text-6xl  sm:w-[80%] md:w-[70%] lh:w-[60%]">
              Name
            </p>
            <p className="text-[15px] md:w-[70%] sm:w-[80%] w-[90%] lg:w-[50%] opacity-60">
              Risus commodo id odio turpis pharetra elementum. Pulvinar porta
              porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
              Risus commodo id odio turpis pharetra elementum. Pulvinar porta
              porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
            </p>
            <Link
              href={"/contactus"}
              className="bg-[#A5A6F6] w-fit text-black text-[14px] px-3 mt-5 font-semibold py-2 rounded-[15px]"
            >
              CONTACT
            </Link>
            <div className="radial_one"></div>
            {/* <div className="radial_two"></div> */}
          </div>
        </div>
      </div>

      <div className="bg-[#121212] py-12">
        <div className="max-w-[1280px] mx-auto px-7 sm:px-12 text-white relative min-h-[60vh] w-[100%] ">
          <h1 className="text-3xl font-bold">Company</h1>
          <p className="opacity-80 mt-5 text-[15px] w-[98%] md:w-[80%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            voluptates earum, ratione, laborum quae quas tempore dicta provident
            dolorum dolor reiciendis blanditiis similique aperiam debitis
            consectetur cumque quaerat doloremque quidem sed quam omnis? Illum,
            tempore nulla, iste facilis maiores natus expedita hic obcaecati
            adipisci doloremque blanditiis, dolor voluptas sint eaque placeat
            laborum cum modi assumenda sequi minima ipsa sit! Iure voluptatem
            explicabo saepe voluptatum dolores itaque? Expedita officiis
            mollitia voluptate! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Animi asperiores dicta earum labore et similique
            quia consequuntur ea rerum quisquam ratione explicabo non aliquam
            aut, omnis obcaecati necessitatibus veritatis reprehenderit
            reiciendis alias aspernatur quidem quod? Debitis amet quae officia
            aliquam.
          </p>

          <h1 className="text-3xl font-bold mt-[50px]">Team</h1>
          <p className="opacity-80 mt-5 text-[15px] w-[98%] md:w-[80%] mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            voluptates earum, ratione, laborum quae quas tempore dicta provident
            dolorum dolor reiciendis blanditiis similique aperiam debitis
            consectetur cumque quaerat doloremque quidem sed quam omnis? Illum,
            tempore nulla, iste facilis maiores natus expedita hic obcaecati
            adipisci doloremque blanditiis, dolor voluptas sint eaque placeat
            laborum cum modi assumenda sequi minima ipsa sit! Iure voluptatem
            explicabo saepe voluptatum dolores itaque? Expedita officiis
            mollitia voluptate! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Animi asperiores dicta earum labore et similique
            quia consequuntur ea rerum quisquam ratione explicabo non aliquam
            aut, omnis obcaecati necessitatibus veritatis reprehenderit
            reiciendis alias aspernatur quidem quod? Debitis amet quae officia
            aliquam.
          </p>

          <Link
            href={"/"}
            className="border-[#A5A6F6] border-[1px] text-[#A5A6F6] px-5 py-2 rounded-[20px] hover:bg-[#A5A6F6] hover:text-black hover:cursor-pointer transition-all duration-300 mt-10 font-semibold w-fit"
          >
            GO TO HOME
          </Link>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default page;
