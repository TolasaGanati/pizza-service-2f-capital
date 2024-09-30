import { z } from "zod";

export enum UserRole {
    customer = "customer",
    restaurantManager = "restaurantManager"

}

export const registerSchema = z
  .object({
    superAdminName: z.string().min(2, {
      message: "please enter super admin name",
    }),
    email: z.string().email({
      message: "please enter valid email",
    }),
    location: z.string().min(2, {
      message: "please enter location",
    }),
    phoneNumber: z.string().min(6, {
      message: "please enter phone Number",
    }),
    restaurantName: z.string().min(2, {
      message: "Please enter Restaurant Name",
    }),
    role: z.enum(
      [(
         UserRole.restaurantManager,
         UserRole.customer
    )],
      {
        message: "Invalid role selected",
      }
    ),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters long",
    }),
    confirmPassword: z.string().min(2, {
      message: "Password must be at least 6 characters long",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });

export const addMenuSchema = z.object({
  name: z.string().nonempty({
    message: "please enter name",
  }),
  price: z.string().nonempty({
    message: "please enter price",
}),
});
export const LoginSchema = z
    .object({
        email: z.string().email({
            message: "please enter valid email",
        }),
        password: z.string().min(6, {
            message: "Password must be at least 6 characters long"
        }),

    })


