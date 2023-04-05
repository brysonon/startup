function login() {
  const username = document.querySelector("#name");
  localStorage.setItem("username", username.value);

  const userpass = document.querySelector("#password");
  localStorage.setItem("userpass", userpass.value);
  
  window.location.href = "vitals.html";
}
  