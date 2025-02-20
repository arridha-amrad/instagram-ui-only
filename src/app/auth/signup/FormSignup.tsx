"use client";

import { ChangeEvent, useState } from "react";
import InputWithFloatingLabel from "../InputWithFloatingLabel";
import Link from "next/link";
import { Button } from "@headlessui/react";

export default function FormSignup() {
  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
    fullname: "",
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="space-y-2 w-full">
        <InputWithFloatingLabel
          label="Email"
          name="email"
          onChange={onChange}
          type="text"
          value={state.email}
        />
        <InputWithFloatingLabel
          label="Password"
          name="password"
          onChange={onChange}
          type="password"
          value={state.password}
        />
        <InputWithFloatingLabel
          label="Full Name"
          name="fullname"
          onChange={onChange}
          type="text"
          value={state.fullname}
        />
        <InputWithFloatingLabel
          label="Username"
          name="username"
          onChange={onChange}
          type="text"
          value={state.username}
        />
      </div>
      <div className="mt-4 mb-2">
        <p className="text-xs text-center text-skin-muted">
          People who use our service may have uploaded your contact information
          to Instagram.&nbsp;
          <Link href="/" className="text-skin-link py-1 font-semibold">
            Learn More.
          </Link>
        </p>
      </div>
      <div className="mb-2">
        <p className="text-xs text-center text-skin-muted">
          By signing up, you agree to our{" "}
          <Link href="/" className="text-skin-link font-semibold">
            Terms
          </Link>{" "}
          ,{" "}
          <Link href="/" className="text-skin-link font-semibold">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link className="text-skin-link font-semibold" href="/">
            Cookies Policy
          </Link>{" "}
          .
        </p>
      </div>
      <div className="my-2 w-full">
        <Button className="font-bold bg-blue-500 rounded-lg w-full py-2 text-sm">
          Sign Up
        </Button>
      </div>
    </>
  );
}
