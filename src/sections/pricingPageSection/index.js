import React from "react";
import {
  accounts,
  readyToGrow,
  addOnsTable,
} from "../../constants/landingPages/pricing";

const PricingPageSection = () => {
  return (
    <div>
      <div className="bg-gray-100 flex flex-col justify-center items-center">
        <h1 className="mt-16 text-4xl sm:text-5xl font-normal text-gray-600 text-center">
          Pricing
        </h1>
        <h2 className="font-normal text-3xl sm:text-4xl text-pink-600 mt-6 text-center">
          jambonz accounts are free.
        </h2>
        <p className="text-2xl sm:text-3xl font-normal text-gray-600 mt-8 text-center">
          Every account comes with
        </p>
        <div className="flex flex-col md:flex-row items-center mt-8">
          {accounts.map((account, i) => (
            <div
              key={i}
              className="w-11/12 sm:w-80 h-40 mx-2 my-2 md:my-0 bg-white rounded-md flex flex-col justify-center items-center shadow-md"
            >
              <h1 className="text-2xl font-medium text-gray-600">
                {account.title}
              </h1>
              <p className="leading-8 text-center mt-4 font-normal">
                {account.description}
              </p>
            </div>
          ))}
        </div>
        <h1 className="mt-16 text-4xl sm:text-5xl font-normal text-gray-600 text-center">
          Ready to grow?
        </h1>
        <div className="flex flex-col lg:flex-row items-center mt-8 pb-14">
          {readyToGrow.map((item, i) => (
            <div
              key={i}
              className="w-11/12 sm:w-80 h-48 p-8 mx-2 my-2 lg:my-0 bg-white rounded-md flex flex-col justify-center items-center shadow-md"
            >
              <h1 className="text-2xl font-medium text-gray-600">
                {item.title}
              </h1>
              <p className="text-center mt-4 font-normal">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-4 text-3xl sm:text-4xl font-normal text-gray-600">
          Add-Ons
        </h1>
        <table className="table-auto bg-white w-11/12 md:w-2/3 rounded-md overflow-hidden shadow-md mt-8">
          <thead>
            <tr>
              <th className="px-4 py-4 border-2 text-left text-gray-600">
                Add-On
              </th>
              <th className="px-4 py-4 border-2 text-gray-600">Pricing</th>
            </tr>
          </thead>
          <tbody>
            {addOnsTable.map((item, i) => (
              <tr key={i}>
                <td className="px-4 py-4 border-2 text-gray-600">
                  {item.addOn}
                </td>
                <td className="px-4 py-4 border-2 text-gray-600">
                  {item.pricing}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1 className="mt-16 text-3xl sm:text-4xl font-normal text-gray-600 text-center">
          Want to learn more?
        </h1>
        <div className="mt-8 bg-white w-11/12 sm:w-auto rounded-md flex flex-col justify-center items-center p-6 shadow-md">
          <p className="font-normal text-gray-600 text-center">
            Contact us for additional information at
          </p>
          <p className="font-medium text-pink-500 mt-4 text-center">
            sales@jambonz.org
          </p>
        </div>
        <button
          className="bg-pink-600 py-2 px-8 text-white rounded mt-16 mb-24 font-medium"
          type="button"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default PricingPageSection;
