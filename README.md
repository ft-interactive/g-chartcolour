# ft-chartcolour
Work in progress.

A JS module (following [the D3 pattern](https://bost.ocks.org/mike/d3-plugin/)) for colours in FT charts.

<a href="https://ft-interactive.github.io/g-chartcolour/">The colours</a>

# developing

Clone the repository locally

install dev depenedencies `npm install`

build the module and the documentation page `npm run prepublish`

To change an existing palette simply go into the `src` directory, open the file corresponding to the palette you want to change and edit the appropriate hex code.

To add a new palette create a sensibly named file in the `src` directory following the example of one of the existing palettes. Each palette exports either a single array eg <a href="https://github.com/ft-interactive/g-chartcolour/blob/master/src/sequential-multi.js">sequential-multi</a> or a single object eg <a href="https://github.com/ft-interactive/g-chartcolour/blob/master/src/categorical-uk-politics.js">categorical-uk-politics</a>). The palette should then be added to the <a href="https://github.com/ft-interactive/g-chartcolour/blob/master/index.js">index.js</a> file so it gets included in the build. 

When you're happy with the palette create a pull request and that's it!
