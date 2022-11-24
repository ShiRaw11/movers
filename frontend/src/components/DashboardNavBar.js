import { Menu, Transition } from "@headlessui/react";

import Avatar from "./Avatar";
import image from "..//images/profile.jpg";

import { Fragment } from "react";
import { BiExit, BiUser } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "..//images/logo.png";

function DashboardNavBar({ navStyle, navLink }) {
  return (
    <nav
      className={` bg-white w-[100vw] h-[3.8em] shadow-[0_0_10px_1px_rgba(0,0,0,0.15)] flex items-center justify-between ${
        navStyle ? navStyle : ""
      }`}
    >
      <div className="container flex items-center justify-between w-[90%] mx-auto">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Avatar"
            className="h-[100%] w-[100%] object-cover "
          ></img>
        </div>
        <div class="ml-[30px] flex items-center ">{navLink}</div>
        <div className="flex items-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex items-center space-x-1">
                <Avatar profile={image} isUser={true} UserStyle={"pt-0 mx-0"} />
                <FaAngleDown />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute mt-2 w-[160px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="p-[5px]">
                  <Menu.Item>
                    <Link to="/">
                      <button className=" group flex w-full items-center rounded-md px-2 py-2 text-sm">
                        {" "}
                        <BiUser className="mr-[.5em]" /> My profile{" "}
                      </button>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/">
                      <button className=" group flex w-full items-center rounded-md px-2 py-2 text-sm">
                        {" "}
                        <BiExit className="mr-[.5em]" /> Log out{" "}
                      </button>
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavBar;
