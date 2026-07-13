"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginForm() {
  return (
    <div className="w-full max-w-md">

      <h1 className="text-5xl font-bold mb-10">
        Welcome Back
      </h1>

      <div className="space-y-5">

        <Input placeholder="Email" />

        <Input
          type="password"
          placeholder="Password"
        />

        <Button className="w-full">
          Login
        </Button>

      </div>

    </div>
  );
}