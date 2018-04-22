const cheerio = require('cheerio')

const distinct = (value, index, self) => self.indexOf(value) === index

const getClasses = (html) => {
  var $ = cheerio.load(html)
  return $('[class]')
    .map((i, el) => 
      $(el).attr('class').split(' '))
    .toArray()
    .filter(distinct)
}

const getCss = (html) => getClasses (html)
  .map(i => `.${i} {\n\n}`)
  .join('\n\n')

module.exports = {
  getClasses,
  getCss
}