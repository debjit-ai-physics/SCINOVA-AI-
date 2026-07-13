"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SignupForm() {
  return (
    <div className="w-full max-w-md">

      <h1 className="text-5xl font-bold mb-10">
        Create Account
      </h1>

      <div className="space-y-5">

        <Input placeholder="Full Name" />

        <Input placeholder="Email" />

        <Input
          type="password"
          placeholder="Password"
        />

        <Button className="w-full">
          Sign Up
        </Button>

      </div>

    </div>
  );
}