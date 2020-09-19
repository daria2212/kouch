# 👨‍🏫 topcoach.site - website layout

## Requirements

* [Node.js >= v.13 (with npm)](https://nodejs.org/en/)
* [Gulp](https://www.npmjs.com/package/gulp)

## Open website

[Click here](https://topcoach.site/)

## Installation 

Get the repo onto your local machine (or download zip)

Install npm packages:

```bash
$ npm i
```

Start working:

```bash
$ gulp
```
Make a production build

```bash
$ gulp build
```

## Project structure
```
├── gulpfile.js/                      # Config Gulp.js
├── app/                              # Developing folder
│   ├── css                           # Folder with ready styles
        ├── style.min.css   
    ├── fonts                         # Folder for fonts (woff/woff2)
    ├── images
         ├── icons                    # Going to sprite.svg via $ gulp sprite   
    ├── js
         ├── min                      
         ├── libs.min.js
         ├── main.js
    ├── scss
         ├── fonts.scss               # Turning on fonts
         ├── global.scss              # For global styles
         ├── libs.scss                # Turning on styles libs
         ├── vars.scss                # For variable definition
         ├── style.scss               # Importing all style files
         ├── -section-.scss           # Styles for each section
    ├── -page-.html
    └── index.html
    
├── .gitignore                        # List of gitignore files
├── package.json                      # Config file
├── mail.php                          # Helps to recieve mails from the website
├── robots.txt                        # SEO file
├── sitemap.xml                       # SEO file
└── README.md                         # Documentation
```
