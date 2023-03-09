import React from 'react';
import { FaCalendarCheck, FaLocationArrow, FaPhoneVolume } from 'react-icons/fa';
import './ServiceInfo.css'

const ServiceInfo = () => {
    return (
        <div className='my-20'>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-white bg-black rounded-lg my-5 p-11">
                <div className='flex items-center'>
                    <div>
                        <h3 className='icon'><FaCalendarCheck></FaCalendarCheck> </h3>
                    </div>
                    <div>
                        <p>We are open saturday - thursday</p>
                        <h3 className="text-2xl">7:00 am - 9:00 pm</h3>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div>
                        <h3 className='icon'><FaPhoneVolume></FaPhoneVolume> </h3>
                    </div>
                    <div>
                        <p>Have a question?</p>
                        <h3 className="text-2xl">01571320243</h3>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div>
                        <h3 className='icon'><FaLocationArrow></FaLocationArrow> </h3>
                    </div>
                    <div>
                        <p>Need a repair? our address</p>
                        <h3 className="text-2xl">abdulsatter.ism@gmail.com</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;