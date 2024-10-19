let user_name;
let last_name;
var email;
var password;

function sign()
{
	
user_name=document.querySelector('#fn').value;
last_name=document.querySelector('#ln').value;
email=document.querySelector('#em').value;
password=document.querySelector('#pass').value;
//storing local variable
localStorage.setItem('email', email);//
localStorage.setItem('password', password);//

 window.location.href = "login.html";
}