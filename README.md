
# KPBS Passport Learn More Page Rebuild and Integration
<!-- This project aims to rebuild the KPBS Passport Learn More page by replicating a mockup using HTML, CSS, LESS, and a Gulpfile. The objective is to create a static web page that looks and functions like the original page, and then integrate this new page into the KPBS Grove CMS.

To achieve this, each section of the page will have its own .less file within less/global/modules/style.less. This approach will make it easy to maintain and update the code in the future.

The project will be hosted on GitHub and will include detailed documentation on how to replicate the page, integrate it with the CMS, and make updates as needed. The final product will be a fully functional static page that meets the requirements of the KPBS Passport Learn More page.

Overall, this project will help to improve the user experience on the KPBS website by providing an updated and streamlined Learn More page for KPBS Passport. It will also serve as an example of how to build and integrate static pages into the KPBS Grove CMS using modern web development technologies. -->

View Webpage hosted on Github

---
## Technology Stack

- **HTML**: We will use BEM (Block Element Modifier) methodology to structure the HTML code.
- **CSS**: We will write the CSS code using LESS, a preprocessor that extends the functionality of CSS.
- **Gulp**: We will use Gulp, a task runner, to automate tasks such as preprocessing the CSS code for deployment.

## Usage
To use this static webpage, simply run the program and begin reviewing the flashcards. Each card will display a programming concept or term on the front, and the corresponding definition or explanation on the back. Use the app regularly to improve your memory retention and recall of important programming concepts.

---

## Installation

### First Install the NPM Packages

Open your terminal or command prompt.
Navigate to the root directory of your project.
Run the following command to install all of the required packages as development dependencies in your project:

```
npm install --save-dev gulp gulp-less gulp-sourcemaps gulp-autoprefixer gulp-clean-css gulp-rename gulp-uglify 
```

Wait for the installation to complete. You should see a progress indicator in your terminal as each package is installed.
Once the installation is complete, you can require these packages in your Gulpfile using require() statements, like this:
```
const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
```
That's it! You can now use these packages in your Gulpfile to automate your build process.

### Open the index.html

Open the dist/index.html to view the web app.
