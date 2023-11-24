"use client";

import { useState } from "react";

import UserInfoForm from "@/components/UserInfoForm";
import UserInfoResults from "@/components/UserInfoResults";

const UserInfo = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="w-[100%]">
      {!result && <UserInfoForm setResult={setResult} />}
      {result && (
        <UserInfoResults
          result={result}
          setResult={setResult}
        />
      )}
    </div>
  );
};
export default UserInfo;
