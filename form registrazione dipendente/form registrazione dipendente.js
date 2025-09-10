//Cache del dom
const nomeInput = document.querySelector("#nome");
const cognomeInput = document.querySelector("#cognome");
const annoInput = document.querySelector("#anno_nascita");
const luogoInput = document.querySelector("#luogo_nascita");
const viaInput = document.querySelector("#via");
const cittaInput = document.querySelector("#citta");
const provInput = document.querySelector("#prov");
const telInput = document.querySelector("#tel");
const celInput = document.querySelector("#cell");
const matricolaInput = document.querySelector("#matricola");
// const submitBtn = document.querySelector('input[type="submit"]');
const submitBtn = document.querySelector("#btn");
const errorSpans = document.querySelectorAll("span.error");

const messagePar = document.querySelector(".success")

function isTelOrCelFilled() {
    return telInput.value.trim().length > 0 || celInput.value.trim().length > 0;
}

function isNomeCognomeValid(valore) {
    let pattern = /^[A-Za-z\s-,]+$/;
    return pattern.test(valore);
  }
  
function isTelValid(valore) {
    let pattern = /^[0-9\s]+$/;
    return pattern.test(valore);
}

function isCampoValorizzato(campo) {
    return nomeInput.value.trim().length != 0;
}

function isViaValid(valore) {
    let pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,10}$/;
    return pattern.test(valore);
}

function isMatricolaValid(valore) {
    let pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,10}$/;
    return pattern.test(valore);
}

// function isLuogoNascitaValid(valore) {
//     let pattern = /^[A-Za-z\s-,]+$/;
//     return pattern.test(valore);
//   } ylenia

function svuotaCampi() {
    document.querySelector("form").reset();
    nome.focus();
}

//Gestione eventi

submitBtn.addEventListener ("click", function (e) {

    e.preventDefault(); //blocco della submit

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

    // if (telInput.value.trim().length == 0 && !isTelValid(telInput.value)) {
    //     telInput.nextElementSibling.innerHTML = "campo non valido";
    //     valid = false;
    // }
    
    // if (celInput.value.trim().length == 0 && !isTelValid(celInput.value)) {
    //     celInput.nextElementSibling.innerHTML = "campo non valido";
    //     valid = false;
    // }

    if (!isTelOrCelFilled()) {
        document.querySelector("#error-message").style.display = "block";
        valid = false;
    } else {
        document.querySelector("#error-message").style.display = "none";
        if (telInput.value.trim().length > 0 && !isTelValid(telInput.value)) {
            telInput.nextElementSibling.innerHTML = "campo non valido";
            valid = false;
        }
        if (celInput.value.trim().length > 0 && !isTelValid(celInput.value)) {
            celInput.nextElementSibling.innerHTML = "campo non valido";
            valid = false;
        }
    }

    if (annoInput.value.trim().length == 0) {
        annoInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }

    // if (luogoInput.value.trim().length == 0 || !isLuogoNascitaValid(luogoInput.value)) {
    //     luogoInput.nextElementSibling.innerHTML = "campo non valido";
    //     valid = false;
    // } ylenia

    if (!isCampoValorizzato(luogoInput) || !isNomeCognomeValid(luogoInput.value)) {
        luogoInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }

    if (viaInput.value.trim().length == 0 && !isViaValid(viaInput.value)) {
        viaInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }

    if (!isCampoValorizzato(cittaInput) || !isNomeCognomeValid(cittaInput.value)) {
        cittaInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }

    if (!isCampoValorizzato(provInput) || !isNomeCognomeValid(provInput.value)) {
        provInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }

    // if (!isMatricolaValid(matricolaInput.value)) {
    //     matricolaInput.nextElementSibling.innerHTML = "campo non valido";
    //     valid = false;
    // }

    if (matricolaInput.value.trim().length < 0 && !isMatricolaValid(matricolaInput.value)) {
        matricolaInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }

        if (valid) {

            messagePar.classList.remove("error");
            messagePar.classList.add("success");
            messagePar.innerHTML = "Registrazione effettuata";  
            svuotaCampi();
        }else {
            messagePar.classList.remove("success");
            messagePar.classList.add("error");
            messagePar.innerHTML = "Registrazione non valida. Correggi i campi evidenziati.";
        }
    
    

});








// JavaScript

// function validateAddress(address) {
//   // Rimuove spazi superflui
//   address = address.trim();

//   // Separa i componenti dell'indirizzo in un array
//   const addressParts = address.split(' ');

//   // Controlla se sono presenti i componenti minimi
//   if (addressParts.length < 3) {
//     return false;
//   }

//   // Controllo del numero civico
//   const streetNumber = addressParts[0];
//   if (!isNaN(streetNumber) && streetNumber.length < 1) {
//     return false;
//   }

//   // Controllo della via
//   const streetName = addressParts[1];
//   if (!streetName || streetName.length < 1) {
//     return false;
//   }

//   // Controllo della città
//   const city = addressParts[2];
//   if (!city || city.length < 1) {
//     return false;
//   }

//   // Controllo del CAP (opzionale)
//   const postalCode = addressParts[3];
//   if (postalCode && !postalCode.match(/^\d{5}$/)) {
//     return false;
//   }

//   // Controllo del paese (opzionale)
//   const country = addressParts[4];
//   if (country && !country || country.length < 2) {
//     return false;
//   }

//   // Se tutti i controlli passano, l'indirizzo è valido
//   return true;
// }