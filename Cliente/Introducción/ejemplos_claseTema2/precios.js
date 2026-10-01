const precios = [12.5, 30, 8, 45.9, 19.99];

const preciosSubidos = precios.map((precio) => precio * 1.21)
.filter((precio) => precio > 20);

const preciosAcotados = preciosSubidos.map((precio) => precio.toFixed(2));

console.log(preciosAcotados.join(" | "));