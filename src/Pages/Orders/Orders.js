import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch(`https://genius-car-server-1lix.onrender.com/orders?email=${user?.email}`, {
            // secure with jwt
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOutUser()
                }
                return res.json()
            })
            .then(data => {
                // console.log('recive data', data)
                setOrders(data)
            })
    }, [user?.email, logOutUser]);
    const handleDelete = (_id) => {
        const proceed = window.confirm("Are you want to cancel this order?");
        if (proceed) {
            fetch(`https://genius-car-server-1lix.onrender.com/orders/${_id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order deleted successfully');
                        const remaining = orders.filter(ord => ord._id !== _id);
                        setOrders(remaining)
                    }
                })
        }
    };

    const handleStatusUpdate = id => {
        fetch(`https://genius-car-server-1lix.onrender.com/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(ord => ord._id !== id);
                    const approving = orders.find(ord => ord._id === id);
                    approving.status = 'Approved';

                    const newOrders = [approving, ...remaining];
                    setOrders(newOrders)
                }
            })
    }

    return (
        <div className='my-24'>
            <h2 className="text-5xl mb-6">You have {orders.length} orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>

                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></OrderRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;