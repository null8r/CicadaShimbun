var i = 0;
const categories = [
  [
    '',
    'categories/domestic',
    'categories/world',
    'categories/business',
    'categories/entertainment',
    'categories/sports',
    'categories/it',
    'categories/science',
    'categories/life',
    'categories/local'
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

//IEチェック
window.onload = function(){
  var ua = window.navigator.userAgent.toLowerCase();

  if(ua.indexOf('msie') != -1 || ua.indexOf('trident') != -1){
    let target = document.querySelector('main');
    target.remove();

    document.querySelector('body').innerHTML = '<h1>IEには非対応です</h1>';
  }
  else{
    main();
  }
}

function main(){
  addCheckbox();
}

//チェックボックスの表示
function addCheckbox(){
  let result = '';

  for(i=0; i<categories[0].length; i++){
    result += '<label><input type="checkbox" name="categories" value="' + categories[0][i] + '" class="checkbox" checked>' + categories[1][i] + '</label>\n';
  }

  document.getElementById('list').innerHTML = result;
}

//チェックボックスクリック時
const checkbox = document.querySelector('#selectCategories');
checkbox.addEventListener('change', function(){
  readCheckbox();
});

//チェックボックスの状態取得
var list;
var flagList = [];
function readCheckbox(){
  list = document.list.categories;
  
  for(i=0; i<list.length; i++){
    flagList[i] = list[i].checked;
  }
}

//全選択
function selectAll(){
  const checkbox = document.list.categories;

  for(i=0; i<checkbox.length; i++){
    checkbox[i].checked = true;
  }

  readCheckbox();
}

//選択解除
function selectClear(){
  const checkbox = document.list.categories;

  for(i=0; i<checkbox.length; i++){
    checkbox[i].checked = false;
  }

  readCheckbox();
}
