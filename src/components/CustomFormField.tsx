import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Path, Control, FieldValues } from "react-hook-form";

interface CustomFormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  disabled?: boolean;
  type?: string;
  isTextarea?: boolean;
  className?: string;
}

function CustomFormField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  disabled = false,
  type = "text",
  isTextarea = false,
  className,
}: CustomFormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white font-medium">{label}</FormLabel>
          <FormControl>
            {isTextarea ? (
              <Textarea
                {...field}
                placeholder={placeholder}
                disabled={disabled}
                className={
                  className ??
                  "bg-transparent border-2 border-purple-400/50 text-yellow-500 placeholder:text-gray-400 focus:border-yellow-400 focus:ring-yellow-400/20 rounded-lg min-h-[120px] resize-none"
                }
              />
            ) : (
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                className={
                  className ??
                  "bg-transparent border-2 border-purple-400/50 text-yellow-500 placeholder:text-gray-400 focus:border-yellow-400 focus:ring-yellow-400/20 rounded-lg h-12"
                }
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default CustomFormField;