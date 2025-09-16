// Seleccionamos el formulario
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // evita que recargue la página

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Por favor, completa todos los campos.");
  } else {
    alert("Inicio de sesión correcto (simulado).");
    // Aquí iría la lógica real: enviar datos al servidor
  }
});
