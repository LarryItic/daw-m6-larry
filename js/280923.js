function compare_time() {
    let first_num = prompt("Introduzca el primer valor");
    let second_num = prompt("Introduzca el segundo valor");

    
    console.log("calculado potencia con bucle")
    console.time("iter");
    let result_iter = 1;
    for (let i = 0; i < second_num; i++) {
        result_iter *= first_num;
        
    }
    console.timeEnd("iter");

    console.log("Result iter: " + result_iter)
    // console.timeLog(); // not works

    console.log("calculado potencia con libreria")
    
    console.time("library");
    let result_library = Math.pow(first_num, second_num)
    console.timeEnd("library");

    console.log("Result library: " + result_library);
}

function array_play() {
    let first_num = parseInt(prompt("Introduzca el primer valor"));
    let second_num = parseInt(prompt("Introduzca el segundo valor"));
    let third_num = parseInt(prompt("Introduzca el tercer valor"));

    let datos = [first_num, second_num, third_num];

    datos.sort();

    console.log("valor menor " + datos[0]);
    console.log("valor medio: " + datos[1]);
    console.log("valor mayor: " + datos[2]);

    let media = 0;

    for (let i = 0; i < datos.length; i++) {
        media += datos[i];
    }

    media /= datos.length;
    
    console.log("La media es: " + media);
}