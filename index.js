const formulario = document.querySelector("form");

function validacion() {

    let alerts = document.getElementById("alert_");
    let card = document.getElementById("card_");
    let cvc = document.getElementById("cvc_");
    let amount = document.getElementById("amount_");
    let namec = document.getElementById("name_");
    let lastname =document.getElementById("last-name");
    let cityc = document.getElementById("city_");
    let statec = document.getElementById("state_");
    let postalc= document.getElementById("postal_");
    let messagec= document.getElementById("message_")


    if(card.value === "") {
        card.style.backgroundColor = '#D0090344';
        alerts.classList.remove("d-none");
    }
    if(cvc.value === "") {
        cvc.style.backgroundColor = '#D0090344';
        alerts.classList.remove("d-none");
    }
    if(amount.value === "") {
        amount.style.backgroundColor = '#D0090344';
        alerts.classList.remove("d-none");
    }
    if (namec.value === "") {
        namec.style.backgroundColor = '#D0090344';
        alerts.classList.remove("d-none");
    }
    if(lastname.value === "") {
        lastname.style.backgroundColor = '#D0090344';
        alerts.classList.remove("d-none");
    }
    if(cityc.value === "") {
        cityc.style.backgroundColor = '#D0090344';
        alerts.classList.remove("d-none");
    }
    if(statec.value == 'Pick a state') {
        statec.style.backgroundColor = '#D0090344';
        alerts.classList.remove("d-none");
    }
    if(postalc.value === "") {
        postalc.style.backgroundColor = '#D0090344';
        alerts.classList.remove("d-none");
    }
    if(messagec.value === "") {
        messagec.style.backgroundColor = '#D0090344';
        alerts.classList.remove("d-none");
    }
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  validacion();
});