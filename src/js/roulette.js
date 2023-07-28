var i;
var j;
var trueList;

function trueCat(){
  readCheckbox();

  j = 0;
  trueList = [];

  for(i=0; i<flagList.length; i++){
    if(flagList[i] == true){
      trueList[j] = categories[1][i];
      j++;
    }
  }

  if(j == 0){
    trueList[j] = '選択しなさい！！！';
  }
}

var interval;
var roulette = false;
var cat;

function stop(){
  clearInterval(interval);
  roulette = false;
}

function start(){
  trueCat();

  if(j == 0){
    document.getElementById('result').innerHTML = trueList[j];
    stop();
  }
  else if(roulette == false){
    roulette = true;

    interval = setInterval(function(){
      cat = Math.floor(Math.random() * trueList.length);
      document.getElementById('result').innerHTML = '<a href="https://news.yahoo.co.jp/' + categories[0][cat] + '" title="Yahoo!Japanニュースの' + categories[1][cat] + 'カテゴリーに移動します。" target="_blank" rel="noopener noreferrer">' + categories[1][cat] + '</a>\n';
    }, 100);
  }
  else{
    stop();
  }
}