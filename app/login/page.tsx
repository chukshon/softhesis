import LoginForm from "@/components/organisms/LoginForm";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <div className="pt-[20px]">
      <div className="flex justify-center items-center">
        <Image
          src="/icons/financial-logo.svg"
          alt="softhesis logo"
          width={150}
          height={150}
        />
      </div>

      <h1 className="text-center text-[24px] font-inter font-[600] mt-[80px]">
        Sign In
      </h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
