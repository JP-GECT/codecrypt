"use client";

import { useState } from "react";

import AdvancedForm from "@/components/AdvancedForm";
import AdvancedResults from "@/components/AdvancedResults";

const Advanced = () => {
  const [advancedResult, setAdvancedResult] = useState(null);
  return (
    <div className="w-[100%]">
      {!advancedResult && (
        <AdvancedForm setAdvancedResult={setAdvancedResult} />
      )}
      {advancedResult && (
        <AdvancedResults
          advancedResult={advancedResult}
          setAdvancedResult={setAdvancedResult}
        />
      )}
    </div>
  );
};
export default Advanced;
