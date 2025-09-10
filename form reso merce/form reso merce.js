//cache del dom

const prodottoInput = document.querySelector("#prodotto");
const movimentoInput = document.querySelector("#movimento");
const quantitaInput = document.querySelector("#quantita");
const dataInput = document.querySelector("#data");
const motivoInput = document.querySelector("#motivo");
// const allegatoInput = document.querySelector("#allegato");

const submitBtn = document.querySelector("#btn");
const errorSpans = document.querySelectorAll("span.error");
const messagePar = document.querySelector(".success");


function isCampoValorizzato(campo) {
    return prodottoInput.value.trim().length != 0;
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


    
    if (!isCampoValorizzato(prodottoInput) || !isNomeCognomeValid(prodottoInput.value)) {
        prodottoInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }

    if (movimentoInput.value.trim().length == 0) {
        movimentoInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }

    if (!isTelValid (quantitaInput.value)){
        quantitaInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }

    if (dataInput.value.trim().length == 0) {
        dataInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }

    if (motivoInput.value.trim().length == 0) {
        motivoInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }




    if (valid) {

        messagePar.classList.remove("error");
        messagePar.classList.add("success");
        messagePar.innerHTML = "Procedura completata";
        svuotaCampi();
    }

    else {
        messagePar.classList.remove("success");
        messagePar.classList.add("error");
        messagePar.innerHTML = "Procedura non completata";
    }



});

