# BoxCommerce Test Automation

Automated testing suite for BoxCommerce signup functionality using Playwright.

## 🛠️ **Framework, Tools & Libraries**

### **Playwright**

- **Why**: Cross-browser automation with excellent reliability and debugging capabilities
- **Features**: Auto-waiting, network interception, mobile emulation, and parallel execution

### **TypeScript**

- **Why**: Type safety, better IDE support, and maintainable test code
- **Benefits**: Catches errors early, improves code quality

### **Node.js & npm**

- **Why**: JavaScript runtime and package management for Playwright ecosystem
- **Benefits**: Large ecosystem, easy dependency management

## 🚀 **Quick Start**

```bash
# Clone repository
git clone https://github.com/claramanik/BoxCommerce-Test-Automation.git
cd BoxCommerce-Test-Automation

# Install dependencies
npm install
npx playwright install

# Run tests
npm test
```

## 📊 **Viewing Test Results**

### **HTML Report**

After running tests, view detailed results:

```bash
# Run tests first
npx playwright test

# Then view the report
npx playwright show-report
```

### **Example Test Results**

![Playwright Test Results](./test-results/test-result.png)

_Note: This shows a sample Playwright HTML report. Your actual results will display your playwright-report folder._

## 🧪 **Test Coverage**

**Total: 36 test cases** covering comprehensive signup functionality

### **SignUp Form Tests (8 test cases)**

- **Initial Page Elements**: Verify all signup options are displayed
- **Form Elements**: Check all required fields are present
- **Happy Path**: Complete signup flow with valid data
- **Form Navigation**: Manual signup form accessibility

### **Form Validation Tests (25 test cases)**

- **Email Validation**: Invalid email format, existing email detection
- **Password Validation**: Weak password, too long password, password mismatch
- **Phone Number**: Unique phone generation, existing phone detection
- **Coupon Codes**: Invalid coupon code validation
- **Field Interactions**: Tab navigation, field focus, error message display

### **Social Media Integration Tests (3 test cases)**

- **Facebook SignUp**: Verify Facebook login page opens
- **Google SignUp**: Verify Google sign-in page opens
- **X (Twitter) SignUp**: Verify X authorization page opens

### **Execution Configuration**

- **Sequential Execution**: Tests run with 1 worker to avoid conflicts
- **Browser Support**: Chrome, Firefox, and Safari
- **Test Isolation**: Each test generates unique data to prevent conflicts
- **Retry Strategy**: Automatic retry for flaky tests

## 📁 **Project Structure**

```
tests/
├── signup.spec.ts          # Main test file
└── utils/
    ├── signup.data.ts      # Test data & selectors
    └── generators.ts       # Unique data generation
```

### **Handling Race Conditions**

If tests fail due to race conditions when running in parallel:

```bash
# Reduce workers to 1 for sequential execution
npx playwright test --workers=1
```

## 🐛 **Common Issues**

- **Tests fail in parallel**: Use `--workers=1` to run sequentially
- **Browser crashes**: Close other applications, reduce worker count
- **Element not found**: Check network connectivity, increase timeouts

## 📞 **Support**

- **Documentation**: [Playwright Docs](https://playwright.dev)
- **Issues**: Report bugs in GitHub repository
- **Community**: Join Playwright Discord

---

**Happy Testing! 🎉**
