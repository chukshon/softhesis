"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useUser } from "../../context/UserContext";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/userSchema";
import Link from "next/link";

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();
  const { setUser } = useUser();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    // Static check
    if (data.email === "user@example.com" && data.password === "password") {
      setUser({ email: data.email });
      router.push("/dashboard");
    } else {
      alert("Invalid login credential");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-[30px] max-w-[350px]"
    >
      <FormField
        name="email"
        type="email"
        placeholder="Email"
        register={register}
        required
        error={errors.email?.message}
      />
      <FormField
        name="password"
        type="password"
        placeholder="Password"
        register={register}
        required
        error={errors.password?.message}
      />
      <Link
        href="/"
        className="block text-right text-[#95A4FC] text-[14px] font-[400]"
      >
        Forgot Password?
      </Link>

      <div className="mt-[30px]">
        <Button type="submit">Login</Button>
      </div>

      <span className="text-regular-14 flex justify-center mt-[10px] gap-[5px]">
        <p className="text-[rgba(28,28,28,0.4)]">Don’t have an account?</p>
        <Link href="/" className="text-[#95A4FC]">
          Click here
        </Link>
      </span>
    </form>
  );
};

export default LoginForm;
