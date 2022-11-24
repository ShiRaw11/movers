import { MdLocationOn } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";


function Card({image,name}) {
  return (
    <div>
      <div className="h-[200px] border border-gray bg-white mt-[40px] w-[250px] ">
        <div className="flex flex-col justify-center items-center mt-[20px]">
          <div className="w-[150px] h-[80px]">
           
            <img
              src={image}
              alt="Random  "
              className="object-cover h-full w-full"
            ></img>
            <div className='mt-[10px]'>
            <h className="mt-[30px]  font-bold pt-[20px]"> {name}</h>
            </div>
          
          </div>
          <div className="h-[1px] border border-gray w-full bg-purple mt-[50px]"></div>
          <div className=" mt-[10px]">
            <div className="flex">
              <div className="flex justify-center items-center">
                <MdLocationOn />
                <h className=""> Nairobi</h>
              </div>
              <div className="flex justify-center items-center ml-[40px]">
                <FaStarHalfAlt />
                <h> 4.77</h>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
