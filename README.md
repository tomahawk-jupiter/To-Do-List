# To-Do-List

A To-do list using Vanilla JavaScript and bundled with Webpack. For practicing seperating code into modules.

[Live Demo](https://tomahawk-jupiter.github.io/To-Do-List/)

## Contents

- [Dependency Documentaion Links](#dependency-documentaion-links)
- [Icon in Browser Tab](#add-icon-to-browser-tab)
- [Useful CSS](#useful-css)
- [Dealing with JavaScript Dates](#dealing-with-javascript-dates)
- [Focus HTML Element](#focus-element)
- [Push Files to Github pages branch](#push-dist-files-to-github-pages)

## Dependency Documentaion Links

Webpack [Asset Management](https://webpack.js.org/guides/asset-management/) tutorial.

[date-fns docs](https://date-fns.org/docs/Getting-Started) for manipulating dates in the browser and node.js. [date-fns gitHub](https://github.com/date-fns/date-fns).

## Add icon to browser tab:

Put in head tags.

    <link rel="icon" href="./your-icon-location">

## Useful CSS

### Preserve line breaks

Preserve line breaks from user input. Put the CSS on the element receiving the text:

    white-space: pre-wrap;
    white-space: pre-line;
    white-space: pre;

### Wrap text

If word too long to fit within the element use this CSS:

    overflow-wrap: break-word;

## Dealing with JavaScript Dates

### new Date();

    new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

### Get todays date

    const today = new Date();

### Get date one week from now

    const oneWeekFromNow = new Date(today.setDate(today.getDate() + 7));

### Get the date, month and year eg. 01 01 2000 for that date

    const dateInOneWeek = oneWeekFromNow.getDate();
    const monthInOneWeek = oneWeekFromNow.getMonth() + 1;
    const yearInOneWeek = oneWeekFromNow.getFullYear();

### Set the placeholder in inputs

    day.setAttribute("placeholder", dateInOneWeek);
    month.setAttribute("placeholder", monthInOneWeek);
    year.setAttribute("placeholder", yearInOneWeek);

## Focus Element

    HTMLElement.focus()

## Push Dist Files to Github pages

Use this to create a branch with just the build files for github page hosting.

    $ git subtree push --prefix dist origin gh-pages
