import MoverLink from "../components/MoverLink";
import Input from "../components/Input";
import MoverButton from "../components/MoverButton";
function PhoneVerification () {
return (
    <div className="bg-background h-screen">
    <div className=" grid h-screen place-items-center">
      <div className="bg-white  w-[700px] h-[350px] shadow-lg">
        <div className="container mt-[20px] ml-[100px]  ">
        <form onSubmit={''}>
        <p className="has-text-centered">{''}</p>
        
        <div className="flex justify-start w-[80%] ml-[20px] items center mt-[40px]">
            <p className="text-[20px] ">Please enter the verification code sent to your phone</p></div>
        
          <Input  inputType={"text"} required 
          inputStyle={'ml-[50px]  mt-[20px]'} />

         
          <MoverLink linkTitle={'resend sms'}
          linkStyle={"ml-[50px] mt-[20px]"}/>
          

          
          </form>
          <div className=" flex w-[80%] justify-center ">
            <MoverButton
            to={"/UserDashboard"}
              buttonText={"Verify"}
              buttonStyle={"bg-blue-button w-[150px]"}
            />
          </div>
          
          
        </div>
      </div>
    </div>
  </div>

)

}

export default PhoneVerification;