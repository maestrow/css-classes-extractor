const path = require ('path')
const fs = require ('fs')
const cssExtractor = require('./css-classes-extractor')

const resolve = (p) => path.resolve(__dirname, p)

const args = process.argv.slice(2)

const processFile = (name) => {
  var html = fs.readFileSync(resolve(`./samples/${name}.html`), 'utf8')
  var css = cssExtractor.getCss(html)
  console.log(`/* === ${name} === */\n${css}\n`)
}

args.forEach(processFile)
