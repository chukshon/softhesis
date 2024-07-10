"use client";

import UpdateProfileForm from "@/components/organisms/UpdateProfileForm";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p>You need to be Logged in First.</p>
        <Link href="login" className="text-blue-700">
          Login
        </Link>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1>Profile</h1>
      <UpdateProfileForm />
    </div>
  );
};

export default ProfilePage;
