import { fdData, dbtMutualFundData, digitalGoldData } from "@/_constants";

const Suggestions = ({ funds }) => {
  return (
    <div>
      <h1 className="font-bold  text-center text-5xl  p-3 text-sans text-[#4942E4]">
        Investment Portfolio
      </h1>

      <div className="flex gap-3  problem-statement p-4  mb-4 bg-gradient-to-r drop-shadow-lg text-sans">
        <div className="flex-1 problem-statement p-4 rounded-md mb-4 bg-white max-h-[700px] overflow-y-scroll">
          <div className="flex flex-col items-center ">
            <h1 className=" font-bold  text-center text-3xl text-gray-500 mb-2 pt-2 text-sans">
              FIXED DEPOSIT
            </h1>
            <div className="h-1 w-14 bg-blue-500 mb-2 rounded-md"></div>
            <ul>
              {fdData.map((element) => (
                <li className="problem-statement py-1 rounded-md   mb-3 px-14 shadow-lg text-sans bg-blue-200 ">
                  {element.name} <br />
                  Interest Rate : {element.interestRate}%
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-1 problem-statement p-4 rounded-md mb-4 bg-white max-h-[700px] overflow-y-scroll">
          <div className="flex flex-col items-center">
            <h1 className=" font-bold  text-center text-3xl text-gray-500 mb-2 pt-2 text-sans">
              DIGITAL GOLD
            </h1>
            <div className="h-1 w-14 bg-blue-500 mb-2 rounded-md"></div>
            <ul>
              {digitalGoldData.map((element) => (
                <li className="problem-statement py-4 rounded-md   mb-3 px-14 shadow-lg text-sans bg-blue-200 ">
                  {element.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 problem-statement p-4 rounded-md mb-4 bg-white max-h-[700px] overflow-y-scroll">
          <div className="flex flex-col items-center">
            <h1 className=" font-bold  text-center text-3xl text-gray-500 mb-2 pt-2 text-sans">
              DEBT MUTUAL FUND
            </h1>
            <div className="h-1 w-14 bg-blue-500 mb-2 rounded-md"></div>
            <ul>
              {dbtMutualFundData.map((element) => (
                <li className="problem-statement py-1 rounded-md   mb-3 px-14 shadow-lg text-sans bg-blue-200 ">
                  {element.name} <br />
                  Interest Rate : {element.interestRate}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 problem-statement p-4 rounded-md mb-4 bg-white max-h-[700px] overflow-y-scroll">
          <div className="flex flex-col items-center justify-center">
            <h1 className=" font-bold  text-center text-3xl text-gray-500 mb-2 pt-2 text-sans">
              EQUITY MUTUAL FUND
            </h1>
            Coming Soon...
            {/* <div className="h-1 w-14 bg-blue-500 mb-2 rounded-md"></div>
            <h1 className="font-semibold  text-center text-xl text-[#2616b7] mb-2 pt-2 text-sans">
              Large Mutual Funds Ranking
            </h1>{" "}
            <br />
            <ul>
              {funds.Large_Mutual_Funds_Ranking.map((element) => (
                <li className="problem-statement py-1 rounded-md   mb-3 px-14 shadow-lg text-sans bg-blue-200 ">
                  Rank : {element.Rank} <br />
                  {element.Fund_Name} <br />
                  Expected Return: {element.Expected_Return} %
                </li>
              ))}
            </ul>
            <br />
            <h1 className="font-semibold  text-center text-xl text-[#2616b7] mb-2 pt-2 text-sans">
              Mid Cap Mutual Funds Ranking
            </h1>{" "}
            <br />
            <ul>
              {funds.Midcap_Mutual_Funds_Ranking.map((element) => (
                <li className="problem-statement py-1 rounded-md   mb-3 px-14 shadow-lg text-sans bg-blue-200 ">
                  Rank : {element.Rank} <br />
                  {element.Fund_Name} <br />
                  Expected Return: {element.Expected_Return} %
                </li>
              ))}
            </ul>{" "}
            <br />
            <h1 className="font-semibold  text-center text-xl text-[#2616b7] mb-2 pt-2 text-sans">
              Small Mutual Funds Ranking
            </h1>{" "}
            <br />
            <ul>
              {funds.small_Mutual_Funds_Ranking.map((element) => (
                <li className="problem-statement py-1 rounded-md   mb-3 px-14 shadow-lg text-sans bg-blue-200 ">
                  Rank : {element.Rank} <br />
                  {element.Fund_Name} <br />
                  Expected Return: {element.Expected_Return} %
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
