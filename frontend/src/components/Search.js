import Input from "./Input";
import MoverButton from "./MoverButton";

function Search({ SearchStyle, placeholder, iconPresent }) {
  return (
    <div className={`${SearchStyle ? SearchStyle : ""}`}>
      <div className="relative ml-[80px] mt-[20px] mx-auto flex ">
        <Input placeholder={placeholder} 
        inputStyle={'w-[200px] pl-[40px]'}/>
        <div className="absolute inset-y-0 pb-2 left-2 flex items-center ml-3">
          {iconPresent}
        </div>


        
      </div>
    </div>
  );
}

export default Search;
