"use client";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import React from "react";

const DashboardPage = () => {
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
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h1>Welcome, {user.email}</h1>
      <Link href="/profile">
        <p className="text-blue-500">Click here to update Profile</p>
      </Link>
    </div>
  );
};

export default DashboardPage;
