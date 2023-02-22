function validarCampos(){
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var texto = document.getElementById("texto").value;
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  
  if (nombre.length === 0) {
    document.getElementById("errorNombre").style.display = "block";}
    //nombre.focus()}
    else{
      document.getElementById("errorNombre").style.display = "none";
    }
   
  if (email.length !=0 && emailRegex.test(email)) {
    document.getElementById("errorMail").style.display = "none";}
    //email.focus()}
    else{
      document.getElementById("errorMail").style.display = "block";
    }

  if (texto.length === 0) {
    document.getElementById("errorTexto").style.display = "block";}
    //texto.focus()}
    else{
      document.getElementById("errorTexto").style.display = "none";
    }
  
  if (nombre && email && texto){
    document.getElementById("mensaje").style.display="block";
  }
}
