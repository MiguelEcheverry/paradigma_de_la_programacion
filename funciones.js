function suma(x){
    let Accion = (x+5);
    return Accion;
};
console.log(suma(7));

function dividir(x){
    let Operacion = (x/4);
    return Operacion;
};
console.log(dividir(2));
//contaminada 
let resultado = 0;
function sumaprecios(a, b){
    return resultado = resultado + (a * b);
    
}
console.log(sumaprecios(3, 4));
console.log(sumaprecios(4, 3));
console.log(sumaprecios(7, 5));

function Multiplicar(a){
    return a * a;  
};
function SumadelaMultiplicacion(num1, num2) { 
    return Multiplicar(num1) + Multiplicar(num2);
};
console.log(SumadelaMultiplicacion(3, 4));
