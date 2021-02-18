import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const LandingPageLayout = ({ children }) => {
  return (
    <div className="bg-gray-300 flex flex-col justify-center items-center">
      <div className="w-full xl:w-mainWidth bg-gray-200">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default LandingPageLayout;
