//cache del dom
const nomeInput = document.querySelector("#nome");
const cognomeInput = document.querySelector("#cognome");
const matricolaInput = document.querySelector("#matricola");
const submitBtn = document.querySelector("#btn");
const errorSpans = document.querySelectorAll("span.error");
const messagePar = document.querySelector(".success")


function isCampoValorizzato(campo) {
    return nomeInput.value.trim().length != 0;
}

function isNomeCognomeValid(valore) {
    let pattern = /^[A-Za-z\s-,]+$/;
    return pattern.test(valore);
}

function isMatricolaValid(valore) {
    let pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,10}$/;
    return pattern.test(valore);
}

function svuotaCampi() {
    document.querySelector("form").reset();
    nome.focus();
}

//gestione eventi
submitBtn.addEventListener ("click", function (e) {

    for (let error of errorSpans) {
        error.innerHTML="";
    };
    let valid = true; //per vedere alla fine se i campi sono validi


    if (!isCampoValorizzato(nomeInput) || !isNomeCognomeValid(nomeInput.value)) {
        nomeInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }
    if (!isCampoValorizzato(cognomeInput) || !isNomeCognomeValid(cognomeInput.value)) {
        cognomeInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }

    if (matricolaInput.value.trim().length == 0 && !isMatricolaValid(matricolaInput.value)) {
        matricolaInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }


    e.preventDefault(); //blocco della submit

    if (valid) {

        messagePar.classList.remove("error");
        messagePar.classList.add("success");
        messagePar.innerHTML = "Accesso effettuato";  
        svuotaCampi();
    }
    else {
        messagePar.classList.remove("success");
        messagePar.classList.add("error");
        messagePar.innerHTML = "Accesso non riuscito.";
    }


});

//per far comparire l'orario dato dal sistema

//soluzione con slice 
// document.addEventListener('DOMContentLoaded', (event) => {
//     const currentDateTime = new Date().toLocaleTimeString().slice(0,-3);
//     document.getElementById('oraInizio').value = currentDateTime;
// });

document.addEventListener('DOMContentLoaded', (event) => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('oraInizio').value = currentTime;
});



















