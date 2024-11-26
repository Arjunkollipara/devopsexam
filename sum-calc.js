const webdriver=require('selenium-webdriver')
const assert=require('assert')
const { error } = require('console')
const driver= new webdriver.Builder().forBrowser('chrome').build()
driver.get("file://"+__dirname+"/.html")
async function runtest()
{
    try{
    const input1= await driver(webdriver.By.id("num1"))
    input1.sendKeys('20')
    const input2= await driver(webdriver.By.id("num2"))
    input2.sendKeys('30')
    const btn=await driver(webdriver.By.id("Add"))
    btn.click()
    const final= await driver(webdriver.By.id("result"))
    const res= await final.getText()
    assert.equal(res,'50','Test failed output should be 50')
    console.log("Test passed")
    }
    catch{
        console.log(error)
    }

}
runtest()