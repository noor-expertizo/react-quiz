import React from "react";
import LoginForm from "@/components/LoginForm";

interface LoginInterface {
}

const Login: React.FC<LoginInterface> = () => {

  return (
   <>
   <LoginForm />
   </>
  );
};

export default Login;
