import MoverButton from "../components/MoverButton";
import HomeNavBar from "../components/HomeNavBar";
import NavLink from "../components/NavLink";
import { BsHouseFill } from "react-icons/bs";
import move from "..//images/move2.jpg";
import { TiTick } from "react-icons/ti";
import Card from "../components/Card";
import TipsCard from "../components/TipsCard";

import {
  FaAngleDown,
  FaWarehouse,
  FaBoxOpen,
  FaPlaneDeparture,
  FaGuitar,
} from "react-icons/fa";
import ReviewCard from "../components/ReviewCard";
import MoverLink from "../components/MoverLink";
import { ImBooks } from "react-icons/im";
import Avatar from "../components/Avatar";

export function Welcome() {
  return (
    <div className="">
      <div className="flex flex-col mt-[50px] justify-center border border-gray h-[200px] w-[90%] mx-auto items-center">
        <p className="font-bold  text-[30px]">
          Find Your Moving Company Today!
        </p>
        <MoverButton
          buttonText={"Get Started"}
          to={"/SignUp"}
          buttonStyle={"bg-blue-button w-[150px]"}
        />
      </div>
    </div>
  );
}

export function Services() {
  return (
    <div className="mt-[60px] ml-[40px] ">
      <h className="font-bold text-[30px]  ml-[40px] ">Our Services</h>
      <div className="flex justify-between w-[90%] mx-auto  mt-[20px] ">
        <div className="w-[200px]  flex flex-col justify-center items-center h-[150px] shadow-md border">
          <i>
            {" "}
            <BsHouseFill />{" "}
          </i>
          <h>Household Moving</h>
        </div>
        <div className="w-[200px] ml-[40px] flex flex-col justify-center items-center h-[150px] shadow-md border">
          <i>
            {" "}
            <FaWarehouse />{" "}
          </i>
          <h>Warehousing</h>
        </div>

        <div className="w-[200px] ml-[40px] flex flex-col justify-center items-center h-[150px] shadow-md border">
          <i>
            {" "}
            <FaBoxOpen />{" "}
          </i>
          <h>Office Relocation</h>
        </div>
      </div>
      <div className="flex mt-[40px] justify-between  w-[90%] mx-auto">
        <div className="w-[200px]  flex flex-col justify-center items-center h-[150px] shadow-md border">
          <i>
            {" "}
            <ImBooks />{" "}
          </i>
          <h>Document Management</h>
        </div>
        <div className="w-[200px] ml-[40px] flex flex-col justify-center items-center h-[150px] shadow-md border">
          <i>
            {" "}
            <FaGuitar />{" "}
          </i>
          <h>Music Instruments</h>
        </div>

        <div className="w-[200px] ml-[40px] flex flex-col justify-center items-center h-[150px] shadow-md border">
          <i>
            {" "}
            <FaPlaneDeparture />{" "}
          </i>
          <h>International Moving</h>
        </div>
      </div>
    </div>
  );
}

export function Mover() {
  return (
    <div className="flex  h-[300px] mt-[80px] w-[90%] border border-gray shadow-md mx-auto">
      <div className="ml-[40px] w-[800px] mt-[40px]">
        <h className="font-bold text-[30px]">Become a Mover</h>
        <p className="mt-[10px] text-[20px]">
          Are you a Movers Company Intrested in joining K-Movers?
        </p>
        <MoverButton
          buttonText={"Join K-Movers"}
          buttonStyle={"bg-blue-button"}
          to={"/CompanySignUp"}
        />
      </div>
      <div className="ml-[60px] pl-[20px] w-[800px] ">
        <img
          src={move}
          alt="Random  "
          className="object-cover h-full w-full"
        ></img>
      </div>
    </div>
  );
}

