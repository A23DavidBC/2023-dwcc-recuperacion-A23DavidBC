'use strict';

var num1 = 14;
var num2 = 20;
var num3 = 33;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1);
    }
} else if (num2 > num3) {
    if (num2 > num1) {
        console.log(num2);
    }
} else if (num3 > num1) {
    if (num3 > num2) {
        console.log(num3);
    }
}
