# Scrimba Firebase Mobile Application

This project is a tutorial delivered by Rafid Hoda at Scrimba. I'm working through this tutorial to expand my knowledge in JavaScript and Firebase realtime database.

## Tutorial / Project Description 

To build a mobile application (simple shopping list) that is linked to a realtime database on Firebase.

**Brief:**
* Build a JavaScript mobile application that allows users to write a shopping list that has CRUD features.
* Build on the basic application to learn more about developing JS apps whilst learning the features of Firebase.

## Screenshots

![Mobile Version](public/Assets/CatScreen.png)

**Mobile Version Only**

## Built with

This application was built using the [Vite](https://vitejs.dev/) development environment and JavaScript.

## Packages Used

In addition to the the frameworks / libraries and tools mentioned above:

* ESLint - used to follow industry standard rules.
* Prettier - used to ensure consistency in code formatting.

## Installation Instructions

* Clone this repo
  * e.g. `gitclone https://github.com/tonymm55/scrimba-firebase-mobile.git`
* Change directory into the repo
  * e.g. `cd scrimba-firebase-mobile` (or the directory you specified the repo to be cloned into)
* Install the dependencies from `package-lock.json`
  * `npm install`
* To start the app:
  * `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## If I Had More Time

I would like to implement:

* TBC
* Write tests to ensure the application is robust, stable and feature tested.

## If I Had More Time

I learned a lot here especially around deployment. These are my initial notes. When I first set up the project, I managed to create 2 folders that were remotely connected to Github. This happened when I retrospectively set up the vite-project and this created a new folder that was remotely connected to Github in additon to the root folder. At the end of the project, I deleted the folder which of course created errors. I did this because Netlify was not showing the images and I suspected it may have been related to the build process. I'm not sure. Filepaths were another issue, as I was specifying the full filepath rather than the relative filepath /Assets. This was changed and the images/favicons appeared. Initially there were multiple errors with the site.webmanifest. Again, this was due to filepaths being full instead of relative. ChatGPT also advised assets and webmanifest to be in the public folder for image access.

## Author

This project was authored by Anthony Moran. I can be contacted at [LinkedIn](linkedin.com/in/anthonymmoran) and [Twitter](https://twitter.com/TonyMCodes).
