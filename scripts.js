// Defino mi clase de productos
class Producto{
    constructor (id, nombreProducto, precio) {
        this.id = id,
        this.nombreProducto = nombreProducto,
        this.precio = precio
    }
}

// Instancio los primeros objetos de Producto
const karategi = new Producto(1, "Karategi", 8400)
const guantines = new Producto(2, "Guantines", 3400)
const empeinera = new Producto(3, "Empeinera", 4400)
const tobillera = new Producto(4, "Tobillera", 6400)


// Creo el array de Productos y pusheo los objetos ya existentes
const listaProductos = []
listaProductos.push(karategi, guantines, empeinera, tobillera)


// Creo mi función para ver el catálogo
function verCatalogo(array) {
    console.log(`Nuestro catálogo está compuesto de los siguientes productos:`)
    array.forEach (
        (prod) => {console.log(`${prod.id} - ${prod.nombreProducto}, cuyo precio es $ ${prod.precio}`)
        }
    )
}    

// Creo una función para agregar nuevos productos

function agregarProducto(array){
    let nombreProducto = prompt(`Ingrese el nombre del nuevo producto`)
    let precioProducto = prompt(`Ingrese el precio del nuevo producto`)
    // Valido que el precio ingresado sea un número
    while(isNaN(precioProducto)){
        precioProducto = prompt(`El valor ingresado no es un número válido. Ingrese un precio en números`)
    }
    // Construyo el nuevo producto en base a los parámetros ingresados por el usuario
    const nuevoProducto = new Producto (array.length+1, nombreProducto, precioProducto)
    // Agrego el nuevo producto al array de productos
    array.push(nuevoProducto)
    // Doy opción de consultar el catálogo. En caso de no elegir que se muestre, 
    // al menos informo que el producto se agregó correctamente.
    let opcionCatalogo = prompt(`¿Desea consultar el catálogo actualizado?
    1 - Sí
    2 - No`)
    switch(opcionCatalogo){
        case "1":
        verCatalogo(listaProductos)
        break
        case "2":
        alert(`El producto ${nuevoProducto.nombreProducto} fue agregado al catálogo exitosamente`)
        break
        default:
        alert(`El producto ${nuevoProducto.nombreProducto} fue agregado al catálogo exitosamente`)            
        break
    }
}

// Creo funciones para ordenar el array de productos
// Por precio de menor a mayor
function precioMenorMayor(array){
    // Hago una copia del array
    let menorMayor = [].concat(array)
    //Ordeno con método Sort
    menorMayor.sort((a, b) => a.precio - b.precio)
    verCatalogo(menorMayor)
}

// Por precio de mayor a menor
function precioMayorMenor(array){
    // Hago una copia del array
    let mayorMenor = [].concat(array)
    //Ordeno con método Sort
    mayorMenor.sort((a, b) => b.precio - a.precio)
    verCatalogo(mayorMenor)
}

// Alfabéticamente
function ordenAlfa(array){
    // Hago una copia del array
    let alfabetico = [].concat(array)
    //Ordeno con método Sort
    alfabetico.sort((a, b) => {
        if (a.nombreProducto > b.nombreProducto) {
        return 1
        }
        if (a.nombreProducto < b.nombreProducto) {
        return -1
        }
        // a es igual b
        return 0
    })
    console.log(verCatalogo(alfabetico))
}

// Creo una función para preguntar al usuario qué método desea utilizar
// para ordenar el array de productos

function ordenarProductos(array){
    let productosOrdenados = prompt(`Indique cómo desea ordenar los productos
    1 - Por precio de menor a mayor
    2 - Por precio de mayor a menor
    3 - Por orden alfabético`)

    switch(productosOrdenados){
        case "1":
        precioMenorMayor(array)
        break
        case "2":
        precioMayorMenor(array)
        break
        case "3":
        ordenAlfa(array)
        break
        default:
        alert(`Opción inválida. Vuelva a intentarlo`)
        break
    }
}

