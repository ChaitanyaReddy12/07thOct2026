import { Given, setDefaultTimeout, Then } from '@cucumber/cucumber'

import { Browser, chromium, expect, firefox, Page, webkit } from 'playwright/test'

import { TestData1, TestData2, TestData3 } from '../Files/TestData.json'

// import {authenticator} from 'otplib'

import * as dotenv from 'dotenv'

dotenv.config()

let browser: Browser, page: Page

let context

let file1 = 'webelementlevelscreenshot.png'

setDefaultTimeout(60 * 1000)

Given('I launch the browser', async function () {

    browser = await chromium.launch({

        headless: false,

        args: ['--start-maximized']
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()

})

Given('I launch the firefox browser', async function () {

    browser = await firefox.launch({

        headless: false,

        args: ['--start-maximized']
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()

})

Given('I launch the webkit browser', async function () {

    browser = await webkit.launch({

        headless: false,

        args: ['--start-maximized']
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()

})

Given('I launch the headless browser', async function () {

    browser = await chromium.launch({

        headless: true,

        args: ['--start-maximized']
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()

})

Then('I launch the facebook application', async function () {

    await page.goto('https://www.facebook.com/')

});

Then('I close the browser', async function () {

    await page.close()

});


Then('I launch the automation test g practice application', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/')

});

Then('I verify Playwright Locators', async function () {

    //await page.goto('https://testautomationpractice.blogspot.com/', {timeout:10000})

    // await page.waitForTimeout(10000)

    console.log("=======get by placeholder=============")

    //Await page.getbyplaceholder(‘attribute value of the placeholder’).methods()

    await page.getByPlaceholder('Enter Name').fill('quality')

    await page.getByPlaceholder('Enter EMail').fill('testing@gmali.com')

    console.log("=======get by text=============")

    //Await page.getbyText(‘text of the web element’).methods()

    //

    await page.getByText('START').click()

    //

    await page.getByText('STOP').click()

    // 

});

Then('I launch the atp application', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/')

});
Then('I verify web calendar in dynamic way', async function () {

    await page.locator("//input[@id='datepicker']").scrollIntoViewIfNeeded();

    let datePicker = await page.locator("//input[@id='datepicker']")

    if (await datePicker.isVisible()) {

        console.log("datePicker is displayed on the webpage");

        await page.locator("//input[@id='datepicker']").click();

        let calendarTable = await page.locator(".ui-datepicker-calendar");

        if (await calendarTable.isVisible()) {

            console.log("calendarTable is displayed on the webpage");

            let rows = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr").all();

            console.log(" rows count is :" + rows.length);

            if (rows.length > 0) {

                console.log("calendar have rows");

                for (let i = 1; i <= rows.length; i++) {

                    let columns = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td").all();

                    console.log(" columns count is :" + columns.length);

                    if (columns.length > 0) {

                        console.log("calendar have columns");

                        for (let j = 1; j <= columns.length; j++) {

                            let actualDate = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td[" + j + "]");

                            let actualDate1 = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td[" + j + "]").innerText();

                            let expectedDate = "30";

                            if (actualDate1 == expectedDate) {

                                console.log("date :" + actualDate1
                                    + " is displayed in the calendar row number " + i
                                    + " and column number is: " + j);

                                actualDate.click();
                            }
                        }

                    } else {

                        console.log("calendar doesn't have columns");
                    }
                }

            } else {

                console.log("calendar doesn't have rows");
            }
        }
        else {
            console.log("calendarTable is not displayed on the webpage");
        }
    }
    else {
        console.log("datePicker is not displayed on the webpage");
    }
});

Then('I verify playwright Locators', async function () {

    //await page.goto('https://testautomationpractice.blogspot.com/', {timeout:10000})

    // await page.waitForTimeout(10000)

    console.log("=======get by placeholder=============")

    //Await page.getbyplaceholder(‘attribute value of the placeholder’).methods()

    await page.getByPlaceholder('Enter Name').fill('quality')

    await page.getByPlaceholder('Enter EMail').fill('testing@gmali.com')

    console.log("=======get by text=============")

    //Await page.getbyText(‘text of the web element’).methods()



    await page.getByText('START').click()



    await page.getByText('STOP').click()

    console.log("=======get by role=============")

    //Await page.getbyRole('type of the web element',{name:‘text of the web element’}).methods()



    await page.getByRole('button', { name: 'START' }).click()



    await page.getByRole('button', { name: 'STOP' }).click()



    await page.getByRole('checkbox', { name: 'Sunday' }).scrollIntoViewIfNeeded()



    await page.getByRole('checkbox', { name: 'Sunday' }).click()



    await page.getByRole('checkbox', { name: 'Tuesday' }).click()



    await page.getByRole('textbox', { name: 'phone' }).fill('9090909090')



});

Then('I verify playwright Locators part2', async function () {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm', { timeout: 10000 })

    console.log("=======get by alt text=============")



    //Await page.getbyalttext(‘attribute value of the alt).methods()

    await page.getByAltText('ParaBank').click()

    console.log("=======get by title=============")



    //Await page.getbytitle(‘attribute value of the title’).methods()

    await page.getByTitle('ParaBank').click()



    console.log("=======get by label=============")

    await page.goto('https://login.salesforce.com/?locale=in')



    //await page.getbylabel(‘text of the label tag’).methods()

    await page.getByLabel('Username').fill('quality')



    console.log("=======get by test id=============")

    //await page.getbytestid(‘attribute value of the test id).methods()

    //<button data-testid="submit-button">Submit</button>

    await page.getByTestId('submit-button').click()
})

Then('I verify selenium Locators', async function () {

    console.log("===========xpath===========")

    console.log("============absolute xpath==========")

    //await page.locator(‘absolute xpath’).methods()

    //  locator.fill: Unexpected token "/" while parsing css selector "/html/body/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[1]/div/div/div[1]/div[1]/div/div/div/div/div[2]/div[1]/input[1]". Did you mean to CSS.escape it?

    //await page.locator('/html/body/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[1]/div/div/div[1]/div[1]/div/div/div/div/div[2]/div[1]/input[1]').fill('prudhvi')

    console.log("============relative xpath==========")

    //await page.locator('relative xpath’).methods()

    await page.locator("//input[@id='name']").fill('prudhvi')

    await page.locator("//*[@placeholder='Enter EMail']").fill('test@gmail.com')



    console.log("============css selector xpath==========")

    // input[id='name']

    await page.locator('[id="phone"]').fill('8908908900')



    // class in css

    //await page.locator('.attributevalue of the class ').methods()

    await page.locator('.wikipedia-search-input').fill("playwright")



    // id in css

    //await page.locator('#attributevalue of the id ').methods()

    await page.locator('#textarea').fill('hyderabad')



})

Then('I Verify selenium xpath methods', async function () {

    console.log("==========contains============")

    await page.locator("//input[contains(@placeholder,'Enter Name')]").fill('Hari')

    await page.locator("//*[contains(@id,'email')]").fill('Hari@gmail.com')

    console.log("==========starts-with============")

    await page.locator("//*[starts-with(@id,'phone')]").fill('9090909090')

    await page.locator("//textarea[starts-with(@id,'textarea')]").fill('hyderabad')

    console.log("==========text============")

    var text = await page.locator("//h2[text()='Alerts & Popups']").innerText()

    console.log("1st way of text is :", text) //Alerts & Popups

    text = await page.locator("//*[text()='Alerts & Popups']").innerText()

    console.log("2nd way of text is :", text) //Alerts & Popups

    text = await page.locator("//*[contains(text(),'Alerts & Popups')]").innerHTML()

    console.log("3rd way of text is :", text) //Alerts &amp; Popups

    text = await page.locator("//*[starts-with(text(),'Alerts & Popups')]").innerHTML()

    console.log("4th way of text is :", text) //Alerts &amp; Popups

    console.log("==========and===========")

    await page.locator('//*[@type="text" and @class="wikipedia-search-input"]').fill('testing')

    console.log("==========or===========")

    var orCount = await page.locator('//*[@type="text" or @class="wikipedia-search-input"]').all()

    console.log("orCount is :", orCount.length) //13



})

Then('I Verify selenium xpath Axes', async function () {

    console.log("==========parent===========")

    var parentCount = await page.locator('//*[@id="female"]//parent::div').all()

    console.log("parentCount is :", parentCount.length) //1

    console.log("==========ancestor===========")

    var ancestorCount = await page.locator('//*[@id="female"]//ancestor::div').all()

    console.log("ancestorCount is :", ancestorCount.length) //21

    console.log("==========preceding===========")

    var precedingCount = await page.locator('//*[@id="sunday"]//preceding::label').all()

    console.log("precedingCount is :", precedingCount.length) //8

    precedingCount = await page.locator('//*[@id="sunday"]//preceding::input').all()

    console.log("precedingCount is :", precedingCount.length) //8

    precedingCount = await page.locator('//*[@id="sunday"]//preceding::div').all()

    console.log("precedingCount is :", precedingCount.length) //99

    console.log("==========child===========")

    var childCount = await page.locator('//div[@class="form-group"]//child::input[@type="text"]').all()

    console.log("childCount is :", childCount.length) //3

    await page.locator('//div[@class="form-group"]//child::input[@type="text"]').first().fill('first web element')

    await page.locator('//div[@class="form-group"]//child::input[@type="text"]').last().fill('last web element')

    await page.locator('//div[@class="form-group"]//child::input[@type="text"]').nth(1).fill('second web element')

    console.log("==========descendant===========")

    var descendantCount = await page.locator('//div[@class="form-group"]//descendant::input[@type="checkbox"]').all()

    console.log("descendantCount is :", descendantCount.length) //3

    await page.locator('//div[@class="form-group"]//descendant::input[@type="checkbox"]').first().click() //sunday

    await page.locator('//div[@class="form-group"]//descendant::input[@type="checkbox"]').last().click() // saturday

    await page.locator('//div[@class="form-group"]//descendant::input[@type="checkbox"]').nth(1).click() // monday

    await page.locator('//div[@class="form-group"]//descendant::input[@type="checkbox"]').nth(5).click() // friday

    console.log("==========following===========")

    var followingCount = await page.locator('//div[@class="form-group"]//following::input[@type="checkbox"]').all()

    console.log("followingCount is :", followingCount.length) //12

    console.log("==========following sibling===========")

    var followingSiblingCount = await page.locator('//input[@id="field1"]//following-sibling::input').all()

    console.log("followingSiblingCount is :", followingSiblingCount.length) //1

    followingSiblingCount = await page.locator('//input[@id="field1"]//following-sibling::br').all()

    console.log("followingSiblingCount is :", followingSiblingCount.length) //3

    await page.locator('//input[@id="field1"]//following-sibling::input').fill('Quality thought')



})

Then('I verify playwright methods', async function () {

    console.log("=====to launch the application==========")

    await page.goto('https://testautomationpractice.blogspot.com/')

    console.log("=====to refresh the web page=========")

    await page.reload()

    console.log("=====to scroll to the web element==========")

    await page.getByText('New Tab').scrollIntoViewIfNeeded()

    console.log("=====to click on the web element==========")

    await page.getByText('New Tab').click()

    console.log("=====to go to the previous tab==========")

    await page.bringToFront()

    console.log("=======to enter text to the web element=============")

    //Await page.getbyplaceholder(‘attribute value of the placeholder’).methods()

    await page.getByPlaceholder('Enter Name').fill('quality')

    await page.getByPlaceholder('Enter EMail').type('testing@gmali.com')

    console.log("==========to get more than one web element count===========")

    var followingCount = await page.locator('//div[@class="form-group"]//following::input[@type="checkbox"]').all()

    console.log("followingCount is :", followingCount.length) //12

    console.log("==========to get the title of the webpage===========")

    var title = await page.title()

    console.log(title) //Automation Testing Practice

    console.log("==========to get the url of the webpage===========")

    var url = await page.url()

    console.log(url) //https://testautomationpractice.blogspot.com

    console.log("==========to clear the text of the web element===========")

    await page.locator('#field1').scrollIntoViewIfNeeded()

    await page.locator('#field1').clear()

    await page.locator('#field1').fill('quality')

    console.log("==========to get the text of a webelemnt============")

    var text = await page.locator("//h2[text()='Alerts & Popups']").innerText()

    console.log("1st way of text is :", text) //Alerts & Popups

    text = await page.locator("//*[text()='Alerts & Popups']").innerText()

    console.log("2nd way of text is :", text) //Alerts & Popups

    text = await page.locator("//*[contains(text(),'Alerts & Popups')]").innerHTML()

    console.log("3rd way of text is :", text) //Alerts &amp; Popups

    text = await page.locator("//*[starts-with(text(),'Alerts & Popups')]").innerHTML()

    console.log("4th way of text is :", text) //Alerts &amp; Popups

    console.log("==========to get the text of more than one web element============")

    console.log("==========1st way============")

    var textOfAllWebElements = await page.locator('//*[@class="title"]').allTextContents()

    console.log("1st way of text is :", textOfAllWebElements.length) //17

    for (let i = 0; i < textOfAllWebElements.length; i++) {

        console.log(textOfAllWebElements[i])
    }

    /*
13 =
'Scrolling DropDown'
14 =
'Labels And Links'
15 =
'Form'
16 =
'ShadowDOM'*/

    console.log("==========2nd way============")

    var textOfAllWebElements = await page.locator('//*[@class="title"]').allInnerTexts()

    console.log("1st way of text is :", textOfAllWebElements.length) //17

    for (let i = 0; i < textOfAllWebElements.length; i++) {

        console.log(textOfAllWebElements[i])
    }

    /*
13 =
'Scrolling DropDown'
14 =
'Labels And Links'
15 =
'Form'
16 =
'ShadowDOM'*/

    console.log("==========right click of the web element============")

    await page.getByRole('textbox', { name: 'phone' }).click({ button: 'right' })

    console.log("==========drag and drop============")

    var first = await page.locator('#draggable')

    var second = await page.locator('#droppable')

    await first.scrollIntoViewIfNeeded()

    await first.dragTo(second)

    console.log("==========selenium and===========")

    await page.locator('//*[@type="text" and @class="wikipedia-search-input"]').fill('testing')

    console.log("==========playwright and===========")

    await page.locator('.wikipedia-search-input').and(page.locator('#Wikipedia1_wikipedia-search-input')).fill('testing')

    await page.getByRole('textbox', { name: 'phone' }).and(page.getByPlaceholder('Enter Phone')).fill('testing')

    console.log("==========double click of an web element===========")

    await page.getByText('START').scrollIntoViewIfNeeded()

    await page.waitForTimeout(3000)

    await page.getByText('START').dblclick()

    await page.waitForTimeout(3000)

})

Then('I verify playwright methods part2', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/')

    console.log("=========visible======")

    var visible = await page.getByText('Female').and(page.locator('//*[@for="female"]')).isVisible()

    if (visible == true) {

        await page.getByText('Female').and(page.locator('//*[@for="female"]')).click()
    }

    console.log("=========hidden======")

    var hidden = await page.locator('#sunday').isHidden()

    if (hidden == false) {

        await page.locator('#sunday').click()
    }

    console.log("=========disabled======")

    var disabled = await page.locator('#monday').isDisabled()

    if (disabled == false) {

        await page.locator('#monday').click()
    }

    console.log("=========enabled======")

    var enabled = await page.locator('#tuesday').isEnabled()

    if (enabled == true) {

        await page.locator('#tuesday').click()
    }

    console.log("=========editable======")

    var editable = await page.locator('#textarea').isEditable()

    if (editable == true) {

        await page.locator('#textarea').fill('playwright')
    }

    console.log("=========checked======")

    var checked = await page.locator('#saturday').isChecked()

    if (checked == false) {

        //1st way

        //await page.locator('#saturday').click()

        //2nd way

        await page.locator('#saturday').setChecked(true)
    }

    checked = await page.locator('#saturday').isChecked()

    if (checked == true) {

        await page.waitForTimeout(3000)

        //1st way

        //  await page.locator('#saturday').click()

        //2nd way

        //await page.locator('#saturday').setChecked(false)

        //3rd way

        await page.locator('#saturday').uncheck()

        await page.waitForTimeout(3000)

    }

    await page.waitForTimeout(3000)
})

Then('I verify playwright methods part3', async function () {

    await page.goto('https://www.myntra.com/')

    console.log("=========hover======")

    await page.locator("//*[text()='Kids']").first().hover()

    console.log("=========highlight======")

    await page.getByPlaceholder('Search for products, brands and more').highlight()

    await page.getByPlaceholder('Search for products, brands and more').fill('bags')

    console.log("=========get attribute======")

    var attributevalue = await page.getByPlaceholder('Search for products, brands and more').getAttribute('placeholder')

    console.log('attributevalue of placeholder is', attributevalue) //Search for products, brands and more

    attributevalue = await page.getByPlaceholder('Search for products, brands and more').getAttribute('class')

    console.log('attributevalue of class is', attributevalue) //desktop-searchBar

    attributevalue = await page.getByPlaceholder('Search for products, brands and more').getAttribute('data-reactid')

    console.log('attributevalue of data-reactid is', attributevalue) //1039

    await page.waitForTimeout(1000)
})

Then('I verify playwright methods part4', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/')

    console.log('=========1st way to clear the text in the textbox====')

    await page.locator('#field1').scrollIntoViewIfNeeded()

    await page.locator('#field1').clear()

    await page.locator('#field1').type('prudhvi')

    console.log('=========2nd way to clear the text in the textbox====')

    await page.locator('#field1').fill("")

    await page.locator('#field1').fill('quality')

    console.log('=========3rd way to clear the text in the textbox====')

    await page.locator('#field1').press('Control+A')

    await page.keyboard.press('Delete')

    await page.keyboard.up('Control')

    await page.keyboard.insertText('Playwright')

    console.log('=========4th way to enter text to the textbox====')

    await page.locator('#field1').clear()

    await page.locator('#field1').pressSequentially('prudhvi')

    await page.locator('#field1').pressSequentially('pranavi')

    console.log('=========dropdown====')

    let colorsDropdown = await page.locator('#colors')

    await colorsDropdown.scrollIntoViewIfNeeded()

    await colorsDropdown.selectOption('Red')

    await colorsDropdown.selectOption('Blue')

    await colorsDropdown.selectOption('Green')

    await colorsDropdown.selectOption(['Green', 'Red', "Blue", "Yellow"])

    await colorsDropdown.selectOption({ index: 5 })

    await colorsDropdown.selectOption([{ index: 5 }, { index: 0 }, { index: 1 }])

    let countryDropdown = await page.locator('#country')

    await countryDropdown.scrollIntoViewIfNeeded()

    await countryDropdown.selectOption('India')

    console.log('=========screenshots====')

    console.log('=========1st way to take the web element level screenshot====')

    await page.getByPlaceholder('Enter Name').fill('quality')

    await page.getByPlaceholder('Enter Name').screenshot({ path: 'webelementlevelscreenshot.png' })

    console.log('=========2nd way to take the screenshot upto screen length====')

    await page.screenshot({ path: './PlaywrightAutomationCode/Screenshots/uptoscreenlength.jpg' })

    console.log('=========3rd way to take the full page screenshot====')

    await page.screenshot({ path: './PlaywrightAutomationCode/Screenshots/fullpage.jpg', fullPage: true })

    console.log('=========upload file====')

    console.log('=========single file uplaod====')

    await page.locator('#singleFileInput').scrollIntoViewIfNeeded()

    await page.locator('#singleFileInput').setInputFiles('webelementlevelscreenshot.png')

    await page.locator("//*[text()='Upload Single File']").click()

    console.log('=========Multiple file uplaod====')

    await page.locator('#multipleFilesInput').setInputFiles([file1,
        './PlaywrightAutomationCode/Screenshots/fullpage.jpg',
        "C:\\Users\\Punna\\OneDrive\\Desktop\\Automation_Playwright\\2026\\Quality Thought\\7pm batch\\Typescript_Javascript\\Playwright\\6th Class_Playwright methods_Dates_ShadowDom_CrossBrowserTesting_Part2\\6th Class.docx"
    ])

    await page.locator("//*[text()='Upload Multiple Files']").click()

    console.log('=========shadow DOM====')

    await page.goto('https://selectorshub.com/xpath-practice-page/')

    // handling shadow DOM means parent shadow dom

    await page.locator('#userName').locator('#kils').scrollIntoViewIfNeeded()

    await page.locator('#userName').locator('#kils').fill('pranavi')

    // handling child shadow DOM means parent shadow dom contains another shadow dom

    await page.locator('#userName').locator('#app2').locator('#pizza').fill('prudhvi')

    await page.waitForTimeout(20000)

})

Then('Generate Dates', async function () {

    const todaysDate = new Date()

    console.log(todaysDate) //Mon Sep 21 2026 19:33:23 GMT+0530 (India Standard Time)

    const todaysDateInIst = todaysDate.toLocaleDateString()

    console.log(todaysDateInIst)  //21/9/2026

    let pastdate = new Date(todaysDate)

    pastdate.setDate(pastdate.getDate() - 10)

    const pastdateInIst = pastdate.toLocaleDateString()

    console.log(pastdateInIst)  //11/9/2026

    let futuredate = new Date(todaysDate)

    futuredate.setDate(futuredate.getDate() + 222)

    const futuredateInIst = futuredate.toLocaleDateString()

    console.log(futuredateInIst)  //1/5/2027

    const completeMonth = todaysDate.toLocaleDateString('en-us', { month: 'long' })

    console.log(completeMonth)  //September

    const shortMonth = todaysDate.toLocaleDateString('en-us', { month: 'short' })

    console.log(shortMonth)  //Sep

    const year = todaysDate.getFullYear()

    const month = todaysDate.getMonth() + 1

    const date = todaysDate.getDate()

    let dat = year + "=" + month + "=" + date

    console.log(dat) //2026=9=21

    dat = year + "/" + month + "/" + date

    console.log(dat) //2026/9/21

    dat = month + "=" + year + "=" + date

    console.log(dat) //9=2026=21

    dat = date + "-" + month + "-" + year

    console.log(dat) //21-9-2026

})

Then('I verify web table in static way', async function () {

    let webTable = await page.locator("//*[@name='BookTable']").isVisible()

    if (webTable == true) {

        console.log("webTable is displayed in the web page") //webTable is displayed in the web page

        let expectedText = "Animesh"

        let actualText = await page.locator("//*[@name='BookTable']//tr[4]//td[2]").innerText()

        if (actualText == expectedText) {

            console.log(expectedText, " is displayed in the web table") //Animesh is displayed in the web table
        }
        else {
            console.log(expectedText, " is not displayed in the web table")
        }
    }
    else {
        console.log("webTable is not displayed in the web page")
    }
})

Then('I verify web table in static way2', async function () {

    let webTable = await page.locator("//*[@name='BookTable']").isVisible()

    if (webTable == true) {

        console.log("webTable is displayed in the web page") //webTable is displayed in the web page

        let expectedText = "Amit"

        let actualText = await page.locator("//*[@name='BookTable']//tr[4]//td[2]").innerText()

        if (actualText == expectedText) {

            console.log(expectedText, " is displayed in the web table")
        }
        else {
            console.log(expectedText, " is not displayed in the web table") //Amit is displayed in the web table
        }
    }
    else {
        console.log("webTable is not displayed in the web page")
    }
})

Then('I verify web table in dynamic way', async function () {

    let webTable = await page.locator("//*[@name='BookTable']").isVisible()

    if (webTable == true) {

        console.log("webTable is displayed in the web page") //webTable is displayed in the web page

        let rows = await page.locator("//*[@name='BookTable']//tr").all()

        if (rows.length > 0) {

            console.log(' web table have rows')

            for (let i = 2; i <= rows.length; i++) {

                let columns = await page.locator("//*[@name='BookTable']//tr[" + i + "]//td").all()

                if (columns.length > 0) {

                    for (let j = 1; j <= columns.length; j++) {

                        // let expectedText = "Animesh"

                        // let actualText = await page.locator("//*[@name='BookTable']//tr["+i+"]//td["+j+"]").innerText()

                        // if (actualText == expectedText) {

                        //     console.log(expectedText, " is displayed in the web table in row no:", i , "and column no is:", j)

                        //     // Animesh is displayed in the web table in row no: 4 and column no is:2
                        // }

                        let expectedText = "Mukesh"

                        let actualText = await page.locator("//*[@name='BookTable']//tr[" + i + "]//td[" + j + "]").innerText()

                        if (actualText == expectedText) {

                            console.log(expectedText, " is displayed in the web table in row no:", i, "and column no is:", j)

                            // Mukesh is displayed in the web table in row no: 3 and column no is:2

                            // Mukesh is displayed in the web table in row no: 5 and column no is:2

                        }
                    }
                }

            }
        }
        else {
            console.log(' web table does not have rows')
        }

    }
    else {
        console.log("webTable is not displayed in the web page")
    }
})

Then('I verify web table headers in dynamic way', async function () {

    let webTable = await page.locator("//*[@name='BookTable']").isVisible()

    if (webTable == true) {

        console.log("webTable is displayed in the web page") //webTable is displayed in the web page

        let rows = await page.locator("//*[@name='BookTable']//tr").all()

        if (rows.length > 0) {

            console.log(' web table have rows')

            for (let i = 1; i <= rows.length; i++) {

                if (i == 1) {

                    let columns = await page.locator("//*[@name='BookTable']//tr[" + i + "]//th").all()

                    for (let j = 1; j <= columns.length; j++) {

                        let text = await page.locator("//*[@name='BookTable']//tr[" + i + "]//th[" + j + "]").innerText()

                        console.log("header text is:", text)
                    }
                }

            }
        }
        else {
            console.log(' web table does not have rows')
        }

    }
    else {
        console.log("webTable is not displayed in the web page")
    }
})

Then('I verify web calendar in static way', async function () {

    await page.locator('#datepicker').scrollIntoViewIfNeeded()

    await page.waitForTimeout(3000)

    await page.locator('#datepicker').click()

    let webCalendarTable = await page.locator("//*[@class='ui-datepicker-calendar']").isVisible()

    if (webCalendarTable == true) {

        console.log("webCalendarTable is displayed in the web page") //webCalendarTable is displayed in the web page

        let expectedDate = "16"

        let actualDate = await page.locator("//*[@class='ui-datepicker-calendar']//tr[3]//td[4]").innerText()

        if (actualDate == expectedDate) {

            console.log(expectedDate, " is displayed in the web table") //16 is displayed in the web Calendar Table

            await page.waitForTimeout(3000)

            await page.locator("//*[@class='ui-datepicker-calendar']//tr[3]//td[4]").click()
        }
        else {
            console.log(expectedDate, " is not displayed in the web table")
        }
    }
    else {
        console.log("webCalendarTable is not displayed in the web page")
    }

    await page.waitForTimeout(30000)

})

Then('I verify web calendar in static way2', async function () {

    await page.locator('#datepicker').scrollIntoViewIfNeeded()

    await page.waitForTimeout(3000)

    await page.locator('#datepicker').click()

    let webCalendarTable = await page.locator("//*[@class='ui-datepicker-calendar']").isVisible()

    if (webCalendarTable == true) {

        console.log("webCalendarTable is displayed in the web page") //webCalendarTable is displayed in the web page

        let expectedDate = "23"

        let actualDate = await page.locator("//*[@class='ui-datepicker-calendar']//tr[3]//td[4]").innerText()

        if (actualDate == expectedDate) {

            console.log(expectedDate, " is displayed in the web table")

            await page.waitForTimeout(3000)

            await page.locator("//*[@class='ui-datepicker-calendar']//tr[3]//td[4]").click()
        }
        else {
            console.log(expectedDate, " is not displayed in the web table") //23 is not displayed in the web Calendar Table
        }
    }
    else {
        console.log("webCalendarTable is not displayed in the web page")
    }

    await page.waitForTimeout(30000)

})

Then('I verify playwright hard assertions', async function () {

    await page.goto('https://www.amazon.in/')

    //await expect(page.locator/playwrightlocator()).methods()

    await expect(page.getByPlaceholder('Search Amazon.in')).toBeTruthy()

    await page.getByPlaceholder('Search Amazon.in').fill('mobiles')

    await expect(page.locator('#nav-search-submit-button')).toBeVisible()

    await page.locator('#nav-search-submit-button').click()

    // await expect(page.locator('//*[text()="Coupons"]').first()).toBeHidden()

    /*Locator:  locator('//*[text()="Coupons"]').first()
           Expected: hidden
           Received: visible*/

    // await expect(page.locator('//*[text()="Coupons"]').first()).toBeDisabled()

    /* Locator:  locator('//*[text()="Coupons"]').first()
           Expected: disabled
           Received: enabled*/

    await expect(page.locator('//*[text()="Coupons"]').first()).toBeEnabled()

    await expect(page.locator('//*[text()="Coupons"]').first()).toBeAttached()

    await expect(page.locator('//*[text()="Coupons"]')).toHaveCount(1)

    await page.locator('//*[text()="Coupons"]').first().click()

    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect(page.locator('//*[@class="title"]')).toHaveCount(17)

    await expect(page.locator('//*[@class="title"]')).toContainText(['Dynamic Button'])

    await expect(page.locator('//*[@class="title"]')).toContainText(['Upload Files'])

    await expect(page.locator('//*[@class="title"]')).toContainText(['Upload Files', 'Static Web Table'])

    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('class')

    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('id')

    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('placeholder')

    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('id', 'name')

    await expect(page.getByPlaceholder('Enter Name')).toHaveClass('form-control')

    await expect(page.getByPlaceholder('Enter Name')).toHaveId('name')

    await expect(page.getByPlaceholder('Enter Name')).toBeVisible()

    await expect(page.getByPlaceholder('Enter Name')).toBeEmpty()

    await page.getByPlaceholder('Enter Name').fill('evening')
})

Then('I verify playwright soft assertions', async function () {

    await page.goto('https://www.amazon.in/')

    //await expect.soft(page.locator/playwrightlocator()).methods()

    await expect.soft(page.getByPlaceholder('Search Amazon.in')).toBeTruthy()

    await page.getByPlaceholder('Search Amazon.in').fill('mobiles')

    await expect.soft(page.locator('#nav-search-submit-button')).toBeVisible()

    await page.locator('#nav-search-submit-button').click()

    // await expect.soft(page.locator('//*[text()="Coupons"]').first()).toBeHidden()

    /*Locator:  locator('//*[text()="Coupons"]').first()
           Expected: hidden
           Received: visible*/

    // await expect.soft(page.locator('//*[text()="Coupons"]').first()).toBeDisabled()

    /* Locator:  locator('//*[text()="Coupons"]').first()
           Expected: disabled
           Received: enabled*/

    await expect.soft(page.locator('//*[text()="Coupons"]').first()).toBeEnabled()

    await expect.soft(page.locator('//*[text()="Coupons"]').first()).toBeAttached()

    await expect.soft(page.locator('//*[text()="Coupons"]')).toHaveCount(1)

    await page.locator('//*[text()="Coupons"]').first().click()

    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect.soft(page.locator('//*[@class="title"]')).toHaveCount(17)

    await expect.soft(page.locator('//*[@class="title"]')).toContainText(['Dynamic Button'])

    await expect.soft(page.locator('//*[@class="title"]')).toContainText(['Upload Files'])

    await expect.soft(page.locator('//*[@class="title"]')).toContainText(['Upload Files', 'Static Web Table'])

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('class')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('id')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('placeholder')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('id', 'name')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveClass('form-control')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveId('name')

    await expect.soft(page.getByPlaceholder('Enter Name')).toBeVisible()

    await expect.soft(page.getByPlaceholder('Enter Name')).toBeEmpty()

    await page.getByPlaceholder('Enter Name').fill('soft assertion evening')

})

Then('I verify Reading Testdata1 from the json file', async function () {

    await page.getByPlaceholder('Enter Name').fill(TestData1.Name)

    await page.getByPlaceholder('Enter EMail').fill(TestData1.Email)

    await page.getByRole('textbox', { name: 'phone' }).fill(TestData1.Phone)

    await page.locator('#textarea').fill(TestData1.Address)

    await page.locator('.wikipedia-search-input').fill(TestData1.Wikipedia)
})

Then('I verify Reading Testdata2 from the json file', async function () {

    await page.getByPlaceholder('Enter Name').fill(TestData2.Name)

    await page.getByPlaceholder('Enter EMail').fill(TestData2.Email)

    await page.getByRole('textbox', { name: 'phone' }).fill(TestData2.Phone)

    await page.locator('#textarea').fill(TestData2.Address)

    await page.locator('.wikipedia-search-input').fill(TestData2.Wikipedia)
})

Then('I verify Reading Testdata3 from the json file', async function () {

    await page.getByPlaceholder('Enter Name').fill(TestData3.Name)

    await page.getByPlaceholder('Enter EMail').fill(TestData3.Email)

    await page.getByRole('textbox', { name: 'phone' }).fill(TestData3.Phone)

    await page.locator('#textarea').fill(TestData3.Address)

    await page.locator('.wikipedia-search-input').fill(TestData3.Wikipedia)
})

Then('I verify playwright filters', async function () {

    await page.goto('https://www.saucedemo.com/')

    await page.getByPlaceholder('Username').fill('standard_user')

    await page.getByPlaceholder('Password').fill('secret_sauce')

    await page.locator('#login-button').click()

    await page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' })
        .getByRole('button', { name: 'Add to cart' }).click()

    await page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Fleece Jacket' })
        .getByRole('button', { name: 'Add to cart' }).click()

    await page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Onesie' })
        .getByRole('button', { name: 'Add to cart' }).click()

    await page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' })
        .getByRole('button', { name: 'remove' }).click()

    await page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Fleece Jacket' })
        .getByRole('button', { name: 'remove' }).click()

    await page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Onesie' })
        .getByRole('button', { name: 'remove' }).click()

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('.form-check.form-check-inline').filter({ hasText: 'Sunday' }).click()

    await page.locator('.form-check.form-check-inline').filter({ hasText: 'Monday' }).click()

    await page.locator('.form-check.form-check-inline').filter({ hasText: 'Fri' }).click()

    await page.locator('.form-check.form-check-inline').filter({ hasText: 'Tues' }).click()

    await page.locator('.form-check.form-check-inline').filter({ hasText: 'male' }).last().click()
})

Then('I verify simple alert', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        var dialogText = dialog.message()

        console.log(dialogText) //I am a JS Alert

        dialog.accept()
    })

    await page.locator("//button[text()='Click for JS Alert']").click()
})

Then('I verify confirmation alert ok', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        var dialogText = dialog.message()

        console.log(dialogText) //I am a JS Confirm

        dialog.accept()
    })

    await page.locator("//button[text()='Click for JS Confirm']").click()
})

