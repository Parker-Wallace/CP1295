"use strict";

$(document).ready(() => {
    console.debug("document ready");
    $("#apply_id").click(event => {
        event.preventDefault()
        const passCode = $("#pass_id")
        check(passCode)              // (1) Fill in the missing Line
    });
});

const check = (passCode) => {
    const itemCodePattern = (/^[A-Z]{3}$/); // (2) Fix this line
    var testPassCode = passCode.val().trim();
    if (testPassCode == "") {
        passCode.next().text(`No Free Ticket`);
    } else if (!itemCodePattern.test(testPassCode)) {
        passCode.next().text(`No Free Ticket`);
    } else {
        passCode.next().text(`You WIN a FREE Ticket`);
    }
}
