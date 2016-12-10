// var Vue = require('vue');

//const REQUEST_URL = 'http://163.29.157.32:8080/dataset/6a3e862a-e1cb-4e44-b989-d35609559463/resource/f4a75ba9-7721-4363-884d-c3820b0b917c/download/393625397fc043188a3f8237c1da1c6f.json';
let index = Math.floor(Math.random() * 784);
let data = '';

function disLikeBtnListener() {
  const dislikeBtn = document.querySelector('#dislike-btn');
  dislikeBtn.addEventListener('click', function() {
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
  const SPEAKER_URL = 'https://api.myjson.com/bins/2j1e3';
  // const REQUEST_URL = 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/400/1';
  fetch(SPEAKER_URL).then((response) => {
    return response.json();
  }).then(function(json) {
    console.log(json);
    data = json;
    showData();
    disLikeBtnListener();
  });
}

const showData = () => {
  let str = '';
  str += 
  `
      <a href="${data[index].url}" class="thumbnail show-img-area" id="show-img-area" target="_blank">
        <img src="${data[index].avatar}"> 
        <div class="caption">
          <p class="img-title">${data[index].name}</p>
        </div>
      </a>
  `;
  document.querySelector('#show-img-box').innerHTML = str; 
}


fetchDemo();
