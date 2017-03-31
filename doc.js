var colours = require('./build/g-chartcolour.js');
var fs = require('fs');
var nunjucks = require('nunjucks');

console.log('building docs');

var normalisedPalettes = Object.keys(colours)
        .map(function(key){
            var col;
            if(Array.isArray(colours[key])){
                col = colours[key].map((d,i)=>({
                    name:i,
                    colour:d
                }));
            }else{
                col = Object.keys(colours[key]).map((d)=>({
                    name:d,
                    colour:colours[key][d]
                }));
            }
            return {
                name:key,
                colours:col,
            }
        });



context = {
    palettes: normalisedPalettes,
};

fs.writeFileSync('index.html',nunjucks.render('./templates/index.njk.html', context));