Then('I verify confirmation alert cancel', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        dialog.dismiss()
    })

    await page.locator("//button[text()='Click for JS Confirm']").click()
})

Then('I verify prompt alert without text ok', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        dialog.accept()
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()
})

Then('I verify prompt alert with text ok', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        dialog.accept("hi qt team good evening")
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()
})

Then('I verify prompt alert cancel', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        dialog.dismiss()
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()
})

Then('sai', async function () {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/#top')

    await page.locator("#mousehover").scrollIntoViewIfNeeded()

    await page.waitForTimeout(2000)

    await page.locator("#mousehover").hover()

    await page.waitForTimeout(2000)

    await page.locator("#mousehover").click

    await page.waitForTimeout(2000)

    await page.locator("//*[text()='Top']").click()

    await page.waitForTimeout(2000)

    await page.locator("#mousehover").scrollIntoViewIfNeeded()

    await page.locator("#mousehover").hover()

    await page.waitForTimeout(2000)

    await page.locator("#mousehover").click

    await page.waitForTimeout(2000)

    await page.locator("//*[text()='Reload']").click()

    await page.waitForTimeout(20000)

    // await page.goto('https://rahulshettyacademy.com/AutomationPractice/#top')

    // let pageSource = await page.content()

    // console.log(pageSource)

    // process.env.m

    // const token = auth

    // await email
})

