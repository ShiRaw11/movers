import Input from "../components/Input";
import MoverButton from "..//components/MoverButton";
import MoverLink from "..//components/MoverLink";
import React, { useState } from 'react'
import axios from "axios";
import logo from "..//images/logo.png"
import { useNavigate } from "react-router-dom";
function CompanyDetails() {

  const url = process.env.BASE_URL
  const [companyname, setCompanyName] = useState("");
    const [location, setLocation] = useState("");
    const [address, setAddress] = useState("");
    const [postalcode, setPostalCode] = useState("");
    const [certificate, setCertificate] = useState("");
    const [licence, setLicence] = useState("");
  
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
 
    const onSubmitForm = async (e) => {
        e.preventDefault();
        console.log("Inside submit")
        try {
            await axios.post(`${url} `, {
                companyname: companyname,
                location: location,
                address:address,
                postalcode: postalcode,
                certificate: certificate,
                licence: licence,
          
              
            }).then(res => {
              console.log(res);
            });
            navigate("/Login");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
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
      
        
        <h className=" w-[60%]  flex justify-center items-center mt-[40px] text-trial font-bold  pr-[40px] mx-auto  text-[20px]">
        Who are you? Please  enter these details register your company
        </h>
            
          <div className="  w-[90%] h-[90%] mx-auto ">
            <form className="items-center mt-[30px] ml-[100px] " onSubmit={onSubmitForm} method='post' enctype="multipart/form-data">
           <p className="has-text-centered text-red text-sm mb-[10px] ">{msg}</p>
            <Input id={'floating-name'} inputType={"name"} label={"Company Name"}  value={companyname} onChange={(e) => setCompanyName(e.target.value)}
          />
          
            <Input label={"location"} value={location} inputType={"name"} onChange={(e) => setLocation(e.target.value)}/>
            <Input label={"Business Address"} value={address} onChange={(e) => setAddress(e.target.value)}/>

              <Input label={"Postal code"} value={postalcode} onChange={(e) => setPostalCode(e.target.value)}/>
              <Input label={"Company certificate"} inputType={"file"} onChange={(e) => setCertificate(e.target.value)}/>
              <Input label={"Business licence"} inputType={"file"} onChange={(e) => setLicence(e.target.value)}/>
              

             
              


              <MoverButton
              buttonStyle={"bg-blue-button"}
              buttonText={"Submit"}
              to={"/CompanyDashboard"}
            />
            </form>
          
          

      
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;
