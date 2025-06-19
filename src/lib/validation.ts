import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const validateContactForm = (data: FormTypes) => {
    try {
        formSchema.parse(data);
        return [];
    } catch (ev) {
        if (ev instanceof z.ZodError) {
            return ev.errors.map((error, index) => `${index + 1}: ${error.message}`);
        }
        return ["Unknown validation error"];
    }
};