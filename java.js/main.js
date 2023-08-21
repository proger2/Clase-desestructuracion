// Extraer el primer y tercer valor del array utilizando la desestructuración.
const numeros = [1, 2, 3, 4, 5];
const [primervalor,segundovalor,tercervalor] = numeros;
console.log(primervalor,tercervalor)


// Utilizar el operador de rest para extraer los dos últimos valores en una nueva variable.
const letras = ['a', 'b', 'c', 'd', 'e'];
const [primer,segundo,tercero, ...cuarto] = letras;
console.log(cuarto)

 // Extraer los nombres de los productos y las cantidades utilizando la desestructuración.
const pedidos = [
    [1,'Producto A',10],
    [2,'Producto B',15],
    [3, 'Producto C', 5]
    ];
const [[in1,nom1,cant1],[in2,nom2,cant2],[in3,nom3,cant3]] = pedidos;
console.log([nom1,cant1],[nom2,cant2],[nom3,cant3])


// Extraer nombres y edades de los estudiantes, asignando edades por defecto si no están disponibles
const estudiantes = [
    ['Juan', 25],
    ['María'],
    ['Pedro', 30]
    ];
const [[n1,ed1],[n2,p2=30],[n3,p3]] = estudiantes;
console.log(n1,ed1,n2,p2,n3,p3);




//1) Extraer el nombre y la ciudad utilizando la desestructuración
const persona = {
    nombre: 'Ana',
    edad: 28,
    ciudad: 'México'
    };
const {nombre,ciudad} = persona;
console.log(nombre,ciudad)


//2) Renombrar las propiedades utilizando la desestructuración
const producto = {
    nombreProducto: 'Camisa',
    precioProducto: 25,
    disponible: true
};

 const {nombreProducto:Remera, precioProducto=55, disponible=false} = producto;
 console.log(producto.nombreProducto)
 console.log(producto.precioProducto)


  // Extraer el nombre de la tienda, el nombre del primer producto y la ciudad utilizando la desestructuración
 const tienda = {
    nombre: 'Mi Tienda Online',
    direccion: {
    calle: 'Calle Principal',
    numero: 123,
    ciudad: 'Ciudad Ejemplo'
    },
    productos: [
    { nombre: 'Camisa', precio: 20 },
    { nombre: 'Pantalón', precio: 30 },
    { nombre: 'Zapatos', precio: 50 }
    ]
    };
   
const {nombre,direccion{calle,numero,ciudad},productos[nombre,precio]} = tienda;

   