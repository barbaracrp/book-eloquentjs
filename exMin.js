const assert = require('assert');

function min(n1, n2) {
  if (n1 > n2) {
    return n2;
  } else  {
    return n1;
  }
}

assert(min(2, 4) === 2, 'min(2, 4) === 0');
assert(min(0, 2) === 0, 'min(2, 2) === 0');
