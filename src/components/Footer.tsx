import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-primary px-10 py-3">
      <div className="text-[50px] text-white font-[600]">Eleve</div>
      <div className="lg:grid lg:grid-cols-5">
        <div className="mr-3 mt-3">
          <div className="text-[30px] text-white font-[400]">
            Development Services
          </div>
          <div className="text-[20px] text-white font-[300]">
            Frontend Innovation
          </div>
          <div className="text-[20px] text-white font-[300]">
            Backend Efficiency
          </div>
          <div className="text-[20px] text-white font-[300]">
            Full-Stack Mastery
          </div>
        </div>

        <div className="mr-3 mt-3">
          <div className="text-[30px] text-white font-[400]">Resources</div>
          <div className="text-[20px] text-white font-[300]">Documentation</div>
          <div className="text-[20px] text-white font-[300]">API Reference</div>
        </div>

        <div className="mr-3 mt-3">
          <div className="text-[30px] text-white font-[400]">Technologies</div>
          <div className="text-[20px] text-white font-[300]">
            JavaScript Frameworks
          </div>
          <div className="text-[20px] text-white font-[300]">
            Cloud Services
          </div>
          <div className="text-[20px] text-white font-[300]">
            E-Commerce Platforms
          </div>
        </div>

        {/* <div className="mr-3 mt-3">
          <div className="text-[30px] text-white font-[400]">Company Blog</div>
          <div className="text-[20px] text-white font-[300]">
            Insights & Updates
          </div>
        </div> */}

        <div className="lg:col-end-7 mt-3">
          <div className="text-[30px] text-white font-[400]">Contact Us</div>
          <div className="text-[20px] text-white font-[300]">
            San Francisco, California, USA
          </div>
          <div className="text-[20px] text-white font-[300]">
            Ready to start a project? Get in touch.
          </div>
        </div>
      </div>

      <div className="lg:flex justify-between mt-4 mb-3">
        <div className="flex mb-2 mr-3">
          {/* Social icons can stay the same */}
        </div>

        <div>
          <span className="text-[20px] text-white font-[300]">
            Copyright © Eleve Dev. All Rights Reserved. 2024 | A
            Developer-Centric Company
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
