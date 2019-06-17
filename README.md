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

If you'd like to learn more you can watch this [introduction video series](https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance/) Vue.js created.

### Vuetify
In particular I use Vuetify, a Material Component Framework for Vue applications. It's basically a set of legos instead
of using a tub of random legos. They have a bunch of pre-made components that can be customized, and all are based on
Google's Material design framework. You can learn more at their [website](https://vuetifyjs.com/en/getting-started/why-vuetify)


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
  populated with your information! Make sure to not change the variable names or dictionary formats.

I'll go into more detail about which javascript files and variables correspond to what text on the portfolio site below.
# Sections of the Website
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

## Toolbar
<img width="1279" alt="Screen Shot 2019-06-16 at 4 16 53 PM" src="https://user-images.githubusercontent.com/9166875/59571064-99e43300-9055-11e9-9cbe-dc0cc0d50033.png">
This houses your name in the upper left corner, which is also a button that takes you back to the front page. It also
contains links to the About, Skills, Experience, and Publications sections.

### Customization Variables
| Name | What it is | Location
| --- | --- | ---
| `name` | portfolio name in upper left corner | `about.js`

## Landing Page
<img width="1000" alt="Screen Shot 2019-06-16 at 4 56 47 PM" src="https://user-images.githubusercontent.com/9166875/59571252-d022b200-9057-11e9-8e80-0253e418bebb.png">
The landing page has an avatar with your headshot, your name, and a short sentence saying what you do. It also has a
schnazzy background image.

### Customization Variables
| Name | What it is | Location
| --- | --- | ---
| `backgroundImage` | background image | `links.js`
| `headshot` | headshot | `links.js`
| `greetingText` | Hello I'm _____ | `about.js`
| `greetingSubtext` | brief sentence describing what you do | `about.js`

# Project setup
Don't get discouraged by all the steps to setup your portfolio, I'll walk you through all of them! These instructions
are for Mac in particular. If a step doesn't work for you on Linux/Windows, I'd google the specific command and the
internet should provide you with an alternative.

We're going to be doing most of our installation from the command line. On a mac this is the terminal app. Just do a
spotlight search for `terminal` and it should pop up. Code that I want you to paste into the command line will appear like this:
```
please run me in the command line
```

## 0. Github
You're going to need a Github account. You can sign up for one for free at [github.com](https://www.github.com). It will host your code and also
host the website through Github pages, which I'll help you setup later.

## 1. Homebrew
> Homebrew is a free and open-source software package management system that simplifies the installation of software on Apple's macOS operating system and Linux.

This is going to make installation a lot easier.

<img width="490" alt="Screen Shot 2019-06-16 at 5 09 05 PM" src="https://user-images.githubusercontent.com/9166875/59571470-f47f8e00-9059-11e9-9bcf-304536934bed.png">

### Installing homebrew
1. Paste this into your terminal and hit enter. Note that this may take a while.

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. You'll see some lines explaining where it's going to be installed. Hit enter to agree. Then enter your computer password
if prompted. This should have installed homebrew. To make sure it worked, type:
```
brew doctor
```

## 2. Git
> Git is a distributed version-control system for tracking changes in source code during software development.

Thinks of git as being able to track all the changes in your code every time you save. It also manages pushing your updated
code online to your github. Only continue if you already signed up for your Github account! You'll need your Github username
and email soon.

### Installing git
1. Still in your terminal type and press enter. Note that this may take a while.

```
brew install git
```

2. To check that it installed properly:

```
git --version
```

That should return the version of git you have installed. If it wasn't properly installed your computer will likely yell
at you.

3. Now we need to add your github username and email. (replace `GITHUB USERNAME` with your username but keep the quotes)

```
git config --global user.name "GITHUB USERNAME"
```

4. Now add your password. (replace `GITHUB EMAIL` with the email you used to sign up for Github.)

```
git config --global user.email "GITHUB EMAIL"
```

5. To double check that you installed this correctly, run:

```
git config --global --list
```

Make sure the username and email are correct!

## 3. Node
We need to install Node.js because npm, our package manager, is part of Node!

### Installing node
Type:

```
brew install node
```

To ensure it installed correctly run:

```
npm -v
```

It should spit out the version of npm installed.

## 4. SSH Keys
Before we copy over the code for the academic portfolio template, let's add SSH keys so that you're able to host that
code through Github pages, a free hosting platform! I'm not an expert on SSH keys, so if you want a description of what they're about besides helping you be more secure, I recommend Googling it.

### Creating an SSH key for Github
#### [Checking for SSH keys](https://help.github.com/en/enterprise/2.15/user/articles/checking-for-existing-ssh-keys)
First we need to check if you already have an SSH key created.

To list all your SSH keys type:
```
ls -al ~/.ssh
```

You already have a key if one of the following is listed:
- `id_dsa.pub`
- `id_ecdsa.pub`
- `id_ed25519.pub`
- `id_rsa.pub`

#### [Creating SSH key](https://help.github.com/en/enterprise/2.15/user/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
If you don't have a key, run the following, replacing `GITHUB EMAIL` with the email you used to sign up for Github:
```
ssh-keygen -t rsa -b 4096 -C "GITHUB EMAIL"
```

- When you're prompted to `Enter a file in which to save the key` just hit ENTER, which accepts the default file location.
- At the prompt `Enter passphrase` enter a password to make your SSH key more secure.

#### Adding SSH key to ssh-agent
1. Start the ssh-agent in the background:
```
eval "$(ssh-agent -s)"
```

