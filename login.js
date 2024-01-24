const form = document.getElementById("form");
form.addEventListener("submit", function addItem(e) {
  e.preventDefault();
  window.location.assign('/learning.html')
});