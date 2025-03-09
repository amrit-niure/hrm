"use server";

import { response } from "@/lib/response";
import { auth } from "../../../../../auth";
import { signInFormSchema } from "./validation";

export async function adminSignIn(values: { email: string; password: string }) {
    try {
        const validatedData =  await signInFormSchema.parse(values);
        await auth.api.signInEmail({
            body: {
                email: validatedData.email,
                password: validatedData.password
            }
        });
        return response(true, "Sign in Successful", null, "/admin/dashboard");
    } catch (error) {
        console.error(error);
        return response(false, "Sign in Failed, Try again.", error);
    }
}