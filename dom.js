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

// 3
// 
var form = document.createElement('form');
form.id = 'form';

// Crear el campo de texto
var input = document.createElement('input');
input.type = 'text';

// Crear el botón de envío
var button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Enviar';

document.getElementById('container').appendChild(form);
form.appendChild(input);
form.appendChild(button);

//button.addEventListener('click', function() {
//var nouParagraf = document.createElement('p');
//nouParagraf.textContent = input.value;
//});
//resultat.appendChild(nouParagraf);

// 4


  
