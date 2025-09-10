//cache del dom

const prodottoInput = document.querySelector("#prodotto");
const quantitaInput = document.querySelector("#quantita");
const dataInput = document.querySelector("#data_ricezione");
const fatturaInput = document.querySelector("#numero_fattura");

const submitBtn = document.querySelector("#btn");
const errorSpans = document.querySelectorAll("span.error");
const messagePar = document.querySelector(".success");


function isCampoValorizzato(campo) {
    return nomeInput.value.trim().length != 0;
}

function isNomeCognomeValid(valore) {
    let pattern = /^[A-Za-z\s-,]+$/;
    return pattern.test(valore);
}

function isTelValid(valore) {
    let pattern = /^[0-9\s]+$/;
    return pattern.test(valore);
}

function svuotaCampi() {
    document.querySelector("form").reset();
    prodottoInput.focus(); //autofocus sul primo input
}


//gestione eventi
submitBtn.addEventListener ("click", function (e) {

    e.preventDefault(); //blocco della submit

    for (let error of errorSpans) {
        error.innerHTML="";
    }
    let valid = true; //per vedere alla fine se i campi sono validi


    // if (!isCampoValorizzato(prodottoInput) || !isNomeCognomeValid(prodottoInput.value)) {
    //     prodottoInput.nextElementSibling.innerHTML = "campo non valido";
    //     valid = false;
    // }

    if (prodottoInput.value.trim().length == 0 || !isNomeCognomeValid(prodottoInput.value)) {
        prodottoInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }
    if (quantitaInput.value.trim().length == 0 || !isTelValid(quantitaInput.value)) {
        quantitaInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }
    if (dataInput.value.trim().length == 0) {
        dataInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }
    if (fatturaInput.value.trim().length == 0 || !isTelValid(fatturaInput.value)) {
        fatturaInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }
    

    if (valid) {

        messagePar.classList.remove("error");
        messagePar.classList.add("success");
        messagePar.innerHTML = "Ordine registrato";
        svuotaCampi();
    }

    else {
        messagePar.classList.remove("success");
        messagePar.classList.add("error");
        messagePar.innerHTML = "Ordine non registrato";
    }




});