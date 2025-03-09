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
    let listaHTML = "<h4>Participantes:</h4>";

    for (let amigo of listaAmigos){
        listaHTML += `<li>${amigo}</li>`;
    }
    lista.innerHTML = listaHTML;
}

//Implementa una función para sortear los amigos


function sortearAmigo(){
    //Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
    if (listaAmigos.length === 0){
        lista.innerHTML = 'Por favor agregue amigos a su lista para poder realizar el sorteo'
    } else {
        //Generar un índice aleatorio
        let indiceSorteado =  Math.floor(Math.random()*listaAmigos.length);
        //Obtener el nombre sorteado
        let amigoSorteado = listaAmigos[indiceSorteado];
        //Mostrar el resultado
        document.getElementById("resultado").innerHTML = `El amigo secreto es: <b>¡${amigoSorteado}!</b>`;

    }  
}