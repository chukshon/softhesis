import LoginForm from "@/components/organisms/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1 className="text-center text-[30px] font-[600]">Login Page</h1>
      <LoginForm />
      <span className="flex flex-col items-center j">
        <p>Email: user@example.com</p>
        <p>Password: password</p>
      </span>
    </div>
  );
};

export default LoginPage;
