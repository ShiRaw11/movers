import DashboardNavBar from "../components/DashboardNavBar";
import NavLink from "../components/NavLink";
import {
  FaClipboard,
  FaHome,
  FaMailBulk,
  FaQuestionCircle,
  FaSearch,
  FaAngleDown,
  FaBell
} from "react-icons/fa";
import { BsFillChatLeftFill} from "react-icons/bs";

import SideBar from "../components/SideBar";
import Search from "../components/Search";
import MoverLink from "../components/MoverLink";
import { Menu, Tab, Transition } from "@headlessui/react";
import React, { Fragment,useEffect,useState } from "react";
import ListDiv from "../components/ListDiv";
import Avatar from "../components/Avatar";
import move from "..//images/move1.jpg";

function UserDashboard() {
const [user,setUser] = useState([]);

const getUser = async() => {
  try {
    const response= await fetch ("http://localhost:3000/getmover");
    const jsonData= await response.json()

    setUser(jsonData)
  } catch (err) {
    console.error(err.message);  
  }
}

useEffect(() => {
  getUser();
},[])

  return (
    <div className="bg-background h-screen">
      <div className="h-[10%]">
        <DashboardNavBar
          navLink={
            <>
              <NavLink icon={<BsFillChatLeftFill />} CoverStyle={"mt-0 "} />
              <NavLink icon={<FaBell />} CoverStyle={"mt-0 ml-[60px]"} />
            </>
          }
        />
      </div>
      <div className="flex">
        <div>
          <SideBar
          isUser
          
            SideBarLinks={
              <>
                <NavLink icon={<FaHome />} linkTitle={"Home"} />
                <NavLink icon={<FaClipboard />} linkTitle={"Orders"} />
                <NavLink icon={<FaMailBulk />} linkTitle={"MailBox"} />
                <NavLink icon={<FaQuestionCircle />} linkTitle={"Help"} />
              </>
            }
          />
        </div>
        <div className=" w-screen">
          <Search iconPresent={<FaSearch />} />

          <div className="py-[20px] ">
            <select
              id="Type"
              className="text-sm block font-bold h-[50px]  px-[10px] rounded-md w-[200px]  
          bg-transparent  border border-black  cursor-pointer  hover:bg-white focus:border-gray-600 focus:outline-none"
            >
              <option value="group">Country</option>
              <option value="one">Nairobi</option>
            </select>
          </div>

          <Tab.Group>
            <div className="px-[20px] ">
              <Tab.List className="text-[20px] space-x-[60px]">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected ? "text-black font-semibold" : "text-purple"
                      }
                    >
                      Household Moving
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected ? "text-black font-semibold" : "text-purple"
                      }
                    >
                      Office relocation
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected ? "text-black font-semibold" : "text-purple"
                      }
                    >
                      Warehousing
                    </button>
                  )}
                </Tab>

                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected ? "text-black font-semibold" : "text-purple"
                      }
                    >
                      Document Management
                    </button>
                  )}
                </Tab>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="flex items-center">
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
                    <Menu.Items className="absolute mt-2 w-[200px] origin-top-bottom rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="">
                        <Menu.Item>
                          <Tab as={Fragment}>
                            {({ selected }) => (
                              <button
                                className={
                                  selected
                                    ? "text-black font-semibold"
                                    : "text-purple"
                                }
                              >
                                Document Management
                              </button>
                            )}
                          </Tab>
                        </Menu.Item>
                        <Menu.Item>
                          <Tab as={Fragment}>
                            {({ selected }) => (
                              <button
                                className={
                                  selected
                                    ? "text-black font-semibold"
                                    : "text-purple"
                                }
                              >
                                Document Management
                              </button>
                            )}
                          </Tab>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </Tab.List>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <ListDiv
                  divStyle={"flex"}
                  children={
                    <div className="flex">
                      <div className="w-[25%]">
                        <Avatar
                          isCompany={true}
                          CompanyName={"Tay moves"}
                          CompanyImage={move}
                          rate={"rate"}
                        />
                      </div>
                      <div className="">
                        <p className="ml-[10px] mt-[20px]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book...{" "}
                          <MoverLink linkTitle={"View more"} />
                        </p>
                      </div>
                    </div>
                  }
                />
              </Tab.Panel>
              <Tab.Panel>
                <ListDiv
                  divStyle={"flex"}
                  children={
                    <div className="flex">
                      <div className="w-[25%]">
                        <Avatar
                          isCompany={true}
                          CompanyName={"Tay moves"}
                          CompanyImage={move}
                          rate={"rate"}
                        />
                      </div>
                      <div className="">
                        <p className="ml-[10px] mt-[20px]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book...{" "}
                          <MoverLink linkTitle={"View more"} />
                        </p>
                      </div>
                    </div>
                  }
                />
              </Tab.Panel>
              <Tab.Panel>
                <ListDiv
                  divStyle={"flex"}
                  children={
                    <div className="flex">
                      <div className="w-[25%]">
                        <Avatar
                          isCompany={true}
                          CompanyName={"Tay moves"}
                          CompanyImage={move}
                          rate={"rate"}
                        />
                      </div>
                      <div className="">
                        <p className="ml-[10px] mt-[20px]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book...{" "}
                          <MoverLink linkTitle={"View more"} />
                        </p>
                      </div>
                    </div>
                  }
                />
              </Tab.Panel>
              <Tab.Panel>
                <ListDiv
                  divStyle={"flex"}
                  children={
                    <div className="flex">
                      <div className="w-[25%]">
                        <Avatar
                          isCompany={true}
                          CompanyName={"Tay moves"}
                          CompanyImage={move}
                          rate={"rate"}
                        />
                      </div>
                      <div className="">
                        <p className="ml-[10px] mt-[20px]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book...{" "}
                          <MoverLink linkTitle={"View more"} />
                        </p>
                      </div>
                    </div>
                  }
                />
              </Tab.Panel>
              <Tab.Panel>
                <ListDiv
                  divStyle={"flex w-[120px]"}
                  children={
                    <div className="flex">
                      <div className="w-[25%]">
                        <Avatar
                          isCompany={true}
                          CompanyName={"Tay moves"}
                          CompanyImage={move}
                          rate={"rate"}
                        />
                      </div>
                      <div className="">
                        <p className="ml-[10px] mt-[20px]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book...{" "}
                          <MoverLink linkTitle={"View more"} />
                        </p>
                      </div>
                    </div>
                  }
                />
              </Tab.Panel>
              <Tab.Panel>
                <ListDiv
                  divStyle={"flex"}
                  children={
                    <div className="flex">
                      <div className="w-[25%]">
                        <Avatar
                          isCompany={true}
                          CompanyName={"Tay moves"}
                          CompanyImage={move}
                          rate={"rate"}
                        />
                      </div>
                      <div className="">
                        <p className="ml-[10px] mt-[20px]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book...{" "}
                          <MoverLink
                            linkTitle={"View more"}
                            linkStyle={"pl-0"}
                          />
                        </p>
                      </div>
                    </div>
                  }
                />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
