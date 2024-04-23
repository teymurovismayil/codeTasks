

function txt(str) {
    let txt_symbols = str.length;
    if (txt_symbols >=10 && txt_symbols<=20)   {
        return true
    } else {return false}
    
}

let str1 = "Akula Ismayil";
let str2 = "Akulaaa necesen";
let str3 = "Ismayil";
 
console.log(txt(str1));
console.log(txt(str2));
console.log(txt(str3));