Then('I verify playwright frames', async function () {

    await page.goto('https://the-internet.herokuapp.com/nested_frames')

    var allFramesCount = await page.frames()

    console.log("allFramesCount is :", allFramesCount.length) //allFramesCount is : 6

    //await page.framelocator(selenium/playwright lcoator)/fra(url).locator().method()

    //1st way

    var bottomFrame1stway = await page.frameLocator('//*[@name="frame-bottom"]').locator("//*[contains(text(),'BOTTOM')]").innerText()

    console.log("bottomFrame1stway is :", bottomFrame1stway) //BOTTOM

    //2nd way

    var bottomFrameURl = await page.frame({ url: 'https://the-internet.herokuapp.com/frame_bottom' })

    var bottomFrame2ndway = await bottomFrameURl?.locator("//*[contains(text(),'BOTTOM')]").innerText()

    console.log("bottomFrame2ndway is :", bottomFrame2ndway) //BOTTOM

    await page.goto('https://demo.automationtesting.in/Frames.html')

    var singleFrame = await page.frame({ url: 'https://demo.automationtesting.in/SingleFrame.html' })

    var allFramesCount = await page.frames()

    console.log("allFramesCount is :", allFramesCount.length) //allFramesCount is : 10

    await singleFrame?.locator('//*[@type="text"]').nth(0).fill('quality')

    await page.waitForTimeout(5000)

    await page.getByText('Iframe with in an Iframe').click()

    await page.waitForTimeout(5000)

    var multiFrame = await page.frame({ url: 'https://demo.automationtesting.in/MultipleFrames.html' })

    var allChildFramesCount = await multiFrame?.childFrames()

    console.log("allChildFramesCount is :", allChildFramesCount?.length) //1

    if (allChildFramesCount && allChildFramesCount.length > 0) {

        allChildFramesCount[0].locator('//*[@type="text"]').last().fill('playwright')
    }

    await page.waitForTimeout(10000)

    await page.getByText('Single Iframe ').click()

    await page.waitForTimeout(5000)

    await singleFrame?.locator('//*[@type="text"]').nth(0).fill('back to first frame')
})

