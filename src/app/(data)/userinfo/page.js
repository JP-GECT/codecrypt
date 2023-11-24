"use client";

import { useState } from "react";

import UserInfoForm from "@/components/UserInfoForm";
import UserInfoResults from "@/components/UserInfoResults";
import Loader from "@/components/Loader";

const UserInfo = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        // <h1 className="flex justify-center items-center w-full h-screen font-extrabold">
        //   Loading...
        // </h1>
        <Loader />
      ) : (
        <div className="w-[100%]">
          {!result && (
            <UserInfoForm
              setResult={setResult}
              setIsLoading={setIsLoading}
            />
          )}
          {result && (
            <UserInfoResults
              result={result}
              setResult={setResult}
            />
          )}
        </div>
      )}
    </>
  );
};
export default UserInfo;
