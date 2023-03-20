const altura= document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById("fondo");
const imagenes = document.querySelectorAll("img");
const btnTodos= document.querySelector(".todos");
const btnCollares = document.querySelector(".collares");
const btnAros = document.querySelector(".aros");
const btnPulseras = document.querySelector(".pulseras");
const btnAnillos = document.querySelector(".anillos");
const contenedorProductos = document.querySelector(".productos");
document.addEventListener("DOMContentLoaded", ()=>{
    
    productos();
});

window.onscroll = () => {
    const anchoFondo = (window.pageYOffset / altura) * 900;
    fondo.style.height = anchoFondo + "%";

}
const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen = entry.target;
                imagen.src = imagen.dataset.src;
                observer.unobserve(imagen);
            }
        });
});

imagenes.forEach(imagen=>{
    
    observer.observe(imagen);
})

const productos = () =>{
    let productosArreglo = [];
    const productos = document.querySelectorAll(".producto");
    
    productos.forEach(producto=> productosArreglo = [...productosArreglo,producto]);
    
    const collares = productosArreglo.filter(collar=> collar.getAttribute("data-producto") === "collar");
    const aros = productosArreglo.filter(aros=> aros.getAttribute("data-producto") === "aros");
    const pulseras = productosArreglo.filter(pulseras=> pulseras.getAttribute("data-producto") === "pulseras");
    const anillos = productosArreglo.filter(anillos=> anillos.getAttribute("data-producto") === "anillos");
    
    mostrarProductos(collares, aros, pulseras, anillos, productosArreglo);
}

const mostrarProductos = (collares, aros, pulseras, anillos, todos) =>{
    btnCollares.addEventListener("click", ()=>{
        limpiarHtml(contenedorProductos);
        collares.forEach(collares=> contenedorProductos.appendChild(collares));
    });
    btnAros.addEventListener("click", ()=>{
        limpiarHtml(contenedorProductos);
        aros.forEach(aros=> contenedorProductos.appendChild(aros));
    });
    btnPulseras.addEventListener("click", ()=>{
        limpiarHtml(contenedorProductos);
        pulseras.forEach(pulseras=> contenedorProductos.appendChild(pulseras));
    });
    btnAnillos.addEventListener("click", ()=>{
        limpiarHtml(contenedorProductos);
        anillos.forEach(anillos=> contenedorProductos.appendChild(anillos));
    });
    btnTodos.addEventListener("click", ()=>{
        limpiarHtml(contenedorProductos);
        todos.forEach(todo=> contenedorProductos.appendChild(todo));
    })

}

const limpiarHtml =(contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}

