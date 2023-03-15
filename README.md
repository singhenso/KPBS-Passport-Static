
# KPBS Passport Learn More Page Rebuild and Integration
This project aims to rebuild the KPBS Passport Learn More page by replicating a mockup using HTML, CSS, LESS, and a Gulpfile. The objective is to create a static web page that looks and functions like the original page, and then integrate this new page into the KPBS Grove CMS.

To achieve this, each section of the page will have its own .less file within less/global/modules/style.less. This approach will make it easy to maintain and update the code in the future.

<!-- The project will be hosted on GitHub and will include detailed documentation on how to replicate the page, integrate it with the CMS, and make updates as needed. The final product will be a fully functional static page that meets the requirements of the KPBS Passport Learn More page.

Overall, this project will help to improve the user experience on the KPBS website by providing an updated and streamlined Learn More page for KPBS Passport. It will also serve as an example of how to build and integrate static pages into the KPBS Grove CMS using modern web development technologies. -->

<!-- View Webpage hosted on Github -->

---
## Technology Stack

- **HTML**: We will use BEM (Block Element Modifier) methodology to structure the HTML code.
- **CSS**: We will write the CSS code using LESS, a preprocessor that extends the functionality of CSS.
- **Gulp**: We will use Gulp, a task runner, to automate tasks such as preprocessing the CSS code for deployment.

<!-- ## Usage
To use this static webpage, simply run the pr. Each card will display a programming concept or term on the front, and the corresponding definition or explanation on the back. Use the app regularly to improve your memory retention and recall of important programming concepts. -->

---

## Installation

### First Install the NPM Packages

Open your terminal or command prompt.
Navigate to the root directory of your project.
Run the following command to install all of the required packages as development dependencies in your project:

```
npm i
```

Wait for the installation to complete. You should see a progress indicator in your terminal as each package is installed.

That's it! You can now use these packages in your Gulpfile to automate your build process.

---

## How to view the static page
### Installation Open the index.html

Open the Passport_modules/index.html to view the web webpage.

## Photo on iStockphoto Licensed and Owned by KPBS

The photo displayed on iStockphoto is licensed and owned by KPBS. KPBS is the owner of the rights to the photo and has granted iStockphoto the permission to display and license the photo. Any use of the photo must be authorized by KPBS.
https://www.istockphoto.com/photo/happy-senior-couple-watching-tv-gm1053494320-281464181

---
## Personal Notes:

Regex for specific BEM class and then highlight
```
/.*image-text-grid.*/gi
```
---


## Updates

### 3/14/23 @ 3:55 p.m. PST

- Update the class "image-text-grey" into "square-img-text" to be more concise and to avoid using color within naming the styles
- Update with Mobile responsiveness style. Fine tuned from various devices and max-width media queries
- Update to include high resolution licensed photo from Istock. This is the first image of family on couch watching t.v.
-  Removed .DS_Store from the repo by applying the following commands:


1. Add .DS_Store to .gitignore
```
DS_Store
```
2. Commit the .gitignore file to your repository:
```
git add .gitignore
git commit -m "Add .gitignore to ignore .DS_Store files"
```

3. Remove any existing .DS_Store files from the repository:
```
find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch
```

4. Finally, push your changes to the remote repository:
```
git push

```
