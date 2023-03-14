import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const { serviceName, customer, phone, price, service, _id, status } = order;
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service]);



    return (

        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />

                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />

            </td>
            <td>${price}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost">Delete</button>
                <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost">Update</button>


                <button className="btn btn-warning">{status ? status : 'pending'}</button>
            </th>
        </tr>
    );
};

export default OrderRow;