'use strict';

function reverseString(cadea) {
    let lonxitude = cadea.length;
    let novaCadea = '';

    while (lonxitude >= 0) {
        let caracter = cadea.charAt(lonxitude);
        novaCadea = novaCadea + caracter;
        lonxitude--;
    }
    return novaCadea;
}

console.log(reverseString('I am a string')); // gnirts a ma I
