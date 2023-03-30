import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import Alert from "./Alert";
import Link from "next/link";

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
      className="pt-1 h-auto sm:h-screen w-screen bg-bgEarth bg-cover bg-center from-[#1d1d1d] to-[#abb3cd]"
    >
      <div className="sm:h-screen bg-gray-800/50 backdrop-brightness-50">
        <div className="max-w-[1240px] pt-24 m-auto">
          <h1 className="text-4xl font-bold text-center text-[#ebeef3]">
            Contact
          </h1>

          <div className="px-0 sm:px-0 justify-center mx-auto flex flex-col sm:flex-row items-center grayscale-0">
            <h3 class="flex justify-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-300">
              Get In <span class="text-blue-600 p-5">Touch</span>
            </h3>

            <div className="py-5 sm:py-10 flex flex-col flex-wrap justify-center">
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
                    </Form>
                  );
                }}
              </Formik>
              <div className="flex justify-end pt-5 sm:pt-20">
                <Link
                  href="#contact"
                  className="inline-flex items-center px-3 py-2 text-2xl
                    font-medium text-center text-white bg-blue-600 rounded-lg
                    hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
                >
                  Send message
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
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
