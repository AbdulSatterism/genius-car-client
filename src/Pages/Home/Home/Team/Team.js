import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import teamImage1 from '../../../../assets/images/team/1.jpg'
import teamImage2 from '../../../../assets/images/team/2.jpg'
import teamImage3 from '../../../../assets/images/team/3.jpg'

const Team = () => {
    return (
        <div className='my-20'>
            <div className='text-center mb-5'>
                <p className="text-2xl font-bold text-orange-600">
                    Team
                </p>
                <h2 className="text-5xl font-semibold my-5">Meet Our Team</h2>
                <p className='w-1/2 mx-auto' >
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-72' src={teamImage1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Cart Engine Expert <br></br> Jack </h2>

                        <div className="card-actions justify-end">
                            <button className="btn bg-slate-100 text-orange-600 border-0"> <FaArrowRight></FaArrowRight> </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-72' src={teamImage2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Cart Service Expert <br></br> Mack </h2>

                        <div className="card-actions justify-end">
                            <button className="btn bg-slate-100 text-orange-600 border-0"> <FaArrowRight></FaArrowRight> </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-72' src={teamImage3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Cart Engine Expert <br></br> Cack </h2>
                        <div className="card-actions justify-end">
                            <button className="btn bg-slate-100 text-orange-600 border-0"> <FaArrowRight></FaArrowRight> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Team;