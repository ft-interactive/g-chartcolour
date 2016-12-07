(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.ftgraphics = global.ftgraphics || {})));
}(this, function (exports) { 'use strict';

  var basic = ['#000','#FFF'];

  var sequentialMulti = [
    	'#F78874',
    	'#D87584',
    	'#AB6B8C',
    	'#776486',
    	'#465A72',
    	'#1F4C56'
  ];

  var sequentialSingle = [
  	'#5A0105',
  	'#851F1A',
  	'#AB4333',
  	'#C96A54',
  	'#DC977C',
  	'#E0C7AC'
  ];

  var categorical = [
  	'#FFF',
  	'#000',
  	'#F00'
  ];

  var diverging = [
  	'#5F3C41',
  	'#805F70',
  	'#9389A2',
  	'#9AB8CE',
  	'#9EEAEC',
  	'#63412D',
  	'#7A6A3A',
  	'#81975E',
  	'#80C49E',
  	'#9EEAEC'
  ];

  exports.basic = basic;
  exports.sequentialMulti = sequentialMulti;
  exports.sequentialSingle = sequentialSingle;
  exports.categorical = categorical;
  exports.diverging = diverging;

  Object.defineProperty(exports, '__esModule', { value: true });

}));