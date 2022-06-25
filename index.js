/*
let x,y;
x=2;
y=4;

let z=x**y;

 console.log(z);
*/

//odre de priorite des operations
// kebab case nomenclature variable  (my-identifier)
// Snake case nomenclature variable (my_identifier)
// flat case nomenclature variable (myidentifier)
// Capital case  nomenclature variable(MyIdentifier)
// Upper case nomenclature variable (MY-Identifier)

// console.log(delta);
// console.log(x2);

var a = prompt("entrer un nombre");
var b = prompt("entrer un deuxieme nombre");
var c = prompt("Entrer le troisieme nombre");

var delta = b ** -4 * a * c;
x1 = -b + Math.sqrt(delta) / (2 * a);
;
x2 = -b - Math.sqrt(delta) / (2 * a);


alert("le resultat de x1 est" + " " + parseInt(x1));
alert("le resultat de x2 est" + " " + parseInt(x2));

