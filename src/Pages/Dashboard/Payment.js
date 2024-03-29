import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import axios from 'axios';
import { toast } from 'react-toastify';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51NaP9YIRxjIz7EfmkiYkxM8ok02r3sC53xfpBGZEriEFlW7QGdqG7Awy0G3OrXmpcYP57isPxKp7HwoZlnIHAxps00XUQ814a4');

    const { id } = useParams()
    console.log(id);
    const [appointment,setAppointment] = useState({})
    const url = `http://localhost:5000/payment/${id}`
    // const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => {
       
    //     res.json()})
    //     .then(data=>{
    //         console.log(data);
    //     })
    // )
    // console.log(appointment);
    // if (isLoading) {
    //     return <h1>Loading</h1>
    // }
    useEffect(()=>{
        try {
            axios.get(url,  {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
              })
                    .then(res=>{
                        setAppointment(res.data)
                        console.log(res.data);
                    
                    }) 
        } catch (error) {
            console.log(error.message); 
            toast.success(error.message)
        }
    },[])
    return (

        <div class=" grid gap-8 grid-col-1 justify-center ">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <p className='text-success'>Hello {appointment.patientName}</p>
                    <h2 class="card-title">Pay for {appointment.treatment}</h2>
                    <p>We will se you on <strong className='text-info'>{appointment.date}</strong> at <strong className='text-info'>{appointment.slot}</strong> </p>

                    <h1 className='text-secondary'>Please Pay ${appointment.price}</h1>

                </div>
            </div>
            <div className='card w-96 bg-white shadow-xl'>
                <div className='card card-body'>
                    <Elements stripe={stripePromise} >
                        <CheckoutForm
                        appointment={appointment}
                        />
                    </Elements>
                </div>

            </div>

        </div>

    );
};

export default Payment;