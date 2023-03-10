function login() {
    const userName = document.querySelector("#name");
    localStorage.setItem("userName", userName.value);

    const userPass = document.querySelector("#password");
    localStorage.setItem("userPass", userName.value);
    
    window.location.href = "vitals.html";
  }
  