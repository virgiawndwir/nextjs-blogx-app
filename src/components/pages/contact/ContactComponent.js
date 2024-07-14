import Button from "@/components/ui/Button/Button";
import React from "react";

const ContactComponent = ({ 
  isFormValid,
  handleSubmit,
  handleBlur,
  handleChange,
  formData,
  errors,
  touched
 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 gap-4">
      <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-4 xl:col-span-4 order-last sm:order-last md:order-last lg:order-first xl:order-first">
        <p className="mt-6">
          <span className="text-lg font-bold">Address :</span>
          <br />
          <span className="text-gray-500 block mt-2">
            Tajur Street, Bogor City, West Java, <br />
            16146 Indonesia.
          </span>
        </p>
        <p className="mt-4">
          <span className="text-lg font-bold">Phone :</span>
          <br />
          <span className="text-gray-500 block mt-2">+62 852 8386 8663</span>
        </p>
        <p className="mt-4">
          <span className="text-lg font-bold">E-mail :</span>
          <br />
          <span className="text-gray-500 block mt-2">virgiawndwir@gmail.com</span>
        </p>
      </div>
      <div className="sm:col-span-1 md:col-span-1 lg:col-span-8 xl:col-span-8">
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6 mb-4">
              {/* <label className="block text-gray-700">
                Name <span className="text-red-500">*</span>
              </label> */}
              <input
                className={`form-control w-full px-3 py-2 focus:border-blue-400 rounded-none outline-none border ${
                  errors.name && touched.name
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                name="name"
                placeholder="Your name *"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="col-span-6 mb-4">
              {/* <label className="block text-gray-700">
                Email <span className="text-red-500">*</span>
              </label> */}
              <input
                className={`w-full px-3 py-2 focus:border-blue-400 rounded-none outline-none border ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                type="email"
                name="email"
                placeholder="Your email *"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            {/* <label className="block text-gray-700">
              Message <span className="text-red-500">*</span>
            </label> */}
            <textarea
              className={`w-full px-3 py-2 focus:border-blue-400 rounded-none outline-none border ${
                errors.message && touched.message
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Text you messages *"
            />
            <div className="text-gray-500 text-sm mt-1">
              {formData.message.length}/80
            </div>
            {errors.message && touched.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <Button
            data-modal-toggle="top-center-modal"
            disabled={!isFormValid()}
            type="submit"
            variant={"primary"}
            className={`w-full rounded-none`}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
