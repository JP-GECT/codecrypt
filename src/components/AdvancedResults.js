import { fdData, dbtMutualFundData, digitalGoldData } from "@/_constants";
import DataChart from "./DataChart";

const AdvancedResults = ({ advancedResult, setAdvancedResult }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap w-screen">
          <DataChart />
          <DataChart />
          <DataChart />
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-3 border-[5px] border-red-500">
            <h1 className="font-extrabold">FIXED DEPOSIT</h1>
            <ul>
              {fdData.map((fd) => (
                <li>
                  {fd.name} - {fd.interestRate}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 border-[5px] border-violet-500">
            <h1 className="font-extrabold">DIGITAL GOLD</h1>
            <ul>
              {digitalGoldData.map((dg) => (
                <li>{dg.name}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 border-[5px] border-purple-500">
            <h1 className="font-extrabold">DEBT MUTUAL FUNDS</h1>
            <ul>
              {dbtMutualFundData.map((dbt) => (
                <li>
                  {dbt.name} - {dbt.interestRate}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 border-[5px] border-yellow-500">
            <h1 className="font-extrabold">EQUITY MUTUAL FUNDS</h1>
            <p>Coming Soon...</p>
          </div>
        </div>
      </div>

      <button
        className="w-full border-solid bg-blue-500 text-white inline mt-5"
        onClick={() => {
          setAdvancedResult(null);
        }}
      >
        Go back to form
      </button>
    </>
  );
};
export default AdvancedResults;
