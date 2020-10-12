function countBs(string){
  var soma = 0
  for(var i = 0; i < string.length; i++){
    if(string[i] === "B"){
      soma++ ;
    }
  }
  return soma;
}

console.log(countBs("Barbara"));

function countChar(string, character){
  var soma = 0
  for(var i = 0; i < string.length; i++){
    if(string[i] === character){
      soma++ ;
    }
  }
  return soma;
}

countChar("Barbara", "B")


/*function findLongestWordLength(str) {
  var words = str.split(" ");
  var empty = " ";
  for(var i = 0; i < words.length; i++){
    if (words[i].length > empty){
        empty = words[i].length;
      }
  }
return empty;
}*/