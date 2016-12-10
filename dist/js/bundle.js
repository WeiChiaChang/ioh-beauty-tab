(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// var Vue = require('vue');

//const REQUEST_URL = 'http://163.29.157.32:8080/dataset/6a3e862a-e1cb-4e44-b989-d35609559463/resource/f4a75ba9-7721-4363-884d-c3820b0b917c/download/393625397fc043188a3f8237c1da1c6f.json';
var index = Math.floor(Math.random() * 784);
var data = '';

function disLikeBtnListener() {
  var dislikeBtn = document.querySelector('#dislike-btn');
  dislikeBtn.addEventListener('click', function () {
    index = Math.floor(Math.random() * 784);
    showData();
  });
}

// var vm = new Vue({
//   el: "#app",
//   data: {
//     iohData: "https://api.myjson.com/bins/2j1e3",
//     iohTalks: []
//   },
//   ready: function(){
//     $.ajax({
//       url: this.iohData,
//       success: function(response){
//         vm.iohTalks = res
//         showData();
//         disLikeBtnListener();
//       }
//     });
//   }
// });

function fetchDemo() {
  var SPEAKER_URL = 'https://api.myjson.com/bins/2j1e3';
  // const REQUEST_URL = 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/400/1';
  fetch(SPEAKER_URL).then(function (response) {
    return response.json();
  }).then(function (json) {
    console.log(json);
    data = json;
    showData();
    disLikeBtnListener();
  });
}

var showData = function showData() {
  var str = '';
  str += '\n      <a href="' + data[index].url + '" class="thumbnail show-img-area" id="show-img-area" target="_blank">\n        <img src="' + data[index].avatar + '"> \n        <div class="caption">\n          <p class="img-title">' + data[index].name + '</p>\n        </div>\n      </a>\n  ';
  document.querySelector('#show-img-box').innerHTML = str;
};

fetchDemo();

},{}]},{},[1]);
