// @ts-check
const {test, expect} = require('@playwright/test');

test('has title', async ({page}) => {
    await page.goto('https://mario.pizza/');
    await page.locator("//span[contains(.,'Пицца')]").first().click()
    await page.locator("(//a[contains(@href, '/product/pizza-mario')])[2]").click()
    await page.locator("css=.v-small-basket-button").click()
    await page.waitForTimeout(100)
    await page.locator("xpath=//label[contains(.,'Самовывоз')]").click()

    await page.locator("css=#order_terminal-no-shipment").click()
    await page.locator("css=.v-submit-button > span").click({delay: 300})
    await page.waitForTimeout(1000)
    await page.locator("xpath=(//input[contains(@class,'v-form-control v-mb-small')])[1]").type(" Test", {delay: 1000})
    // await page.waitForTimeout(1000)
    const a = '77777777777'

    await page.locator("xpath=//input[@type='tel']").type(a, {delay: 300})

    await page.locator("xpath=(//input[@type='text'])[3] ").type(" ТЕСТОВЫЙ ЗАКАЗ ! НЕ ГОТОВИТЬ !", {delay: 1000})
    await page.locator("//input[@class='v-form-control']").type('1000')

    await page.locator("xpath=//button[contains(.,'Оформить заказ')]").click({delay: 300})
    await page.waitForTimeout(1000)
    page.waitForLoadState('domcontentloaded')
        // await page.waitForRequest('https://mario.pizza/order/complete')




    //await page.goto('https://mario.pizza/order/complete', { waitUntil: 'networkidle' });
    //await expect(page).toHaveURL("https://mario.pizza/order/complete");

    // await page.locator("//input[@class='v-form-control']").fill('1500')
    // await page.locator("css=.v-change-fields-center-part > .v-form-control").click()
    // await page.locator("xpath=//span[contains(.,'Распечатать заказ')]").click()
});
