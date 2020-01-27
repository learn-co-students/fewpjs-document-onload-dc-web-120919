//onload events
let textOnLoad = document.getElementById("text");

document.addEventListener("DOMContentLoaded", function(loadingFunction){
    console.log("The DOM has loaded");
    textOnLoad.innerHTML = "This is really cool!";
    //textLoader();
});

console.log(
    "This console.log() shows up when index.js loads, but before DOMContentLoaded is triggered"
);

function textLoader(){

    textOnLoad.innerHTML = "This should appear last after everything else has loaded.";
}