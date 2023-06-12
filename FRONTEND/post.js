
///// post method //////
const form = document.getElementById("mainForm");
form.addEventListener("submit", async (e) => {
  let response=''
  e.preventDefault();
  // console.log("i ran")
  const formData = new FormData(e.target);
  const formDataObj = {};
  formData.forEach((value, key) => (formDataObj[key] = value));
  console.log(JSON.stringify(formDataObj))
  const url = form.action;
  let formStr = JSON.stringify(formDataObj);
  try{
   response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: formStr,
  });
}
catch(error){
  document.getElementById("errorMessage").innerHTML = response.error.message ;
  showError();
}
  mainForm.style.display = "none";
  form.reset();
});
