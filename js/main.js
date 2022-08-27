// creamos la clase productos

class Producto {
    constructor(codigo, producto, descripcion, marca, precio) {
        this.codigo = codigo;
        this.producto = producto;
        this.descripcion = descripcion;
        this.marca = marca;
        this.precio = precio
    }
}

// creamos el array y varios productos

const p1 = new Producto(1001, "Jabon baby", "Con estuche por 80 g.", "Algabo", 60);
const p2 = new Producto(1003, "Jabon baby", "Por 80 g.", "Algabo", 49);
const p3 = new Producto(1004, "Colonia baby", "Dulce mimos por 125 ml.", "Algabo", 131);
const p4 = new Producto(1333, "Set de regalo baby", "Contiene un shampoo por 200 ml y una colonia por 125 ml.", "Algabo", 470);
const p5 = new Producto(1441, "Shampoo baby", "Dulce mimos por 200 ml.", "Algabo", 117);
const p6 = new Producto(1442, "Shampoo baby", "Manzanilla por 200 ml.", "Algabo", 117);
const p7 = new Producto(1386, "Shampoo baby", "Manzanilla por 444 ml.", "Algabo", 160);
const p8 = new Producto(1241, "Shampoo baby", "Extra suave por 444 ml.", "Algabo", 160);
const p9 = new Producto(1234, "Aceite baby", "Por 200 ml.", "Algabo", 218);
const p10 = new Producto(1030, "Hisopos de seguridad", "100% de algodón.", "Algabo", 110);
const p11 = new Producto(1362, "Jabón líquido baby", "Por 200 ml.", "Algabo", 87);
const p12 = new Producto(1618, "Polvo de fécula", "Pote por 200 g.", "Algabo", 180);
const p13 = new Producto(1619, "Polvo de fécula", "Repuesto economico por 200 g.", "Algabo", 110);
const p14 = new Producto(1224, "Toallitas húmedas", "Pack con tapa por 100 unidades.", "Algabo", 540);

const productos = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14];

// mostramos productos modificados en el dom 

const contenedorProductos = document.getElementById("contenedorProductos");

productos.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("card", "col-xl-3", "col-md-6", "col-sm-12", "cardMio", "tarjetadeproductos");
    divProducto.innerHTML = `
                <div class="col">
                    <div>
                        <img src="../imagenes/productos/${producto.codigo}.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${producto.producto}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <h5 class="card-title">$ ${producto.precio}</h5>
                            <button id="boton${producto.codigo}" class="btn btn-link"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#d0e068" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="6" cy="19" r="2" />
                                <circle cx="17" cy="19" r="2" />
                                <path d="M17 17h-11v-14h-2" />
                                <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                                <path d="M15 6h6m-3 -3v6" />
                                </svg></button>
                        </div>
                    <div class="card-footer">
                        <small class="marcaproducto text-muted">${producto.marca}</small>
                        <small class="text-muted">Codigo: ${producto.codigo}</small>
                    </div>
                </div>`;

    contenedorProductos.appendChild(divProducto);

    // ponemos el boton para agregar producto al carrito

    const boton = document.getElementById(`boton${producto.codigo}`);
    boton.addEventListener('click', () => {
        agregaralcarrito(producto.codigo);
    }
    );
}
);

// creamos el carrito de compra 

const carrito = [];

const agregaralcarrito = (codigo) => {
    const producto = productos.find(producto => producto.codigo === codigo);
    carrito.push(producto);

    // libreria 
    Toastify({
        text: "Producto agregado",
        duration: 4000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "radial-gradient(circle, rgba(163,223,217,1) 0%, rgba(228,178,216,1) 100%)",
        },
    }).showToast();

}

// mostramos el carrito de compra en el dom

const contenedorcarrito = document.getElementById('contenedorcarrito');
const vercarrito = document.getElementById('vercarrito');

vercarrito.addEventListener("click", () => {
    let aux = "";
    carrito.innerHTML = ""
    carrito.forEach(producto => {
        aux += `<div class="card row col-sm-6 border-info" style="width: 15rem;" id="carritodecompra">
                        <div id=tarjeta${producto.codigo}>
                            <img class="tamImagen py-3" src="../imagenes/productos/${producto.codigo}.jpg" class="card-img-top img-fluid" alt="" width="100px">
                            <div class="card-body">
                                <h4 class="card-text">${producto.producto}</h4>
                                <p class="card-text">$ ${producto.precio}</p>
                                <button class="btn btn-link" id= "eliminar${producto.codigo}"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-x" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="6" cy="19" r="2" />
                                    <circle cx="17" cy="19" r="2" />
                                    <path d="M17 17h-11v-14h-2" />
                                    <path d="M6 5l7.999 .571m5.43 4.43l-.429 2.999h-13" />
                                    <path d="M17 3l4 4" />
                                    <path d="M21 3l-4 4" />
                                    </svg></button>
                            </div>
                        </div>
                    </div>`;

        contenedorcarrito.innerHTML = aux;

    })

    // Agregamos el boton y la funcion eliminar productos

    carrito.forEach(producto => {
        const botoneliminar = document.getElementById(`eliminar${producto.codigo}`);
        botoneliminar.addEventListener("click", () => {
            document.getElementById(`tarjeta${producto.codigo}`).remove()
        });
    })
});

//agregamos el json de las tarjetas en el dom
const Formadepago = document.getElementById("formadepago");

fetch("../json/tarjetas.json")
    .then(response => response.json())
    .then(tarjeta => {
        tarjeta.forEach((tarjeta, indice) => {
            Formadepago.innerHTML += `
                <div class="card mb-3 border-info" style="max-width: 380px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="../imagenes/tarjetas/${tarjeta.nombre}.jpg" class="card-img-top" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${tarjeta.tarjeta}</h5>
                                <p class="card-text">Cuota 1: Interes del ${tarjeta.unacuota}%.</p>
                                <p class="card-text">Cuota 3: Interes del ${tarjeta.trescuota}%.</p>
                                <p class="card-text">Cuota 6: Interes del ${tarjeta.seiscuota}%.</p>
                                <p class="card-text">Cuota 12: Interes del ${tarjeta.docecuota}%.</p>
                                <p class="card-text"><small class="text-muted">Debito sin recargo</small></p>
                            </div>
                        </div>
                    </div>
                </div> `
        })
    });

// boton de finalizar compra

const finalizarcompra = document.getElementById("finalizarcompra");

finalizarcompra.addEventListener("click", () => {
    (async () => {

        const { value: email } = await Swal.fire({
            title: 'Finalizar compra',
            input: 'email',
            inputLabel: 'Un representante se comunicara para finalizar la compra',
            inputPlaceholder: 'Ingrese su email',
            confirmButtonText: 'Finalizar compra',
            showCancelButton: true,
            cancelButtonText: 'Seguir comprando',
        })

        if (email) {
            Swal.fire('Compra finalizada', '', 'success')
        }

    })()
});
