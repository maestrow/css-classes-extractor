﻿# CSS Classes Extractor for NodeJs

## Why? 

Suppose you prototiping UI in html. Trying to be more productive you can use [emmet](https://emmet.io/) and make some abbreviation:

    .root>(.badges>.badges-group>span.badge)+(.cards>.card)

This abbreviation expandes to this structure:

    <div class="root">
        <div class="badges">
            <div class="badges-group">
                <span class="badge"></span>
            </div>
        </div>
        <div class="cards">
            <div class="card"></div>
        </div>
    </div>

Save it to `index.html` and run `node cli.js index.html`. You get css (or scss) boilerplate with all classnames, used in your html. 

    .root {}
    .badges {}
    .badges-group {}
    .badge {}
    .cards {}
    .card

Take it and start composing styles for your html-structure. Also I recommend use [Brackets](http://brackets.io/) with its live preview feature (or some dev server with live reloading feature [1](https://gist.github.com/maestrow/53d800deb1790ead4a76ec3c73ab7c7b) [2](https://github.com/maestrow/gulp-sass-pug-react-tpl) [3](https://github.com/maestrow/react-webpack3-tpl)). 


## Try

Run `node .\css.js index` to check it on `./samples/index.html`: 


## Use

`npm i -D https://github.com/maestrow/css-classes-extractor`


## A little explanations

`index.js` is a core module. `cli.js` is a CLI tool, that uses this module, it get names (file names in samples w/o extensions, you can ajust it for yourself) and prints css boilerplate. 

This library uses [cheerio](https://www.npmjs.com/package/cheerio) to extract class names.