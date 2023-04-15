import { Builder } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";
const percySnapshot = require("@percy/selenium-webdriver");

test("test 1", async () => {
  console.log("at start of test 1");
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().addArguments("--incognito"))
    .build();
  await driver.get(`https://create-react-app.dev/`);
  await percySnapshot(driver, "a page", { widths: [1280] });
  console.log("at end of test 1");
});

test("test 2", async () => {
  console.log("at start of test 2");
  console.log("at end of test 2");
});
