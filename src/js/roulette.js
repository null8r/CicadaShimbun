var i;
var j;
var trueList = [];

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

function start(){
  trueCat();

  if(roulette == false){
    roulette = true;

    interval = setInterval(function(){
      cat = Math.floor(Math.random() * trueList.length);
      document.getElementById('result').innerHTML = trueList[cat];
    }, 100);
  }
}

function stop(){
  clearInterval(interval);
  roulette = false;
}