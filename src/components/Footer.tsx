import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-primary px-10 py-3" id='#Footer'>
      <div className="text-[50px] text-white font-[600]">Eleve</div>
      <div className="lg:grid lg:grid-cols-4">
        <div className="mr-3 mt-3">
          <div className="text-[30px] text-white font-[400]">
            Development Services
          </div>
          <div className="text-[20px] text-white font-[300]">
            Cutting-Edge Frontend Development
          </div>
          <div className="text-[20px] text-white font-[300]">
            High-Performance Backend Solutions
          </div>
          <div className="text-[20px] text-white font-[300]">
            Comprehensive Full-Stack Expertise
          </div>
        </div>

        <div className="mr-3 mt-3">
          <div className="text-[30px] text-white font-[400]">Resources</div>
          <div className="text-[20px] text-white font-[300]">
            Developer Documentation
          </div>
          <div className="text-[20px] text-white font-[300]">
            API & Integration Guides
          </div>
        </div>

        <div className="mr-3 mt-3">
          <div className="text-[30px] text-white font-[400]">Technologies</div>
          <div className="text-[20px] text-white font-[300]">
            Latest JavaScript Frameworks
          </div>
          <div className="text-[20px] text-white font-[300]">
            Advanced Cloud Solutions
          </div>
          <div className="text-[20px] text-white font-[300]">
            Scalable E-Commerce Systems
          </div>
        </div>

        <div className="lg:col-end-7 mt-3">
          <div className="text-[30px] text-white font-[400]">Contact Us</div>
          <div className="text-[20px] text-white font-[300]">
            San Francisco, California, USA
          </div>
          <div className="text-[20px] text-white font-[300]">
            Engage with us for your next project.
          </div>
        </div>
      </div>

      <div className="lg:flex justify-between mt-4 mb-3">
        <div className="flex mb-2 mr-3">
          {/* Social icons can stay the same */}
        </div>

        <div>
          <span className="text-[20px] text-white font-[300]">
            Copyright © Eleve Brands. All Rights Reserved. 2024 | A
            Developer-Centric Company
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
