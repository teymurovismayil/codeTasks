
function myFunc(x) {
    if (typeof x != "string") {
        console.log("string deykl");
        return;
    } else {
        console.log(x.trim().length);
    }
}
myFunc('fjddajs,etaw');
