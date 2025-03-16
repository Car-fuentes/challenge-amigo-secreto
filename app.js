// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres
let listaAmigos = [];
//Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
let lista = document.getElementById('listaAmigos');

//Implementa una función para agregar amigos
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    let regex = /^[a-zA-Z\s]{2,}$/;
    if (amigo == ""){
        alert("Por favor, inserte un nombre.")
    } else if (!regex.test(amigo)){
        alert("Por favor, ingrese solo letras y espacios, al menos 2 caracteres.");
    } else {
        //Actualizar el array de amigos
        listaAmigos.push(amigo);
    }
    limpiarCaja();
    limpiarLista();
    actualizarLista();  
    return
}
    
//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    document.querySelector('#amigo').focus();
}

//Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
function limpiarLista(){
    lista.innerHTML = " ";
    return;
}

//Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
//Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.

function actualizarLista(){
    let listaHTML = "<h4>Participante:</h4>";

    for (let amigo of listaAmigos){
        listaHTML += `<li>${amigo}</li>`;
    }
    lista.innerHTML = listaHTML;
}

//Implementa una función para sortear los amigos

//crear listado vacio amigos sorteados

let listaAmigosSorteados = [ ];
let contadorIndiceSorteado = 0;

let listadoFlechas = document.getElementById('flechas');
let listadoSorteo = document.getElementById('resultado');


function agregarFlechas(){
    let listaFlechas = "<h4 style='color:var(--color-secondary)'>|</h4>" ;

    for (let amigoSorteado of listaAmigosSorteados){
        listaFlechas += `<li><img class="flecha" src="assets/arrow.png" alt="flecha"></li>`;
    }

    listadoFlechas.innerHTML = listaFlechas;
};

function mostrarListaSorteados(){
        let listaResultados = "<h4>Tu amigo secreto es:</h4>";

    for (let amigoSorteado of listaAmigosSorteados){
        listaResultados += `<li>${amigoSorteado}</li>`;
    }
    listadoSorteo.innerHTML = listaResultados;
}

function sortearAmigo(){
    //Antes de sortear, comprobar que el array amigos no esté vacío.
    if (listaAmigos.length === 0){
        lista.innerHTML = 'Por favor agregue amigos a su lista para poder realizar el sorteo'; 
        return}
        console.log("el total de amigos es " + listaAmigos.length)
        console.log("el total de amigos sorteados es " + listaAmigosSorteados.length)

    while (listaAmigosSorteados.length < listaAmigos.length){
       //Generar un índice aleatorio
        let indiceSorteado =  Math.floor(Math.random()*listaAmigos.length);
        //Si coinciden los indices de los nombres volver a sortear
        if (indiceSorteado == contadorIndiceSorteado ){
            sortearAmigo();
        } else{
            //convertir el numero en nombre y comparar con los nombres sorteados
            let amigoSorteado = listaAmigos[indiceSorteado];
            if (listaAmigosSorteados.includes(amigoSorteado)){
                sortearAmigo();
            } else{
            //agregar a la lista
            listaAmigosSorteados.push(amigoSorteado);
            contadorIndiceSorteado +=1;
            };    
        if (listaAmigosSorteados.length === listaAmigos.length) {
                agregarFlechas();
                mostrarListaSorteados();
            }
        };
    };

}

function limpiarListaSorteados(){
    listadoSorteo.innerHTML = " ";
    return;
}

function condicionesIniciales() {
    listaAmigos = [];
    listaAmigosSorteados = [ ];
    contadorIndiceSorteado = 0;
}

function reiniciarSorteo() {
    limpiarLista();
    limpiarListaSorteados()
    condicionesIniciales();   
}