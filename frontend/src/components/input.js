function Input({
id,

  index,
  value,

  name,
  required = false,
  onChange,
  label,
  inputType,
  placeholder,
  labelStyle,
  inputStyle,
}) {
  return (
  

    <div class="relative mb-[15px]">
    <input type={inputType} index={index} value={value} onChange={onChange} required={required}class="text-md px-2.5 h-[40px] pb-2.5 pt-5  rounded-[2px] w-[400px]  
        bg-white border border-gray text-sm bg-transparent  appearance-none shadow-sm   peer " placeholder=" " />
    <label   for={id} name={name} class="absolute text-sm text-gray dark:text-gray-400 duration-300 transform -translate-y-2 scale-75 top-2 z-5 origin-[0] left-2.5 peer-focus:text-blue peer-focus:dark:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2">{label}</label>
</div>
    
    
   
  );
}

export default Input;
