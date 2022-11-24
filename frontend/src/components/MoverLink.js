import { Link } from "react-router-dom";

function MoverLink({ to, linkTitle, linkStyle }) {
  return (
    <div className={"flex ml-[4px]"}>
      <Link
        to={to}
        className={`text-black text-sm text-purple hover:scale-110 ${
          linkStyle ? linkStyle : ""
        }`}
      >
        {linkTitle}
      </Link>
    </div>
  );
}

export default MoverLink;
