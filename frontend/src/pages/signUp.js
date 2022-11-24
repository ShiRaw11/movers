import Input from "../components/Input";
import MoverButton from "..//components/MoverButton";
import MoverLink from "..//components/MoverLink";
import React, { useState } from "react";
import axios from "axios";
import logo from "..//images/logo.png";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [firstname, setFirstName] = useState("");
  const url = process.env.BASE_URL;
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onSubmitForm = async (e) => {
    e.preventDefault();
    //console.log("Inside submit");
    //console.log(firstname);
    try {
      await axios
        .post("http://localhost:5000/api/v1/signup", {
          firstname: firstname,
          lastname: lastname,
          phonenumber: phonenumber,
          email: email,
          password: password,
          confirmpassword: confirmpassword,
        })
        //promise..
        .then((res) => {
          //work with response
          console.log(res);
          navigate("/phoneVerification");
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response);

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
            K-Movers lets you Find your moving company with ease!
          </h>
        </div>
      </div>
      <div className="bg-white overflow-auto w-[800px] my-auto h-full items-center overflow-auto shadow-lg">
        <p className="flex mt-[20px] justify-end w-[600px] items-center">
          {" "}
          Already have an account?
          <MoverLink linkTitle={"Login"} to={"/Login"} />
        </p>
        <h className=" w-[70%] pl-[30px] flex justify-start items-center mt-[20px] mx-auto text-[20px]">
          Sign up to kmovers
        </h>

        <div className="  w-[90%] h-[90%] mx-auto ">
          <form
            className="items-center mt-[20px] ml-[100px] "
            onSubmit={onSubmitForm}
          >
            <p className="has-text-centered text-red text-sm mb-[10px] ">
              {msg}
            </p>
            <Input
              id={"floating-name"}
              inputType={"name"}
              label={"First Name"}
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <Input
              label={"Last Name"}
              value={lastname}
              inputType={"name"}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              label={"Email"}
              inputType={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label={"Phone Number"}
              inputStyle={" "}
              value={phonenumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <Input
              label={"Password"}
              inputType={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label={"Confirm Password"}
              inputType={"password"}
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="flex justify-start w-[50%]">
              <button
                className="w-[250px] h-[50px] border rounded-lg bg-blue-button text-white duration-400 ease-in-out flex items-center justify-center "
                type="submit"
              >
                {" "}
                Register
              </button>
            </div>
          </form>

          <div class="flex items-center w-[60%] mt-[15px] pl-[100px]">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="link-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a href="#" class="text-blue dark:text-blue hover:underline">
                terms and conditions
              </a>
              .
            </label>
          </div>
          <div class="flex items-center mt-[30px]">
            <div class="flex-grow h-px bg-gray"></div>

            <span class="flex-shrink  text-black  px-4 italic font-light">
              or
            </span>

            <div class="flex-grow h-px bg-gray"></div>
          </div>
          <div className=" flex flex-center items-center  mt-[20px] ">
            <div className={"flex border border-gray w-[300px] ml-[40px]"}>
              <div className="h-[40px] w-[40px]">
                <img
                  className="h-full w-full object-cover "
                  src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=1190&height=800&name=image8-2.jpg"
                  alt="google"
                ></img>
              </div>
              <div className="flex justify-center items-center ml-[20px]">
                <MoverLink
                  linkTitle={"Sign up with Google"}
                  linkStyle={"text-black text-[16px]"}
                />
              </div>
            </div>
            <div className={"flex border border-gray w-[300px] ml-[40px]"}>
              <div className="h-[40px] w-[40px]">
                <img
                  className="h-full w-full object-cover "
                  src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=1190&height=800&name=image8-2.jpg"
                  alt="google"
                ></img>
              </div>
              <div className="flex justify-center items-center ml-[20px]">
                <MoverLink
                  linkTitle={"Sign up with GMail"}
                  linkStyle={"text-black text-[16px]"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
