const colours = require('./build/g-chartcolour.js');
const fs = require('fs');
const nunjucks = require('nunjucks');

const normalisedPalettes = Object.keys(colours)
        .map(function(key){
            let col;
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

const html = nunjucks.render('./templates/index.njk.html', context);

fs.writeFileSync('index.html',html);