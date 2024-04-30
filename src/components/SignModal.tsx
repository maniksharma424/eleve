"use client";
import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { serviceData } from "@/constants";

const SignUp =({handleModal,showModal}:any)=>{

  const services = serviceData
  const [serviceOptions, setServiceOptions]= useState(services)

   //   Body Scroll
   useEffect(() => {
    if(showModal){
        // prevent scrolling
        document.body.style.overflow = "hidden";
    }
    else{
        // auto scrolling
        document.body.style.overflow = "auto";
    }
} , 
[showModal]);
    // Define an interface for the service option
    interface ServiceOptions {
      name: string;
      checked: boolean;
    }

    // State variables to store form data
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      mobile: '',
      designation: '',
      services: [] as ServiceOptions[]
    });

    // Checkbox handling
    const handleCheck =(index: number)=>{
      setServiceOptions(
        serviceOptions.map((service, currentIndex)=> currentIndex === index? {...service, checked: !service.checked} : service )
      );
    };

    // Form data handling
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target;
        setFormData({...formData,[name]:value})
    }

    // checkbox values
    useEffect(()=>{
      setFormData((formData)=>({...formData, services: serviceOptions.filter((option)=> option.checked)}))
    },[serviceOptions]);

    // Submit handling
    const handleSubmit= (event: React.FormEvent<HTMLFormElement>)=>{

      event.preventDefault();

      console.log(formData);

      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        designation: '',
        services: [] as ServiceOptions[]
      });

      setServiceOptions(serviceData);
  };

    return(
<>
{/* Backdrop */}
{showModal && (
        <div
          className='fixed inset-0 bg-black opacity-80 z-[600]'
          onClick={handleModal}
        ></div>
      )}

{/* Modal main section */}
{ showModal && (<div className={`fixed inset-0 z-[600] flex items-center justify-center`}>
  <div className={`bg-slate-200 rounded-md drop-shadow-lg max-w-[70%] lg:max-w-[30%] md:p-0`}>

  <form className="grid gap-y-2 p-[40px] mr-5" onSubmit={handleSubmit}>

<div>
  <label className='text-gray-700 font-bold' htmlFor='fullName'>Full Name<sup>*</sup></label>
  <div>
  <input className="p-2 rounded-md"  type='text' placeholder="Your Name" name="fullName" id='fullName' value={formData.fullName} onChange={handleInputChange}  required />
  </div> 
</div>

<div>
  <label className='text-gray-700 font-bold' htmlFor='email'>Email<sup>*</sup></label>
  <div>
  <input className="p-2 rounded-md" type='email' placeholder="your@mail.com" name="email" id='email' value={formData.email} onChange={handleInputChange} required />
  </div> 
</div>

<div>
  <label className='text-gray-700 font-bold' htmlFor='mobile'>Mobile Number</label>
  <div>
  <input className="p-2 rounded-md" type='tel' placeholder="ex- 1231234567" name="mobile" id='mobile' onChange={handleInputChange} value={formData.mobile} />
  </div> 
</div>

<div>
  <label className='text-gray-700 font-bold' htmlFor='designation'>Designation<sup>*</sup></label>
  <div>
  <input className="p-2 rounded-md" type='text' placeholder="ex- SDE" id='designation' name="designation" onChange={handleInputChange} required value={formData.designation}/>
  </div> 
</div>


<div>
  <label className='text-gray-700 font-bold' htmlFor='services'>What Services are you looking for?<sup>*</sup></label>
   {serviceOptions.map((option,index)=> (
    <div key={index}>
      <input className="mt-1 p-3" type='checkbox' checked={option.checked} id={`checkbox-${index}`} onChange={()=>handleCheck(index)} />
      <label className="pl-3 text-gray-500 font-medium" htmlFor={`checkbox-${index}`}>{option.name}</label>
      </div> 
   ))}
</div>


<div className="flex justify-around">
  <button className="shadow bg-blue-500 hover:bg-blue-400 p-4 rounded-md w-2/5" type="submit" >Submit</button>
  <button className="shadow bg-red-300 hover:bg-red-200 p-4 rounded-md w-2/5" onClick={handleModal} >Cancel</button>
</div>
</form>

  </div>
</div>)}
</>
    );

}

export default SignUp;