// Creo una función para eliminar productos del array
function delProducto(array){
    // Muestro el catálogo
    verCatalogo(array)
    // Guardo la opción seleccionada por el usuario en una variable
    let idEliminar = parseInt(prompt(`Seleccione el producto a eliminar`))
    // Valido que la opción ingresada sea un número
    while(isNaN(idEliminar)){
        idEliminar = prompt(`La opción ingresada es incorrecta. Ingrese un número del listado.`)
    }
    // Valido que el producto a eliminar exista
    while(idEliminar > array.length){
        idEliminar = prompt(`Producto inexistente. Ingrese un producto del catálogo`)
    }
    // Mapeo el array para obtener solo ids
    let arrayId = array.map(a => a.id)
    // Creo una variable que registre el index del id elegido
    let indice = arrayId.indexOf(idEliminar)
    // Aplico el splice 
    array.splice(indice, 1)
    // muestro el catálogo modificado
    alert(`El producto ${idEliminar} fue eliminado exitosamente.`)
    verCatalogo(array)
}

// Creo una función para agregar el IVA a los productos

function conIva(array){
    let iva = [].concat(array)
    
}



// Creo mi función de menú para realizar tareas interactivas con el usuario
function menu(){
let salirMenu = true
do {
    let elegirUsuario = prompt(`Bienvenido a Budo Shop. Por favor, indique si es Vendedor o Comprador:
    1 - Vendedor
    2 - Comprador
    3 - Salir del menú`)

    switch(elegirUsuario){
        case "1": 
            let menuVendedor = prompt(`Usted ingresó como vendedor. Seleccione la operación que desea realizar:
            1 - Consultar catálogo.
            2 - Agregar un nuevo producto.
            3 - Ordenar productos.
            4 - Eliminar un producto`)

            switch(menuVendedor){
                case "1": 
                verCatalogo(listaProductos)
                break

                case "2": 
                agregarProducto(listaProductos)
                break

                case "3": 
                ordenarProductos(listaProductos)
                break

                case "4": 
                delProducto(listaProductos)
                break

                default:
                alert(`La opción ingresada no es válida. Vuelva a intentarlo desde el comienzo`)
                break
            }
        break

        case "2": 
            let menuComprador = prompt(`Usted ingresó como comprador. Elija qué operación desea realizar:
            1 - Ver catálogo
            2 - Sumar IVA a los productos
            3 - Agregar productos al carrito
            4 - Finalizar compra`)

            switch (menuComprador){

                case "1":
                verCatalogo(listaProductos)
                break

                case "2":
                break

                case "3":
                break
                
                case "4":
                alert(`Sitio en construcción. Vuelva pronto`)
                break

                default:
                alert(`La opción ingresada no es válida. Vuelva a intentarlo`)
                break
            }


        break
        


        // verCatalogo(listaProductos)


        case "3":
        alert(`Muchas gracias por utilizar Budo Shop. Vuelva pronto!`)    
        salirMenu = false
        break

        default:
        alert(`Opción no válida. Vuelva a seleccionar una opción.`)
        break
        break
    }
}while(salirMenu)
}

menu()
    
//     let opcionMenu = prompt(`Indique qué desea hacer:
//     1 - Comprar un producto.
//     2 - Devolver un producto
//     3 - Salir del menú`)

//     switch (opcionMenu) {
//         case "1":
//             let menuProductos = prompt(`Elegí el producto que más te guste.
//             Actualmente, tenemos en stock los siguientes:
//             1 - Guantines
//             2 - Karategi
//             3 - Tobillera
//             4 - Empeinera`)
            
//             let dineroCliente = Number(prompt(`¿Cuánto dinero tenés disponible para gastar?`))

//             while (isNaN(dineroCliente)) {
//                 dineroCliente = Number(prompt(`El monto ingresado no es válido. Ingrese un número utilizando un punto para separar decimales. 
//                 ¿Cuánto dinero tenés disponible para gastar?`))
//             }

