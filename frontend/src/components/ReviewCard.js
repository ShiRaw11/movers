
import { FaStarHalfAlt } from "react-icons/fa";

function ReviewCard({ title, location,image }) {
  return (
    <div>
      <div className="h-[300px] border border-gray mt-[20px] w-[400px]">
        <div className="flex flex-col justify-center items-center mt-[20px]">
          <div className="w-[80%] h-[100px] items-center  mx-auto">
            <img
              src={image}
              alt="Random  "
              className="object-cover object-fit h-full w-full"
            ></img>
          </div>
          <div className="mt-[20px] items-center text-base"> {title}</div>
          <div>{location}</div>
          <div>
            <FaStarHalfAlt />
          </div>
          <div className="mt-[20px] px-[20px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
