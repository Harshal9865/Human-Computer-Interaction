import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';  // For form validation

// Custom Hook for Form Data
const useFormData = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const resetForm = () => setFormData(initialState);

  return { formData, handleInputChange, resetForm };
};

const ContactPage = () => {
  const { formData, handleInputChange, resetForm } = useFormData({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  // React Hook Form setup
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const onSubmit = (data) => {
    alert('Your message has been submitted!');
    resetForm();  // Reset form after submission
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-0 flex justify-center items-center">
      <motion.div
        className="max-w-full w-full md:w-3/4 lg:w-2/3 flex bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full md:w-2/5 flex flex-col pr-8">
          <motion.h1
            className="text-4xl font-bold mb-6 text-center text-teal-500"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>

          <motion.div
            className="text-lg text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="mb-4">Have a question or feedback? We're here to help! Please reach out to us using the form below or through any of the other methods.</p>

            <motion.h2
              className="text-2xl font-semibold text-teal-600 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Our Contact Details
            </motion.h2>
            <ul className="list-none space-y-4">
              <li><strong>Email:</strong> <a href="mailto:support@example.com" className="text-teal-600">support@example.com</a></li>
              <li><strong>Phone:</strong> +1 (234) 567-890</li>
              <li><strong>Address:</strong> 123 Business St., City, Country</li>
            </ul>
          </motion.div>

          <motion.h2
            className="text-2xl font-semibold text-teal-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Send Us a Message
          </motion.h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Your Name</label>
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Your Email</label>
              <input
                {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address' } })}
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Your Message</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                id="message"
                name="message"
                value={message}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg"
                rows="5"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Help Desk Team Section */}
        <div className="hidden md:block w-full md:w-3/5 flex flex-col items-center justify-center pl-8">
          <motion.h2
            className="text-3xl font-semibold text-teal-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Our Help Desk Team
          </motion.h2>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <img src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Office" className="w-full h-auto rounded-lg shadow-lg" />
          </motion.div>

          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Our Help Desk team is dedicated to providing excellent support for all your inquiries. Whether you need technical assistance, help with using our platform, or have general questions, our team is here to help you every step of the way.
          </motion.p>

          <motion.h3
            className="text-2xl font-semibold text-teal-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            Meet Our Team
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dynamic Team Member */}
            {['Akash Gupta', 'Samay'].map((name, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img
                  src={idx === 0 ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhq3M_iJI2sNFs8Q00VbwADYA_hTfbyzXINg&s' : 'https://www.redwolf.in/image/cache/catalog/marketplace/samay-raina/samay-raina-artist-image-272x275.jpg?m=1706184771'}  // Separate images for each
                  alt={`Team Member ${idx + 1}`}
                  className="w-32 h-32 rounded-full mb-4 hover:scale-110 transition duration-300"
                />
                <h4 className="text-xl font-semibold text-teal-600">{name}</h4>
                <p className="text-gray-700">{idx === 0 ? 'Lead Support Specialist' : 'Technical Support Engineer'}</p>
                <p className="text-gray-600 text-center">
                  {idx === 0
                    ? 'John has over 10 years of experience in customer support and leads our team in providing top-tier assistance.'
                    : 'Jane specializes in troubleshooting and providing solutions to complex technical issues.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
