
var cakeroze = document.querySelector ("#Cake-roze");
var cakeoranje = document.querySelector ("#Cake-oranje");
var cakepaars = document.querySelector ("#Cake-paars");
var versiering1 = document.querySelector ("#versiering-roos");
var versiering2 = document.querySelector ("#versiering-stippen");
var versiering3 = document.querySelector ("#versiering-sterren");
var bodem1 = document.querySelector ("#bodembliksem");
var bodem2 = document.querySelector ("#bodemsterren");
var bodem3 = document.querySelector ("#bodemstippen");

var drolArray = ["roze", "oranje", "paarse"]

// Drol veranderingen
var drolStatus = 0;
var drol = document.querySelector(".drol");


function rozeDrol() {
    drolStatus = 1;
    console.log(drolStatus);
    drolChecker();
}

function oranjeDrol() {
    drolStatus = 2;
    console.log(drolStatus);
    drolChecker();
}
function paarseDrol() {
    drolStatus = 3;
    console.log(drolStatus);
    drolChecker();
}



function drolChecker(){
    if (drolStatus == 1){
        drol.src = `./images/${drolArray[drolStatus-1]}smaak.png`;   
    }
    else if (drolStatus == 2){
        drol.src = `./images/${drolArray[drolStatus-1]}smaak.png`;
    }
    else if (drolStatus == 3){
        drol.src = `./images/${drolArray[drolStatus-1]}smaak.png`;
    }
}

cakeroze.addEventListener("click", rozeDrol);
cakeoranje.addEventListener("click", oranjeDrol);
cakepaars.addEventListener("click", paarseDrol);

var versieringArray = ["sterren", "stippen", "roos"]
// versierings veranderen
var versieringStatus = 0;
var versiering = document.querySelector(".Versiering");


function versieringSterren() {
    versieringStatus = 1;
    console.log(versieringStatus);
    versieringChecker();
}

function versieringStippen() {
    versieringStatus = 2;
    console.log(versieringStatus);
    versieringChecker();
}
function versieringRoos() {
    versieringStatus = 3;
    console.log(versieringStatus);
    versieringChecker();
}

function versieringChecker(){
    if (versieringStatus == 1){
        versiering.src = `./images/${versieringArray[versieringStatus-1]}versiering.png`; 
    }
    else if (versieringStatus == 2){
        versiering.src = `./images/${versieringArray[versieringStatus-1]}versiering.png`; 
    }
    else if (versieringStatus == 3){
versiering.src = `./images/${versieringArray[versieringStatus-1]}versiering.png`; 
    }
}

versiering3.addEventListener("click", versieringSterren);
versiering2.addEventListener("click", versieringStippen);
versiering1.addEventListener("click", versieringRoos);


// cup veranderen
var cupStatus = 0;
var Cup = document.querySelector(".Cup");


function cupStippen() {
    cupStatus = 1;
    console.log(cupStatus);
    cupChecker();
}

function cupSterren() {
    cupStatus = 2;
    cupChecker();
}
function cupBliksem() {
    cupStatus = 3;
    console.log();
    cupChecker();
}

function cupChecker(){
    if (cupStatus == 1){
     Cup.scr = "./images/stippencup.png";
    }
    else if (cupStatus == 2){
     Cup.src = "./images/sterrencup.png";
    }
    else if (cupStatus == 3){
     Cup.src = "./images/bliksemcup.png";
    }
}
bodem3.addEventListener("click", cupStippen);
bodem2.addEventListener("click", cupSterren);
bodem1.addEventListener("click", cupBliksem);


// onthouden en doorzetten naar nieuwe pagina.
var readyButton = document.querySelector(".ready");

function ready(){
    window.location=`gekozen.html?drolStatus=${drolStatus}&versieringStatus=${versieringStatus}&cupStatus=${cupStatus}`;
}

readyButton.addEventListener("click", ready);


// bijles van quinten kok //

// drol in een functie met source en array en check wat er gebruikt als je dubbel klikt, ( niet opstapelen ) //

// if gebreurt er niks, en check of het hetzelfde is! site online! //

