"use client"
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import cookies  from "js-cookie";

export default function LogoutPage() {
  const router = useRouter();

  // Remove the auth cookie
  cookies.remove("auth");

  // Optionally display a message to the user
  return (
    <div className="logout-message">
      <h2>You have been logged out successfully.</h2>
      <p>Click the button below to go back to the login page.</p>
      <button onClick={() => router.push("/")}>Login Page</button>
    </div>
  );
}
