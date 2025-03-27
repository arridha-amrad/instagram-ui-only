"use client";

import { ChangeEvent, useState } from "react";
import InputWithFloatingLabel from "../InputWithFloatingLabel";

function FormResetPassword() {
  const [state, setState] = useState({
    password: "",
    confirmPassword: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form action="" className="w-full space-y-3">
      <InputWithFloatingLabel
        label="New password"
        name="password"
        onChange={onChange}
        type="password"
        value={state.password}
      />
      <InputWithFloatingLabel
        label="Confirm wew password"
        name="confirmPassword"
        onChange={onChange}
        type="password"
        value={state.password}
      />
      <button className="bg-skin-primary w-full rounded-lg py-2 text-sm font-bold">
        Reset My Password
      </button>
    </form>
  );
}

export default FormResetPassword;
