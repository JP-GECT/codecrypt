import { PieChart } from "@mui/x-charts/PieChart";
import { fdData, dbtMutualFundData, digitalGoldData } from "@/_constants";
import Suggestions from "../components/Suggestions";

const AdvancedResults = ({ advancedResult, setAdvancedResult }) => {
  console.log(advancedResult);
  const fd = parseInt(advancedResult["Fixed Deposit"]);
  const dg = parseInt(advancedResult["Digital Gold"]);
  const dmf = parseInt(advancedResult["Debt Mutual Fund"]);
  const emf = parseInt(advancedResult["Equity Mutual Fund"]);

  const expectedReturn = (emf * 12 + dg * 7.8 + dmf * 8 + fd * 7) / 100;
  return (
    <>
      <div className="flex flex-col">
        <h1 className="font-bold  text-center text-5xl  p-3 text-sans text-[#4942E4]">
          Statistics
        </h1>
        <div className="flex flex-wrap w-screen max-w-[100%] p-4 gap-1">
          <div className="border-[5px] border-blue-500">
            <h1 className="font-extrabold m-auto">User</h1>
            <PieChart
              series={[
                {
                  data: [
                    { value: fd, color: "#11009E" },
                    { value: dg, color: "#4942E4" },
                    { value: dmf, color: "#8696FE" },
                    { value: emf, color: "#C4B0FF" },
                  ],
                },
              ]}
              width={350}
              height={200}
            />
            <div className="flex">
              <div className="flex-1 flex flex-col items-start gap-1 px-2">
                <div className="flex items-center">
                  <div className="w-[10px] h-[10px] bg-[#11009E] mx-2"></div>
                  FD
                </div>
                <div className="flex items-center justify-start">
                  <div className="w-[10px] h-[10px] bg-[#4942E4] mx-2"></div>
                  Digital Gold
                </div>
                <div className="flex items-center">
                  <div className="w-[10px] h-[10px] bg-[#8696FE] mx-2"></div>
                  Debt Mutual Fund
                </div>
                <div className="flex items-center">
                  <div className="w-[10px] h-[10px] bg-[#C4B0FF] mx-2"></div>
                  Equity Mutual Fund
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center mt-2">
                {" "}
                <h2 className="font-semibold h-1/4">Expected Returns</h2>
                <div className="flex justify-center items-center h-16 w-16 text-2xl text-bold text-sans ">
                  <span>{expectedReturn}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[5px]">
            <PieChart
              series={[
                {
                  data: [
                    { value: 10, color: "#11009E" },
                    { value: 10, color: "#4942E4" },
                    { value: 10, color: "#8696FE" },
                    { value: 70, color: "#C4B0FF" },
                  ],
                },
              ]}
              width={350}
              height={200}
            />
            <div className="flex">
              <div className="flex-1 flex flex-col items-start gap-1 px-2">
                <div className="flex items-center">
                  <div className="w-[10px] h-[10px] bg-[#11009E] mx-2"></div>
                  FD
                </div>
                <div className="flex items-center justify-start">
                  <div className="w-[10px] h-[10px] bg-[#4942E4] mx-2"></div>
                  Digital Gold
                </div>
                <div className="flex items-center">
                  <div className="w-[10px] h-[10px] bg-[#8696FE] mx-2"></div>
                  Debt Mutual Fund
                </div>
                <div className="flex items-center">
                  <div className="w-[10px] h-[10px] bg-[#C4B0FF] mx-2"></div>
                  Equity Mutual Fund
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center mt-2">
                {" "}
                <h2 className="font-semibold h-1/4">Expected Returns</h2>
                <div className="flex justify-center items-center h-16 w-16 text-2xl text-bold text-sans ">
                  <span>14%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[5px]">
            <PieChart
              series={[
                {
                  data: [
                    { value: 15, color: "#11009E" },
                    { value: 15, color: "#4942E4" },
                    { value: 25, color: "#8696FE" },
                    { value: 45, color: "#C4B0FF" },
                  ],
                },
              ]}
              width={350}
              height={200}
            />
            <div className="flex">
              <div className="flex-1 flex flex-col items-start gap-1 px-2">
                <div className="flex items-center">
                  <div className="w-[10px] h-[10px] bg-[#11009E] mx-2"></div>
                  FD
                </div>
                <div className="flex items-center justify-start">
                  <div className="w-[10px] h-[10px] bg-[#4942E4] mx-2"></div>
                  Digital Gold
                </div>
                <div className="flex items-center">
                  <div className="w-[10px] h-[10px] bg-[#8696FE] mx-2"></div>
                  Debt Mutual Fund
                </div>
                <div className="flex items-center">
                  <div className="w-[10px] h-[10px] bg-[#C4B0FF] mx-2"></div>
                  Equity Mutual Fund
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center mt-2">
                {" "}
                <h2 className="font-semibold h-1/4">Expected Returns</h2>
                <div className="flex justify-center items-center h-16 w-16 text-2xl text-bold text-sans ">
                  <span>9.6%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Suggestions />
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
