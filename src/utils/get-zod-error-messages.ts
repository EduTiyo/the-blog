import { ZodError } from "zod";

export function getZodErrorMessages(error: ZodError): string[] {
  if (!error || !Array.isArray(error.issues)) return [];

  const messages = error.issues
    .map((issue) => issue.message || "Invalid value")
    .filter(Boolean);

  return Array.from(new Set(messages));
}