//             switch (menuProductos) {
//                 case "1":
//                     let precioGuantines = 1000
//                     if (dineroCliente > precioGuantines) {
//                         alert(`El precio de los guantines es de $ ${precioGuantines}. Te alcanza para comprar los guantines, y además te quedan $ ${dineroCliente - precioGuantines} para seguir comprando en nuestra tienda!!!`)
//                     }
//                     else if (dineroCliente == precioGuantines) {
//                         alert(`Muchas gracias por tu compra! Gastaste todo tu dinero, pero esperamos que pronto puedas volver a comprar en nuestra tienda.`)
//                     }
//                     else {
//                         alert(`Lo sentimos mucho, pero tu dinero no alcanza. Te faltan $ ${precioGuantines - dineroCliente} para llegar a los guantines. Volvé pronto y con más dinero!!!`)
//                     }
//                     break

//                 case "2":
//                     let precioKarategi = 8400
//                     if (dineroCliente > precioKarategi) {
//                         alert(`Genial! Te alcanza para comprar el karategi, y además te quedan $ ${dineroCliente - precioKarategi} para seguir comprando en nuestra tienda!!!`)
//                     }
//                     else if (dineroCliente == precioKarategi) {
//                         alert(`Muchas gracias por tu compra! Gastaste todo tu dinero, pero esperamos que pronto puedas volver a comprar en nuestra tienda.`)
//                     }
//                     else {
//                         alert(`Lo sentimos mucho, pero tu dinero no alcanza. Te faltan $ ${precioKarategi - dineroCliente} para llegar al karategi. Volvé pronto y con más dinero!!!`)
//                     }
//                     break

//                 case "3":
//                     let precioTobillera = 6000
//                     if (dineroCliente > precioTobillera) {
//                         alert(`Genial! Te alcanza para comprar la tobillera, y además te quedan $ ${dineroCliente - precioTobillera} para seguir comprando en nuestra tienda!!!`)
//                     }
//                     else if (dineroCliente == precioTobillera) {
//                         alert(`Muchas gracias por tu compra! Gastaste todo tu dinero, pero esperamos que pronto puedas volver a comprar en nuestra tienda.`)
//                     }
//                     else {
//                         alert(`Lo sentimos mucho, pero tu dinero no alcanza. Te faltan $ ${precioTobillera - dineroCliente} para llegar a la tobillera. Volvé pronto y con más dinero!!!`)
//                     }
//                     break

//                 case "4":
//                     let precioEmpeinera = 4200
//                     if (dineroCliente > precioEmpeinera) {
//                         alert(`Genial! Te alcanza para comprar la empeinera, y además te quedan $ ${dineroCliente - precioEmpeinera} para seguir comprando en nuestra tienda!!!`)
//                     }
//                     else if (dineroCliente == precioEmpeinera) {
//                         alert(`Muchas gracias por tu compra! Gastaste todo tu dinero, pero esperamos que pronto puedas volver a comprar en nuestra tienda.`)
//                     }
//                     else {
//                         alert(`Lo sentimos mucho, pero tu dinero no alcanza. Te faltan $ ${precioEmpeinera - dineroCliente} para llegar a la empeinera. Volvé pronto y con más dinero!!!`)
//                     }
//                     break

//                 default:
//                     alert(`Opción no válida. Vuelva a seleccionar una opción.`)
//                     break
//             }
//             break

//         case "2":
//             alert(`Atención! Sección en desarrollo. Seleccione otra opción`)
//             break

//         case "3":
//             alert(`Muchas gracias por ingresar a Budo Shop. Vuelva pronto's`)
//             salirMenu = false
//             break

//         default:
//             alert(`Opción no válida. Vuelva a seleccionar una opción.`)
//             break
//     }
// } while (salirMenu)