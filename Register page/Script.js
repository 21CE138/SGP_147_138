//alert("Loading");


function addNewWEField() {
    //console.log("Adding new Field");
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder', 'Enter Here');

    let weOb = document.getElementById('we');
    let weAddButtonOb = document.getElementById('weAddButton');

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    //console.log("Adding new Field");
    let newMode = document.createElement('textarea')
    newMode.classList.add('form-control')
    newMode.classList.add('AqField')
    newMode.classList.add('mt-2');
    newMode.setAttribute('placeholder', 'Enter Here');

    let AqOb = document.getElementById('Aq');
    let AqAddButtonOb = document.getElementById('AqAddButton');

    AqOb.insertBefore(newMode, AqAddButtonOb)
}

// generating CV
function generateCV() {
    // console.log("Generating CV");

    document.getElementById('nameT1').innerHTML = document.getElementById('namefield').value;
    document.getElementById('nameT2').innerHTML = document.getElementById('namefield').value;
    document.getElementById('contactT').innerHTML = document.getElementById('contactfield').value;
    document.getElementById('addressT').innerHTML = document.getElementById('Addressfield').value;
    document.getElementById('gmailT').innerHTML = document.getElementById('Emailfield').value;
    document.getElementById('LinkedInT').innerHTML = document.getElementById('Linkedfield').value;
    document.getElementById('TwitterT').innerHTML = document.getElementById('Twitterfield').value;

    // Objective
    document.getElementById('ObjectiveT').innerHTML = document.getElementById('ObjectiveField').value;
    //Work Experience
    let wes = document.getElementsByClassName("weField")

    let str = " ";

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("WeT").innerHTML = str;

    // Academic Qualification
    let Aqs = document.getElementsByClassName("AqField")

    let yuvi = " ";

    for (let e of Aqs) {
        yuvi = yuvi + `<li> ${e.value} </li>`;
    }
    document.getElementById("AqT").innerHTML = yuvi;

    // Upload Your Photo
    let file = document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    // set image to template
    reader.onloadend = function () {
        document.getElementById('imgT').src = reader.result;
    };

    document.getElementById('cv-form').style.display = 'none'
    document.getElementById('cv-template').style.display = "block";
}

// Print CV

function printCV() {
    window.print();
}