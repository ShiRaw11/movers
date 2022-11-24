import image from "..//images/profile.jpg";
import Avatar from "./Avatar";

function SideBar({ SideBarLinks, profile, name, isUser = false }) {
  return (
    <div className="mx-[25px] bg-gray rounded-lg h-[400px] w-[200px]  mt-[35px]">
      {isUser && (
        <div>
          <Avatar isUser={true} profile={image} name={"Shii Kimani"} />
        </div>
      )}
      <div className="pt-[5px]">{SideBarLinks}</div>
    </div>
  );
}
export default SideBar;
