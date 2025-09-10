//cache del dom

const nomeInput = document.querySelector("#nome_prodotto");
// const descrizioneInput = document.querySelector("#descrizione");
const quantitaInput = document.querySelector("#quantita_iniziale");
const categoriaInput = document.querySelector("#categoria");
const fornitoreInput = document.querySelector("#fornitore");
const prezzoAcquistoInput = document.querySelector("#prezzo_acquisto");
const prezzoVenditaInput = document.querySelector("#prezzo_vendita");

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

function isPrezzoValid(valore) {
    // L'espressione regolare permette numeri (0-9) e simboli specifici.
    let pattern = /^[0-9.,:;!?\-+@#&*€]+$/;
    return pattern.test(valore);
}

function svuotaCampi() {
    document.querySelector("form").reset();
    nomeInput.focus(); //autofocus sul primo input
}


//gestione eventi
submitBtn.addEventListener ("click", function (e) {

    e.preventDefault(); //blocco della submit

    for (let error of errorSpans) {
        error.innerHTML="";
    }
    let valid = true; //per vedere alla fine se i campi sono validi


    if (!isCampoValorizzato(nomeInput) || !isNomeCognomeValid(nomeInput.value)) {
        nomeInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }

    if (!isCampoValorizzato(quantitaInput) || !isPrezzoValid(quantitaInput.value)) {
        quantitaInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }
    //oppure
    // if (quantitaInput.value.trim().length == 0) {
    //     quantitaInput.nextElementSibling.innerHTML = "campo non valido";
    //     valid = false;
    // }

    if (!isCampoValorizzato(categoriaInput) || !isNomeCognomeValid(categoriaInput.value)) {
        categoriaInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }

    if (!isCampoValorizzato(fornitoreInput) || !isNomeCognomeValid(fornitoreInput.value)) {
        fornitoreInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }

    if (!isCampoValorizzato(prezzoAcquistoInput) || !isPrezzoValid(prezzoAcquistoInput.value)) {
        prezzoAcquistoInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }

    if (!isCampoValorizzato(prezzoVenditaInput) || !isPrezzoValid(prezzoVenditaInput.value)) {
        prezzoVenditaInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }


    if (valid) {

        messagePar.classList.remove("error");
        messagePar.classList.add("success");
        messagePar.innerHTML = "Prodotto aggiunto con successo";
        svuotaCampi();
    }

    else {
        messagePar.classList.remove("success");
        messagePar.classList.add("error");
        messagePar.innerHTML = "Prodotto non aggiunto";
    }


});

