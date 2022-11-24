import logo from "..//images/logo.png";

function HomeNavBar({ navStyle, navLink }) {
  return (
    <div
      className={` bg-transparent w-[100vw] h-[3.8em] flex items-center justify-between ${
        navStyle ? navStyle : ""
      }`}
    >
      <div className="container flex items-center justify-between w-[90%] mx-auto">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Avatar"
            className="h-[100%] w-[100%] object-cover "
          ></img>
        </div>
        <div class="m-[10px] flex items-center ">{navLink}</div>
      </div>
    </div>
  );
}

export default HomeNavBar;
