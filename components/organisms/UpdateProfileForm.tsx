import { profileSchema } from "@/schemas/userSchema";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/context/UserContext";
import { useForm, SubmitHandler } from "react-hook-form";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";

type ProfileFormInputs = z.infer<typeof profileSchema>;

const UpdateProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormInputs>({
    resolver: zodResolver(profileSchema),
  });
  const { user, setUser } = useUser();
  const onSubmit: SubmitHandler<ProfileFormInputs> = (data) => {
    setUser(data);
    alert("Profile updated successfully");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10">
      <FormField
        label="Name"
        name="name"
        type="text"
        placeholder="Enter your name"
        register={register}
        error={errors.name?.message}
      />
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
        placeholder="Enter a new password"
        register={register}
        error={errors.password?.message}
      />
      <Button type="submit">Update Profile</Button>
    </form>
  );
};

export default UpdateProfileForm;
