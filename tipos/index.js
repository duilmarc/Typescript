"use strict";
// Tipos
var framework = "Angular";
var isProduction = true;
var PORT = 3000;
var styles = ["./css/style.css"];
var sayHello = function (name) {
    if (name === void 0) { name = String; }
    return "Hello " + name;
};
var value = sayHello("Franco");
console.log(value);
