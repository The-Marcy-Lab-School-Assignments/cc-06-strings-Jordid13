//write your code here

//1
const reverseString = (str) => {
    let i = str.length - 1;
    let reversedString = ''
    while (i >= 0) {
        reversedString += str[i];
        i--
    };
    return reversedString;
};

//2
const reverseZigZagString = (str) => {
    let i = str.length - 1;
    let isLower = true; // <-- This is a switch that gets turned on and off
    let reversedString = ''
    while (i >= 0) {
       // If it detects a space it adds the space and stops the rest of the function from running
        if (str[i] == ' ') {
            reversedString += str[i];
            i--;
            continue;    
        }
        if (isLower) {
            reversedString += str[i].toLowerCase(); // <- This forces the first one to be lowercase
            isLower = false;
        } else {
            reversedString += str[i].toUpperCase();
            isLower = true;
        }
        i--;
    };
    return reversedString
   
};
