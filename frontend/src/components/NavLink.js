import { Link } from "react-router-dom";

function NavLink({ to, icon, CoverStyle, linkTitle, linkStyle }) {
  return (
    <div
      className={`flex items-center mx-[10px] mt-[25px] ${
        CoverStyle ? CoverStyle : ""
      }`}
    >
      <i className={" text-black   "}>{icon}</i>

      <Link
        to={to}
        className={`text-black text-base hover:scale-110  hover:text-purple px-[10px]  ${
          linkStyle ? linkStyle : ""
        }`}
      >
        {linkTitle}
      </Link>
    </div>
  );
}

export default NavLink;
