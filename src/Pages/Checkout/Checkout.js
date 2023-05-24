import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { title, price, _id } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const order = {
            service: _id,
            serviceName: title,
            price: price,
            customer: name,
            email: email,
            phone: phone,
            message: message
        }

        // if(phone.length < 10){
        //     alert('phone number should be 10 character or longer')
        // }

        fetch('https://genius-car-server-1lix.onrender.com/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('order placed successfully')
                    form.reset();
                }

            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <div className='my-24'>
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl'>You are about to order: {title}</h2>
                <h4 className='text-3xl'>Price: ${price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="first name" className="input input-bordered w-full" />
                    <input name='lastName' type="text" placeholder="last name" className="input input-bordered w-full" />
                    <input name='phone' type="text" placeholder="your phone" className="input input-bordered w-full" required />
                    <input name="email" type="text" placeholder="your email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                </div>

                <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="your message" required></textarea>

                <input className='btn' type="submit" value="place your order" />
            </form>
        </div>
    );
};

export default Checkout;