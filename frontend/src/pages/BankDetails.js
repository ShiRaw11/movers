import Input from "../components/Input";
import MoverButton from "..//components/MoverButton";
import MoverLink from "..//components/MoverLink";

import React, { useState } from 'react'
import axios from "axios";
import logo from "..//images/logo.png"
import { useNavigate } from "react-router-dom";

function BankDetails() {
  const [bankname, setBankName] = useState("");
  const url = process.env.BASE_URL
  const [accountname, setAccountName] = useState("");
    const [subbranch, setSubBranch] = useState("");
    const [accountnumber, setAccountNumber] = useState("");
    const [swiftcode, setSwiftcode] = useState("");
  
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
 
    const onSubmitForm = async (e) => {
        e.preventDefault();
        console.log("Inside submit")
        try {
            await axios.post('http://localhost:5000/api/v1/addbank', {
                bankname: bankname,
                accountname: accountname,
                accountnumber:accountnumber,
                subbranch: subbranch,
                swiftcode: swiftcode,
              
            }).then(res => {
              //console.log(res);
              navigate("/CompanyDetails");
            });
         
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.error);
            }
        }
    }
  return (
    <div className="bg-background  flex h-screen">
     
        <div className= " w-[50%] my-auto  h-full bg-trial">
<img className="ml-[20px] mt-[40px]" src={logo} alt="logo">
 
</img>
<div className="flex justify-center items-center mt-[150px] ml-[20px]">
          <h className="text-[25px] w-[60%] font-bold text-white ">
            K-Movers connects you to your customers!
          </h>
          </div>
        </div>
        <div className="bg-white overflow-auto w-[800px] my-auto h-full items-center overflow-auto shadow-lg">

      
            
     
        <h className=" w-[60%] text-trial font-bold flex justify-start items-center mt-[40px]  pr-[20px] mx-auto  text-[20px]">
          How do we pay you?
        </h>
            
            
            
            
          <div className="  w-[90%] h-[90%] mx-auto ">
            <form className="items-center mt-[30px] ml-[100px] " onSubmit={onSubmitForm}>
            <p className="has-text-centered text-red text-sm mb-[10px] ">{msg}</p>
            <Input id={'floating-name'} inputType={"name"} label={"Bank Name"}  value={bankname} onChange={(e) => setBankName(e.target.value)}
          />
          
            <Input label={"Account Name"} value={accountname} inputType={"name"} onChange={(e) => setAccountName(e.target.value)}/>
            <Input label={"Account Number"} inputType={"text"} value={accountnumber} onChange={(e) => setAccountNumber(e.target.value)}/>

              <Input label={"Bank sub-branch(if any)"} inputStyle={"text"} value={subbranch} onChange={(e) => setSubBranch(e.target.value)}/>
              <Input label={"Bank swift code"} value={swiftcode} onChange={(e) => setSwiftcode(e.target.value)}/>

              
              <button type="submit" className="flex justify-end text-purple w-[400px]">Next</button>
             
            



            
            
            </form>
          
          

      
        </div>
      </div>
    </div>
  );
}

export default BankDetails;
