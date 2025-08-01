function login() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var msg = document.getElementById("message");

  if (user === "" || pass === "") {
    msg.innerText = "Enter both fields";
  } else {
    msg.innerText = "";
    // Store the username temporarily
    sessionStorage.setItem("user", user);
    // Redirect to logout page
    window.location.href = "logout.html";
  }
}
