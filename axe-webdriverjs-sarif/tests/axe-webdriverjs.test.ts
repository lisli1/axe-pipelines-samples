// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
describe('e2e axe-webdriverjs', () => {
    var AxeBuilder = require('axe-webdriverjs');
    var WebDriver = require('selenium-webdriver');
    var driver;

    beforeEach(async () => {
        driver = await new WebDriver.Builder()
            .forBrowser('chrome')
            .build();
    });

    afterEach(async () => {
        if(driver) {
            await driver.quit();
            driver = undefined;
        }
    });

    it('opens a test page', async () => {
        const getPromise = driver.get('https://dequeuniversity.com/demo/mars/');

        await getPromise;
        
        const results = await AxeBuilder(driver).analyze();
        // errs would result in thrown exceptions now



        expect(results).toBeDefined();
    });
    
});
