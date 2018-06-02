# appium-mobile-touchid

This is an example of mobile app touch Id test automation using Appium with nodeJS (you can use java, python, javascript, ruby).

Appium support automating iOS apps through XCUITest driver( To know more about [XCUITest driver](https://github.com/appium/appium-xcuitest-driver)). 
Apple's XCUITest libraries can get access in order to communicate with your app through WebDriverAgent. 



## Requirements, system support & Configuration

#### General requirements:

Apple's XCUITest library is only available on iOS simulators and devices that are running iOS 9.3 or higher.
* A Mac computer with macOS 10.11 or 10.12 is required.
* Xcode 7 or higher is required.
* The XCUITest driver was available in Appium starting with Appium 1.6.
* For correct functioning of the driver, additional system libraries are required (see the Setup sections below).

#### System support
* TouchID simulation is only supported in iOS Simulators. It is not possible to simulate touchId on real devices.
* Not all iOS devices have touchId so your tests should handle the case where touchId is not supported

#### Configuration
* To use touchId, AppiumDesktop app must be added to the accessibility preferences on your Mac. 

`System Preferences > Security & Privacy > Accessibility`

![Setup](https://drive.google.com/open?id=1P7GV8Em7IKYQXH4e8Z4KSzyE4Mrqm5o_ "Setup")

### Update desired capabilities

Update desired in index.js file 

```js
  {
    "platformName": "iOS", 
    "platformVersion": "11.0",
    "deviceName": "iPhone 7",
    "automationName": "XCUITest",
    "xcodeOrgId": <YOUR_APP_SIGNING_CERTIFICATE_ID>
    "app": "/path/to/my.app"
    "allowTouchIdEnroll": true 
  }
```

* Set the desired capability allowTouchIdEnroll to true.
* When the Simulator starts, touch id enrollment will be enabled by default.


### Demo

[Watch video demo](https://drive.google.com/open?id=11sNjfxPLzdV2PXJ92WbKgNy5mT9MTksq)

#### Support

Please drop your query to askAP.query@gmail.com, if you find any issues related to touch Id automation using appium,node js. I will get back to you as soon as possible. 







