import { cookies, headers } from "next/headers";
import { DecodedToken } from "@/types/jwt";
import { validateTokenOnServer } from "@/lib/validate-token";
import { redirect } from "next/navigation";
import { Role } from "@/types/role";

export type GetUserOptions = {
    cookieName?: string;
};

/**
 * Ensures the user is authenticated and has the specified role.
 * Redirects to the login page with a callback URL if the user is not authenticated.
 */
export const authenticated = async (
    requiredRole: Role,
    options?: GetUserOptions
): Promise<DecodedToken> => {
    try {
        const { cookieName = "job_portal_token" } = options || {};
        const cookieStore = await cookies();
        const headersList = await headers();
        const token = cookieStore.get(cookieName)?.value;
        const currentUrl = headersList.get("next-url") || "/";
        console.log(headersList.get("Request URL"))
        console.log("Current URL", currentUrl)
        if (!token) {
            // redirect(`/signin?redirectUrl=${encodeURIComponent(currentUrl)}`);
            redirect("/")
        }

        // Validate the token
        const user = validateTokenOnServer(token);

        if (!user) {
            redirect("/");
        }
        if (user.role !== requiredRole) {
            redirect("/access-denied");
        }

        return user;
    } catch (error) {
        throw error;
    }
};