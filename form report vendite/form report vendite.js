//cache del dom

const nomeInput = document.querySelector("#nome");
const prodottoInput = document.querySelector("#prodotto");
const quantitaInput = document.querySelector("#quantita");
// const unitaInput = document.querySelector("#unita");
const totaleInput = document.querySelector("#totale");

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

    if (prodottoInput.value.trim().length == 0) {
        prodottoInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }

    if (quantitaInput.value.trim().length == 0) {
        quantitaInput.nextElementSibling.innerHTML = "campo non valido";
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


function calcolaTotale() {
    const prodotto = document.getElementById("prodotto").value;
    const quantita = parseFloat(document.getElementById("quantita").value);
    const unita = document.getElementById("unita").value;
    let prezzoUnitario;

    // Definisci i prezzi per unità dei prodotti
    const prezzi = {
        'Prodotto1': 1, // esempio prezzo per pezzo
        'Prodotto2': 2, // esempio prezzo per grammo
        'Prodotto3': 3, // esempio prezzo per kilogrammo
    };

    // Assegna il prezzo unitario in base al prodotto selezionato
    if (prezzi[prodotto]) {
        prezzoUnitario = prezzi[prodotto];
    } else {
        alert("Seleziona un prodotto valido.");
        return;
    }

    // Calcola il totale
    let totale;
    if (unita === "Pz") {
        totale = quantita * prezzoUnitario;
    } else if (unita === "Gr") {
        totale = quantita * prezzoUnitario;
    } else if (unita === "Kg") {
        totale = quantita * prezzoUnitario;
    } else {
        alert("Seleziona un'unità valida.");
        return;
    }

    // Mostra il totale
    document.getElementById("totale").value = totale.toFixed(2) + "€";
    
}

// Aggiungi event listeners per calcolare il totale in tempo reale
quantitaInput.addEventListener('input', calcolaTotale);
unitaSelect.addEventListener('change', calcolaTotale);
prodottoSelect.addEventListener('change', calcolaTotale);


