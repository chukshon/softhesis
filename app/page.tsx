"use client";
import { useUser } from "@/context/UserContext";
import Link from "next/link";

export default function Home() {
  const { user } = useUser();
  return (
    <main className="">
      <h1 className="text-center text-[30px]">Welcome to Softhesis</h1>
      {user ? (
        <Link href="/dashboard" className="text-blue-700 text-center block">
          Dashboard
        </Link>
      ) : (
        <Link href="/login" className="text-blue-700 text-center block">
          Kindly Login
        </Link>
      )}
    </main>
  );
}
