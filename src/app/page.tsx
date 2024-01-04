"use client"; // This is a client component
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, []);

  return (
    <>
      <div>Redirecting...</div>
    </>
  );
}
