"use client";

import { useState } from "react";

function UserInfoForm({ setResult }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    location: "",
    annualIncome: "",
    debtAmount: "0",
    debtInterestRate: "0",
    family: "No", // No as default
    investmentType: "Savings",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Creating the user information object
    const userInfo = {
      Name: formData.name,
      Age: formData.age,
      Location: formData.location,
      "Annual Income": formData.annualIncome,
      Debt: {
        Amount: formData.debtAmount,
        "Interest Rate": formData.debtInterestRate,
      },
      Family: formData.family,
      "Investment Type": formData.investmentType,
    };

    // Sending the userInfo object to the backend
    // try {
    //   const response = await fetch("http://localhost:8000/api/user-info", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ "User Information": userInfo }),
    //   });

    //   if (response.ok) {
    //     // Handle success
    //     console.log("User information sent successfully.");
    //     const data = await response.json();
    //     const jsn = JSON.parse(data);
    //     // setResponseObj(data?.processedData);
    //     setResponseObj(jsn);
    //     // console.log(jsn["User Information"]);
    //     // console.log(data["Expense Allocation"]);
    //   } else {
    //     // Handle errors
    //     console.error("Failed to send user information.");
    //   }
    // } catch (error) {
    //   console.error("Error sending user information:", error);
    // }

    setResult(userInfo);
    console.log(userInfo);
  };

  return (
    <form>
      <div className="flex">
        <div className="flex-1 bg-red-300">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-center font-sans font-bold text-5xl mt-3">
                Personal Information
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="block text-xl font-semibold leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-slate-600 sm:max-w-md">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        id="name"
                        autoComplete="name"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="age"
                    className="block text-xl font-semibold leading-6 text-gray-900"
                  >
                    Age
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="number"
                        name="age"
                        id="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="block text-xl font-semibold leading-6 text-gray-900"
                  >
                    Annual Income
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="number"
                        name="annualIncome"
                        value={formData.annualIncome}
                        onChange={handleChange}
                        id="annualIncome"
                        autoComplete="name"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="location"
                    className="block text-xl font-semibold leading-6 text-gray-900"
                  >
                    Location
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="location"
                        id="location"
                        value={formData.location}
                        onChange={handleChange}
                        autoComplete="name"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-1/2">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-center font-sans font-bold text-5xl mt-3">
              Debt Information
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="debtAmount"
                  className="block text-xl font-semibold leading-6 text-gray-900"
                >
                  Debt Amount
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="debtAmount"
                    id="debtAmount"
                    value={formData.debtAmount}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="debtInterestRate"
                  className="block text-xl font-semibold leading-6 text-gray-900"
                >
                  Debt Rate
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="debtInterestRate"
                    id="debtInterestRate"
                    value={formData.debtInterestRate}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="debtDuration"
                  className="block text-xl font-semibold leading-6 text-gray-900"
                >
                  Debt Duration
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="debtDuration"
                    id="debtDuration"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-center font-sans font-bold text-5xl mt-3">
                  Family
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="familyYes"
                      name="family"
                      type="radio"
                      value="Yes"
                      onChange={handleChange}
                      checked={formData.family === "Yes"}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="familyYes"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      defaultValue={false}
                      id="familyNo"
                      name="family"
                      type="radio"
                      value="No"
                      onChange={handleChange}
                      checked={formData.family === "No"}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="familyNo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      No
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="investmentType"
                className="block text-xl font-semibold leading-6 text-gray-900"
              >
                Investment Type
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="investmentType"
                    id="investmentType"
                    value={formData.investmentType}
                    onChange={handleChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="button"
          className="text-lg font-semibold leading-6 text-gray-900 "
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 py-2 text-md px-6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default UserInfoForm;
