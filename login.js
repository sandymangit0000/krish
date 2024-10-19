
function log() {

  
  if (document.querySelector('#c').value ==localStorage.getItem('email')&& document.querySelector('#p').value == localStorage.getItem('password')) { 
    window.location.href = "index.html";
  }
   else {
    alert("Enter a valid email or password");
  }
}
