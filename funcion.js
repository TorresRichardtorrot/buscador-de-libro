//selectores o variables
const nombre = document.querySelector('#nombre');
const autor = document.querySelector('#autor');
const categoria = document.querySelector('#categoria');
const edicion = document.querySelector('#edicion');

const datosBusqueda = {
    nombre: '',
    autor: '',
    categoria: '',
    edicion: '',
    isbn:''
}
    //aplicar los filtros
function filtarNombre(libro) {
    if(datosBusqueda.nombre){
        return libro.nombre === datosBusqueda.nombre;
    }
    return libro;
}
function filtrarAutor(libro) {
    if(datosBusqueda.autor){
        return libro.autor === datosBusqueda.autor;
    }
    return libro;
}
function filtrarCategoria(libro) {
    if(datosBusqueda.categoria){
        return libro.categoria === datosBusqueda.categoria;
    }
    return libro;
}
function filtrarEdicion(libro) {
    if(datosBusqueda.edicion){
        return libro.edicion === datosBusqueda.edicion;
    }
    return libro;
}

   
function mostrarLibros(libros){
    limpiarHTML();
        
    const contenedor = document.querySelector('#resultado');

    libros.forEach(libro => {
        const libroHTML = document.createElement('p');
        libroHTML.innerHTML = `
         
        <i>${libro.nombre} ---  ${libro.categoria}  ---  ${libro.autor}  ---  ${libro.edicion} <br>ISBN: ${libro.isbn}</i>
        `;
        contenedor.appendChild(libroHTML);    
    });
        
}

    function filtrarLibros(){
        const resultado = libros.filter(filtarNombre).filter(filtrarAutor).filter(filtrarCategoria).filter(filtrarEdicion);
        if(resultado.length){
            mostrarLibros(resultado);
        }else{
            noResultado();
        }
    }

function limpiarHTML() {

    const contenedor = document.querySelector('#resultado');

    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }

}
function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode(`No hay resultados para su busqueda`));
    document.querySelector('#resultado').appendChild(noResultado);
    
}

document.addEventListener('DOMContentLoaded',() => {
    mostrarLibros(libros);
});

nombre.addEventListener('input', e => {
    datosBusqueda.nombre = e.target.value;
    
    filtrarLibros();
})
autor.addEventListener('input',e =>{
    datosBusqueda.autor = e.target.value;
    
    filtrarLibros();
})
categoria.addEventListener('input',e =>{
    datosBusqueda.categoria = e.target.value;
   
    filtrarLibros();
})
edicion.addEventListener('input',e =>{
    datosBusqueda.edicion = e.target.value;
   
    filtrarLibros();
})


