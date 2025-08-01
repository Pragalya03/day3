window.onload = function() {
  var user = sessionStorage.getItem("user");
  if (user) {
    document.getElementById("username-display").innerText = user;
  } else {
    // If user not logged in, redirect to login
    window.location.href = "login.html";
  }
};

function logout() {
  sessionStorage.removeItem("user");
  window.location.href = "login.html";
}
