import React from 'react';
import useFooter from '../hooks/useFooter';
import Assignment1logo from '../assets/Assignment1logo.png';

const Footer = () => {
  const { footerData, loading } = useFooter();
  const fooData = footerData?.data;

  return (
    <div className='bg-[#E7F1F2] px-16 pb-8'>
      <footer className="text-tertiary body-font">
        <div className="container px-5 py-24 mx-auto">
          {loading ? (
            // Display loading spinner when loading is true
            <div className="flex justify-center items-center">
              <div className="rounded-md h-12 w-12 border-4 border-t-4 border-orange animate-spin"></div>
            </div>
          ) : (
            <div className="flex flex-wrap md:text-left text-center">
              <div className="md:w-1/2 w-full px-4">
                <h1 className='font-bold text-primary text-2xl'>Tagline will go here. Lorem ipsum</h1>
                <p className='font-bold text-[#00D5F8]'>{fooData?.contact_mail}</p>
              </div>

              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Address</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-tertiary hover:text-gray-800">{fooData?.address}</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 flex flex-col">Contacts</h2>
                <ul>
                  <li className="text-tertiary hover:text-gray-800">{fooData?.contact_mail}</li>
                  <li className="text-tertiary hover:text-gray-800">{fooData?.contact_no}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        {!loading && (
          <div className="flex justify-between px-5 py-8">
            <div>
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img className='w-28 inline-block items-center' src={Assignment1logo} alt='logo' />
              </a>
            </div>
            <div className='flex gap-8'>
              <a href="/">About</a>
              <a href="/">Blogs</a>
              <a href="/">Contact</a>
              <a href="/">Services</a>
            </div>
            <div>
              <p className='text-tertiary text-sm'>2022. All Rights Reserved.</p>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
};

export default Footer;
