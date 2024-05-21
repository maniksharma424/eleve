"use client";
import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { serviceData } from "@/constants";

const SignUp = ({ showModal, setShowModal }: any) => {
  const services = serviceData;
  const [serviceOptions, setServiceOptions] = useState(services);

  //   Body Scroll
  useEffect(() => {
    if (showModal) {
      // prevent scrolling
      document.body.style.overflow = "hidden";
    } else {
      // auto scrolling
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);
  // Define an interface for the service option
  interface ServiceOptions {
    name: string;
    checked: boolean;
  }

  // State variables to store form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    designation: "",
    services: [] as ServiceOptions[],
  });

  // Checkbox handling
  const handleCheck = (index: number) => {
    setServiceOptions(
      serviceOptions.map((service, currentIndex) =>
        currentIndex === index
          ? { ...service, checked: !service.checked }
          : service
      )
    );
  };

  // Form data handling
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // checkbox values
  useEffect(() => {
    setFormData((formData) => ({
      ...formData,
      services: serviceOptions.filter((option) => option.checked),
    }));
  }, [serviceOptions]);

  // Submit handling
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);

    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      designation: "",
      services: [] as ServiceOptions[],
    });

    setServiceOptions(serviceData);
  };

  return (
    <>
      {/* Backdrop */}
      {showModal && (
        <div className="fixed inset-0 bg-black opacity-80 z-[600]"></div>
      )}

      {/* Modal main section */}
      {showModal && (
        <div
          className={`fixed inset-0 z-[600] flex items-center justify-center`}
        >
          <div
            id="form-controller"
            className={`bg-white rounded-md drop-shadow-lg w-4/5 sm:w-1/2 md:p-0`}
          >
            <form
              className="grid gap-y-3 p-[40px] mr-5 w-full"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="text-gray-700 font-bold" htmlFor="fullName">
                  Full Name<sup>*</sup>
                </label>

                <input
                  className="p-2 rounded-md w-full bg-custom-light-gray"
                  type="text"
                  placeholder="Your Name"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="text-gray-700 font-bold" htmlFor="email">
                  Email<sup>*</sup>
                </label>

                <input
                  className="p-2 rounded-md w-full bg-custom-light-gray"
                  type="email"
                  placeholder="your@mail.com"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="text-gray-700 font-bold" htmlFor="mobile">
                  Mobile Number
                </label>

                <input
                  className="p-2 rounded-md w-full bg-custom-light-gray"
                  type="tel"
                  placeholder="ex- 1231234567"
                  name="mobile"
                  id="mobile"
                  onChange={handleInputChange}
                  value={formData.mobile}
                />
              </div>

              <div>
                <label
                  className="text-gray-700 font-bold"
                  htmlFor="designation"
                >
                  Designation<sup>*</sup>
                </label>

                <input
                  className="p-2 rounded-md w-full bg-custom-light-gray"
                  type="text"
                  placeholder="ex- SDE"
                  id="designation"
                  name="designation"
                  onChange={handleInputChange}
                  required
                  value={formData.designation}
                />
              </div>

              <div className=" flex flex-col justify-start items-start gap-2">
                <label className="text-gray-700 font-bold" htmlFor="services">
                  What Services are you looking for?<sup>*</sup>
                </label>
                {serviceOptions.map((option, index) => (
                  <div key={index}>
                    <input
                      className="mt-1 p-3"
                      type="checkbox"
                      checked={option.checked}
                      id={`checkbox-${index}`}
                      onChange={() => handleCheck(index)}
                    />
                    <label
                      className="pl-3 text-gray-500 font-medium"
                      htmlFor={`checkbox-${index}`}
                    >
                      {option.name}
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-5">
                <button
                  className="shadow bg-custom-black hover:bg-custom-black/70 px-4 py-2 text-white font-[700] rounded-md w-2/5"
                  onClick={() => {
                    setShowModal((n: any) => !n);
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowModal((n: any) => !n);
                  }}
                  className="shadow bg-primary hover:bg-primary/70 px-4 py-2 text-white font-[700] rounded-md w-2/5"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
