# BoxCommerce Playwright Tests

This project contains automated tests for the BoxCommerce signup functionality using Playwright. The tests cover signup form validation, social media integration, and various error scenarios.

## 🚀 **Quick Start**

### **Prerequisites**

- Node.js (version 16 or higher)
- npm or yarn package manager

### **Installation**

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### **Running Tests**

```bash
# Run all tests (default)
npm test

# Run tests in parallel (recommended)
npm run test:parallel

# Run tests with visible browser
npm run test:headed

# Run tests in debug mode
npm run test:debug

# Open Playwright UI for interactive testing
npm run test:ui

# View test report
npm run report
```

## 📁 **Project Structure**

```
BoxCommerce/
├── tests/
│   ├── signup.spec.ts          # Main test file with all test cases
│   └── utils/
│       ├── signup.data.ts      # Test data, selectors, and configurations
│       └── generators.ts       # Functions to generate unique test data
├── playwright.config.ts         # Playwright configuration
├── package.json                 # Project dependencies and scripts
└── README.md                    # This file
```

## 🧪 **What These Tests Cover**

### **SignUp Page Tests**

- **Initial Page Elements**: Verifies all signup options are displayed
- **Manual SignUp Form**: Tests the email/phone signup flow
- **Form Validation**: Tests various validation scenarios
- **Social Media Integration**: Tests Facebook, Google, and X signup options

### **Test Scenarios**

1. **Happy Path**: Complete signup flow with valid data
2. **Form Validation**:
   - Invalid email format
   - Weak password
   - Password mismatch
   - Invalid coupon code
3. **Error Handling**: Existing account detection
4. **Social Media**: Facebook, Google, and X signup links

## ⚙️ **Configuration**

### **Playwright Config (`playwright.config.ts`)**

- **Parallel Execution**: `fullyParallel: true` for faster test runs
- **Browser Support**: Chrome, Firefox, and Safari
- **Worker Management**: Configurable worker count for parallel execution
- **Timeouts**: 30 seconds per test, 10 minutes global
- **Reporting**: HTML report generation

### **Test Data (`tests/utils/signup.data.ts`)**

- **URLs**: Test environment endpoints
- **Selectors**: CSS selectors for UI elements
- **Credentials**: Test user data
- **Timeouts**: Wait time configurations
- **Error Messages**: Expected error text

### **Generators (`tests/utils/generators.ts`)**

- **Unique Email Generation**: Creates unique emails for parallel execution
- **Unique Phone Generation**: Creates unique 11-digit phone numbers
- **Combined Generation**: Generates both email and phone together

## 🔧 **Running Tests**

### **Basic Commands**

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/signup.spec.ts

# Run specific test by name
npx playwright test --grep="Happy Path"

# Run tests in specific browser
npx playwright test --project=chromium
```

### **Parallel Execution**

```bash
# Run with 4 workers (recommended)
npx playwright test

# Run with specific worker count
npx playwright test --workers=1
```

### **Debugging & Development**

```bash
# Run with visible browser
npx playwright test --headed

# Run in debug mode
npx playwright test --debug

# Open Playwright UI
npx playwright test --ui

# Generate trace for debugging
npx playwright test --trace=on
```

## 📊 **Test Reports**

### **HTML Report**

After running tests, you can view the detailed HTML report:

```bash
# Generate HTML report
npx playwright show-report

# Or use npm script
npm run report
```

**Note**: Run `npx playwright test` first, then use `npx playwright show-report` to view the results.

### **Other Report Formats**

```bash
# JSON report
npx playwright test --reporter=json

# List reporter (console output)
npx playwright test --reporter=list
```

## 🐛 **Troubleshooting**

### **Common Issues**

#### **Tests Fail in Parallel but Pass Individually**

- **Cause**: Race conditions or resource conflicts
- **Solution**: Reduce worker count with `--workers=1`

#### **Browser Crashes**

- **Cause**: Insufficient system resources
- **Solution**: Close other applications, reduce worker count

#### **Element Not Found Errors**

- **Cause**: Page not fully loaded
- **Solution**: Check network connectivity, increase timeouts

#### **Slow Test Execution**

- **Cause**: High worker count or system limitations
- **Solution**: Adjust worker count based on system capabilities

### **Test Structure**

```typescript
test("Test Description", async ({ page }) => {
  // Test implementation
  await page.goto(url);
  await expect(page.locator(selector)).toBeVisible();
});
```

### **Adding Test Data**

1. **Update `signup.data.ts`** with new selectors or test data
2. **Add new test case** in `signup.spec.ts`
3. **Follow naming convention**: Descriptive test names
4. **Include assertions**: Verify expected behavior

### **Useful Commands Reference**

```bash
# Install/Update Playwright
npx playwright install

# Update Playwright
npx playwright update

# Check Playwright version
npx playwright --version

# Generate new test
npx playwright codegen

# Show available commands
npx playwright --help
```

---

**Happy Testing! 🎉**
