(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.gChartcolour = global.gChartcolour || {})));
}(this, function (exports) { 'use strict';

    var backgrounds = {
    	web:'#FFF1e0',
    	social:'#333',
    	video:'#335',
    	print:'#FEE',
    	clean:'#FFF',
    };

    var basicLine = ['#d5ccbf','#ed588d']; //the first colour is neutral / background, the second colour primary/ highlight

    var basicLineSocial = ['#81838F','#EB3F50'];

    var categorical = [
    	'#045787',
    	'#00a9b8',
    	'#0090ff',
    	'#ed588d',
    	'#94ddff',
    	'#fab316',
    	'#d5ccbf'
    ];

    var diverging = [
    	'#a51043',
    	'#d7596a',
    	'#f0a19e',
    	'#f3dec8',
    	'#8fbcc4',
    	'#4688b0',
    	'#12509b'
    ];

    var diverging2 = [
    	'#d34f2d',
        '#e68467',
        '#f4b69f',
        '#f3dec8',
        '#9ecbc6',
        '#4ca8ad',
        '#00828e'
    ];

    var diverging3 = [
    	'#a65708',
    	'#c7823b',
    	'#e2af78',
    	'#f3dec8',
    	'#83b7b2',
    	'#33878b',
    	'#00575e'

    ];

    var sequentialMulti = [
      	'#00828e',
      	'#21949d',
      	'#44a6ab',
      	'#66b6b8',
      	'#b0d5ce',
      	'#d6e3d7'
    ];

    var sequentialSingle = [
    	'#045787',
    	'#166eb2',
    	'#3488d4',
    	'#55a2ec',
    	'#75befb',
    	'#94ddff'
    ];

    var sequentialSingle__teal = [
    	'#B1F2F2',
    	'#91D5D7',
    	'#73B8BC',
    	'#589BA1',
    	'#3F7F86',
    	'#29646B',
    	'#164A50'
    ];

    var categoricalUkPolitics = {
    	conservative:'#6fa7da',
    	labour:'#e45151',
    	'liberal democrats':'#f2a432',
    	ukip:'#c16fad',
    	green:'#65a68c',
    	independent:'#cdc6b9',
    	other:'#aea9a2',
    };

    exports.background = backgrounds;
    exports.basicLine = basicLine;
    exports.basicLineSocial = basicLineSocial;
    exports.categorical = categorical;
    exports.diverging = diverging;
    exports.diverging_2 = diverging2;
    exports.diverging_3 = diverging3;
    exports.sequentialMulti = sequentialMulti;
    exports.sequentialSingle = sequentialSingle;
    exports.sequentialSingle_teal = sequentialSingle__teal;
    exports.ukPoliticalParties = categoricalUkPolitics;

    Object.defineProperty(exports, '__esModule', { value: true });

}));