import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import HeroSection from '../components/HeroSection';

export default function Catering(){

      const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: 'Birthday Party',
    guests: '',
    date: '',
    timeReq: '',
    phone: '',
  });
    const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();


        emailjs.send(
      'service_cxsilwe',
      'template_37y8v8v',
      formData,
      'eRyGPiF5PC3YxLl_G'
    )
    .then((result) => {
      alert("Quote request sent! We'll get back to you shortly.");
      console.log(result.text);
    }, (error) => {
      alert("Something went wrong. Please try again later.");
      console.error(error.text);
    });
  };
    return (
        <>
      {/* Hero Section */}
      <HeroSection title='Catering'
        description='Planning a special event? Let Burger Bros bring the flavor! From backyard parties to weddings and corporate events, we offer customizable catering options that satisfy every crowd. Freshly made, crowd-pleasing favorites — delivered hot and hassle-free.'
        image="https://images.unsplash.com/photo-1623475173140-ad2f0369ca92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk1MDJ8MHwxfHNlYXJjaHwzfHxjYXRlcmluZ3xlbnwwfDB8fHwxNzQ5MDU0NTY4fDA&ixlib=rb-4.1.0&q=80&w=1080" />
        <br />
      <div className='quoteDiv'>
        <form onSubmit={handleSubmit} className="quote-form">
      <h3>Request a Catering Quote</h3>
      <input name="name" type="text" placeholder="Your Name" required onChange={handleChange} />
      <input name="phone" type="text" placeholder="Your Phone Number" required onChange={handleChange} />
      <input name="email" type="email" placeholder="Your Email" required onChange={handleChange} />
      <select name="eventType" onChange={handleChange}>
        <option>Birthday Party</option>
        <option>Wedding</option>
        <option>Corporate Event</option>
      </select>
      <input name="guests" type="number" placeholder="Approx. # of Guests" required onChange={handleChange} />
      <input name="date" type="date" required onChange={handleChange} />
      <input name="timeReq" type="time" onChange={handleChange} />
      <button className="quoteBtn" type="submit">Request Quote</button>
    </form>
        </div>
        </>
    )
}