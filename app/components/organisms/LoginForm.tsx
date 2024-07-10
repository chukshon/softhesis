import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../context/UserContext";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm = () => {
  return <div>Login Form</div>;
};

export default LoginForm;
