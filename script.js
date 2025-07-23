function login() {
  document.getElementById("content").style.display = "block";
  document.getElementById("login-btn").style.display = "none";
  document.getElementById("logout-btn").style.display = "inline-block";
  alert("Logged in successfully!");
}

function logout() {
  document.getElementById("content").style.display = "none";
  document.getElementById("login-btn").style.display = "inline-block";
  document.getElementById("logout-btn").style.display = "none";
  alert("Logged out!");
}
