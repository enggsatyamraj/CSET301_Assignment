import React from "react";

const page = ({ searchParams }) => {
  // console.log(searchParams);
  const {accountDetails} = searchParams;

  console.log("account details : ", accountDetails);
  return (
    <>
      <div className="bg-[#121212] pt-[100px] text-white">
        <div className="max-w-[1280px] mx-auto min-h-[100vh] border-2">
          <h1 className="text-white text-center">
            {/* {accountDetails.type} */}
            {/* {console.log("account details year", accountDetails.year)} */}
            
          </h1>
        </div>

      </div>
    </>
  );
};

export default page;
