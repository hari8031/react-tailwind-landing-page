import React from "react";

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div
        className="container flex flex-col-reverse justify-between
       px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
      >
        {/* links and logo */}
        <div className="text-white mx-auto md:hidden text-center my-6">
          Copyright &copy; 2023, All Rights Reserved
        </div>
        <div
          className="flex flex-col-reverse items-center justify-between 
        space-y-12 md:flex-col md:space-y-0 md:items-start "
        >
          <img
            src="/image/logo-white.svg"
            alt=""
            className="h-8 mt-5"
          />
          <div className="flex justify-center space-x-4 md:pt-2">
            <a href="#">
              <img
                src="/image/icon-youtube.svg"
                className="h-8"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="/image/icon-facebook.svg"
                className="h-8"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="/image/icon-twitter.svg"
                className="h-8"
                alt=""
              />
            </a>

            <a href="#">
              <img
                src="/image/icon-instagram.svg"
                className="h-8"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="/image/icon-pinterest.svg"
                className="h-8"
                alt=""
              />
            </a>
          </div>
        </div>
        {/*  list container*/}
        <div className="flex justify-around space-x-32 ">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Products
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Creers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>
        {/* imput Container*/}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button
                className="px-6 py-2 text-white rounded-full bg-brightRed
               hover:bg-brightRedLight focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
