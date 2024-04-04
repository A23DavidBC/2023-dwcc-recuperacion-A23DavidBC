'use strict';

var num = 4;

var i = num - 1;

var res = num;

while (i > 0) {
    res = res * i;
    i--;
}

console.log('Factorial de ' + num + ' = ' + res);
