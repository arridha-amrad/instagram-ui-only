"use client";

import { cn } from "@/app/utils";
import { Field, Input, Label } from "@headlessui/react";
import { useState } from "react";

export default function Page() {
  const [state, setState] = useState("");
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm">
        <Field className="relative">
          <Label
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-75 ease-in",
              !!state && "top-4 left-3 text-xs text-slate-400"
            )}
          >
            Username
          </Label>
          <Input
            value={state}
            onChange={(e) => setState(e.target.value)}
            type="text"
            className={cn(
              "bg-slate-900 rounded-lg outline-hidden border border-slate-700 px-3 h-12 w-full",
              !!state && "pt-4"
            )}
          />
        </Field>
      </div>
    </div>
  );
}
