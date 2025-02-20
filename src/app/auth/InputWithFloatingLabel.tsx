"use client";

import { cn } from "@/app/utils";
import { Field, Input, Label } from "@headlessui/react";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type Props = {
  name: string;
  label: string;
  value: string;
  type: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function InputWithFloatingLabel({
  label,
  onChange,
  type,
  name,
  value,
}: Props) {
  return (
    <Field className="relative w-full">
      <Label
        className={cn(
          "text-skin-muted absolute top-1/2 left-4 -translate-y-1/2 text-sm font-medium transition-all duration-75 ease-in",
          !!value && "top-[14px] left-3 text-xs tracking-wide",
        )}
      >
        {label}
      </Label>
      <Input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className={cn(
          "bg-background ring-skin-primary/20 border-skin-elevated-separator h-12 w-full rounded-lg border px-3 outline-hidden focus:ring-2",
          !!value && "pt-3 text-sm font-medium",
          type === "password" ? "tracking-wider" : "tracking-normal",
        )}
      />
    </Field>
  );
}
