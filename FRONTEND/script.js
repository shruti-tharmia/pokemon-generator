///// add and delete triggers /////
const backgroundElement = document.getElementById("background");

//// add ////
function div_show() {
  document.getElementById("newForm").style.display = "block";
}

function div_hide() {
  document.getElementById("newForm").style.display = "none";
}

/// delete ////
function delete_show() {
  document.getElementById("deleteForm").style.display = "block";
  backgroundElement.classList.add("visible");
}

function delete_hide() {
  document.getElementById("deleteForm").style.display = "none";
  backgroundElement.classList.remove("visible");
}

///// error /////
function hideError(){
  document.getElementById('errorMessage').style.display="none"
}

function showError(){
  document.getElementById('errorMessage').style.display="block"
}

