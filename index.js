// Import web driver node module
let wd = require('wd')
let asserters = wd.asserters;

// import all  credentials
let credentials = require('./credentials')

// Server detail
let serverDetail = {
  local: {
    hostname: "localhost",
    port: 4723
  }
}

let environment = serverDetail.local

//Set desired capabilities
let capabilities = {
  deviceName: credentials.deviceName,
  platformName: credentials.platformName,
  platformVersion: credentials.platformVersion,
  automationName: credentials.automationName,
  xcodeOrgId: credentials.xcodeOrgId,
  app: credentials.appFilePath,
  allowTouchIdEnroll: true
}

const driver = wd.promiseChainRemote(environment)
// initialise
driver.init(capabilities,  (error)=>{
  // sample test case
  testCase()
    .then(()=>{ console.log(" Test case start executing ")})
    .catch(error => console.log(error))
  if(error){
    driver.quit()
  }
})

async function testCase() {
  // tap on  button
  await driver.elementByAccessibilityId('demo_touchID', (err,element)=>{
    console.log('Button taped to enable touch id !!!!');
    element.click();
    // Tap on cancel touch
    cancelTouchId()
      .then(()=> setTimeout(()=> addValidTouchId(), 10000))
  })
}
// Tap on button again to validate touch id
async function addValidTouchId(){
  await driver.elementByAccessibilityId('demo_touchID', (err,element)=>{
    console.log('Button taped to enable touch id !!!!');
    element.click();
    const valid = false
    validateTouchId(valid)
      .then(()=> setTimeout(
          () =>!valid ?  passcodeFallback() : console.log('Done'),
          5000))
  })
}
// Cancel touch id
async function cancelTouchId(){
  await driver.waitForElementByAccessibilityId('Cancel', asserters.isDisplayed && asserters.isEnabled , 3000).then(element=>{
    console.log('Touch id cancelled!!!!');
    element.click();
  })
}

async function validateTouchId(flag){
  await setTimeout(async () =>{
    console.log('Touch id valid!!!')
    await driver.touchId(flag)
  }, 5000)

}
// Passcode fall back  to enable  enter password
async function passcodeFallback() {
  await driver.waitForElementByAccessibilityId('Enter Password', asserters.isDisplayed && asserters.isEnabled, 3000).then(element => {
    console.log('Enter Password taped!!!!');
    element.click();
  })
}



