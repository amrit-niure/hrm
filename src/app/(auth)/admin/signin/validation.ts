import * as z from "zod";

export const signInFormSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(5, "Password must be at least 6 characters long"),
});
export type ISignIn = z.infer<typeof signInFormSchema>;