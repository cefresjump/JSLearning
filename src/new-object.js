function myNew(func) {
    let obj = {};
    obj.prototype = func.prototype;
}