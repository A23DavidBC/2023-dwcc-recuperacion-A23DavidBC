// Function to reverse string
function reverseString(str) {
    const strRev = [...str].reverse().join('');
    console.log(strRev);
}

// Function call
reverseString('GeeksforGeeks');
reverseString('JavaScript');
reverseString('TypeScript');
