// 1.1 Agafem amb l'ID i canviem el contingut del títol
var titolNou = document.getElementById('titol');
titolNou.textContent = "Nou Títol";  // Canvi del títol

// 1.2 Creem un nou element <li> i l'afegim a la llista
var nouElement = document.createElement('li');
nouElement.textContent = "Element 4";  // Creació del contingut del nou <li>
document.getElementById('llista').appendChild(nouElement);  // Afegim el nou element a la llista

// 1.3 Modificar el text del paràgraf quan es faci clic al botó
var nouParagraf = document.getElementById('textParagraf');
  
document.getElementById('canviText').addEventListener('click', function() {
// Canvi del text del paràgraf
 nouParagraf.textContent = "Contingut del paràgraf modificat";
  });


// 2
var nuevoDiv = document.createElement("div");
nuevoDiv.id = "canviEstil";
nuevoDiv.textContent = "Fes click al div per veure canvi";
// posem el div a la pagina
document.body.appendChild(nuevoDiv);
// agafem amb el id
var estil = document.getElementById('canviEstil');
  
estil.addEventListener('click', function(){
estil.style.color = "red";
estil.style.fontSize = "20px";
});

//Ex 3
// Crear el formulario y sus elementos
var form = document.createElement('form');
form.id = 'form';

var input = document.createElement('input');
input.type = 'text';

var button = document.createElement('button');
button.type = 'submit'; // Mantenerlo como submit para que el evento submit funcione correctamente
button.textContent = 'Enviar';

// Añadir los elementos al formulario y luego al contenedor
document.getElementById('container').appendChild(form);
form.appendChild(input);
form.appendChild(button);

// Crear un contenedor para mostrar el resultado
var resultat = document.createElement('div');
document.body.appendChild(resultat);

// Manejar el evento submit del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir que el formulario recargue la página
    var nouParagraf = document.createElement('p');
    nouParagraf.textContent = input.value; // Asignar el valor del input al párrafo
    resultat.appendChild(nouParagraf); // Añadir el párrafo al contenedor de resultados
    input.value = ''; // Limpiar el campo de texto después de enviar
});


// Ex 4
// Crear el formulario con un campo de texto y un botón para añadir suggeriments
// Ex 4 //
const creacio = document.createElement('input');
creacio.type = 'text';
creacio.placeholder = 'Suggeriment aquí...';
const botonAfegir = document.createElement('button');
botonAfegir.textContent = 'Afegir Suggeriment';
const listar = document.createElement('ul');
document.body.appendChild(creacio);
document.body.appendChild(botonAfegir);
document.body.appendChild(listar);

botonAfegir.addEventListener("click", function() {
    const escriure = document.createElement('li');
    escriure.textContent = creacio.value;

    const botonRealitzat = document.createElement('button');
    botonRealitzat.textContent = 'Realitzat';
    botonRealitzat.addEventListener('click', function() {
        escriure.classList.toggle('realitzat');
    });

    const botonBorrar = document.createElement('button');
    botonBorrar.textContent = 'Eliminar';
    botonBorrar.addEventListener('click', function() {
        listar.removeChild(escriure);
    });

    escriure.appendChild(botonRealitzat);
    escriure.appendChild(botonBorrar);
    listar.appendChild(escriure);
});

const style = document.createElement('style');
style.textContent = `
    .realitzat {
        color: red;
    }
`;
document.head.appendChild(style);