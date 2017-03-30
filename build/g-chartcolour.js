(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.gChartcolour = global.gChartcolour || {})));
}(this, function (exports) { 'use strict';

	var backgrounds = {
		web:'#FFF1e5',
		social:'#333',
		video:'#335',
		print:'#FEE',
		clean:'#FFF',
	};

	var basicLineWeb = ['#CEC6B9','#AF516C']; //the first colour is neutral / background, the second colour primary/ highlight
	//export default ['#d5ccbf','#ed588d']; //new web colours uncomment when they are approved the first colour is neutral / background, the second colour primary/ highlight

	var basicLinePrint = ['#c6d6cc','#006a93']; //the first colour is neutral / background, the second colour primary/ highlight

	var basicLineSocial = ['#81838F','#EB3F50'];

	var categorical = [
	'#f3dec8','#91c492','#529ba2','#287099','#0c467f'
	];

	var categorical_2 = [
		'#0F5499',
		'#6DD9D9',
		'#9BC44E',
		'#009DB3',
		'#701329',
		'#C2B7AF',
		'#D94174'
	];

    var categorical_bar = [
    '#0F5499',
    '#6DD9D9',
    '#9BC44E',
    '#009DB3',
    '#701329',
    '#C2B7AF',
    '#D94174'
  ];

	var diverging = [
	'#b31147',
	'#d44d41',
	'#e67f64',
	'#f1ae92',
	'#f3dec8',
	'#95c8d4',
	'#5aa8cf',
	'#2f85c3',
	'#1162b3'
	];

	var diverging7 = [
		'#b31147','#da5f4d','#f59d71','#f3dec8','#7fbed3','#3c91c7','#1162b3'
	];

	var extendedLine = ['#d5ccbf','#ed588d','#FF0000','#00FF00']; //

	var linePrint = ['#006a93','#ddb831','#c6d6cc','#ad1c21','#55a2c7','#0083b3'];

	var lineSocial = ['#eb3f50','#00d9ca','#bf9413','#1f5e99','#a7ff59','#ff9b96','#81838f'];

	var lineWeb = ['#af516c','#efb1af','#d7706c','#76acb8','#81d0e6','#4e86b6','#b8b1a9'];

	var sequentialMulti = [
	'#f2dfce',
	'#9ac9d0',
	'#63aac2',
	'#3b88ae',
	'#1f6697',
	'#0c467f'
	];

	var sequentialMulti_2 = [
	'#f3dec8',
	'#febb93',
	'#ff9672',
	'#f9725f',
	'#eb4b58',
	'#d42752',
	'#b31147'
	];

	var sequentialMulti_3 = [
	'#f3dec8',
	'#8ac090',
	'#4c9298',
	'#236386',
	'#0a3866'
	];

	var sequentialSingle = [
		'#d6d3ea',
		'#adb8e6',
		'#849cdb',
		'#5e82c8',
		'#3968ad',
		'#1b4f8d',
		'#0a3866'
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
	exports.basicLineWeb = basicLineWeb;
	exports.basicLinePrint = basicLinePrint;
	exports.basicLineSocial = basicLineSocial;
	exports.categorical = categorical;
	exports.categorical_2 = categorical_2;
	exports.diverging = diverging;
	exports.diverging_7 = diverging7;
	exports.extendedLine = extendedLine;
	exports.linePrint = linePrint;
	exports.lineSocial = lineSocial;
	exports.lineWeb = lineWeb;
	exports.sequentialMulti = sequentialMulti;
	exports.sequentialMulti_2 = sequentialMulti_2;
	exports.sequentialMulti_3 = sequentialMulti_3;
	exports.sequentialSingle = sequentialSingle;
	exports.sequentialSingle_teal = sequentialSingle__teal;
	exports.ukPoliticalParties = categoricalUkPolitics;

	Object.defineProperty(exports, '__esModule', { value: true });

}));