import React, {useState} from 'react'

import ContactUsImg from "../../assets/contact_us_img.png"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agree: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }



  return (
    <div className='contact-us-container flex justify-center items-center flex-col'>
        
        <div className='content bg-secondaryBgColor p-6 flex w-full'>
          <div className='rounded-[10px] w-1/2'>
          <img src={ContactUsImg} width={614} height={614} alt="contact-us-img" />
          </div>
          <div className='w-1/2 pl-8'>
            <div className='section-sub-header'>Contact Us</div>
            <div className='text-primaryFontColor font-inter text-[18px] font-normal'>
            Need help? Have feedback for us? Get in touch now!
            </div>
            <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-primaryFontColor mb-1">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5b451f] w-full"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-primaryFontColor mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5b451f] w-full"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-primaryFontColor mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="e.g. person@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#5b451f]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-primaryFontColor mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Leave us a message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3 text-sm w-full h-32 focus:outline-none focus:ring-2 focus:ring-[#5b451f]"
              ></textarea>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mr-2 text-primaryFontColor focus:ring-2 focus:ring-[#5b451f]"
              />
              <label htmlFor="agree" className="text-sm text-primaryFontColor">
                You agree to our friendly{' '}
                <a href="/privacy-policy" className="text-contactUsBtnColor underline">
                  privacy policy
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#c09a2d] text-white text-sm font-bold py-3 px-6 rounded-lg w-full hover:bg-[#8a6e20] transition duration-300"
            >
              Submit
            </button>
          </form>
          </div>
         
        </div>
    </div>
  )
}

export default ContactUs