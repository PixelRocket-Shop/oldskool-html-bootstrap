# OldSkool - Bootstrap 5 HTML Responsive Template

## Overview
OldSkool is a modern & flexible Bootstrap 5 template with customizable card listings in the category page and an excellent product display on the individual product page. It's the perfect starting point for any fashion retail website, and its clean and minimal design means it's easy to modify and painless to integrate to your custom Ecommerce application.

![Bootstrap 5 Responsive HTML Fashion Store Template](https://pixelrocket-public-assets.s3.eu-west-2.amazonaws.com/github-assets/oldskool-html/homepage-medium.jpg "OldSkool | Responsive Bootstrap 5 Ecommerce Template")

## Demo
[Demo](http://example.com/)

**Please note that this is an HTML template only. It does not connect to a database, and will not automatically work in a content management system (Wordpress etc). You will need to incorporate our code into your application.**

## Template Pages
The template consists of 3 pages:

* Homepage
* Category page
* Product page

To keep code repetition to a minimum, we've used Handlebars.js as the templating engine and partials to quickly add the same code to different pages. We also use a Handlebars plugin for JSON data - this allows us to use loops and output a single HTML code block instead of repeating the same HTML.


## OldSkool Key Features
In addition to all the Bootstrap components and features, OldSkool also offers the following custom components:

* Homepage slideshow (using Swiper.js)
* Brand logo marquee 
* Homepage featured categories (using Swiper.js)
* Instagram slideshow (Swiper.js)
* Category listing card showing sale badge, new product badge and sold out badge
* Custom pagination component
* Customer review component
* Related products slideshow
* Offcanvas category filter display
* Header cart drop down display
* Slidedown search bar


## Build Tool
We used Webpack 4 to compile and build the template. [You can read more about Webpack here](https://webpack.js.org/).

There are two commands for you to run for Webpack:
** npm start ** This starts the Webpack devserver. It will automatically open the site in your browser. Any time you save a file, the browser will refresh. Be aware that if you amend the JSON data, or add a new file after starting Webpack devserver, you may have to restart Webpack for it to pickup the new file/data change.
** npm run build ** This builds your template. It uses the files located in the src folder and outputs the compiled files to the dist folder.

## Bootstrap Documentation
Bootstrap already has a comprehensive documentation site that will guide you in setting up and using all default Bootstrap features. Please refer to Bootstrap's doc site first for any default Bootstrap features: [Visit Bootstrap's Doc Site](https://getbootstrap.com/docs/5.0/getting-started/introduction/)


## File structure
📁 dist - Generated version of the template. Go here if you do not want to work with the template source code. But be warned: if you customise anything in this folder directly, and then later recompile the template using webpack, unless you move the dist folder out of the template, your changes will be overridden.

📁 node_modules - Directory where NPM installs dependancies. You will not see this folder until you complete the template installation. You do not need to create this folder.

📁 src - Template source code. Go here to customise your template.

📁 assets - Template assets such as CSS, JS, Images etc.

📁 data - Template JSON Data files. We use these JSON files to make your job easier to insert content into the template. 

📁 html - Template pages. Go here to edit existing pages or add new pages.

📁 partials - Handlebars partial templates. 


## Requirements
If you do not intend to work with the template source code (and that means you will not be compiling it or running the Webpack dev server), you do not need to install anything. You can simply navigate to the dist folder and start editing the files.

Most developers will be editing the source code and will also be running Webpack to compile the template. If that's the case, then ensure that you have Node.js installed. [You can download it from here](https://nodejs.org/en/download/)

That's all you need to have pre-installed. You can now open the main template folder with your command line.

## Installation & Build
You only need to do the following steps if you intend to run Webpack and recompile the template. Please also ensure that you have Node.js installed.

Step One: open up the template folder in your command line. Ensure you are inside the root of the template.

Step Two: in your command line, run npm install. This will install all the dependancies listed in your package.json file.

Step Three: in your command line, run npm start. That's it. Your browser will now open and the "dev" version of the site will be loaded.

## Handlebars Partials

## Template Data

## Customising Template

## Credits
