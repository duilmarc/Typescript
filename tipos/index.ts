// Tipos
let framework : String = "Angular";
const isProduction : Boolean = true;
const PORT : Number = 3000;
const styles : Array<string> = ["./css/style.css" ];

const sayHello : Function  = (name = String) : string => `Hello ${name}`;

const value : String = sayHello("Franco");
console.log(value);