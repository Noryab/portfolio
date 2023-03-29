import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import Alert from "./Alert";
// import Spinner from "./Spinner";

const Contact = ({ profile, loading }) => {
  const profileSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "The name is to short")
      .required("The name is required"),
    lastName: Yup.string().required("The name of lastName is required"),
    email: Yup.string().email().required("The email is required"),
    phone: Yup.number().integer().positive(),
    //message:Yup.string().min(3, "The name is to short").required("The email is required"),
  });

  const handleSubmit = async (values) => {
    try {
      let response;
      if (profile.id) {
        const url = `${import.meta.env.VITE_API_URL}/${profile.id}`;
        response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        const url = import.meta.env.VITE_API_URL;
        response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  return loading ? (
    Spinner
  ) : (
    <div
      id="contact"
      className="bg-white mt-10 py-10 rounded-md shadow-md md:w-3/4 mx-auto"
      // className="bg-local bg-bgEarth bg-cover bg-center from-[#1d1d1d] to-[#abb3cd]"
    >
      <div className="relative bg-gray-800/50 backdrop-brightness-50 h-auto w-screen grayscale-0">
        <div className="max-w-[1240px] m-auto py-5 sm:py-10 flex flex-col justify-center content-between items-center">
          <h1 className="text-4xl font-bold text-center text-[#ebeef3]">
            Contact
          </h1>
          <div className="flex flex-col px-10 justify-center items-center flex-wrap sm:flex-row">
            <h3 class="flex justify-center text-3xl sm:text-4xl py-5 leading-normal font-extrabold tracking-tight text-gray-300">
              Get In <span class="text-blue-600 pl-1">Touch</span>
            </h3>

            <Formik
              initialValues={{
                firstName: profile?.name ?? profile?.firstName ?? "",
                lastName: profile?.lastName ?? "",
                email: profile?.email ?? "",
                phone: profile?.phone ?? "",
                message: profile?.message ?? "",
              }}
              enableReinitialize={true}
              onSubmit={async (values, { resetForm }) => {
                await handleSubmit(values);
                resetForm();
              }}
              validationSchema={profileSchema}
            >
              {({ errors, touched }) => {
                console.log(errors);
                return (
                  <Form className="mt-5">
                    <div className="flex flex-col sm:flex-row mb-4">
                      <div className="flex flex-col">
                        <label className="text-gray-800 " htmlFor="">
                          First Name:
                        </label>
                        <Field
                          id="firstName"
                          type="text"
                          className="mt-2 w-full p-3 bg-gray-50"
                          placeholder="First Name"
                          name="firstName"
                        />
                        {errors.firstName && touched.firstName ? (
                          <Alert>{errors.firstName}</Alert>
                        ) : null}
                      </div>
                      <div className="flex flex-col sm:pl-2">
                        <label className="text-gray-800" htmlFor="">
                          Last Name:
                        </label>
                        <Field
                          id="lastName"
                          type="text"
                          className="mt-2  w-full p-3 bg-gray-50"
                          placeholder="Last Name"
                          name="lastName"
                        />
                        {errors.lastName && touched.lastName ? (
                          <Alert>{errors.lastName}</Alert>
                        ) : null}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="text-gray-800" htmlFor="">
                        Email Address:
                      </label>
                      <Field
                        id="email"
                        type="text"
                        className="mt-2  w-full p-3 bg-gray-50"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                    {errors.email && touched.email ? (
                      <Alert>{errors.email}</Alert>
                    ) : null}

                    {/* <div className="mb-4">
                  <label className="text-gray-800" htmlFor="">
                    Phone:
                  </label>
                  <Field
                    id="phone"
                    type="tel"
                    className="mt-2  w-full p-3 bg-gray-50"
                    placeholder="Phone number"
                    name="phone"
                  />
                </div> */}
                    {errors.phone && touched.phone ? (
                      <Alert>{errors.phone}</Alert>
                    ) : null}

                    <div className="mb-4">
                      <label className="text-gray-800" htmlFor="">
                        Message:
                      </label>
                      <Field
                        as="textarea"
                        id="message"
                        type="text"
                        className="mt-2  w-full p-3 bg-gray-50"
                        placeholder="Your message"
                        name="message"
                      />
                    </div>

                    <input
                      type="submit"
                      value="Send message"
                      className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
                    />
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Contact;
Contact.defaultProps = {
  profile: {},
  loading: false,
};

export default Contact;
