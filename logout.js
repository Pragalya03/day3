function login() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var msg = document.getElementById("message");

  if (user === "" || pass === "") {
    msg.innerText = "Enter both fields";
  } else {
    msg.innerText = "";
    document.getElementById("login-box").style.display = "none";
    document.getElementById("logout-box").style.display = "block";
    document.getElementById("user-display").innerText = user;
  }
}

function logout() {
  document.getElementById("login-box").style.display = "block";
  document.getElementById("logout-box").style.display = "none";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("message").innerText = "";
}
