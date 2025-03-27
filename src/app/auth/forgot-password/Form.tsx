"use client";

import { useState } from "react";
import InputWithFloatingLabel from "../InputWithFloatingLabel";

function FormForgotPassword() {
  const [identity, setIdentity] = useState("");
  return (
    <form action="" className="w-full space-y-2">
      <InputWithFloatingLabel
        label="Username or email"
        name="identity"
        onChange={(e) => setIdentity(e.target.value)}
        type="text"
        value={identity}
      />
      <p className="text-skin-muted text-sm">
        You may receive email notifications from us for security and login
        purposes.
      </p>
      <button className="bg-skin-primary w-full rounded-lg py-2 text-sm font-bold">
        Continue
      </button>
    </form>
  );
}

export default FormForgotPassword;