Then('I verify reading testdata from the feature file {string},{string},{string},{string},{string}', async function (Name, Email, Phone, Address, Wikipedia) {

    await page.getByPlaceholder('Enter Name').fill(Name)

    await page.getByPlaceholder('Enter EMail').fill(Email)

    await page.getByRole('textbox', { name: 'phone' }).fill(Phone)

    await page.locator('#textarea').fill(Address)

    await page.locator('.wikipedia-search-input').fill(Wikipedia)
})

Then('I verify orangehrm applictaion launching {string},{string},{string}', async function (url, Username, Password) {

    await page.goto(url)

    await page.getByPlaceholder('Username').fill(Username)

    await page.getByPlaceholder('Password').fill(Password)

    await page.locator('//*[@type="submit"]').click()
})

Then('I verify playwright Waits', async function () {

    await page.goto('https://www.facebook.com/')

    console.log("==============wait for url to be loaded============")

    //syntax: await page.waitForURL(‘url’)

    await page.waitForURL('https://www.facebook.com/')

    console.log("=========wait for timeout============")

    //syntax: await page.waitForTimeout(8000) //8000 means 8000 milliseconds that means 8 seconds

    await page.waitForTimeout(10000) //10 seconds

    await page.locator('//*[@name="email"]').fill('quality')

    await page.waitForTimeout(10000) //8 seconds

    await page.locator('//*[@name="pass"]').fill('test@gmail.com')

    await page.waitForTimeout(10000) //8 seconds

    console.log("=========wait for selector============")

    /*syntax:
1st way:
await page.waitForSelector(webelement)
2nd way:
await page.waitForSelector(webelement,{timeout:8000}) //8000 means 8000 milliseconds that means 8 seconds
*/

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //1st way

    await page.waitForSelector('//*[@name="username"]')

    await page.locator('//*[@name="username"]').fill('Admin')

    //2nd way

    await page.waitForSelector('//*[@name="password"]', { timeout: 8000 }) //8000 means 8000 milliseconds that means 8 seconds

    await page.locator('//*[@name="password"]').fill('admin123')

    console.log("=========wait for load state============")

    //syntax: Await page.waitForLoadState()

    //1st way

    await page.waitForLoadState()

    await page.locator('//*[@type="submit"]').click()

    //2nd way

    await page.waitForLoadState('domcontentloaded') // html, css content is laoding

    await page.getByText('Admin').click()

    //3rd way

    await page.waitForLoadState('domcontentloaded', { timeout: 8000 }) // html, css content is laoding and wait 8 seconds

    await page.getByText('PIM').click()

    //4th way

    await page.waitForLoadState('load') // html, css content and images is laoding

    await page.getByText('Leave').click()

    //5th way

    await page.waitForLoadState('load', { timeout: 8000 }) // html, css content and images is laoding and wait 8 seconds

    await page.getByText('Time').click()

    //6th way

    await page.waitForLoadState('networkidle') // html, css content and images is laoding and network issues like 500/300/400 

    await page.getByText('Recruitment').click()

    //7th way

    await page.waitForLoadState('networkidle', { timeout: 8000 }) // html, css content and images is laoding and network issues like 500/300/400  and wait 8 seconds

    await page.getByText('My Info').click()

})

