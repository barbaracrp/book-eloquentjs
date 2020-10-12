let string = '';
let size = 8;

//faz uma linha com 8 caracteres
for(let x = 0; x < size; x++) {
  //faz uma coluna com 8 caracteres
  for(let y = 0; y < size; y++) {
    //coloca vazio no num par e # no mumero impar
    if((x + y) % 2 == 0) {
      string = string + " ";
    }else {
      string = string + "#";
    }
  }
  string = string + "\n";
}

console.log(string);
