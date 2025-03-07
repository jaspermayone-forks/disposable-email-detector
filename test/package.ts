import disposableEmailDetector from "@jaspermayone/disposable-email-detector";

// Test the disposableEmailDetector function
(async () => {
  console.log(await disposableEmailDetector("user69@spamavert.com")); // false
})();
