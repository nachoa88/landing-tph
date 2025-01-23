<script setup>
import { useForm } from "vee-validate";
import { carbonCalculatorSchema } from "@/validations/carbonCalculatorValidation";
import FormInput from "../form/FormInput.vue";
import BaseForm from "../form/BaseForm.vue";
import BaseButton from "../ui/BaseButton.vue";

// Conversion factors for different activities, these are approximate values
const CONVERSION_FACTORS = {
  electricity: 0.2, // kg CO2e for kWh
  gas: 0.18, // kg CO2e for kWh
  carKm: 0.12, // kg CO2e for km
  flights: 0.09, // kg CO2e for km
};

// Usar VeeValidate
const { handleSubmit, values, resetForm } = useForm({
  validationSchema: carbonCalculatorSchema,
  initialValues: {
    electricity: 0,
    gas: 0,
    carKm: 0,
    flights: 0,
  },
});

// Calculate Total Emissions based on form values.
const calculateTotalEmissions = (formValues) => {
  return Object.keys(formValues).reduce((total, key) => {
    return total + formValues[key] * CONVERSION_FACTORS[key];
  }, 0);
};

const calculateImpact = handleSubmit((formValues) => {
  const totalEmissions = calculateTotalEmissions(formValues);
  console.log("Total emissions:", totalEmissions.toFixed(2), "kg CO2e");
});

const handleReset = () => {
  resetForm();
};
</script>

<template>
  <div class="p-0 sm:p-6 max-w-xl mx-auto">
    <BaseForm title="Calculate your" subtitle="Carbon Footprint" @submit="calculateImpact">
      <!-- Electricity -->
      <FormInput
        name="electricity"
        label="Monthly Electricity Consumption (kWh)"
        type="number"
        id="electricity"
        placeholder="Enter kWh"
        required
      />
      <!-- Gas -->
      <FormInput name="gas" label="Monthly Gas Consumption (kWh)" type="number" id="gas" placeholder="Enter kWh" />

      <!-- Car Travel -->
      <FormInput name="carKm" label="Monthly Car Travel (km)" type="number" id="carKm" placeholder="Enter kilometers" />

      <!-- Flights -->
      <FormInput
        name="flights"
        label="Monthly Flights (km)"
        type="number"
        id="flights"
        placeholder="Enter kilometers"
      />

      <!-- Results -->
      <div class="m-4 sm:m-8 p-2 sm:p-4 bg-emerald-700 rounded-lg text-center">
        <h3 class="text-lg font-semibold text-stone-100 mb-2">Your Carbon Footprint</h3>
        <p class="text-3xl font-bold text-stone-200">{{ calculateTotalEmissions(values).toFixed(2) }} kg CO2e</p>
        <p class="text-xs text-stone-200 mt-2">This is an approximate calculation based on average emission factors.</p>
      </div>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <BaseButton type="submit" variant="primary">Calculate</BaseButton>
        <BaseButton type="button" @click="handleReset" variant="danger">Reset</BaseButton>
      </div>
    </BaseForm>
  </div>
</template>
