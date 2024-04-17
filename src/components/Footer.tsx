import React from "react";

const Footer = () => {
  return (
    <div className='footer bg-primary px-10 py-3'>
      <div className='text-[50px] text-white font-[600]'>eleve</div>
      <div className='lg:grid lg:grid-cols-4'>
        <div className='mr-3 mt-3'>
          <div className='text-[30px] text-white font-[400]'>Eleve Explore</div>
          <div className='text-[20px] text-white font-[300]'>
            Eleve AI Analytics
          </div>
          <div className='text-[20px] text-white font-[300]'>
            Collaboration Dashboard
          </div>
        </div>

        <div className='mr-3 mt-3'>
          <div className='text-[30px] text-white font-[400]'>Services</div>
          <div className='text-[20px] text-white font-[300]'>Brands</div>
          <div className='text-[20px] text-white font-[300]'>Agencies</div>
        </div>

        <div className='mr-3 mt-3'>
          <div className='text-[30px] text-white font-[400]'>Solutions</div>
          <div className='text-[20px] text-white font-[300]'>Rank me</div>
          <div className='text-[20px] text-white font-[300]'>Hochads</div>
        </div>

        <div className='mr-3 mt-3'>
          <div className='text-[30px] text-white font-[400]'>Eleve Blog</div>
        </div>

        <div className='lg:col-end-7 mt-3'>
          <div className='text-[30px] text-white font-[400]'>Address</div>
          <div className='text-[20px] text-white font-[300]'>
            San Diego, California, USA
          </div>
          <div className='text-[20px] text-white font-[300]'>
            Need more info/ Request for a pruposal?
          </div>
        </div>
      </div>

      <div className='lg:flex justify-between mt-4 mb-3'>
        <div className='flex mb-2 mr-3'>
          <a href='#' target='_blank' rel='noopener' className='mr-3'>
            <svg
              className='h-8 w-8 text-white'
              viewBox='0 0 48 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M48 24a24 24 0 1 0-27.75 23.7V30.95h-6.1V24h6.1v-5.29c0-6.01 3.58-9.34 9.07-9.34 2.62 0 5.37.47 5.37.47v5.91h-3.03c-2.98 0-3.91 1.85-3.91 3.75V24h6.66l-1.07 6.94h-5.59V47.7A24 24 0 0 0 48 24Z'
                fill='currentColor'
              ></path>
            </svg>
          </a>
          <a href='#' target='_blank' rel='noopener'>
            <svg
              className='h-8 w-8 text-white'
              viewBox='0 0 48 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z'
                fill='currentColor'
              ></path>
            </svg>
          </a>
        </div>

        <div>
          <span className='text-[20px] text-white font-[300]'>
            Copyright © Eleve Tech Private Limited. All Rights Reserved. 2024 |
            A MSME Registered Company
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
