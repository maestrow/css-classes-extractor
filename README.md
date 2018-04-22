# CSS Classes Extractor for NodeJs

## Why? 

Suppose you prototiping UI in html. You can create some structure, i.e.: 

    <div class="root">
      <div class="badges">
        <div class="badges-group">AAA:
          <span class="badge">1</span>
          <span class="badge">2</span>
        </div>
      </div>
    </div>

then you can get css (or scss) boilerplate with all classnames, used in your html to start composing styles.

    .root {}
    .badges {}
    .badges-group {}
    .badge {}

## Try

Run `node .\css.js index` to check it on `./samples/index.html`: 

## A little explanations

`css-classes-extractor.js` is a core module. And `css.js` is just a CLI tool, that uses this module. CLI tool get names (file names in samples w/o extensions, you can fit it for yourself) and prints css boilerplate. 

This library uses [cheerio](https://www.npmjs.com/package/cheerio) to extract class names.