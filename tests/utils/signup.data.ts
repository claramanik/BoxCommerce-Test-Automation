export const SignUpTestData = {
  // URLs
  urls: {
    signUp: "https://dashboard-uat.boxcommerce.com/en-GB/auth/sign-up",
  },

  // Test Credentials
  credentials: {
    validEmail: "clara.manik19+BC1@gmail.com",
    correctPassword: "Test@123",
  },

  // Test Email Data
  emails: {
    valid: "clara.manik19+BC@gmail.com",
    invalid: "invalid-email",
  },

  // Test Phone Numbers
  phoneNumbers: {
    valid: "822",
    existing: "82212345678",
  },

  // Test Passwords
  passwords: {
    strong: "Test@123",
    weak: "123",
    medium: "TestPassword123!",
    tooLong:
      "TestPassword123!TestPassword123!TestPassword123!TestPassword123!TestPassword123!TestPassword123!TestPassword123!TestPassword123!TestPassword123!TestPassword123!",
  },

  // Test Coupon Codes
  couponCodes: {
    valid: "UATQA-DEMO",
    invalid: "1234567",
  },

  // Form Field Selectors
  selectors: {
    signUpManualButton: 'button:has-text("Sign up with email/phone no.")',
    facebookSignUpButton: 'button:has-text("Sign up with Facebook")',
    googleSignUpButton: 'button:has-text("Sign up with Google")',
    xSignUpButton: 'button:has-text("Sign up with X")',
    firstName:
      'input[aria-label="First name"], input[name*="first"], input[placeholder*="First name"]',
    lastName:
      'input[aria-label="Last name"], input[name*="last"], input[placeholder*="Last name"]',
    email:
      'input[aria-label="Email"], input[name*="email"], input[placeholder*="Email"]',
    phoneNumber:
      'input[aria-label="Phone number"], input[name*="phone"], input[placeholder*="Phone number"]',
    password:
      'input[aria-label="Password"], input[name*="password"], input[placeholder*="Password"]',
    confirmPassword:
      'input[aria-label="Confirm password"], input[name*="confirm"], input[placeholder*="Confirm password"]',
    couponCode:
      'input[aria-label="Coupon code"], input[name*="coupon"], input[placeholder*="Coupon code"]',
    signUpButton: 'button:has-text("Sign up")',
  },

  // Error Message Selectors
  errorMessages: {
    existingAccount: "An account with this email or",
    invalidEmail: "Please enter a valid email",
    invalidPassword: "The password required at",
    passwordMismatch: "The confirm password does not",
    welcomeMessage: "Welcome to the BoxCommerce",
    invalidCouponCode: "CoupenCode",
  },

  // Social Media Sign Up Selectors
  socialMedia: {
    facebookLogin: "Log in to Facebook",
    googleSignIn: "Sign in with Google",
    xSignUp: "Authorize BoxCommerce App to",
  },

  // Test Timeouts
  timeouts: {
    short: 500,
    medium: 2000,
    long: 8000,
    veryLong: 10000,
  },
};
