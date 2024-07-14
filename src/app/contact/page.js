"use client";

import ContactComponent from "@/components/pages/contact/ContactComponent";
import SuccessModal from "@/components/pages/contact/SuccessModal";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateField = (name, value) => {
    let error = "";

    if (name === "name") {
      if (!value.trim()) {
        error = "Name is required";
      } else if (value.length < 3 || value.length > 32) {
        error = "Name must be between 3 and 32 characters";
      } else if (!/^[A-Za-z\s]+$/.test(value)) {
        error = "Name can only contain letters and spaces";
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Invalid email format";
      }
    }

    if (name === "message") {
      if (!value.trim()) {
        error = "Message is required";
      } else if (value.length < 3 || value.length > 80) {
        error = "Message must be between 3 and 80 characters";
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    return error === "";
  };

  useEffect(() => {
    Object.keys(formData).forEach((field) => {
      if (touched[field]) {
        validateField(field, formData[field]);
      }
    });
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.keys(formData).every((field) =>
      validateField(field, formData[field])
    );

    if (isValid) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setTouched({});
  };

  const isFormValid = () => {
    return (
      Object.keys(errors).every((key) => !errors[key]) &&
      Object.values(formData).every((value) => value.trim() !== "")
    );
  };

  return (
    <div className="p-8 sm:p-12 md:p-10 lg:p-20 xl:p-20 mt-20 sm:mt-20 md:mt-20 lg:mt-16 xl:mt-12 mx-0 sm:mx-0 md:mx-10 lg:mx-10 xl:mx-20">
      <div className="spotlight-text flex flex-col gap-3 pb-10">
        <h1 className="text-center text-4xl font-light mb-2">
          Get In Touch
        </h1>
        <div className="upstairs fixed -right-24 sm:-right-24 md:-right-10 lg:right-24 xl:right-24 top-56 sm:top-56 md:top-40 lg:top-40 xl:top-40"></div>
      </div>

      <ContactComponent
        isFormValid={isFormValid}
        handleSubmit={handleSubmit}
        handleBlur={handleBlur}
        handleChange={handleChange}
        formData={formData}
        errors={errors}
        touched={touched}
      />

      <SuccessModal isModalOpen={isModalOpen} closeModal={closeModal} formData={formData} />
    </div>
  );
};

export default Contact;
