"use client"; 

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/store";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm: React.FC = () => {
  const router = useRouter();
  const { loginUser } = useAuthStore();


  const handleLogin = async (values: { username: string; password: string }) => {
    // const users = JSON.parse(localStorage.getItem("users") || "[]");
    // const user = users.find(
    //   (u: { username: string; password: string }) =>
    //     u.username === values.username
    // );

    // if (user && user.password === values.password) {
    //   alert("Login successful");
    //   router.push("/home");
    // } else {
    //   alert("Invalid username or password");
    // }

    try {
      await loginUser(values.username, values.password);
      const user = useAuthStore.getState().user;

      if (user) {
        router.push('/');
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login");
    } 
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-32">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        <Form>
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
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-slate-900 text-white py-2 px-4 rounded-md hover:bg-slate-600"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/signup")}
              className=" text-black  py-2 px-4 rounded-md hover:underline text-xs"
            >
             Do not have an account? Register

            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
