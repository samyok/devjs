# devjs
## How we built it
We used React Native to build the front-end of our application, which includes defining transitions between screens using the ```StackNavigator```.

In the back end, devJS runs a compiled version of NodeJS ChakraCore on iOS and uses Termux on Android.


## Inspiration
One of our team members, Samyok, recently encountered a Hacker News posts of a Nepalese student who could not afford a laptop and practiced programming on their mobile phone. As a nepalese himself and as a team with so many resources within arm's reach, we could not fathom how difficult it must be for this student to create apps and programs (let alone functional ones).

After hearing about this one Nepalese student, we were curious to know how big the issue really was. How many people experience something similar? As bizarre as it may seem, it turns out that approximately 28% of adults age 18-29 rely on mobile devices only for online access (Pew Research). GSMA Intelligence predicts that in 2025, this figure will be 45% for *all* populations.

When investigating the current IDEs available in Google Play and App stores, we discovered that the current offerings compiled code through servers online. If students could not afford a laptop or PC, it's quite possible they may not have access to reliable internet service either, which makes it rather difficult for them to use such mobiles IDEs. 

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
