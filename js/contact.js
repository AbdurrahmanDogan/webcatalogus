const name = document.querySelector(".name");
const sendButton = document.querySelector(".btn2");
const first = document.querySelector(".first");
const first1 = document.querySelector(".first1");
const email = document.querySelector(".email-input");
const number = document.querySelector(".number");
const alertje = document.querySelector(".alertje");
const message = document.querySelector(".message");
const alertBox1 = document.querySelector(".alert-1");          //hier roep ik al mijn variabelen aan vanuit html
const alertBox2 = document.querySelector(".alert-2");
const alertBox3 = document.querySelector(".alert-3");
const alertBox4 = document.querySelector(".alert-4");
const alertBox5 = document.querySelector(".alert-5");
const cancelButton = document.querySelector(".btn1");
const inputs = document.querySelectorAll(".form-control");

let formIsFalid;


cancelButton.addEventListener("click", verificationReset ) // als er op annuleren wordt gedrukt worden alle inputs leeg



function verificationReset() {
    for (let i = 0; i < inputs.length; i++) {
        const element = inputs[i];               //  zorgt er voor als ik op annuleren druk dat alle veldjes leeg gaan
        element.value = ""
        element.classList.remove("error")
        element.classList.remove("alertBox")

    }
}


sendButton.addEventListener("click", checkForms);
function checkForms() {
    formIsFalid = true;
    checkFirstName();                                        // hier  zorg ik ervoor dat als ik op verzenden button druk dat alles op de functions wordt uitgevoerd    
    checkEmail();
    checkNumber();
    checkMessage();
    if (formIsFalid) {
        verification();
    }
}

function checkFirstName() {
    let firstName = name.value;
    if (firstName.length <= 2 || containsNumbers(firstName)) {

        first.classList.add('error');
        alertBox1.classList.remove('invisible');
        formIsFalid = false;

    }
    else {
        first.classList.remove('error');
        alertBox1.classList.add('invisible');
       
       
    }
}
function containsNumbers(str) {
    return /\d/.test(str);   // nummers van 0 tot 9 teruggeven
}

function checkEmail() {
    if (email.value.length == 0 || !email.value.includes('@')) {
        email.classList.add('error')
        alertBox2.classList.remove('invisible')
        formIsFalid = false

    }
    else {
        email.classList.remove('error')
        alertBox2.classList.add('invisible')
       
        
    }
}

function checkNumber() {
    if (number.value.length <= 9) {
        number.classList.add('error')
        alertBox3.classList.remove('invisible')
        formIsFalid = false
        

    }
    else {
        number.classList.remove('error')
        alertBox3.classList.add('invisible')
       
    }
}

function checkMessage() {
    if (message.value.length == 0) {
        message.classList.add('error')
        alertBox4.classList.remove('invisible')
        formIsFalid = false
       
    }
    else {
        message.classList.remove('error')
        alertBox4.classList.add('invisible')
       
    }
}


function verification() {
    if (formIsFalid == true) {
        alertBox5.classList.remove('invisible')
        verificationReset();
        console.log(formIsFalid);
    }
    else {
        formIsFalid = false
        alertBox5.classList.add('invisible')
    }
}

