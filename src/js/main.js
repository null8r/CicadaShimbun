var i = 0;
const categories = [
  [
    'main',
    'domestic',
    'world',
    'business',
    'entertainment',
    'sports',
    'it',
    'science',
    'life',
    'local'
  ],
  [
    '主要',
    '国内',
    '国際',
    '経済',
    'エンタメ',
    'スポーツ',
    'IT',
    '科学',
    'ライフ',
    '地域'
  ]
];

window.onload = function(){
  var ua = window.navigator.userAgent.toLowerCase();

  if(ua.indexOf('msie') != -1 || ua.indexOf('trident') != -1){
    let target = document.querySelector('main');
    target.style.display = 'none';

    document.querySelector('body').innerHTML = '<h1>IEには非対応です</h1>';
  }
  else{
    main();
  }
}

function main(){
  for(i=0; i<categories[0].length; i++){
    document.getElementById('selectCategories').innerHTML += '<label onclick="select()"><input type="checkbox" name="categories" value="' + categories[0][i] + '" class="checkbox" checked>' + categories[1][i] + '</label>\n';
  }
}

function select(){
  var categories = document.getElementsByClassName('checkbox');
}