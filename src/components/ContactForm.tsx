"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { formSchema } from "@/lib/validation";
import CustomFormField from "./CustomFormField";
import { Form } from "./ui/form";

type FormValues = z.infer<typeof formSchema>;

type FormStatus = {
  type: "idle" | "loading" | "success" | "error";
  message: string;
};

const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Network error");

      const result = await res.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        form.reset();
        toast.success("Message sent!");
      } else {
        throw new Error(result.error || "Send failed");
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 w-full max-w-lg mx-auto bg-gradient-to-br from-purple-900/50 to-purple-800/50 border border-purple-700/50 backdrop-blur-sm p-8 rounded-lg"
      >
        <CustomFormField<FormValues>
          control={form.control}
          name="name"
          label="Name"
          placeholder="John Doe"
          disabled={status.type === "loading"}
        />

        <CustomFormField<FormValues>
          control={form.control}
          name="email"
          label="Email"
          placeholder="john@example.com"
          type="email"
          disabled={status.type === "loading"}
        />

        <CustomFormField<FormValues>
          control={form.control}
          name="message"
          label="Message"
          placeholder="Type your message here..."
          isTextarea
          disabled={status.type === "loading"}
        />

        <motion.div
          whileHover={{ scale: status.type === "loading" ? 1 : 1.02 }}
          whileTap={{ scale: status.type === "loading" ? 1 : 0.98 }}
        >
          <Button
            type="submit"
            disabled={status.type === "loading"}
            className="cursor-pointer mt-8 w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold h-12 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.type === "loading" ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="mr-2"
              >
                <Send className="h-4 w-4" />
              </motion.div>
            ) : (
              <Send className="mr-2 h-4 w-4" />
            )}
            {status.type === "loading" ? "Sending..." : "Send Message"}
          </Button>
        </motion.div>

       {status.type !== "idle" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center space-x-2 p-3 rounded-lg mt-4
            ${
              status.type === "success"
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : status.type === "error"
                ? "bg-red-500/20 text-red-400 border border-red-500/30"
                : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
            }
          `}
        >
          {status.type === "success" && <CheckCircle className="h-5 w-5" />}
          {status.type === "error" && <AlertCircle className="h-5 w-5" />}
          {status.type === "loading" && <Send className="h-5 w-5 animate-spin" />}
          <span className="text-sm font-medium">{status.message}</span>
        </motion.div>
      )}
      </form>
    </Form>
  );
};

export default ContactForm;