Then('verify playwright windows handling', async function () {

    browser = await chromium.launch({

        headless: false,

        args: ['--start-maximized']
    })

    context = await browser.newContext({

        viewport: null
    })

    let page1 = await context.newPage()

    let page2 = await context.newPage()

    let page3 = await context.newPage()

    var allPagesCount = await context.pages()

    console.log("allPagesCount is :", allPagesCount.length) //allPagesCount is : 3

    await page1.goto('https://testautomationpractice.blogspot.com/')

    await expect(page1).toHaveTitle('Automation Testing Practice')

    await page2.goto('https://login.salesforce.com/')

    await expect(page2).toHaveTitle('Login | Salesforce')

    await page3.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await expect(page3).toHaveTitle('OrangeHRM')

    await page3.locator('//*[@name="username"]').fill('Admin')

    await page3.locator('//*[@name="password"]').fill('admin123')

    await page3.locator('//*[@type="submit"]').click()

    await page3.waitForTimeout(5000)

    console.log("========switch to first tab=========")

    await allPagesCount[0].bringToFront()

    await page1.waitForTimeout(5000)

    await page1.getByText('New Tab').scrollIntoViewIfNeeded()

    await page1.waitForTimeout(5000)

    await page1.getByText('New Tab').click()

    await page1.waitForTimeout(5000)

    allPagesCount = await context.pages()

    console.log("allPagesCount is :", allPagesCount.length) //allPagesCount is : 4

    console.log("========close the 4th tab=========")

    await allPagesCount[3].close()

    console.log("========switch to second tab=========")

    await allPagesCount[1].bringToFront()

    await page2.waitForTimeout(5000)

    await page2.getByLabel('Username').fill('quality')

    await page2.waitForTimeout(5000)

    console.log("========switch to first tab=========")

    await allPagesCount[0].bringToFront()

    await page1.waitForTimeout(5000)

    var popupPage = page1.waitForEvent('popup')

    await page1.getByText('Popup Windows').scrollIntoViewIfNeeded()

    await page1.waitForTimeout(5000)

    await page1.getByText('Popup Windows').click()

    await page1.waitForTimeout(5000)

    var pagePopup = await popupPage

    console.log("pagePopup title is :", await pagePopup.title())

    console.log("pagePopup url is :", await pagePopup.url())

    allPagesCount = await context.pages()

    console.log("allPagesCount is :", allPagesCount.length) //allPagesCount is : 5

    console.log("========close the 2th tab=========")

    await allPagesCount[1].close()

    await page1.waitForTimeout(5000)

    allPagesCount = await context.pages()

    console.log("allPagesCount is :", allPagesCount.length) //allPagesCount is : 4

    console.log("========close the complete browser=========")

    await context.close()

    /*allPagesCount is : 3
========switch to first tab=========
allPagesCount is : 4
========close the 4th tab=========
========switch to second tab=========
========switch to first tab=========
pagePopup title is : Selenium
pagePopup url is : https://www.selenium.dev/
allPagesCount is : 5
========close the 2th tab=========
allPagesCount is : 4
========close the complete browser=========*/
})