import React from 'react';
import { FaArrowRight } from 'react-icons/fa'

const ServiceCard = ({ service }) => {
    const { img, price, title } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='h-72' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-slate-100 text-orange-600 border-0"> <FaArrowRight></FaArrowRight> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;