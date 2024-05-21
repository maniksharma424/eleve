import React from "react";

const Footer = () => {
  return (
    <div
      className="footer bg-primary text-custom-dark-gray mt-10 px-10 py-3"
      id="Footer"
    >
      <div className="text-[50px] font-[600]">Eleve</div>
      <div className="lg:grid lg:grid-cols-3">
        <div className="mr-3 mt-3">
          <div className="text-[30px] font-[400]">Development Services</div>
          <div className="text-[20px] font-[300]">Website Designing</div>
          <div className="text-[20px] font-[300]">SEO and Content</div>
          <div className="text-[20px] font-[300]">Logo Design</div>
          <div className="text-[20px] font-[300]">Reputation Management</div>
          <div className="text-[20px] font-[300]">Paid Search Campaigns</div>
        </div>

        <div className="mr-3 mt-3">
          <div className="text-[30px] font-[400]">Technologies</div>
          <div className="text-[20px] font-[300]">JavaScript Frameworks</div>
          <div className="text-[20px] font-[300]">Cloud Solutions</div>
          <div className="text-[20px] font-[300]">E-Commerce Systems</div>
        </div>

        <div className="lg:col-end-7 mt-3">
          <div className="text-[30px] font-[400]">Contact Us</div>
          <div className="text-[20px] font-[300]">
            San Francisco, California, USA
          </div>
          <div className="text-[20px] font-[300]">
            Engage with us for your next project.
          </div>
        </div>
      </div>

      <div className="lg:flex justify-between mt-4 mb-3">
        <div className="flex mb-2 mr-3">
          {/* Social icons can stay the same */}
        </div>

        <div>
          <span className="text-[20px] font-[300]">
            Copyright © Eleve Brands. All Rights Reserved. 2024 | A
            Developer-Centric Company
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
