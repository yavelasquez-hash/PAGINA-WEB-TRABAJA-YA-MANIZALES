document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let correo = document.getElementById("correo").value;
  let password = document.getElementById("password").value;

  let usuarioCorrecto = "admin@trabajaya.com";
  let passwordCorrecta = "1234";

  if (correo === usuarioCorrecto && password === passwordCorrecta) {
    window.location.href = "index.html";
  } else {
    document.getElementById("error").textContent = "Correo o contraseña incorrectos";
  }
});