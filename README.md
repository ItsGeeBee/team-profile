# Team Profile Generator
10 Object-Oriented Programming

## User Story

* AS A manager
* I WANT to generate a webpage that displays my team's basic info
* SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Critera

* GIVEN a command-line application that accepts user input
* WHEN I am prompted for my team members and their information
* THEN an HTML file is generated that displays a nicely formatted team roster based on user input
* WHEN I click on an email address in the HTML
* THEN my default email program opens and populates the TO field of the email with the address
* WHEN I click on the GitHub username
* THEN that GitHub profile opens in a new tab
* WHEN I start the application
* THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
* WHEN I enter the team manager’s name, employee ID, email address, and office number
* THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
* WHEN I select the engineer option
* THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
* WHEN I select the intern option
* THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
* WHEN I decide to finish building my team
* THEN I exit the application, and the HTML is generated

## Overview

* Application can be triggered by entering 'node index.js' on terminal command line
* Prompts will appear asking which employee to enter, followed by employee detail prompts
* After final employee has been entered, HTML file will be generated with entered data

## Video Link & Example look
https://drive.google.com/file/d/11zKXBlLBlbc4x41i3Zh9Xif5joR17bMa/view?usp=sharing

<img src="dist/example.png">

