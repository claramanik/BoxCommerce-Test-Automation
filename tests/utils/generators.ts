import { SignUpTestData } from "./signup.data";

/**
 * Generate unique email for testing
 * Uses timestamp + random numbers to ensure uniqueness in parallel execution
 */
export function generateUniqueEmail(): string {
  const timestamp = Date.now();
  const randomNumbers = Math.floor(Math.random() * 90000) + 10000;

  return SignUpTestData.credentials.validEmail.replace(
    "@",
    `+${timestamp}${randomNumbers}@`
  );
}

/**
 * Generate unique phone number for testing
 * Ensures exactly 11 digits total (822 + 6 digits + 2 digits)
 */
export function generateUniquePhoneNumber(): string {
  const timestamp = Date.now();
  const randomPhoneNumbers = Math.floor(Math.random() * 90000000) + 10000000;

  return (
    SignUpTestData.phoneNumbers.valid +
    timestamp.toString().slice(-6) +
    randomPhoneNumbers.toString().slice(-2)
  );
}

/**
 * Generate both unique email and phone number together
 * Useful when both are needed in the same test
 */
export function generateUniqueTestData() {
  return {
    uniqueEmail: generateUniqueEmail(),
    uniquePhoneNumber: generateUniquePhoneNumber(),
  };
}
