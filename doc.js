const colours = require('./build/g-chartcolour.js');
const fs = require('fs');
const nunjucks = require('nunjucks');

console.log(Object.keys(colours));

context = {};

const html = nunjucks.render('./templates/index.njk.html', context);

console.log(html);