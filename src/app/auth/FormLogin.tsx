"use client";

import { Button } from "@headlessui/react";
import InputWithFloatingLabel from "./InputWithFloatingLabel";
import { ChangeEvent, useState } from "react";

export default function FormLogin() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full px-6 space-y-2">
      <InputWithFloatingLabel
        name="username"
        label="Email or Username"
        onChange={onChange}
        type="text"
        value={state.username}
      />
      <InputWithFloatingLabel
        name="password"
        label="Password"
        onChange={onChange}
        type="password"
        value={state.password}
      />
      <div className="h-1" />
      <Button className="disabled:bg-skin-primary/80 bg-skin-primary py-2 w-full font-semibold rounded-lg text-sm">
        Log In
      </Button>
    </div>
  );
}
