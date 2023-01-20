import React from 'react';
import { useRef } from 'react';

const Card = ({data}) => {
    const {name,contact,city,state,discription,address,designation,email,phone,country}=data;
    const ref=useRef();

    const btnFun=e=>{
            if(ref.current.classList.contains("hidden")){
                e.target.innerHTML="Hide Details";
                ref.current.classList.remove("hidden");
            }else{
                e.target.innerHTML="View Details";
                ref.current.classList.add("hidden");
            }
            
    }

    return (
        <div>
        <div className="card bg-base-100 shadow-xl shadow mx-5 my-3 lg:p-10">
            <div className="card-body gap-6 flex lg:flex-row flex-col justify-between align-center flex-wrap" style={{textTransform:"capitalize"}}>
                    <div className='h-full self-center'>
                        <h1 className='text-2xl font-bold'>
                        {name}
                        </h1>
                    </div>
                
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-lg font-bold text-gray-500'>
                        CONTACT
                        </h1>
                        <p className='font-bold'>
                        {contact}
                        </p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h1 className='text-lg font-bold text-gray-500' style={{textTransform:"capitalize"}}>
                        CITY
                        </h1>
                        <p className='font-bold'>
                        {city}
                        </p>
                    </div>

                    <div className='flex flex-col gap-1' >
                        <h1 className='text-lg font-bold text-gray-500' >
                        STATE
                        </h1>
                        <p className='font-bold'>
                        {state}
                        </p>
                    </div>

                    <div className='py-5 lg:order-last w-full border-2 border-gray-200 rounded-lg hidden' ref={ref} >
                            <div className="py-5 px-3 text-left gap-6 flex flex-col justify-between align-center " style={{textTransform:"capitalize"}}>
                                <div>
                                    <div className='flex flex-col gap-1'>
                                    <h1 className='text-lg font-bold text-gray-500'>
                                    description
                                    </h1>
                                    <p className='font-bold'>
                                    {discription}
                                    </p>
                                    </div>
                                </div>

                                <div className='grid lg:grid-cols-2 gap-4'>

                                        <div className='flex flex-col gap-1'>
                                        <h1 className='text-lg font-bold text-gray-500' style={{textTransform:"capitalize"}}>
                                        contact person
                                        </h1>
                                        <p className='font-bold'>
                                        {contact}
                                        </p>
                                    </div>
                
                                    <div className='flex flex-col gap-1' >
                                        <h1 className='text-lg font-bold text-gray-500' >
                                        address
                                        </h1>
                                        <p className='font-bold'>
                                        {address}
                                        </p>
                                    </div>
                                    <div className='flex flex-col gap-1' >
                                        <h1 className='text-lg font-bold text-gray-500' >
                                        designation
                                        </h1>
                                        <p className='font-bold'>
                                        {designation}
                                        </p>
                                    </div>
                                    <div className='flex flex-col gap-1' >
                                        <h1 className='text-lg font-bold text-gray-500' >
                                        emails
                                        </h1>
                                        <p className='font-bold'>
                                        {email}
                                        </p>
                                    </div>
                                    <div className='flex flex-col gap-1' >
                                        <h1 className='text-lg font-bold text-gray-500' >
                                        phone
                                        </h1>
                                        <p className='font-bold'>
                                        {phone}
                                        </p>
                                    </div>
                                    <div className='flex flex-col gap-1' >
                                        <h1 className='text-lg font-bold text-gray-500' >
                                        country
                                        </h1>
                                        <p className='font-bold'>
                                        {country}
                                        </p>
                                    </div>
                                
                                </div>
                            </div>
                    </div>
            <div className="card-actions justify-center">
                <button className="btn bg-purple-700 border-none rounded-lg capitalize btn-md hover:scale-105 hover:bg-purple-800" onClick={btnFun}>View Details</button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Card;