import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const [search, setSearch] = useState('');
    const searchRef = useRef();

    useEffect(() => {
        // fetch('https://genius-car-server-1lix.onrender.com/services')
        fetch(`https://genius-car-server-1lix.onrender.com/services?search=${search}&order=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc, search]);

    const handleSearch = () => {
        setSearch(searchRef.current.value)
    }

    return (
        <div>
            <div className='mb-5 text-center'>
                <p className="text-2xl font-bold text-orange-600">
                    Service
                </p>
                <h2 className="my-5 text-5xl font-semibold"> Our Service Area</h2>
                <p className='w-1/2 mx-auto' >
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <div>
                    <input ref={searchRef} type='text' className="input input-bordered" placeholder="search product" />
                    <button onClick={handleSearch} className="btn bg-slate-500">Search</button>
                </div>
                <button className='btn bg-slate-500' onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'desc' : 'asc'}</button>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;