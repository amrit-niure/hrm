import { DecodedToken } from "@/types/jwt";
import { parseJwt } from "./helper";

export const validateTokenOnServer = (token: string | undefined): DecodedToken | null => {
    if (!token) return null;

    const decodedToken = parseJwt(token) as DecodedToken;
    const currentTime = Date.now();

    if (!decodedToken || decodedToken.exp * 1000 < currentTime) {
        console.warn("Token expired.");
        return null;
    }

    return decodedToken;
};