"use client";

import { useState } from "react";

const Advanced = ({ setResponseObj }) => {
  const [advancedData, setAdvancedData] = useState({
    risk: "1",
    options: "",
    dependency: "1",
    annualIncome: "",
    investmentDuration: "",
    loseMoney: "",
    riskOptions: "",
    volatility: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdvancedData({ ...advancedData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const surveyInfo = {
      risk: advancedData.risk / 10,
      options: advancedData.options / 1,
      dependency: advancedData.dependency / 10,
      annualIncome: advancedData.annualIncome / 1,
      investmentDuration: advancedData.investmentDuration / 1,
      loseMoney: advancedData.loseMoney / 1,
      riskOptions: advancedData.riskOptions / 1,
      volatility: advancedData.volatility / 1,
    };

    // Sending the userInfo object to the backend
    try {
      const response = await fetch(
        "http://localhost:8000/api/user-advanced-info",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ "Survey Information": surveyInfo }),
        }
      );

      if (response.ok) {
        // Handle success
        console.log("User information sent successfully.");
        const data = await response.json();
        // console.log(data.percentage);
        // console.log(data.funds);
        // console.log(typeof data);
        setResponseObj(data);
      } else {
        // Handle errors
        console.error("Failed to send user information.");
      }
    } catch (error) {
      console.error("Error sending user information:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center  text-gray-600  bg-white ">
      <h1 className="font-bold text-5xl text-[#4942E4] p-3 text-sans ">
        Let Us Know You
      </h1>

      <form>
        <div className="flex ">
          <div className="flex-1 problem-statement p-4  mb-4 bg-gradient-to-r drop-shadow-lg text-sans">
            <div className=" flex-1 problem-statement p-4 rounded-md mb-4 bg-white">
              <h2>On a scale of 1 to 10</h2> <br />
              How much risk are you willing to take :{" "}
              <input
                type="range"
                min="1"
                max="10"
                name="risk"
                value={advancedData.risk}
                onChange={handleChange}
                id="risk"
                className="w-full h-6 mt-2 bg-blue-100 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <p className="text-center text-lg font-semibold  mt-2">
                {advancedData.risk}
              </p>
            </div>
            <div className="problem-statement  p-4 rounded-md mb-4 bg-white">
              Choose one <br /> <br />
              <input
                type="radio"
                name="options"
                value="0.3"
                onChange={handleChange}
                id="op-1"
              />
              <label
                htmlFor="op-1"
                className="px-2"
              >
                Getting annual returns of 12% with a downfall risk of 5%
              </label>{" "}
              <br />
              <input
                type="radio"
                name="options"
                value="0.5"
                onChange={handleChange}
                id="op-2"
              />
              <label
                htmlFor="op-2"
                className="px-2"
              >
                Trying to get upside returns of 20% with a downfall risk of 15%
              </label>{" "}
              <br />
              <input
                type="radio"
                name="options"
                value="0.8"
                onChange={handleChange}
                id="op-3"
              />
              <label
                htmlFor="op-3"
                className="px-2"
              >
                Getting annual returns of 16% with a downfall risk of 10%
              </label>{" "}
              <br />
            </div>
            {/*3rd */}
            <div className="problem-statement p-4 rounded-md mb-4 bg-white">
              On a scale of 1 to 10 how dependent are you on money?
              <input
                type="range"
                min="1"
                max="10"
                name="dependency"
                value={advancedData.dependency}
                onChange={handleChange}
                id="dependency"
                className="w-full h-5 bg-blue-100 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <p className=" text-center text-lg text-gray-800 ml-2">
                {advancedData.dependency}
              </p>
            </div>
            {/* 4th*/}
            <div className="problem-statement p-4 rounded-md mb-4 bg-white">
              How much would you like to invest ?
              <div className="relative mt-2">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  ₹
                </span>
                <input
                  type="number"
                  name="annualIncome"
                  id="annualIncome"
                  value={advancedData.annualIncome}
                  onChange={handleChange}
                  className="pl-8 pr-4 py-2 w-full border border-blue-300 rounded-md focus:ring-blue-400 focus:border-blue-400 text-gray-800"
                />{" "}
              </div>
            </div>
            {/* 5th */}
            <div className="problem-statement p-4 rounded-md mb-4 bg-white ">
              How Long are you going to invest ?
              <input
                type="number"
                name="investmentDuration"
                id="investmentDuration"
                value={advancedData.investmentDuration}
                onChange={handleChange}
                className="pl-4 pr-4   border border-blue-300 rounded-md focus:ring-blue-400 focus:border-blue-400 text-gray-800 ml-3"
              />{" "}
            </div>
          </div>
          {/* Next side */}
          <div className="flex-1 problem-statement p-4 mb-4 bg-gradient-to-r ">
            <div className="problem-statement p-4 rounded-md mb-4 bg-white drop-shadow-lg ">
              How do you feel about the possibility of losing money in your
              investments ? <br /> <br />
              <input
                type="radio"
                name="loseMoney"
                value="0"
                onChange={handleChange}
                id="lm-1"
              />
              <label
                htmlFor="lm-1"
                className="px-2"
              >
                Very Uncomfortable
              </label>{" "}
              <br />
              <input
                type="radio"
                name="loseMoney"
                value="0.25"
                onChange={handleChange}
                id="lm-2"
              />
              <label
                htmlFor="lm-2"
                className="px-2"
              >
                Somewhat Uncomfortable
              </label>{" "}
              <br />
              <input
                type="radio"
                name="loseMoney"
                value="0.5"
                onChange={handleChange}
                id="lm-3"
              />
              <label
                htmlFor="lm-3"
                className="px-2"
              >
                Nuetral
              </label>{" "}
              <br />
              <input
                type="radio"
                name="loseMoney"
                value="0.75"
                onChange={handleChange}
                id="lm-4"
              />
              <label
                htmlFor="lm-4"
                className="px-2"
              >
                Somewhat Comfortable
              </label>{" "}
              <br />
              <input
                type="radio"
                name="loseMoney"
                value="1"
                onChange={handleChange}
                id="lm-5"
              />
              <label
                htmlFor="lm-5"
                className="px-2"
              >
                Very Comfortable
              </label>{" "}
              <br /> <br />
            </div>
            {/* next */}
            <div className="flex-1 problem-statement p-4 rounded-md mb-4 bg-white drop-shadow-lg">
              Are you more interested in preserving your capital or are you
              willing to take higher risks for potential higher returns ? <br />{" "}
              <br />
              <input
                type="radio"
                name="riskOptions"
                value="0"
                onChange={handleChange}
                id="ro-1"
              />
              <label
                htmlFor="ro-1"
                className="px-2"
              >
                Capital Preservation
              </label>{" "}
              <br />
              <input
                type="radio"
                name="riskOptions"
                value="0.5"
                onChange={handleChange}
                id="ro-2"
              />
              <label
                htmlFor="ro-2"
                className="px-2"
              >
                Balanced Approach
              </label>{" "}
              <br />
              <input
                type="radio"
                name="riskOptions"
                value="1"
                onChange={handleChange}
                id="ro-3"
              />
              <label
                htmlFor="ro-3"
                className="px-2"
              >
                Growth and returns
              </label>{" "}
              <br /> <br />
            </div>
            {/* next */}
            <div className="flex-1 problem-statement p-4 rounded-md mb-4 bg-white drop-shadow-lg pb-6">
              How do you typically react during periods of market volatility ?{" "}
              <br /> <br />
              <input
                type="radio"
                name="volatility"
                value="0"
                onChange={handleChange}
                id="v-1"
              />
              <label
                htmlFor="v-1"
                className="px-2"
              >
                Panic and Sell
              </label>{" "}
              <br />
              <input
                type="radio"
                name="volatility"
                value="0.5"
                onChange={handleChange}
                id="v-2"
              />
              <label
                htmlFor="v-2"
                className="px-2"
              >
                Hold steady
              </label>{" "}
              <br />
              <input
                type="radio"
                name="volatility"
                value="1"
                onChange={handleChange}
                id="v-3"
              />
              <label
                htmlFor="v-3"
                className="px-2"
              >
                See it as an oppurtunity to buy
              </label>{" "}
              <br />
              <br /> <br />
            </div>
            {/* next */}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 mt-[-30px] px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Advanced;
