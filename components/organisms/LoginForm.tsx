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
      alert("Invalid login credentials");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10">
      <FormField
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        register={register}
        required
        error={errors.email?.message}
      />
      <FormField
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        register={register}
        required
        error={errors.password?.message}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
