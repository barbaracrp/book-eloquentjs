//write a loop that makes seven calls to console.log to output the following triangle:
/*
#
##
###
####
#####
######
#######
*/

string = '';
for(let call = 1; call <= 7; call+=1) {
  string = string + '#'
  console.log(string);
}

