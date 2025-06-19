"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "sonner"; // если используешь toast

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
  const formRef = useRef<HTMLFormElement>(null);

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

  const onSubmit = async () => {
    try {
      if (!formRef.current) return;

      setStatus({ type: "loading", message: "Sending message..." });

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      form.reset();
      toast.success("Message sent!");
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
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col gap-2 w-full max-w-lg mx-auto bg-gradient-to-br from-purple-900/50 to-purple-800/50 border border-purple-700/50 backdrop-blur-sm p-8 rounded-lg"
      >
       <CustomFormField<FormValues>
        control={form.control}
        name="name"
        label="Your Name"
        placeholder="John Doe"
        disabled={status.type === "loading"}
        />

        <CustomFormField<FormValues>
        control={form.control}
        name="email"
        label="Your Email"
        placeholder="john@example.com"
        type="email"
        disabled={status.type === "loading"}
        />

        <CustomFormField<FormValues>
        control={form.control}
        name="message"
        label="Your Message"
        placeholder="Type your message here..."
        isTextarea
        disabled={status.type === "loading"}
        />
        {/* Submit */}
        <motion.div
          whileHover={{ scale: status.type === "loading" ? 1 : 1.02 }}
          whileTap={{ scale: status.type === "loading" ? 1 : 0.98 }}
        >
          <Button
            type="submit"
            disabled={status.type === "loading"}
            className="mt-8 w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold h-12 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
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

        {/* Status feedback */}
        {status.type !== "idle" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center space-x-2 p-3 rounded-lg mt-4 ${
              status.type === "success"
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-red-500/20 text-red-400 border border-red-500/30"
            }`}
          >
            {status.type === "success" && <CheckCircle className="h-5 w-5" />}
            {status.type === "error" && <AlertCircle className="h-5 w-5" />}
            <span className="text-sm font-medium">{status.message}</span>
          </motion.div>
        )}
      </form>
    </Form>
  );
};

export default ContactForm;