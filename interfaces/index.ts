/***
 * Interfaces en Typescript
 * Buena practica escribir I en mayuscula luego de la clase a implementar
 */

 interface IAnimal {
     name  :  string;
     color :  string;
 }

 const dog : IAnimal = { 
     name  : "Junior";
     color : "black";
 };

 interface OnInit {
     ngOnInit() : void;

 }

 class MyComponent implements OnInit {
     ngOnInit(): void {
         console.log();
     }
}