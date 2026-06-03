function openLogin(){
    document.getElementById("loginPopup").style.display = "block";
}

function closeLogin(){
    document.getElementById("loginPopup").style.display = "none";
}
function darkMode(){
    document.body.classList.toggle("dark");
}
document.addEventListener("DOMContentLoaded", function(){

    const form = document.querySelector(".apply-form");

    form.addEventListener("submit", function(event){

        event.preventDefault();

        alert("Application Submitted Successfully!");

        form.reset();

    });

});
function applyJob(){
    alert("Application process started!");
}

function saveJob(){
    alert("Job saved successfully!");
}
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {

    if (document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100) {

        document.getElementById("topBtn").style.display = "block";

    } else {

        document.getElementById("topBtn").style.display = "none";
    }
}

function topFunction() {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}
window.onload = function(){

    document.getElementById("loader").style.display = "none";

    document.getElementById("content").style.display = "block";

};