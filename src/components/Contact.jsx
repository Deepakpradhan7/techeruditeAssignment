import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    phone: '',
    budget: '',
    description: ''
  });
  const [errors, setErrors] = useState({}); 
  const [successMessage, setSuccessMessage] = useState(''); 
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value }); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!formData.fName) newErrors.fName = 'First name is required';
    if (!formData.lName) newErrors.lName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.budget) {
      newErrors.budget = 'Budget is required';
    } else if (Number(formData.budget) <= 0) {
      newErrors.budget = 'Budget must be greater than zero';
    }
    if (!formData.description) newErrors.description = 'Description is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

   
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://3.7.81.243:3253/api/contact/send', {
        fname: formData.fName,
        lname: formData.lName,
        email: formData.email,
        phone: formData.phone,
        budget: formData.budget,
        description: formData.description,
      });

      console.log('Form submitted successfully:', response.data);
      
   
      setSuccessMessage('Form submitted successfully!');
      setTimeout(() => {
        setSuccessMessage('');  // clearing success message 
      }, 2000);
      
      setFormData({
        fName: '',
        lName: '',
        email: '',
        phone: '',
        budget: '',
        description: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex items-center justify-center px-6 my-4 mt-10 rounded-lg text-primary'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <p>
          <small>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
          </small>
        </p>
        {successMessage && <div className="text-green-500">{successMessage}</div>}
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center py-5'>
          <div className='grid grid-flow-row grid-cols-2 gap-6 py-4'>
            <div className="">
              <label htmlFor="fName" className="text-sm leading-7 text-gray-600">First Name</label>
              <input
                type="text"
                id="fName"
                value={formData.fName}
                onChange={handleChange}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              {errors.fName && <p className="text-xs text-red-500">{errors.fName}</p>}
            </div>
            <div className="">
              <label htmlFor="lName" className="text-sm leading-7 text-gray-600">Last Name</label>
              <input
                type="text"
                id="lName"
                value={formData.lName}
                onChange={handleChange}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              {errors.lName && <p className="text-xs text-red-500">{errors.lName}</p>}
            </div>
            <div className="">
              <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>
            <div className="">
              <label htmlFor="phone" className="text-sm leading-7 text-gray-600">Phone</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
            </div>
            <div className="">
              <label htmlFor="budget" className="text-sm leading-7 text-gray-600">Budget</label>
              <input
                type='number'
                id="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              {errors.budget && <p className="text-xs text-red-500">{errors.budget}</p>}
            </div>
            <div className="">
              <label htmlFor="description" className="text-sm leading-7 text-gray-600">Description</label>
              <input
                id="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              {errors.description && <p className="text-xs text-red-500">{errors.description}</p>}
            </div>
          </div>
          <button
            type='submit'
            className='px-6 py-3 text-lg font-bold rounded-full bg-orange text-secondary'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
