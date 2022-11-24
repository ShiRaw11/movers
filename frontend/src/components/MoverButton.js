import { Link } from "react-router-dom";

function MoverButton({
  buttonType,
  buttonStyle,
  buttonText,
  onClickButtonHandler,
  to,
}) {
  return (
    <>
      <Link to={to}>
        <button
          className={`w-[250px] h-[50px] border rounded-lg bg-blue-button text-white duration-400 ease-in-out flex items-center justify-center mt-[20px] ${
            buttonStyle ? buttonStyle : ""
          }`}
          type={`${buttonType ? buttonType : "button"}`}
          onClick={onClickButtonHandler}
        >
          {buttonText}
        </button>
      </Link>
    </>
  );
}

export default MoverButton;
