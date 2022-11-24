import MoverLink from "./MoverLink";

function Avatar({
  profile,
  name,
  CompanyProfileStyle,
  UserProfileStyle,
  CompanyName,
  CompanyImage,
  rate,
  view,
  CompanyStyle,
  UserStyle,
  isCompany = false,
  isUser = false,
}) {
  return (
    <div>
      {isCompany && (
        <div
          className={`mx-[10px] pt-[25px] items-center ${
            CompanyStyle ? CompanyStyle : ""
          }`}
        >
          <h>{CompanyName}</h>
          <div
            className={`h-[40px] w-[40px] ${
              CompanyProfileStyle ? CompanyProfileStyle : ""
            }`}
          >
            <img
              src={CompanyImage}
              alt="Avatar"
              className="h-[100%] w-[100%] object-cover "
            />
          </div>
          <p className="text-base m-2">{rate}</p>
          <MoverLink linkTitle={view}/>
        </div>
      )}
      {isUser && (
        <div
          className={`flex mx-[10px] pt-[25px] items-center ${
            UserStyle ? UserStyle : ""
          }`}
        >
          <div
            className={`h-[40px] w-[40px] rounded-full ${
              UserProfileStyle ? UserProfileStyle : ""
            }`}
          >
            <img
              src={profile}
              alt="Avatar"
              className="h-[100%] w-[100%] object-cover rounded-full"
            />
          </div>
          <p className="text-base m-2">{name}</p>
        </div>
      )}
    </div>
  );
}
export default Avatar;
