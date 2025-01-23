import * as yup from "yup";

export const carbonCalculatorSchema = yup.object().shape({
  electricity: yup
    .number()
    .transform((value, originalValue) => {
      // If the original value is an empty string or undefined, return undefined
      return originalValue === undefined || originalValue === "" ? undefined : value;
    })
    .required("Electricity consumption value is required")
    .min(0, "Electricity consumption cannot be negative")
    .max(10000, "Electricity consumption seems unrealistically high"),

  gas: yup
    .number()
    .transform((value, originalValue) => {
      // If the original value is an empty string or undefined, return undefined
      return originalValue === undefined || originalValue === "" ? undefined : value;
    })
    .required("Gas consumption value is required")
    .min(0, "Gas consumption cannot be negative")
    .max(10000, "Gas consumption seems unrealistically high"),

  carKm: yup
    .number()
    .transform((value, originalValue) => {
      // If the original value is an empty string or undefined, return undefined
      return originalValue === undefined || originalValue === "" ? undefined : value;
    })
    .required("Car travel distance value is required")
    .min(0, "Car travel distance cannot be negative")
    .max(10000, "Car travel distance seems unrealistically high"),

  flights: yup
    .number()
    .transform((value, originalValue) => {
      // If the original value is an empty string or undefined, return undefined
      return originalValue === undefined || originalValue === "" ? undefined : value;
    })
    .required("Flight distance value is required")
    .min(0, "Flight distance cannot be negative")
    .max(50000, "Flight distance seems unrealistically high"),
});
