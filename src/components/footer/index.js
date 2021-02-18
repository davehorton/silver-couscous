import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-600 w-full py-12 flex flex-col justify-center items-center">
      <ul className="px-4 md:p-0 w-full md:w-1/2">
        <li className="w-full flex flex-row justify-between items-center text-white my-2 font-medium">
          <p>Home</p>
          <p>View on GitHub</p>
        </li>
        <li className="w-full flex flex-row justify-between items-center text-white my-2 font-medium">
          <p>Pricing</p>
          <p>Join us on Slack</p>
        </li>
        <li className="w-full flex flex-row justify-between items-center text-white my-2 font-medium">
          <p>Docs</p>
          <p>Legal Documents</p>
        </li>
        <li className="w-full flex flex-row justify-between items-center text-white my-2 font-medium">
          <p>Register</p>
          <p>Built with Drachtio</p>
        </li>
        <li className="w-full flex flex-row justify-between items-center text-white my-2 font-medium">
          <p>Sign In</p>
          <p>support@jambonz.org</p>
        </li>
      </ul>
      <p className="pt-12 text-white font-medium">© 2020 Jambonz</p>
    </div>
  );
};

export default Footer;
