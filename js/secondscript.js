var url = new URL (window.location.href);
var drolStatus = url.searchParams.get('drolStatus');
var versieringStatus = url.searchParams.get('versieringStatus');
var cupStatus = url.searchParams.get('cupStatus');


var drolRoze = document.querySelector(".drolRoze");
var drolOranje = document.querySelector(".drolOranje");
var drolPaars = document.querySelector(".drolPaars");

var sterrenVersiering = document.querySelector(".sterrenVersiering");
var stippenVersiering = document.querySelector(".stippenVersiering");
var roosVersiering = document.querySelector(".roosVersiering");

var stippenCup = document.querySelector(".stippenCup");
var sterrenCup = document.querySelector(".sterrenCup");
var bliksemCup = document.querySelector(".bliksemCup");


function drolChecker(){
    if (drolStatus == 1){
        drolRoze.classList.remove("displaynone"); 
        drolOranje.classList.add("displaynone"); 
        drolPaars.classList.add("displaynone");
    }
    else if (drolStatus == 2){
        drolRoze.classList.add("displaynone");
        drolOranje.classList.remove("displaynone");
        drolPaars.classList.add("displaynone");
    }
    else if (drolStatus == 3){
        drolRoze.classList.add("displaynone");
        drolOranje.classList.add("displaynone");
        drolPaars.classList.remove("displaynone");
    }
}



function versieringChecker(){
    if (versieringStatus == 1){
        sterrenVersiering.classList.remove("displaynone"); 
        stippenVersiering.classList.add("displaynone"); 
        roosVersiering.classList.add("displaynone");
    }
    else if (versieringStatus == 2){
        sterrenVersiering.classList.add("displaynone"); 
        stippenVersiering.classList.remove("displaynone"); 
        roosVersiering.classList.add("displaynone");
    }
    else if (versieringStatus == 3){
        sterrenVersiering.classList.add("displaynone"); 
        stippenVersiering.classList.add("displaynone"); 
        roosVersiering.classList.remove("displaynone");
    }
}

function cupChecker(){
    if (cupStatus == 1){
        stippenCup.classList.remove("displaynone"); 
        sterrenCup.classList.add("displaynone"); 
        bliksemCup.classList.add("displaynone");
    }
    else if (cupStatus == 2){
        stippenCup.classList.add("displaynone"); 
        sterrenCup.classList.remove("displaynone");
        bliksemCup.classList.add("displaynone");
    }
    else if (cupStatus == 3){
        stippenCup.classList.add("displaynone"); 
        sterrenCup.classList.add("displaynone"); 
        bliksemCup.classList.remove("displaynone");
    }
}



window.addEventListener("load", drolChecker);
window.addEventListener("load", versieringChecker);
window.addEventListener("load", cupChecker);

