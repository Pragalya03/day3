function login() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  if (user === "" || pass === "") {
    document.getElementById("message").innerText = "Enter both fields";
  } else {
    document.getElementById("message").innerText = "Logged in as " + user;
  }
}
