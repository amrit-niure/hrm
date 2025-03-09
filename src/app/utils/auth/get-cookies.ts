// utils/auth-server.ts
import { cookies } from "next/headers";
import { DecodedToken } from "@/types/jwt";
import { validateTokenOnServer } from "@/lib/validate-token";

export type GetUserOptions = {
    cookieName?: string; // Allow custom cookie names
};

/**
 * Retrieves and validates the user token from cookies.
 * Returns the decoded user object if valid, otherwise null.
 */
export const getUserFromCookies = async (options?: GetUserOptions): Promise<DecodedToken | null> => {
    try {
        const { cookieName = "job_portal_token" } = options || {};
        // Retrieve the cookie store
        const cookieStore = await cookies();
        const token = cookieStore.get(cookieName)?.value;

        // Validate the token
        if (!token) return null;
        const user = validateTokenOnServer(token);
        return user;
    } catch (error) {
        console.error("Error while retrieving user from cookies:", error);
        return null;
    }
};

