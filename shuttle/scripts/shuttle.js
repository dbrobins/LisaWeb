"use strict";

function displayValues() {
    let output = "";

    // read all the form values
    let amountPeople = document.getElementById("amountpeople").value;

    // do some calculations
    let subtotal = amountPeople * 30;
    let pstToPay = subtotal * 0.07;
    let gstToPay = subtotal * 0.08;
    let total = subtotal + gstToPay + pstToPay;

    // generate the output
    document.getElementById("subtotal").value = subtotal;
    output += `<p>You ordered a shuttle for ${amountPeople} ${amountPeople > 1 ? 'people' : 'person'}</p>`;
    document.getElementById("pstToPay").value = pstToPay;
    document.getElementById("gstToPay").value = gstToPay;
    document.getElementById("total").value = total;

    document.getElementById("output").innerHTML = output;
    console.log(output);
}
