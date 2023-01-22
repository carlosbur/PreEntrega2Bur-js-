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

// Creo una función para buscar productos

function buscarProd(array){
    let productoBuscado = prompt(`Ingrese el producto que desea encontrar:`)
    let busqueda = array.filter((prod) => prod.nombreProducto.toLowerCase() == productoBuscado.toLowerCase())
    if(busqueda.length == 0){
        alert(`No tenemos ${productoBuscado} en nuestro stock de productos`)
    } else {
        verCatalogo(busqueda)
    }
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
            2 - Buscar un producto
            3 - Agregar productos al carrito
            4 - Finalizar compra`)

            switch (menuComprador){

                case "1":
                verCatalogo(listaProductos)
                break

                case "2":
                buscarProd(listaProductos)
                break

                // Opción prevista pero aún no desarrollada
                case "3":
                alert(`Sitio en construcción. Vuelva pronto`)
                break
                
                // Opción prevista pero aún no desarrollada
                case "4":
                alert(`Sitio en construcción. Vuelva pronto`)
                break

                default:
                alert(`La opción ingresada no es válida. Vuelva a intentarlo`)
                break
            }
        break

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