function polindrom(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}
 
let str1 = "racecar";
let str2 = "telet";
let str3 = "Ismayil";
 
console.log(polindrom(str1));
console.log(polindrom(str2));
console.log(polindrom(str3));