const floatingInput = document.getElementById("floatingInput");
const floatingPassword = document.getElementById("floatingPassword");
const animation = document.getElementsByClassName("form-control");
const btnPrimary = document.getElementById("btnPrimary");
btnPrimary.onclick = function(){
    if(floatingInput.value == "tejagopaladasu@gmail.com" && floatingPassword.value == "chocolate48") {
        btnPrimary.setAttribute("href", "./photos.html");
        console.log("hello");
      }
    else{
      window.location.reload();
    }
}