2. If you are using macOS Sierra 10.12.2 or later, follow this step, otherwise skip to step 6. Now we need to modify our config file to automatically load keys into ssh-agent and store passphrases in your keychain.
I like to use the `vim` editor. For a list of vim key shortcuts go [here](https://coderwall.com/p/adv71w/basic-vim-commands-for-getting-started).
```
vim ~/.ssh/config
```

3. Press `i` to edit the file. Paste this into the bottom of the file:
```
Host *
 AddKeysToAgent yes
 UseKeychain yes
 IdentityFile ~/.ssh/id_rsa
```

4. To exit edit mode, hit the escape button.

5. To save and exit vim, type
```
:wq
```

6. Now we can add the ssh key!
```
ssh-add -K ~/.ssh/id_rsa
```

#### Adding SSH key to your Github Account
1. In your terminal type the following. This will copy your ssh key.
```
pbcopy < ~/.ssh/id_rsa.pub
```

2. Follow GitHub's article [here](https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account)
on where to enter your SSH key in your GitHub account. Start from step 2.

## 5. Forking and Cloning my Repo
Forking is copying a repo. This allows you to have your own copy that you can customize and make your own website! If you're reading this you're already in my repo. For reference the link is: https://github.com/akowtko/daniel-portfolio.

1. Fork the repo by clicking the fork button in the upper right hand corner.
<img width="1000" alt="ForkRepo" src="https://user-images.githubusercontent.com/9166875/59573320-3cf17880-9067-11e9-9f9a-bf4b097f615c.png">
This should have taken you to a new page with your forked repo.

2. Clone your forked branch by clicking the green `Clone or download` button.
<img width="1014" alt="Screen Shot 2019-06-16 at 6 50 14 PM" src="https://user-images.githubusercontent.com/9166875/59573401-abced180-9067-11e9-91e1-305a47bee6c6.png">
Make sure it says `Clone with SSH`.

3. Copy the text, which should start with `git@github.com`.

4. Go into terminal. I like to keep my code in a separate `personal-workspace` folder. You can organize your code however you want. Just navigate to the folder you want to store your cloned repo in using `cd PATHWAY`. If you need help navigating, you can learn more about terminal [here](https://www.git-tower.com/learn/git/ebook/en/command-line/appendix/command-line-101).

5. Clone your pathway. Replace `PATHWAY` with the path you just copied from GitHub.
```
git clone "PATHWAY"
```

6. This will have created a new folder. To see the folder's name, type `ls` in terminal; the name probably contains the word `portfolio`. You want to go into that folder
```
cd FOLDERNAME
```

7. Push your branch to GitHub, even though you haven't made any changes yet.
```
git push origin master
```

8. Install all the modules for the portfolio site using npm
```
npm i --save
```

9. Create a new branch called `gh-pages`. GitHub uses this branch to push your code to your GitHub pages site. Branching is part of version control. You can do stuff on your branch and not affect the main code.
```
git checkout -b gh-pages
```

10. Push the `gh-pages` branch to GitHub
```
git push -f origin master gh-pages
```


## 6. Deploying your Portfolio to GitHub Pages!
You're almost there. You can make changes to the code now if you'd like, customizing the javascript files to contain your information and experience. When you want to make your website live, follow these instructions.

Open up the deploy script, which handles most of the grunt work of getting your website live. Use whatever code editor you like. I use PyCharm, you can also use something free like TextWrangler or eMacs.
1. Open `deploy.sh`
2. Find the line `git push -f git@github.com-akowtko:akowtko/daniel-portfolio.git master:gh-pages`
3. Replace `git@github.com-akowtko:akowtko/daniel-portfolio.git` with the SSH path to your repo that you copied above. You can access it by clicking the `Clone or download` button the main page of your repo on GitHub.com.
<img width="389" alt="GitSSHPath" src="https://user-images.githubusercontent.com/9166875/59573899-efc2d600-9069-11e9-843b-b76f8284a15e.png">

3. Go into terminal and navigate to the folder your repo is stored in.
4. Make sure you are in the `gh-pages` branch. To navigate to it type:
```
git checkout gh-pages
```

5. Deploy your code!
```
./deploy.sh
```

The first time you run this it will say the authenticity of the host can't be established. Just hit enter to continue. 

6. Go to your website. You can find the link to your GitHub pages site by going to your GitHub repo and clicking the settings button:
<img width="1063" alt="Screen Shot 2019-06-17 at 9 24 46 AM" src="https://user-images.githubusercontent.com/9166875/59620492-d8273400-90e1-11e9-9049-50be91da78d3.png">
Scroll down until you see the GitHub pages section:
<img width="757" alt="Screen Shot 2019-06-17 at 9 25 59 AM" src="https://user-images.githubusercontent.com/9166875/59620543-f2f9a880-90e1-11e9-9159-9cfb89bd5480.png">
There you'll see the link to your website!

## 7. Getting Updates (optional)
I'll occasionally update my code, fixing bugs, responding to feedback or new features, etc.
If you want access to these updates, you'll want to add my branch to your upstream.
This basically means that we're letting your branch know that there is anothe branch out there, outside of this repo, that it can communicate with and get updates from.
This will require a little more code know-how, because when you pull in updates from my branch there may be merge conflicts.
Think of conflicts as two people trying to edit the same line on a google document at the same time.

I recommend doing all these steps in your `gh-pages` branch since that's what we use to push your code live anyways. You can put it in your `master` branch and then copy the changes over from `master` into `gh-pages`, but that's just an additional step.
1. Add my branch to your upstream
```
git remote add upstream https://github.com/akowtko/daniel-portfolio.git
```
2. Grabbing the updates from my branch:
```
git fetch upstream
```
3. Merging my updates into your branch:
```
git merge upstream/master master
```
4. Push your updates to GitHub
```
git push -f origin gh-pages
```

# Advanced npm Scripts
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
