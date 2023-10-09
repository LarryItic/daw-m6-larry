function calculate_price() {
    const UNHANG_PRICE = 0.10;
    const MINUT_PRICE = 5;

    let hours = parseInt(prompt("Introduzca las horas de la llamada"));
    let minuts = parseInt(prompt("Introduzca los minutos de la llamada"));
    let seconds = parseInt(prompt("Introduzca los segundos de la llamada"));

    let total_minuts = 0;

    total_minuts = hours * 60;
    total_minuts += minuts;
    total_minuts += (seconds/60);

    console.log("Total price " + (((total_minuts * MINUT_PRICE) / 100) + UNHANG_PRICE));

}

function convert_to_hex() {
    let red = prompt("Introduzca el valor red");
    let green = prompt("Introduzca el valor green");
    let blue = prompt("Introduzca el valor blue");

    console.log("(r,g,b) = #"+ get_format_hex(red) + get_format_hex(green) + get_format_hex(blue));

}

function get_format_hex(base10_number){
    let number_hex_format = parseInt(base10_number).toString(16);
    if (number_hex_format.length == 1) {
        number_hex_format = 0 + number_hex_format;
    }
    return number_hex_format.toUpperCase();
}

function get_change() {
    const quantity_currency = [500, 200, 0.5, 0.01]
    let values = [0, 0, 0, 0];

    let price = prompt("Introduzca el precio");
    let pay = prompt("Introduzca el dinero entregado");

    let change = pay - price;

    for (let i = 0; i < quantity_currency.length; i++) {
        values[i] = Math.floor(change / quantity_currency[i]);
        change = change % quantity_currency[i];
    }

    console.log("preu = " + price + "  " + "calers = " + pay);
    for(let i = 0; i < quantity_currency.length; i++) {
        console.log(values[i] + " de " + quantity_currency[i]);
    }
    console.log("Total canvi: " + (pay - price));

}