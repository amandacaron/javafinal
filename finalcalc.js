var word1;
var word2;
var result;

function clearpage() {
    //alert("clear");
    document.getElementById('txtWord1').value = ""
    document.getElementById('txtWord2').value = "";
    document.getElementById('result').innerHTML = "";
}

function addNumbers(){
    word1 = document.getElementById('txtWord1').value;
    //alert(word1);
    word2 = document.getElementById('txtWord2').value;
    word1 = getValue(word1);
    word2 = getValue(word2);
    result = word1 + word2;
    document.getElementById('result').innerHTML = result;
}

function subtractNumbers() {
    word1 = document.getElementById('txtWord1').value;
    word2 = document.getElementById('txtWord2').value;
    word1 = getValue(word1);
    word2 = getValue(word2);
    result = word1 - word2;
    document.getElementById('result').innerHTML = result;
}

function multiplyNumbers(){
    word1 = document.getElementById('txtWord1').value;
    word2 = document.getElementById('txtWord2').value;
    word1 = getValue(word1);
    word2 = getValue(word2);
    result = word1 * word2;
    document.getElementById('result').innerHTML = result;
}

function divideNumbers(){
    word1 = document.getElementById('txtWord1').value;
    word2 = document.getElementById('txtWord2').value;
    word1 = getValue(word1);
    word2 = getValue(word2);
    result = word1 / word2;
    document.getElementById('result').innerHTML = result;
}

function getValue(resolve){
  if(resolve=="one"){ return 1;}
  if(resolve=="two"){ return 2;}
  if(resolve=="three"){ return 3;}
  if(resolve=="four"){ return 4;}
  if(resolve=="five"){ return 5;}
}
