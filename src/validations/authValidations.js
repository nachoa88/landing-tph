import * as yup from "yup";

// Basic schema rules that can be used in both login and register forms
export const baseEmailValidation = yup.string().required("Email is required").email("Invalid email format");

export const basePasswordValidation = yup
  .string()
  .required("Password is required")
  .min(6, "Password must be at least 6 characters");

// Specific schema rules for login form
export const loginSchema = yup.object().shape({
  email: baseEmailValidation,
  password: basePasswordValidation,
});

// Specific schema rules for register form
export const registerSchema = yup.object().shape({
  email: baseEmailValidation,
  password: basePasswordValidation,
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
