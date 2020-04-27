var user=document.getElementById("user");
var password=document.getElementById("pwd");
var eyeIcon=document.getElementById("eyeicon");
var eye=document.getElementById("hide-eye");
var eyeslash=document.getElementById("hide-eye-slash");
var login=document.getElementById("login");
var hello=document.getElementById("hello");
eyeIcon.onclick = function(){
	if(password.type == "password"){
		password.type="text";
		eye.style.display = "block";
		eyeslash.style.display = "none";
	}
	else {
		password.type="password";
		eye.style.display="none";
		eyeslash.style.display="block";
	}
}
var pattern = /^\s/;
function loginClick(){
	var name=document.querySelector("#user-name");
	if(user.value == '' || password.value == '')
		window.alert("Please input your username and password");
	else
		{
		if(/^[a-zA-Z0-9-@ ]*$/.test(user.value) == false || /^[a-zA-Z0-9-@ ]*$/.test(password.value) == false)
			window.alert("Your username or your password include special character");
		else
			{
				name.innerHTML=user.value;
				login.style.display="none";
				hello.style.display="block";
			}
		}
	}

function logoutClick() {
	window.alert("Goodbye!!!!!!");
	login.style.display="block";
	hello.style.display="none";
	user.value='';
	password.value='';
}