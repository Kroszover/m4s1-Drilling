const formulario = document.querySelector('form');
const nombreInput = document.querySelector('#nombre');
const apellidoInput = document.querySelector('#apellido');
const emailInput = document.querySelector('#email');
const motivoInput = document.querySelector('#motivo');
const mensajeInput = document.querySelector('#mensaje');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nombre = nombreInput.value;
  const apellido = apellidoInput.value;
  const email = emailInput.value;
  const motivo = motivoInput.value;
  const mensaje = mensajeInput.value;
  
  const alerta = `De: ${nombre} ${apellido} (${email})
-- Asunto: ${motivo}
-- Mensaje: 
-- ${mensaje}`;

  alert(alerta);
});
