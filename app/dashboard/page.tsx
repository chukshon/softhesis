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
  return <div>Dashboard page test</div>;
};

export default DashboardPage;
