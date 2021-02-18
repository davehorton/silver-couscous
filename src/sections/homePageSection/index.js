import React from "react";

const HomePageSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full py-16 lg:py-36 flex flex-col lg:flex-row bg-gray-100">
        <div className="w-full lg:w-1/2 px-4 md:px-8 flex justify-center items-center flex-col md:block">
          <h1 className="text-4xl md:text-5xl xl:text-6xl text-center md:text-left text-gray-800 font-semibold leading-10 lg:leading-headerTitles">
            CPaaS. Simplified.
          </h1>
          <p className="text-3xl md:text-4xl xl:text-5xl text-center md:text-left text-gray-700 font-normal mt-4 leading-10 lg:leading-headerTitles">
            We provide the engine. You provide the fuel
          </p>
          <p className="text-3xl md:text-4xl xl:text-5xl text-center md:text-left font-semibold text-pink-600 leading-10 lg:leading-headerTitles mt-4">
            Let’s roll.
          </p>
          <p className="font-normal leading-8 text-base text-center md:text-left md:text-xl text-gray-500 mt-4">
            Jambonz is the open source Communication API engine that you connect
            to your own applications, SIP trunks and speech services.
          </p>
          <button
            className="bg-pink-600 py-2 px-4 text-white rounded mt-11 font-medium"
            type="button"
          >
            Sign up for free
          </button>
        </div>
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex flex-col justify-start items-center pt-12 relative">
          <img src="/Logo-Slogan.png" className="px-4 md:px-0" />
          <div className="p-4 bg-white rounded-full z-10 relative lg:absolute left-0 ml-0 lg:ml-48 mt-0 lg:mt-28">
            <img className="z-10" src="/images/phone.svg" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-12 w-full md:w-2/3 lg:w-homeDescriptionText relative">
        <img
          className="absolute z-0 hidden lg:block left-0 ml-7 mt-homeVectorTop w-homeVectorWidth"
          src="/images/home-vector.svg"
        />
        <div className="flex flex-col md:flex-row items-center md:items-start px-4 w-full lg:px-0 mb-24">
          <div className="z-10 p-4 rounded-full bg-white flex justify-center items-center">
            <img className="w-18 md:w-20" src="/images/application.svg" />
          </div>
          <div className="ml-0 md:ml-4 mt-4 md:mt-0">
            <h1 className="text-3xl font-semibold text-gray-700 text-center md:text-left mt-3.5">
              Route calls with your own application
            </h1>
            <p className="text-gray-700 font-normal leading-5 mt-2.5 text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              magna metus, tempor vitae neque id, mollis pretium elit. Phasellus
              auctor porta nibh, nec tempor massa pulvinar id. Phasellus eu
              finibus ante.
              <br /> <br />
              Praesent quis pharetra purus, in vestibulum diam. Morbi
              condimentum odio neque, sit amet finibus turpis pretium ut. Nunc
              lacinia scelerisque porttitor.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start px-4 w-full lg:px-0 mb-20">
          <div className="z-10 p-4 rounded-full bg-white flex justify-center items-center">
            <img className="w-18 md:w-20" src="/images/message.svg" />
          </div>
          <div className="ml-0 md:ml-4 mt-4 md:mt-0">
            <h1 className="text-3xl font-semibold text-gray-700 text-center md:text-left mt-3.5">
              Bring your own speech services
            </h1>
            <p className="text-gray-700 font-normal leading-5 mt-2.5 text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              magna metus, tempor vitae neque id, mollis pretium elit. Phasellus
              auctor porta nibh, nec tempor massa pulvinar id. Phasellus eu
              finibus ante.
              <br /> <br />
              Praesent quis pharetra purus, in vestibulum diam. Morbi
              condimentum odio neque, sit amet finibus turpis pretium ut. Nunc
              lacinia scelerisque porttitor.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start px-4 w-full lg:px-0 mb-20">
          <div className="z-10 p-4 rounded-full bg-white flex justify-center items-center">
            <img className="w-18 md:w-20" src="/images/app-menu.svg" />
          </div>
          <div className="ml-0 md:ml-4 mt-4 md:mt-0">
            <h1 className="text-3xl font-semibold text-gray-700 text-center md:text-left mt-3.5">
              Host it yourself
            </h1>
            <p className="text-gray-700 font-normal leading-5 mt-2.5 text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              magna metus, tempor vitae neque id, mollis pretium elit. Phasellus
              auctor porta nibh, nec tempor massa pulvinar id. Phasellus eu
              finibus ante.
              <br /> <br />
              Praesent quis pharetra purus, in vestibulum diam. Morbi
              condimentum odio neque, sit amet finibus turpis pretium ut. Nunc
              lacinia scelerisque porttitor.
            </p>
          </div>
        </div>
        <button
          className="bg-pink-600 py-2 px-8 text-white rounded mt-12 lg:mt-36 ml-0 lg:-ml-16 z-10 mb-24 lg:mb-24 font-medium"
          type="button"
        >
          Try it Free
        </button>
      </div>
    </div>
  );
};

export default HomePageSection;
