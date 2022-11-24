import Input from "../components/Input";
import Select from "react-select";
import React, { useState } from "react";

export function Bio(){
    return(
        <div className='ml-[60px] mt-[50px]'>
            
            <Input
            label={'Bio'}
            inputStyle={'h-[150px] w-[80%]'}
            placeholder={'Enter a bried description about your company'}
            />

            
        </div>
    )
    }
    const services = [
        { value: 1, label: "Household Moving" },
        { value: 2, label: "Office Relocation" },
        { value: 3, label: "Warehousing" },
        { value: 4, label: "Document Management" },
        { value: 5, label: "Music Equipments" },
        { value: 1, label: "International Moving" },
      ];
    export function Services(){
        
            const [selectedOptions, setSelectedOptions] = useState(null);

            const setHandle = (e) => {
              setSelectedOptions(Array.isArray(e) ? e.map((service) => service.label) : []);
            };
          
            return (
                <div className='h-[120px] border border-gray mt-[40px] w-[80%] ml-[60px]'>
              <div className=" container    ">
                <h1 className="text-base ml-[20px]">Select services</h1>
                <div className=" items-center">
                  <div className=" px-2	ml-[10px]">
                    <Select options={services} onChange={setHandle} isMulti />
                  </div>
                  <div>{selectedOptions}</div>
                </div>
              </div>
              </div>
            );
        

    }
    export function Process(){
        return(
            <div className='ml-[60px] mt-[50px]'>
                
                <Input
                label={'Process'}
                inputStyle={'h-[150px] w-[80%]'}
                placeholder={'Enter a bried description of the process followed'}
                />
    
                
            </div>
        )
        }

    function SetUpProfile() {
        return(
            <div>
<Bio/>
<Services/>
<Process/>
            </div>
        )
    }

    export default SetUpProfile;