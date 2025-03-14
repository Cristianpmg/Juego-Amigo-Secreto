// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Lista donde se guardarán la lista de amigos
let amigos = []; 

// Capturar los valores de entrada
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

asignarTextoElemento('h1','Descubre a tu amigo secreto');
asignarTextoElemento('h2','Escribe el nombre de tus amigos!');

// Guardar los nombres de los amigos
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value.trim();
    
    
    if (nombreAmigo !== "") {
        amigos.push(nombreAmigo);
        actualizarLista();
        limpiarcaja();
            }
    else{
        alert('Por favor, inserte un nombre');  
    }
    
}

// Limpia el campo
 function limpiarcaja(){
    document.querySelector('#amigo').value ='';
 }


 //Obtener el elemento de la lista
 function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML ="";

   for (let amigo of amigos){
       let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li)
  }
  }


  // Sorteo de los amigos
  function sortearAmigo(){
    
    if(amigos.length === 0){
      alert('No hay amigos ingresados para sortear');
      return;
    }

      let indiceAleatorio = Math.floor(Math.random()*amigos.length);
      let amigoSorteado = amigos[indiceAleatorio];

      //resultados de la lista resultado
      let resultadoLista = document.getElementById('resultado');
      resultadoLista.innerHTML ='';

      let li = document.createElement('li');
      li.textContent = `🎉 Felicidades! tu Amigo secreto es: ${amigoSorteado}`; 
      resultadoLista.appendChild(li);

  }
 


//function generarNumeroSecreto() {
  //  let nombreGenerado = Math.floor(Math.random()*10)+1;
    //console.log(nombreGenerado)
    // si el nombre generado está incluido en la lista
    //if (nombreAmigoSecreto.includes(nombreGenerado)) {
     //   return generarNumeroSecreto();
   // } else
     //   nombreAmigoSecreto.push(nombreGenerado);
//}


//function agregarAmigo() {
  //  let nombreAmigo = document.getElementById('amigo').value;
 //   console.log(nombreAmigo === nombreAmigoSecreto);
    //if (nombreAmigo === numernombreAmigoSecretooSecreto){
     //  asignarTextoElemento('h2','Acertaste el número')
   //}
//   return
//}



// Generar resultado aleatorio
