# Academic Portfolio Template
This repo is a template for an academic portfolio. I noticed that a lot of academic portfolios are basic HTML, and of
course not everyone can code their own custom portfolio. So I decided to code an academic portfolio site template that
is very plug-and-play so minimal to no coding is necessary. The result is a customizable Vue.js single page application
academic portfolio website that you can host for free on Github Pages.

## What is Vue.js?
Taken directly from the Vue.js website:
> Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
It's basically a front end framework that is very modular. Think of it as a bunch of legos that you put together to make
a cool project. Each "lego" is a component, which is a chunk of code that does something, whether it be a button,
dialog that asks if you're sure you want to do something, anything. A component can be as large or small, detailed or
 generic as you'd like, just like a real lego block. You can then reuse these components throughout the site, so you
 don't have to code a button over and over.

If you'd like to learn more you can watch an introduction video series Vue.js created:
https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance/

### Vuetify
In particular I use Vuetify, a Material Component Framework for Vue applications. It's basically a set of legos instead
of using a tub of random legos. They have a bunch of pre-made components that can be customized, and all are based on
Google's Material design framework. You can learn more at their website:
https://vuetifyjs.com/en/getting-started/why-vuetify


### npm
If you code in javascript you're going to hear about `npm` a lot. It's a giant software registry that helps you manage
these code packages by allowing you to install, update, and uninstall easily. It also handles a lot of the hard
versioning and dependency work (e.g. one code package may require another to work properly, just like some webpages
require you have Java installed). As I step you through installation, you're going to end up installing `npm`. If you're
curious, you can look at the `package.json` and `package-lock.json` files, which list all the code packages this
portfolio requires to work properly so that it's easy for anyone else to install necessary packages and get up and
running!

## TLDR Customizing
This repo is easily customized. Simply go to `src -> assets -> data` and edit the information in these javascript files.
  Change the name to be your own, add your education information, your work experience, etc and the website will be
  populated with your information! Make sure to not change the variable names or dictionary formats. Just change Each of these javascript
files contain all the information that is used to populate the website. Edit the information there, but keep the
dictionary formats the same.

I'll go into more detail about which javascript files and variables correspond to what text on the portfolio site below.
## Sections of the Website
The website is split into tabs with different sections. In total it includes space to display:
- short introduction
- about text
- education
- skills
- resume link
- linkedIn link
- work experience
- publications

I'll go into each section in detail so you know which variable corresponds to which text on the site to make it easier
to customize.

### Toolbar
<img width="1279" alt="Screen Shot 2019-06-16 at 4 16 53 PM" src="https://user-images.githubusercontent.com/9166875/59571064-99e43300-9055-11e9-9cbe-dc0cc0d50033.png">
This houses your name in the upper left corner, which is also a button that takes you back to the front page. It also
contains links to the About, Skills, Experience, and Publications sections.

#### Customization Variables
| Name | What it is | Location
| --- | --- | ---
| `name` | portfolio name in upper left corner | `about.js`


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
