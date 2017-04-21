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

	var categorical_line = [
	'#0F5499','#D9417B','#4497C2','#9DBF57','#8DCDD9','#80001E','#C2B7AF'
	];

	var categorical_bar = [
		'#0f5499',
		'#4798c2',
		'#a8d8e0',
		'#a0c462',
		'#d9648b',
		'#7f193d',
		'#d9cdc3'
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
		conservative:'#6da8e1',
		labour:'#e25050',
		'liberal democrats':'#f0a330',
		ukip:'#ca6dbf',
		green:'#65a68c',
	  snp:'#f2d92d',
	  dup:'#827996',
	  sf:'#99bf70',
	  pc:'#99d2d0',
	  alliance:'#ffc660',
		independent:'#CEC6B9',
		other:'#CEC6B9',
	  sdlp:'#bed676',
	  uup:'#6da8e1',
	};

	var categoricalUkPoliticsText = {
		conservative:'#1369bf',
		labour:'#bf1f1f',
		'liberal democrats':'#c68024',
		ukip:'#b3009d',
		green:'#008066',
	  snp:'#99891b',
	  dup:'#443e71',
	  sf:'#6a8d32',
	  pc:'#54a19c',
	  alliance:'#dba436',
		independent:'#a7a59b',
		other:'#a7a59b',
	  sdlp:'#9cb157',
	  uup:'#1369bf',
	};

	var categoricalUkPoliticsPrint = {
		conservative:'#6D98D3',
		labour:'#E35453',
		'liberal democrats':'#EC812A',
		ukip:'#7265AE',
		green:'#447A69',
	  snp:'#FCCE26',
	  dup:'#ABA0D0',
	  sf:'#71A04A',
	  pc:'#6ABDB6',
	  alliance:'#ffc660',
		independent:'#D1D0D0',
		other:'#CEC6B9',
	  sdlp:'#B2CD47',
	  uup:'#80A9AC',
	};

	exports.background = backgrounds;
	exports.basicLineWeb = basicLineWeb;
	exports.basicLinePrint = basicLinePrint;
	exports.basicLineSocial = basicLineSocial;
	exports.categorical_line = categorical_line;
	exports.categorical_bar = categorical_bar;
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
	exports.ukPoliticalPartiesText = categoricalUkPoliticsText;
	exports.ukPoliticalPartiesPrint = categoricalUkPoliticsPrint;

	Object.defineProperty(exports, '__esModule', { value: true });

}));