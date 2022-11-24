import Input from "../components/Input";
import MoverButton from "..//components/MoverButton";

import React, { useState } from "react";
import axios from "axios";
import logo from "..//images/logo.png";
import { useNavigate } from "react-router-dom";
import MoverLink from "..//components/MoverLink";
function ManagementDetails() {
  const [contactname, setContactName] = useState("");
  const url = process.env.BASE_URL;
  const [contactaddress, setAddress] = useState("");
  const [contactemail, setEmail] = useState("");
  const [contactphonenumber, setPhoneNumber] = useState("");

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log("Inside submit");
    try {
      await axios
        .post("http://localhost:5000/api/v1/addmanagement", {
          contactname: contactname,
          contactaddress: contactaddress,
          contactphonenumber: contactphonenumber,
          contactemail: contactemail,
        })
        .then((res) => {
          console.log(res);
        });
      navigate("/BankDetails");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.error);
      }
    }
  };
  return (
    <div className="bg-background  flex h-screen">
      <div className=" w-[50%] my-auto  h-full bg-trial">
        <img className="ml-[20px] mt-[40px]" src={logo} alt="logo"></img>
        <div className="flex justify-center items-center mt-[150px] ml-[20px]">
          <h className="text-[25px] w-[60%] font-bold text-white ">
            K-Movers connects you to your customers!
          </h>
        </div>
      </div>
      <div className="bg-white overflow-auto w-[800px] my-auto h-full items-center overflow-auto shadow-lg">
        <h className=" w-[60%] flex justify-start items-center mt-[40px] text-trial font-bold  pr-[40px] mx-auto  text-[20px]">
          How do we contact you?
        </h>

        <div className="  w-[90%] h-[90%] mx-auto ">
          <form
            className="items-center mt-[30px] ml-[100px] "
            onSubmit={onSubmitForm}
          >
     <p className="has-text-centered text-red text-sm mb-[10px] ">{msg}</p>
            <Input
              inputType={"name"}
              label={"Contact Name"}
              value={contactname}
              onChange={(e) => setContactName(e.target.value)}
            />

            <Input
              label={"Website URL"}
              value={contactaddress}
              inputType={"name"}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              label={"Contact Email"}
              inputType={"email"}
              value={contactemail}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label={"Contact Phonenumber"}
              value={contactphonenumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
<button type="submit" className="flex justify-end text-purple w-[400px]">Next</button>
           
          </form>
        </div>
      </div>
    </div>
  );
}

export default ManagementDetails;
