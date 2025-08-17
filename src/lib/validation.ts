import { z } from "zod";

export const loginSchema = z.object({
    phone: z
        .string()
        .regex(/^09\d{9}$/, "Phone must be 11 digits and start with 09"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
