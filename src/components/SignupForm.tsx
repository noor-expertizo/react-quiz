"use client"; // This is a client component

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/store";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const Signup: React.FC = () => {
  const router = useRouter();
  const { signupUser } = useAuthStore();

  const handleSignup = (values: { fullname:string; username: string; password: string }) => {
    signupUser(values.fullname, values.username, values.password);
    router.push("/login");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-32">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <Formik
        initialValues={{fullname: "", username: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={handleSignup}
      >
        <Form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Full Name
            </label>
            <Field
              type="text"
              id="fullname"
              name="fullname"
              className="w-full border rounded-md py-2 px-3"
            />
            <ErrorMessage
              name="fullname"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username
            </label>
            <Field
              type="text"
              id="username"
              name="username"
              className="w-full border rounded-md py-2 px-3"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="w-full border rounded-md py-2 px-3"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-slate-900 text-white py-2 px-4 rounded-md hover:bg-slate-600"
            >
              Signup
            </button>
          </div>
        </Form>
      </Formik>
      <button
        onClick={() => router.push("/login")}
        className=" text-black  py-2 rounded-md hover:underline text-xs"
      >
        Already have an account?
      </button>
    </div>
  );
};

export default Signup;
