"use strict";

function displayValues() {
    let output = "";

    // read all the form values
    let amountPeople = document.getElementById("amountpeople").value;

    // do some calculations
    let subtotal = amountPeople * 30;

    // generate the output
    document.getElementById("subtotal").value = subtotal;
    output += `<p>You ordered a shuttle for ${amountPeople} ${amountPeople > 1 ? 'people' : 'person'}</p>`;

    document.getElementById("output").innerHTML = output;
    console.log(output);
}
