import React from "react";
import { IoIosSend } from "react-icons/io";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96"></div>
      <div className="flex felx-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">Let&apos;s connect today and discuss how I can help you achieve your goals.</p>
        <a href="mailto:bharathkumarmurugan2016@gmail">
          <MagicButton title="Let's get in touch" icon={<IoIosSend />} position="right" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
