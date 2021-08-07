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

function myFunction(val){
    document.getElementById("amount").value = val;
}

function submited(){
    alert("Your Data Submited. Thanks For Your Donation!");
    return true;
}