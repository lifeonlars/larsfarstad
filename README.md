# LarsFarstad.com

This is my personal resume and folio site. The site was created using the gulp-generator-webapp as a starting point with modifications to try to get it working with Github Pages as well as a Google Pagespeed Score of 100.  

Live site: [larsfarstad.com](https://larsfarstad.com)

## How to use

* Clone repo then run `yarn` (or alternatively `npm install`) as well as `bower install`
* To serve a local version type `gulp serve`* 
* Use `gulp build` to create a production version 
* To preview a production build run `gulp serve:dist`

## CSS 

CSS consists of some minimal custom CSS as well as parts of Bootstrap 4 (this can be customised depending on what you need)

1. [gulp-cssnano](https://github.com/ben-eb/gulp-cssnano) minifies CSS into a single file `main.css` 
2. [gulp-uncss](https://github.com/ben-eb/gulp-uncss) is then used to remove any CSS that isn't used on the page 
3. [gulp-inline-source](https://github.com/fmal/gulp-inline-source) is then used to copy the contents of `main.css` into the head of the page replacing the link ref.

Since this is just a single page using inline-source adding the whole CSS to the head won't matter and eliminates the **Avoid render blocking CSS** warnings from Google PageSpeed Insights.

**CSS Refactoring Goals**

* Use minimal Bootstrap CSS (grid only?)

## JS/Plugins 

* jQuery and jQuery easing
* Mixitup for skills and folio listings (this is pretty large, consider refactoring to use something else)
* Bootstrap Scrollspy, Utils, Collapse
* Tether

JavaScript is currently very large for the little it does, needs serious refactoring.

### JavaScript Refactoring

* Aim to completely get rid of jQuery as a dependency
* All plugins and code in ES6
* Replace Mixitup with a better alternative. Possibly consider writing a custom solution in ES6
* Consider moving skills JSON to external file 

### Google Fonts for custom fonts 

Google fonts is using a custom font loader to avoid render blocking warnings from Google Page Speed Insights

## Usage

With the exception of the images and example work, feel free to use and adapt the rest of the source code for your own purposes. 


## TODO

* Modal support for folio section  
* Content, design and layout for folio section (replacing current placeholders)
* Fix mobile menu
* Revamp about section
* Add content to contact section
* Re-organise and clean-up CSS
