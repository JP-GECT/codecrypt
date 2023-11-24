"use client";

import { useState } from "react";

import AdvancedForm from "@/components/AdvancedForm";
import AdvancedResults from "@/components/AdvancedResults";
import Loader from "@/components/Loader";

const Advanced = () => {
  const [advancedResult, setAdvancedResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {/* <div className="w-[100%]">
      {!advancedResult && (
        <AdvancedForm setAdvancedResult={setAdvancedResult} />
      )}
      {advancedResult && (
        <AdvancedResults
          advancedResult={advancedResult}
          setAdvancedResult={setAdvancedResult}
        />
      )}
    </div> */}

      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-[100%]">
          {!advancedResult && (
            <AdvancedForm
              setAdvancedResult={setAdvancedResult}
              setIsLoading={setIsLoading}
            />
          )}
          {advancedResult && (
            <AdvancedResults
              advancedResult={advancedResult}
              setAdvancedResult={setAdvancedResult}
            />
          )}
        </div>
      )}
    </>
  );
};
export default Advanced;
