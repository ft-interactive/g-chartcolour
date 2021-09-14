# ft-chartcolour
Work in progress.

A JS module (following [the D3 pattern](https://bost.ocks.org/mike/d3-plugin/)) for colours in FT charts.

<a href="https://ft-interactive.github.io/g-chartcolour/">The colours</a>

# using

Either `npm install g-chartcolour` or you can include it directly in your page via unpkg (or equiv)...

https://unpkg.com/g-chartcolour@0.5.0/build/g-chartcolour.min.js

# developing

Clone the repository locally

install dev dependencies `npm install`

build the module and the documentation page `npm run prepare`

To change an existing palette simply go into the `src` directory, open the file corresponding to the palette you want to change and edit the appropriate hex code.

To add a new palette create a sensibly named file in the `src` directory following the example of one of the existing palettes. Each palette exports either a single array eg <a href="https://github.com/ft-interactive/g-chartcolour/blob/main/src/sequential-multi.js">sequential-multi</a> or a single object eg <a href="https://github.com/ft-interactive/g-chartcolour/blob/main/src/categorical-uk-politics.js">categorical-uk-politics</a>). The palette should then be added to the <a href="https://github.com/ft-interactive/g-chartcolour/blob/main/index.js">index.js</a> file so it gets included in the build.

Update snapshot testing with `npm run update-snapshot`.

When you're happy with the palette create a pull request and that's it!

# Licence

This software is published by the Financial Times under the [MIT licence](https://opensource.org/licenses/MIT).

Please note the MIT licence only covers the software, and does not cover any FT content or branding incorporated into the software or made available using the software. FT content is copyright © The Financial Times Limited, and FT and 'Financial Times' are trademarks of The Financial Times Limited, all rights reserved. For more information about republishing FT content, please contact our [republishing department](https://ft.com/republishing).
