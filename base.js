var mybutton = document.getElementById("scrollTop");

myID = document.getElementById("scrollTop");

var scrollFunc = function() {
    var y = window.scrollY;
    if (y >= 800) {
    mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

window.addEventListener("scroll", scrollFunc);

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function feedback(){
    alert("Thanks For Your Respon !");
    return true;
}

var x = document.getElementById("loginForm");
var y = document.getElementById("registerForm");
var z = document.getElementById("btn");
var lgbtn = document.getElementById("loginBtn");
var regbtn = document.getElementById("regBtn");

function register(){
    x.style.display = "none";
    y.style.display = "block";
    z.style.left = "100px";
    lgbtn.style.color = "rgb(88, 114, 40)";
    regbtn.style.color = "white";
}

function login(){
    x.style.display = "block";
    y.style.display = "none";
    z.style.left = "0px";
    lgbtn.style.color = "white";
    regbtn.style.color = "rgb(88, 114, 40)";
}

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function loginSuccess(){
    alert("Welcome!");
    window.open('index.html')
    return true;
}