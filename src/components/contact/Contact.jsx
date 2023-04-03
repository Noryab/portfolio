import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import Link from "next/link";
import Alert from "../utilities/Alert";

const Contact = ({ profile, loading }) => {
  const profileSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "The name is to short")
      .required("* Please enter your name."),
    lastName: Yup.string().required("* Please enter your last name."),
    email: Yup.string().email().required("* Please enter your email address."),
    message: Yup.string().required("* Please enter a message."),
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
          <h1 className="text-4xl font-bold text-center text-[#e99401]">
            Contact
          </h1>

          <div className="px-10 pt-10  sm:px-0 justify-center mx-auto flex flex-col sm:flex-row items-center grayscale-0">
            <div className="sm:grid sm:grid-rows-3 flex-wrap">
              <div className="sm:py-10 flex sm:row-start-1">
                <h3 class="flex justify-start  text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-300">
                  Get In <span class="text-[#e99401] p-5">Touch</span>
                </h3>
              </div>
              <div className="sm:row-start-2 text-white flex justify-center items-start">
                <div className="flex flex-col justify-center">
                  <h3 class="flex flex-wrap justify-start text-2xl sm:text-3xl leading-normal font-extrabold tracking-tight text-gray-300">
                    Email
                    <div className="flex flex-col text-2xl sm:pr-5">
                      <span class="text-[#e99401] p-0 text-center">
                        <a href="mailito:balgaci@gmail.com">
                          balgaci@gmail.com
                        </a>
                      </span>
                      <span className="text-center">or</span>
                      <span class="text-[#e99401] p-0 text-center">
                        <a href="mailito:balgaci@unam.mx.com">
                          balgaci@unam.mx.com
                        </a>
                      </span>
                      <p className="text-left">... or use the form</p>
                    </div>
                  </h3>
                </div>
              </div>
              <div className="text-white flex justify-center items-start"></div>
            </div>
            <div className=" sm:py-10 flex flex-col flex-wrap justify-center">
              <Formik
                initialValues={{
                  firstName: profile?.firstName ?? "",
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
                          <label className="text-white " htmlFor="">
                            First Name:
                          </label>
                          <Field
                            id="firstName"
                            type="text"
                            className="mt-2 w-full p-3 bg-gray-50"
                            placeholder="First Name *"
                            name="firstName"
                          />
                          {errors.firstName && touched.firstName ? (
                            <Alert>{errors.firstName}</Alert>
                          ) : null}
                        </div>
                        <div className="flex flex-col sm:pl-2">
                          <label className="text-white" htmlFor="">
                            Last Name:
                          </label>
                          <Field
                            id="lastName"
                            type="text"
                            className="mt-2  w-full p-3 bg-gray-50"
                            placeholder="Last Name"
                            name="lastName"
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="text-white" htmlFor="">
                          Email Address:
                        </label>
                        <Field
                          id="email"
                          type="text"
                          className="mt-2  w-full p-3 bg-gray-50"
                          placeholder="Email *"
                          name="email"
                        />
                      </div>
                      {errors.email && touched.email ? (
                        <Alert>{errors.email}</Alert>
                      ) : null}

                      <div className="mb-4">
                        <label className="text-white" htmlFor="">
                          Message:
                        </label>
                        <Field
                          as="textarea"
                          id="message"
                          type="text"
                          class="peer block min-h-fit w-full rounded border-0 py-[0.32rem] px-3 leading-[4.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                          placeholder="Message *"
                          name="message"
                        />
                        {errors.message && touched.message ? (
                          <Alert>{errors.message}</Alert>
                        ) : null}
                      </div>
                    </Form>
                  );
                }}
              </Formik>
              <div className="flex justify-end pt-5 sm:pt-20">
                <Link
                  href="#contact"
                  className="inline-flex items-center px-3 py-2 text-2xl
                  font-medium text-center text-white bg-[#e99401] rounded-lg
                  hover:bg-[#f2a727] focus:ring-4 focus:outline-none focus:ring-blue-300
                  dark:bg-[#f2a727] dark:hover:bg-[#f2a727] dark:focus:ring-[#e99401]"
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
