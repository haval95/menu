"use client"
import React, { useState } from 'react'
import Input from '../../../components/inputs/Input'
import Button from '@/components/buttons/Button';
import clsx from 'clsx';
import { useUser } from '@clerk/nextjs';


function Form() {
  const { user } = useUser();
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phoneNumber: '',
    numberOfGuests: 0,
    reservationTime: undefined,
    time: undefined,
    note:""
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setBookingForm((prevState) => ({
      ...prevState,
      [name]: value, 
    }));
    
  }; 

  const handleSubmit = () => {
     
  }

  return (
    <form className="my-10 rounded-xl shadow-md text-black grid sm:grid-cols-2 gap-6 items-center justify-center pt-14 max-w-screen-lg mx-auto border p-10">
      <div className="col-span-full border-b mb-4">
        <h1 className="font-extrabold text-2xl">Book Your Table</h1>
        <p className="py-3 ">Craving a delicious meal at XYZ? Reserve your table with ease using our online booking form.</p>
      </div>
      
      <Input
        required
        InputType="text"
        label="Full Name"
        showLabel="top"
        onInputChange={handleChange}
        name="name" 
      />
      <Input
        required
        InputType="text"
        label="phone number"
        showLabel="top"
        onInputChange={handleChange}
        name="phoneNumber" 
      />
      <Input
        required
        InputType="number"
        label="Number of Guests"
        showLabel="top"
        onInputChange={handleChange}
        name="numberOfGuests" 
        other={{
          min:0, max:10}}
      />

      <Input
        required
        InputType="reservationTimetime-local"
        label="reservationTime and time "
        showLabel="top"
        onInputChange={handleChange}
        name="reservationTime" 
      />

      
       <div className={clsx("capitalize gap-1 w-full grid col-span-full ")}>
          <label>Other Comments:</label>
      <textarea   placeholder="If you have any comments, please write them here..."  
        name="note"
          onChange={handleChange}
           value={bookingForm.note}
      className={`col-span-2 bg-white  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500`} />
    </div>


      <div className="col-span-full text-right pt-6">
        <Button color={"yellow"} label="send" onSumbit={handleSubmit}/>
      </div>

      
    </form>
  );
}

export default Form;