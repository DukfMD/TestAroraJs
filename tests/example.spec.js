// @ts-check
const {test, expect} = require('@playwright/test');
const https = require("https");

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
    const a = '77777777777'
    await page.locator("xpath=//input[@type='tel']").type(a, {delay: 300})
    await page.locator("xpath=(//input[@type='text'])[3] ").type(" ТЕСТОВЫЙ ЗАКАЗ ! НЕ ГОТОВИТЬ !", {delay: 1000})
    await page.locator("//input[@class='v-form-control']").type('1000')
    await page.locator("xpath=//button[contains(.,'Оформить заказ')]").click({delay: 300})
    await page.waitForTimeout(1000)
    page.waitForLoadState('domcontentloaded')

});
// test.only('focus this test', async ({ page }) => {
//    // test('test', async ({page}) => {
//         await page.goto('https://mario.pizza/');
//         await page.getByRole('link', {name: 'Пицца', exact: true}).click();
//      //   page.once('dialog', dialog => {
//      //        console.log(`Dialog message: ${dialog.message()}`);
//      //        dialog.dismiss().catch(() => {
//      //        });
//
//         await page.getByRole('listitem').filter({hasText: 'Пицца Маргарита сыр "Моцарелла", сыр "Гауда", фирменный соус "Mario", помидоры 5'}).getByRole('link', {name: 'Заказать'}).click();
//         await page.getByRole('button', {name: ' 390,00  '}).click();
//         await page.locator('.shop-counter-vertical > .plus').click();
//         await page.locator('#order_city').selectOption('38d09ccf-13d5-469e-ac45-20dfc7566ecb');
//         await page.getByRole('button', {name: 'Оформить заказ'}).click();
//         await page.locator('[id="AsyncComponentWrapper\\.CartPersonalInfoname"]').getByRole('textbox').click();
//         await page.locator('[id="AsyncComponentWrapper\\.CartPersonalInfoname"]').getByRole('textbox').fill('Test');
//         await page.getByPlaceholder('+7 (      )       -    -    ').click();
//         await page.getByPlaceholder('+7 (      )       -    -    ').fill('+7 (777) 777-77-77');
//         await page.getByPlaceholder('Введите не меньше 3 символов').click();
//         await page.getByPlaceholder('Введите не меньше 3 символов').fill('граж');
//         await page.getByText('Гражданская', {exact: true}).click();
//         await page.locator('#order_house').click();
//         await page.locator('#order_house').fill('1');
//         await page.locator('[id="AsyncComponentWrapper\\.CartAdditionalInfo\\.AsyncComponentWrapper\\.CartCommentcomment"]').getByRole('textbox').click();
//         await page.locator('[id="AsyncComponentWrapper\\.CartAdditionalInfo\\.AsyncComponentWrapper\\.CartCommentcomment"]').getByRole('textbox').fill('тестовый заказ! не готовить!');
//         await page.locator('[id="AsyncComponentWrapper\\.CartPayMethod\\.ri\\.BaseTransitionchange"]').getByRole('textbox').click();
//         await page.locator('[id="AsyncComponentWrapper\\.CartPayMethod\\.ri\\.BaseTransitionchange"]').getByRole('textbox').fill('1000');
//         await page.getByRole('button', {name: 'Оформить заказ'}).click();
//     });
test.only('focus this test', async ({page}) => {
    await page.goto('https://okinavakazan.ru/');
    await page.waitForTimeout(1000)

    await page.locator("//span[contains(.,'Пицца')]").click()
    await page.waitForTimeout(1000)
    await page.locator('div:nth-child(3) > .item > .bottom > .row > div:nth-child(2) > .v-btn').click();
    await page.getByRole('img', {name: '- стандартная'}).click();
    await page.getByRole('button', {name: 'В корзину 450 '}).click();
    // await page.locator("(//button[contains(.,'В корзину')])[3]").click({delay:300})
    await page.waitForTimeout(3000)
    await page.locator("//span[contains(text(),'Самовывоз')]").click()
    await page.getByText('Списком').click()
    await page.locator("(//div[@class='v-self-service-terminal-item'])[1]").click()
    await page.waitForTimeout(1000)
    await page.locator("//span[contains(.,'Подтвердить')]").click()
    await page.locator("//span[@class='v-small-basket-cart-icon']").click()
    //await page.getByText("/^Имя \\*$/").fill("Test")
    // await page.getByRole("textbox", {name: "/^Имя \\*$/"}).fill("Test")
    //   locator('div').filter({ hasText: /^Имя \*$/ })
    //await page.getByRole('i', { name: 'text' }).fill("Test");
    await page.locator('[id="AsyncComponentWrapper\\.CartStepBlock\\.AsyncComponentWrapper\\.CartPersonalInfoname"]').getByRole('textbox').fill("Test");
    await page.waitForTimeout(1000)
    await page.getByPlaceholder('+7 (      )       -    -    ').fill("77777777777")
    await page.locator('input[type="email"]').fill("test@test.ru")
    await page.locator('label').filter({hasText: 'Ко времени'}).click()
    await page.locator("//select[@class='v-day-select v-form-control']").selectOption({index: 1})
    await page.locator("//select[@class='v-hour-select v-form-control']").selectOption({index: 1})
    await page.locator("//select[@class='v-minute-select v-form-control']").selectOption({index: 1})
    await page.locator('[id="AsyncComponentWrapper\\.CartStepBlock\\.AsyncComponentWrapper\\.CartOrderTypeBlock\\.AsyncComponentWrapper\\.CartSelfServiceTerminals\\.AsyncComponentWrapper\\.CartCommentcomment"]').getByRole('textbox').fill('тестовый заказ! не готовить!',{delay:1000});
    await page.getByRole('button', {name: 'Оформить заказ'})
    const orderComplete = await page.url().includes('order');

})