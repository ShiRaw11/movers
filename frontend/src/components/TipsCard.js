import MoverLink from "./MoverLink";


function TipsCard({ title,image }) {
  return (
    <div>
      <div className="h-[200px] border border-gray mt-[20px] w-[300px]">
        <div className="flex flex-col justify-center items-center mt-[20px]">
          <div className="w-[80%] h-[100px] mx-auto">
            <img
              src={image}
              alt="Random  "
              className="object-cover h-full w-full"
            ></img>

            <div className="mt-[10px] font-bold "> {title}</div>
          </div>
        </div>
        <div className="mt-[50px] flex justify-end mr-[20px]">
          <MoverLink linkTitle={"Learn More"} />
        </div>
      </div>
    </div>
  );
}

export default TipsCard;
