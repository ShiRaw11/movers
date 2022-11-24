import Input from "../components/Input";
import MoverLink from "../components/MoverLink";
import React, { useState } from "react";
import axios from "axios";
import logo from "..//images/logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/api/v1/login", {
          email: email,
          password: password,
        })
        // returns promise the navigates
        .then((res) => {
          console.log(res);
          navigate("/UserDashboard");
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.config.errors);
        //return error to client
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
          Dont have an account?
          <MoverLink linkTitle={"sign up"} to={"/signup"} />
        </p>
        <h className=" w-[70%] flex justify-start pl-[20px] items-center mt-[50px] mx-auto text-[25px]">
          login to your account
        </h>
        <div className=" flex flex-col ml-[60px] pl-[20px] w-[60%] justify-end items-center mt-[20px]">
          <div className={"flex border border-gray w-[300px] "}>
            <div className="h-[40px] w-[40px]">
              <img
                className="h-full w-full object-cover "
                src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=1190&height=800&name=image8-2.jpg"
                alt="google"
              ></img>
            </div>
            <div className="flex justify-center items-center  ml-[20px]">
              <MoverLink
                linkTitle={"login with Google"}
                linkStyle={"text-black text-[16px]"}
              />
            </div>
          </div>
        </div>

        <div className="  w-[90%] h-[90%] mx-auto ">
          <form
            className="items-center mt-[30px] ml-[100px] "
            onSubmit={onSubmitForm}
          >
            <p className="has-text-centered text-red text-sm mb-[10px] ">
              {msg}
            </p>

            <Input
              label={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label={"Password"}
              inputType={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <MoverLink
              linkTitle={"Forgot password ?"}
              linkStyle={" flex justify-end w-[400px]"}
            />
            <div className="flex  justify-start w-[80%]">
              <div className="flex justify-start w-[50%]">
                <button
                  className="w-[250px] h-[50px] border rounded-lg bg-blue-button text-white duration-400 ease-in-out flex items-center justify-center "
                  type="submit"
                >
                  {" "}
                  login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
