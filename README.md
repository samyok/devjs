# devjs
## How we built it
We used React Native to build the front-end of our application, which includes defining transitions between screens using the ```StackNavigator```.

## Inspiration
We recently saw a video of Nepalese students, who could not afford a laptop, coding on their mobile phones. As fortunate as our team is, with so many resources within arm's reach, we could not fathom how difficult it must be for these students to create apps and programs (let alone functional ones).

After investigating the current IDEs available in Google Play and App stores, we discovered that the current offerings compiled code through servers online. We thought that if students could not afford a laptop or PC, they may not have reliable internet service, which makes it rather difficult for them to use such apps. 

Hence, we decided to create a comparable IDE experience, without reliance on internet access, to provide wannabe-developers worldwide the resources to achieve their dreams.

## What it does
**devJS** provides a _internet-free_ code editor and terminal to developers as well as an in-app file system to keep track of projects and files.

## Challenges we ran into
Getting the ```nodejs-mobile``` package to work with our app was tricky, and we had to try installing several older versions of the Android NDK for our app to run.

There was a lot of waiting and praying :).

## Accomplishments that we're proud of
Among the many cryptic bugs we've experienced, we were able to deliver a functional app - and with little prior experience in mobile app development!

Although **devJS** may not be able to provide users the same experience they'd receive on a PC, we are proud to provide users without such luxuries as laptops and stable internet access the support and ability to become developers like us!

## What we learned
Our team learned the React Native library along with packages like ```react-navigation``` to create our first mobile app! We learned how to use Figma and Sketch for designing our screens, and implemented these designs in React Native.

## What's next for **devJS**
There are a lot of small nuisances that we need to fix. Other than those, some large features we are planning includes:
* Expanding multi-language support
* Offline git support/version control
* Access to debugger
