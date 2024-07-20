"use client";
import { useSearchParams } from "next/navigation";

const AccountDetails = () => {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  // //console.log(searchParams.get("data"));
  return (
    <div className="pt-[300px] text-white">
      this is the account details page {data}
    </div>
  );
};

export default AccountDetails;
