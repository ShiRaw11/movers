import DashboardNavBar from "../components/DashboardNavBar";
import NavLink from "../components/NavLink";
import {
  FaMailBulk,
  FaQuestionCircle,
  FaUserCog,
  FaAngleDown,
} from "react-icons/fa";

import { RiFileSettingsFill } from "react-icons/ri";
import {
  BsFillCalendarEventFill,
  BsFillChatFill,
  BsBellFill,
} from "react-icons/bs";
import SideBar from "../components/SideBar";

import { Tab } from "@headlessui/react";
import React, { Fragment } from "react";
import ListDiv from "../components/ListDiv";
import Avatar from "../components/Avatar";
import move from "..//images/move2.jpg";

import MoverButton from "../components/MoverButton";
function CompanyDashboard() {
  return (
    <div className="bg-background h-screen">
      <div className="h-[10%]">
        <DashboardNavBar
          navLink={
            <div className="flex">
              <NavLink linkTitle={"Home"} CoverStyle={"mt-0"} />
              <NavLink linkTitle={"Bookings"} CoverStyle={"mt-0 ml-[80px]"} />
              <NavLink linkTitle={"Services"} CoverStyle={"mt-0 ml-[80px]"} />
              <NavLink linkTitle={"Wallet"} CoverStyle={"mt-0 ml-[80px]"} />
              <NavLink
                icon={<BsFillChatFill />}
                CoverStyle={"mt-0 ml-[100px]"}
              />
              <NavLink icon={<BsBellFill />} CoverStyle={"mt-0 ml-[40px]"} />
            </div>
          }
        />
      </div>
      <div className="flex">
        <div>
          <div className=" ml-[20px] ">
            <Avatar
              isCompany
              CompanyStyle={""}
              CompanyProfileStyle={"w-[180px] pt-0 h-[100px]"}
              CompanyName={"Tay Moves"}
              CompanyImage={move}
              view={'View profile'}
            />
          </div>

          <SideBar
            SideBarLinks={
              <>
                <NavLink icon={<FaUserCog />} linkTitle={"Account Settings"} />
                <NavLink
                  icon={<RiFileSettingsFill />}
                  linkTitle={"Profile Settings"}
                />
                <NavLink icon={<FaMailBulk />} linkTitle={"MailBox"} />
                <NavLink icon={<FaQuestionCircle />} linkTitle={"Tips"} />
                <NavLink
                  icon={<BsFillCalendarEventFill />}
                  linkTitle={"Event"}
                />
              </>
            }
          />
        </div>
        <div className="mt-[20px] ml-[20px] w-screen">
          <Tab.Group>
            <div className=" ">
              <ListDiv
                divStyle={"h-[60px] w-[90%]"}
                children={
                  <Tab.List className="text-[20px]  space-x-[60px]">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={
                            selected
                              ? "text-black font-semibold"
                              : "text-purple"
                          }
                        >
                          User Settings
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={
                            selected
                              ? "text-black font-semibold"
                              : "text-purple"
                          }
                        >
                          Company Detaills
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={
                            selected
                              ? "text-black font-semibold"
                              : "text-purple"
                          }
                        >
                          Bank Details
                        </button>
                      )}
                    </Tab>

                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={
                            selected
                              ? "text-black font-semibold"
                              : "text-purple"
                          }
                        >
                          Management Details
                        </button>
                      )}
                    </Tab>
                  </Tab.List>
                }
              />
            </div>

            <Tab.Panels>
              <Tab.Panel>
                <div className="bg-white  w-[800px] mt-[40px] h-[400px] shadow-lg">
                  <div className="container pt-[40px] ml-[80px]">
                    <MoverButton
                      buttonStyle={
                        "w-[650px] text-midnight  bg-transparent border "
                      }
                      buttonText={"Profile"}
                      iconPresent={<FaAngleDown />}
                    />
                    <MoverButton
                      buttonStyle={
                        "w-[650px] text-midnight  bg-white border "
                      }
                      buttonText={"Phone number"}
                      iconPresent={<FaAngleDown />}
                    />
                    <MoverButton
                      buttonStyle={
                        "w-[650px] text-midnight  bg-white border "
                      }
                      buttonText={"Email"}
                      iconPresent={<FaAngleDown />}
                    />
                    <MoverButton
                      buttonStyle={
                        "w-[650px] text-midnight  bg-white border "
                      }
                      buttonText={"Change Password"}
                      iconPresent={<FaAngleDown />}
                    />
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="bg-white  w-[800px] mt-[40px] h-[400px] shadow-lg">
                  <div className="container pt-[40px] ml-[80px]">
                    <MoverButton
                      buttonStyle={
                        "w-[650px] text-midnight  bg-white border "
                      }
                      buttonText={"Company profile"}
                      iconPresent={<FaAngleDown />}
                    />
                    <MoverButton
                      buttonStyle={
                        "w-[600px]  bg-none border "
                      }
                      buttonText={"Location"}
                      iconPresent={<FaAngleDown />}
                    />
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="bg-white  w-[800px] mt-[40px] h-[400px] shadow-lg">
                  <div className="container pt-[40px] ml-[80px]">
                    <MoverButton
                      buttonStyle={
                        "w-[650px] text-midnight  bg-white border "
                      }
                      buttonText={"Account Name"}
                      iconPresent={<FaAngleDown />}
                    />
                    <MoverButton
                      buttonStyle={
                        "w-[650px] bg-white border "
                      }
                      buttonText={"Account Number"}
                      iconPresent={<FaAngleDown />}
                    />
                    <MoverButton
                      buttonStyle={
                        "w-[650px] bg-transparent border "
                      }
                      buttonText={"Bank Profile"}
                      iconPresent={<FaAngleDown />}
                    />
                  </div>
                </div>
              </Tab.Panel>

              <Tab.Panel>
                <div className="bg-white  w-[800px] mt-[40px] h-[400px] shadow-lg">
                  <div className="container pt-[40px] ml-[80px]">
                    <MoverButton
                      buttonStyle={
                        "w-[650px] bg-transparent border "
                      }
                      buttonText={"Profile"}
                      iconPresent={<FaAngleDown />}
                    />
                    <MoverButton
                      buttonStyle={
                        "w-[650px] bg-white border "
                      }
                      buttonText={"Phone number"}
                      iconPresent={<FaAngleDown />}
                    />
                    <MoverButton
                      buttonStyle={
                        "w-[650px] bg-white border "
                      }
                      buttonText={"Email"}
                      iconPresent={<FaAngleDown />}
                    />
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