export function WhyKmover() {
  return (
    <div className="h-[450px] flex border border-gray w-[90%] mx-auto mt-[40px]">
      <div>
        <div className="border border-gray bg-trial ml-[40px] mt-[100px] w-[300px] h-[70%]  text-pale-blue">
          <div className="flex items-center  mt-[20px] justify-center">
            <TiTick />
            <p className="ml-[10px] ">Register on K-Movers</p>
          </div>

          <div className="flex items-center mt-[20px] justify-center">
            <TiTick />
            <p className="ml-[10px] items-center  ">
              click on your company of choice
            </p>
          </div>
          <div className="flex items-center  mt-[20px] justify-center">
            <TiTick />
            <p className="ml-[10px] ">Make a request</p>
          </div>
          <div className="flex items-center  mt-[20px] justify-center">
            <TiTick />
            <p className="ml-[10px]  ">Have your goods delivered!</p>
          </div>

          <div className="flex items-center  mt-[50px] justify-center">
            <p className="ml-[10px] font-bold text-[20px] ">
              Done! its that easy
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <h className="font-bold text-[40px] ml-[40px]">Why K-Movers?</h>
        <div className="mt-[20px] mx-auto ml-[40px] w-[750px]">
          <div className="flex justify-between">
            <div className=" w-[300px]">
              <div className=" h-[50px] w-[50px]">
                <img
                  clasname="h-full w-full object cover"
                  src="https://static.vecteezy.com/system/resources/previews/007/158/761/original/task-check-list-icon-for-website-presentation-free-vector.jpg"
                  alt="track order"
                ></img>{" "}
              </div>
              <h className="h-[200px] w-[50px] font-semibold text-[20px] text-purple">
                Moving Companies Listing
              </h>
              <p className="ml-[10px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </div>
            <div className="ml-[40px] w-[300px]">
              <div className=" h-[50px] w-[50px]">
                <img
                  clasname="h-full w-full object cover"
                  src="https://static.thenounproject.com/png/3154344-200.png"
                  alt="track order"
                ></img>{" "}
              </div>
              <h className="h-[200px] w-[50px] font-semibold text-[20px] text-purple">
                Track Order
              </h>
              <p className="ml-[10px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className=" w-[300px]">
              <div className=" h-[50px] w-[50px]">
                <img
                  clasname="h-full w-full object cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87ne4b_woVFRUpos84XZX-GJBKIl0QTC1pHgBnIg&s"
                  alt="track order"
                ></img>{" "}
              </div>
              <h className="h-[200px] w-[50px] font-semibold text-[20px] text-purple">
                24hr Support
              </h>
              <p className="ml-[10px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </div>
            <div className=" w-[300px] ">
              <div className=" h-[50px] w-[50px]">
                <img
                  clasname="h-full w-full object cover"
                  src="https://www.citypng.com/public/uploads/small/216353591919luo2pzjy6zhw8rwcwkqr2pbud5efpknsqiwkqgd7msbvgvueuetznqo0zl6iuyyufyzuq4ofqbhu9rj7dkakk7jycqcsyr2wycy.png"
                  alt="track order"
                ></img>{" "}
              </div>
              <h className=" w-[50px] font-semibold text-[20px] text-purple">
                Secure Payment
              </h>
              <p className="ml-[10px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Quote() {
  return (
    <div className="h-[250px] border border-gray w-[90%] mx-auto mt-[40px]">
      <h className="flex justify-center text-[20px] font-bold text-purple mt-[20px] ">
        Get Quote
      </h>
      <div className="flex mx-auto justify-between mt-[20px] w-[70%]">
        <div className="">
          <select
            id="Type"
            className="text-sm block font-bold h-[50px]  px-[10px] rounded-md w-[300px]  
          bg-transparent  border border-black  cursor-pointer  hover:bg-white focus:border-gray-600 focus:outline-none"
          >
            <option value="group">Type of Move</option>
            <option value="one">Household Moving</option>
            <option value="one">Office Relocaton</option>
            <option value="one">Warehousing</option>
            <option value="one">Document Management</option>
            <option value="one">Music Instruments</option>
            <option value="one">International Moving</option>
          </select>
        </div>
        <div>
          <select
            id="Type"
            className="text-sm block font-bold h-[50px]  px-[10px] rounded-md w-[300px]  
          bg-transparent  border border-black  cursor-pointer  hover:bg-white focus:border-gray-600 focus:outline-none"
          >
            <option value="group">Size</option>
            <option value="one">Small</option>
            <option value="one">Medium</option>
            <option value="one">Large</option>
          </select>
        </div>
      </div>
      <div className="mt-[20px] flex justify-center">
        <MoverButton buttonText={"Get Quote"} buttonStyle={"bg-blue-button"} />
      </div>
    </div>
  );
}

export function TopMovers() {
  return (
    <div className="mt-[40px]   w-[90%] mx-auto">
      <div className=" mt-[20px] ">
        <div className=" flex items-center">
          <h className="font-bold text-[30px]"> Top Movers in</h>
          <div className="ml-[5px]">
            <select
              id="Type"
              className="text-sm block font-bold h-[40px]  px-[10px] rounded-md w-[150px]  
          bg-transparent  border border-black  cursor-pointer text-blue  hover:bg-white focus:border-gray-600 focus:outline-none"
            >
              <option value="group">Country</option>
              <option value="one">Nairobi</option>
              <option value="one">Kisii</option>
              <option value="one">Mombasa</option>
            </select>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <Card name={'Taylor Movers'}
              image={
                "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              }
            />
            <Card name={'go movers'} image="https://images.unsplash.com/photo-1624137527136-66e631bdaa0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
            <Card name={'kisumu Moves'} image="https://images.unsplash.com/photo-1600725935160-f67ee4f6084a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
            <Card name={'Kisii Moves'}
            image="https://images.unsplash.com/photo-1577702312572-5bb9328a9f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div className="flex justify-between">
            <Card name={'Twende'}image="https://images.unsplash.com/photo-1609143739217-01b60dad1c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
            <Card name={'all around'} image="https://plus.unsplash.com/premium_photo-1663100751368-14d0196b37a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1vdmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
            <Card name={'Kenya movers'} image="https://images.unsplash.com/photo-1545059288-219ece3f7321?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vdmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
            <Card name={'Tay Moves'} image="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1vdmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
          </div>
        </div>
      </div>
      <div className="flex h-[40px] w-[90%] mx-auto justify-center mt-[20px]">
        <NavLink linkTitle={"See more"} icon={<FaAngleDown />} />
      </div>
      <div className="mt-[40px] w-[90%]  mx-auto">
        <h className="font-bold text-trial text-[20px]">Tips:</h>
        <div className="flex justify-between ">
          <TipsCard
            title={"How to choose a movers Company"}
            image="https://images.unsplash.com/photo-1538681152564-3f0032827d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fG1vdmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          />
          <TipsCard
            title={"Things to know before moving"}
            image="https://plus.unsplash.com/premium_photo-1661765293467-3f0b2b0d6c51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fG1vdmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          />
          <TipsCard
            title={"Calculating moving costs"}
            image="https://plus.unsplash.com/premium_photo-1661761197559-58493b11151b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fG1vdmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          />
        </div>
      </div>
    </div>
  );
}

export function Review() {
  return (
    <div className="mt-[50px] w-[90%] mx-auto">
      <h className="font-bold  text-[30px]">
        What People say about kmovers:
      </h>
      <div className="flex justify-between ">
        <ReviewCard
          title={"marya"}
          location={"Nairobi"}
          image="https://images.unsplash.com/photo-1625445875078-daa0963ddd77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fG1vdmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        />

        <ReviewCard
          title={"marya"}
          location={"Nairobi"}
          image="https://plus.unsplash.com/premium_photo-1661274008232-e94b655d4b0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        />
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="flex mt-[80px] h-[250px] bg-gray px-[50px] mx-auto border-gray justify-between">
      <div className="mt-[20px] w-[250px]">
        <h>K-Movers connects you to moving companies!</h>
       
        <div >
 <h>Follow us on :</h>
 <div className='flex  w-[250px] mt-0 justify-start '>
   <Avatar isUser={true} UserStyle='mx-0 pt-1' profile={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png'}/>
  <Avatar isUser={true} UserStyle='mx-0 pt-1' profile={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ebqAQE1oGh0C9suzTPljCIRqROsH04iQY42kHLgq&s"}/>
  <Avatar isUser={true} UserStyle='mx-0 pt-1'  profile={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png"}/>
 </div>
        </div>
      </div>
      <div className="mt-[20px] ">
        <h className="mt-[20px]">About us</h>
        <MoverLink linkTitle={"About K-Movers"} />
        <MoverLink linkTitle={"Terms of Service"} />
        <MoverLink linkTitle={"Privacy Policy"} />
        <MoverLink linkTitle={"Trust & Safety"} />
        <MoverLink linkTitle={"Manage Cookies"} />
      </div>
      <div className="mt-[20px]">
        <h className="mt-[20px]">Discover</h>

        <MoverLink linkTitle={"Blog"} />
        <MoverLink linkTitle={"Services"} />
        <MoverLink linkTitle={"Support"} />
        <MoverLink linkTitle={"K-Mover mobile"} />
      </div>
      <div className="mt-[20px] mr-[40px]">
        <h className="mt-[20px]">K-Mover for Business</h>
        <MoverLink linkTitle={"Register on K-Movers"} />
        <MoverLink linkTitle={"Cost guide"} />
        <MoverLink linkTitle={"Advertise on K-Movers"} />
        <MoverLink linkTitle={"Events"} />
        <MoverLink linkTitle={"Business Support"} />
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="bg-background">
      <HomeNavBar
        navLink={
          <div className="flex">
            <NavLink
              linkTitle={"For Business"}
              CoverStyle={"mt-0"}
              to={"/CompanySignUp"}
            />
            <NavLink linkTitle={"Explore"} CoverStyle={"mt-0"} />
            <NavLink
              linkTitle={"Sign in"}
              CoverStyle={"mt-0 "}
              to={"/SignUp"}
            />
            <NavLink linkTitle={"Login"} CoverStyle={"mt-0 "} to={"/Login"} />
          </div>
        }
      />

      <Welcome />
      <Services />
      <Mover />
      <WhyKmover />
      <Quote />
      <TopMovers />
      <Review />
      <Footer />
    </div>
  );
}

export default LandingPage;
