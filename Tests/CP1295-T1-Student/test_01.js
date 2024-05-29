"use strict";
const $ = selector => {return document.querySelector(selector)}
// CP1295 Advanced JavaScript CP1295
// window.alert("Script is running");

document.addEventListener('DOMContentLoaded', ()=> {
    $("#process_ticket_id").addEventListener("click", formValidation)
    $("#clear_fields_id").addEventListener('click', ()=>{
        console.log("clear")
        document.querySelectorAll("div > .clear_list").forEach(e => e.value = "")
        document.querySelectorAll("span").forEach(e => e.textContent = "")
        $("#output_ta_id").textContent = ""
    } )
})

function formValidation () {
    document.querySelectorAll("span").forEach(e => e.textContent = "*")
    if ($("#name_id").value == "") {
        console.log("blank")
        $("#name_feedback_id").textContent = "Name cannot be blank"
    }
    else if ($("#seats_id").value == "") {
        console.log("blank")
        $("#seats_feedback_id").textContent = "Seat cannot be blank"
    }
    else if (isNaN($("#seats_id").value)) {
        $("#seats_id").value = ""
        $("#seats_feedback_id").textContent = "Seat must be numeric"
    } 
    else if (parseInt($("#seats_id").value) > 4 | parseInt($("#seats_id").value) < 1) {
        $("#seats_id").value = ""
        $("#seats_feedback_id").textContent = "Seat selection must be between 1 and 4"   
    }
    else if (parseInt($("#seat_count_id").value) + parseInt($("#seats_id").value) > 12) {
        console.log("blank")
        $("#seat_count_feedback_id").textContent = "Too many many seats booked"   
    }
    else {
        if (isNaN(parseInt($("#seat_count_id").value))) {
            $("#seat_count_id").value =  0 + parseInt($("#seats_id").value)
            $("#output_ta_id").textContent += "\n" + $("#name_id").value + '\t' + $("#seats_id").value
            console.log("first")
        }
            else {
            console.log("second")
            $("#seat_count_id").value = (parseInt($("#seat_count_id").value)) + parseInt($("#seats_id").value)
            $("#output_ta_id").textContent += '\n' + $("#name_id").value + '\t' + $("#seats_id").value}
    }
}