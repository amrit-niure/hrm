// Parse JWT token
export const parseJwt = (token: string | null | undefined): Record<string, any> | null => {
    if (typeof token !== "string") return null;
  
    try {
      const payloadBase64 = token.split(".")[1];
      if (!payloadBase64) return null;
  
      const decodedPayload = JSON.parse(atob(payloadBase64));
      return decodedPayload;
    } catch (e) {
      return null;
    }
  };
  
  // Capitalize the first letter of a string
  export function capitalizeFirstLetter(string: string | null | undefined): string {
    if (typeof string !== "string" || !string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // Convert a number to currency format
  export function convertToCurrency(input: string | number | null | undefined): string {
    const value = Number(input);
    if (isNaN(value)) return ""; // Handle invalid input
    return Intl.NumberFormat('en-US').format(value);
  }
  
  // Format a string by capitalizing each word and replacing underscores with spaces
  export function formatCapital(str: string | null | undefined): string {
    if (typeof str !== "string") return "";
    return str
      .toLowerCase()
      .replaceAll("_", " ")
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  
  // Calculate the number of days between a given date and today
  export const getDaysAgo = (createdAt: string | Date | null | undefined): number | null => {
    const postedDate = new Date(createdAt || "");
    if (isNaN(postedDate.getTime())) return null; // Invalid date
  
    const dateNow = new Date();
    const diffTime = Math.abs(dateNow.getTime() - postedDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };
  
  // Beautify a date into a readable format (e.g., "01 Jan 2023")
  export const beautifyDate = (date: string | Date | null | undefined): string => {
    const d = new Date(date || "");
    if (isNaN(d.getTime())) return ""; // Invalid date
  
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const day = d.getDate().toString().padStart(2, "0");
    const year = d.getFullYear();
    const mon = d.toLocaleString("en-US", { month: "short" });
  
    return [day, mon, year].join("-");
  };
  
  // Get today's date in YYYY-MM-DD format
  export const getToday = (): string => {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = (date.getMonth() + 1).toString().padStart(2, '0');
    const dd = date.getDate().toString().padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };
  
  // Verify if a JWT token is valid and not expired
  export const tokenVerify = (token: string | null | undefined): boolean => {
    if (!token) {
      token = localStorage.getItem("job_portal_token") || "";
    }
    const decoded_token = parseJwt(token);
    const currentDate = new Date();
  
    if (!token || !decoded_token?.exp || decoded_token.exp * 1000 < currentDate.getTime()) {
      return false;
    } else {
      return true;
    }
  };
  
  // Calculate the difference in days between two dates
  export const getDayDiff = (date: string | Date | null | undefined): number => {
    const date1 = new Date();
    const date2 = new Date(date || "");
  
    const timeDiff = date2.getTime() - date1.getTime();
    return Math.floor(timeDiff / (1000 * 3600 * 24));
  };
  
  // Get a human-readable time difference (e.g., "2 days ago", "5 hours ago")
  export const GetDate = (createdAt: string | Date | null | undefined): string => {
    const targetDate = new Date(createdAt || "");
    if (isNaN(targetDate.getTime())) return "";
  
    const seconds = Math.floor((new Date().getTime() - targetDate.getTime()) / 1000);
  
    const intervals: { unit: string; seconds: number }[] = [
      { unit: "year", seconds: 31536000 },
      { unit: "month", seconds: 2592000 },
      { unit: "day", seconds: 86400 },
      { unit: "hour", seconds: 3600 },
      { unit: "minute", seconds: 60 },
      { unit: "second", seconds: 1 },
    ];
  
    for (const { unit, seconds: intervalSeconds } of intervals) {
      const count = Math.floor(seconds / intervalSeconds);
      if (count >= 1) {
        return `${count} ${unit}${count > 1 ? "s" : ""}`;
      }
    }
  
    return "0 seconds";
  };
  
  // Prevent specific key presses (e.g., "-" or "e")
  export const handleKeyPress = (event: KeyboardEvent): void => {
    if (event.key === '-' || event.key === 'e') {
      event.preventDefault();
    }
  };
  
  // Parse cookies into an object
  export function parseCookies(cookies: string | null | undefined): Record<string, string> {
    return cookies?.split(';')?.reduce((parsed: Record<string, string>, cookie: string) => {
      const [name, value] = cookie?.split('=').map(c => c?.trim());
      if (name && value) parsed[name] = value;
      return parsed;
    }, {}) || {};
  }
  
  // Convert a timestamp to local time
  export const convertToTime = (timeStamp: string | number | null | undefined): string => {
    const date = new Date(timeStamp || 0);
    return date.toLocaleTimeString();
  };
  
  // Remove extra spaces from a string
  export const removeExtraSpace = (string: string | null | undefined): string => {
    const newString = string?.replace(/\s{2,}/g, ' ')?.trim();
    return newString || "";
  };
  
  // Format a date for blog posts (e.g., "January 1, 2023")
  export const formatToBlogDate = (date: string | Date | null | undefined): string => {
    const desiredDate = new Date(date || "");
    if (isNaN(desiredDate.getTime())) return ""; // Invalid date
  
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return desiredDate.toLocaleDateString('en-US', options);
  };
  
  // Break a blog title into two parts after the 4th word
  export const breakBlogTitle = (inputString: string | null | undefined): { part1: string; part2: string } => {
    if (typeof inputString !== "string") return { part1: "", part2: "" };
  
    const words = inputString.split(" ");
    const splitIndex = 4;
    const part1 = words.slice(0, splitIndex).join(" ");
    const part2 = words.slice(splitIndex).join(" ");
  
    return { part1, part2 };
  };