import { test, expect } from "@playwright/test";
import { SignUpTestData } from "./utils/signup.data";
import {
  generateUniqueTestData,
  generateUniqueEmail,
  generateUniquePhoneNumber,
} from "./utils/generators";

test.describe("SignUp Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(SignUpTestData.urls.signUp);
    await expect(
      page.locator(SignUpTestData.selectors.signUpManualButton)
    ).toBeVisible();
  });

  test.describe("Initial Page Elements", () => {
    test("Should Display All Signup Options", async ({ page }) => {
      await expect(
        page.locator(SignUpTestData.selectors.facebookSignUpButton)
      ).toBeVisible();
      await expect(
        page.locator(SignUpTestData.selectors.googleSignUpButton)
      ).toBeVisible();
      await expect(
        page.locator(SignUpTestData.selectors.xSignUpButton)
      ).toBeVisible();
    });
  });

  test.describe("Manual SignUp Form", () => {
    test.beforeEach(async ({ page }) => {
      await page
        .locator(SignUpTestData.selectors.signUpManualButton)
        .first()
        .click();
      await page.waitForTimeout(SignUpTestData.timeouts.medium);
    });

    test("Should Display All Required Form Elements", async ({ page }) => {
      const requiredFields = [
        SignUpTestData.selectors.firstName,
        SignUpTestData.selectors.lastName,
        SignUpTestData.selectors.phoneNumber,
        SignUpTestData.selectors.email,
        SignUpTestData.selectors.password,
        SignUpTestData.selectors.confirmPassword,
        SignUpTestData.selectors.couponCode,
      ];

      for (const field of requiredFields) {
        await expect(page.locator(field)).toBeVisible();
      }
    });

    test("Happy Path - Complete SignUp Flow", async ({ page }) => {
      // Fill form with valid data
      await page.locator(SignUpTestData.selectors.firstName).fill("John");
      await page.locator(SignUpTestData.selectors.lastName).fill("Smith");

      // Generate unique test data
      const { uniqueEmail, uniquePhoneNumber } = generateUniqueTestData();
      await page.locator(SignUpTestData.selectors.email).fill(uniqueEmail);
      await page
        .locator(SignUpTestData.selectors.phoneNumber)
        .fill(uniquePhoneNumber);

      // Fill passwords
      await page
        .locator(SignUpTestData.selectors.password)
        .fill(SignUpTestData.credentials.correctPassword);
      await page
        .locator(SignUpTestData.selectors.confirmPassword)
        .fill(SignUpTestData.credentials.correctPassword);

      // Submit form
      await page.locator(SignUpTestData.selectors.signUpButton).click();
      // Wait for welcome message with timeout
      let isVisible = false;
      while (!isVisible) {
        await page.waitForTimeout(SignUpTestData.timeouts.long);
        isVisible = await page
          .getByText(SignUpTestData.errorMessages.welcomeMessage)
          .isVisible();
      }
    });

    test.describe("Validation Tests", () => {
      test("Should Show Error for Existing Email/Phone", async ({ page }) => {
        // Fill form with existing credentials
        await page.locator(SignUpTestData.selectors.firstName).fill("John");
        await page.locator(SignUpTestData.selectors.lastName).fill("Smith");
        await page
          .locator(SignUpTestData.selectors.email)
          .fill(SignUpTestData.credentials.validEmail);
        await page
          .locator(SignUpTestData.selectors.phoneNumber)
          .fill(SignUpTestData.phoneNumbers.existing);
        await page
          .locator(SignUpTestData.selectors.password)
          .fill(SignUpTestData.credentials.correctPassword);
        await page
          .locator(SignUpTestData.selectors.confirmPassword)
          .fill(SignUpTestData.credentials.correctPassword);

        await page.locator(SignUpTestData.selectors.signUpButton).click();
        await page.waitForTimeout(SignUpTestData.timeouts.medium);

        await expect(
          page.getByText(SignUpTestData.errorMessages.existingAccount)
        ).toBeVisible();
      });

      test("Should Show Error When Email Format Is Invalid", async ({
        page,
      }) => {
        // Fill in the email field with invalid email
        await page
          .locator(SignUpTestData.selectors.email)
          .fill(SignUpTestData.emails.invalid);
        await page.keyboard.press("Tab");
        await expect(page.locator(SignUpTestData.selectors.email)).toHaveValue(
          SignUpTestData.emails.invalid
        );

        // Fill in the phone number field with valid phone number
        const uniquePhoneNumber = generateUniquePhoneNumber();
        await page
          .locator(SignUpTestData.selectors.phoneNumber)
          .fill(uniquePhoneNumber);
        await page.keyboard.press("Tab");

        // Fill in the password field
        await page
          .locator(SignUpTestData.selectors.password)
          .fill(SignUpTestData.credentials.correctPassword);
        await page.keyboard.press("Tab");
        await expect(
          page.locator(SignUpTestData.selectors.password)
        ).toHaveValue(SignUpTestData.credentials.correctPassword);

        // Verify invalid email error message
        await expect(
          page.getByText(SignUpTestData.errorMessages.invalidEmail)
        ).toBeVisible();
      });

      test("Should Show Error for Weak Password", async ({ page }) => {
        await page
          .locator(SignUpTestData.selectors.password)
          .fill(SignUpTestData.passwords.weak);
        await page.keyboard.press("Tab");

        await expect(
          page.getByText(SignUpTestData.errorMessages.invalidPassword)
        ).toBeVisible();
      });

      test("Should Show Error for Too Long Password", async ({ page }) => {
        await page
          .locator(SignUpTestData.selectors.password)
          .fill(SignUpTestData.passwords.tooLong);
        await page.keyboard.press("Tab");

        await expect(
          page.getByText(SignUpTestData.errorMessages.invalidPassword)
        ).toBeVisible();
      });

      test("Should Show Error for Password Mismatch", async ({ page }) => {
        await page
          .locator(SignUpTestData.selectors.password)
          .fill(SignUpTestData.passwords.strong);
        await page
          .locator(SignUpTestData.selectors.confirmPassword)
          .fill(SignUpTestData.passwords.medium);
        await page.keyboard.press("Tab");

        await expect(
          page.getByText(SignUpTestData.errorMessages.passwordMismatch)
        ).toBeVisible();
      });
      test("Should Show Error for Invalid Coupon Code", async ({ page }) => {
        // Fill form with valid data
        await page.locator(SignUpTestData.selectors.firstName).fill("John");
        await page.locator(SignUpTestData.selectors.lastName).fill("Smith");

        // Generate unique test data
        const { uniqueEmail, uniquePhoneNumber } = generateUniqueTestData();
        await page.locator(SignUpTestData.selectors.email).fill(uniqueEmail);
        await page
          .locator(SignUpTestData.selectors.phoneNumber)
          .fill(uniquePhoneNumber);

        // Fill passwords
        await page
          .locator(SignUpTestData.selectors.password)
          .fill(SignUpTestData.credentials.correctPassword);
        await page
          .locator(SignUpTestData.selectors.confirmPassword)
          .fill(SignUpTestData.credentials.correctPassword);

        await page
          .locator(SignUpTestData.selectors.couponCode)
          .fill(SignUpTestData.couponCodes.invalid);
        await page.keyboard.press("Tab");

        // Submit form
        await page.locator(SignUpTestData.selectors.signUpButton).click();

        let couponCodeErrorVisible = false;
        do {
          await page.waitForTimeout(SignUpTestData.timeouts.medium);
          couponCodeErrorVisible = await page
            .getByText("CouponCode")
            .isVisible();
        } while (!couponCodeErrorVisible);
      });
    });
  });

  test.describe("Social Media SignUp", () => {
    test("Facebook SignUp Link", async ({ page }) => {
      await page
        .locator(SignUpTestData.selectors.facebookSignUpButton)
        .first()
        .click();

      let loginToFacebookVisible = false;
      do {
        await page.waitForTimeout(SignUpTestData.timeouts.medium);
        loginToFacebookVisible = await page
          .getByText(SignUpTestData.socialMedia.facebookLogin)
          .isVisible();
      } while (!loginToFacebookVisible);
    });

    test("Google SignUp Link", async ({ page }) => {
      await page
        .locator(SignUpTestData.selectors.googleSignUpButton)
        .first()
        .click();

      let signInWithGoogleVisible = false;
      do {
        await page.waitForTimeout(SignUpTestData.timeouts.medium);
        signInWithGoogleVisible = await page
          .getByText(SignUpTestData.socialMedia.googleSignIn)
          .isVisible();
      } while (!signInWithGoogleVisible);
    });

    test("X SignUp Link", async ({ page }) => {
      await page
        .locator(SignUpTestData.selectors.xSignUpButton)
        .first()
        .click();

      let signUpWithXVisible = false;
      do {
        await page.waitForTimeout(SignUpTestData.timeouts.medium);
        signUpWithXVisible = await page
          .getByText(SignUpTestData.socialMedia.xSignUp)
          .isVisible();
      } while (!signUpWithXVisible);
    });
  });
});
