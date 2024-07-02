/*TODO: 
 * add functionality on divb for calculating gross weight and cargo weight
 * make it such that div c shows udirng the initla div b load if there is data
*/
var Configured_Box_Cars = []

function boxcar(ID, tareWeight, maxGrossWeight, cargoWeight, grossWeight) {
    this.ID = ID
    this.tareWeight = tareWeight
    this.maxGrossWeight = maxGrossWeight
    this.cargoWeight = cargoWeight
    this.grossWeight = grossWeight
}

function Handle_manu_button_selection(event) {
    console.log('pressed')
    $(this).parent().toggle()
    $(`body div:nth-child(${event.target.getAttribute("data-index")})`).toggle()
}

function Handle_return_to_menu() {
    $("div").hide();
    $("#divA").toggle();
    $("[name='menu']").prop('checked', false);

}

/*
 * validation for the create box car form that ensures:
 * 
 * Boxcar ID is in the form BX followed by 3 digits
 * TARE weight is between 0 and 200000
 * Max gross weight is Greater than TARE weight and between 0 and 200000 
 */
function validate_create_boxcar(event){
    //prevent default and clear any existing error messages
    event.preventDefault();
    $(this).find("span").text("")
    
    if (!(/BX\d{3}/).test($("#Boxcar_ID_input").val())) {
        $("#Boxcar_ID_input").next().text("Boxcar ID must be in the format BX123")
    }
    else if (0 > parseInt($("#TAREWeight_input").val()) || parseInt($("#TAREWeight_input").val()) > 20000) {
        $("#TAREWeight_input").next().text("TARE weight ust be between 0 and 200000")
    }
    else if (parseInt($("#Max_Gross_Weight_input").val()) < parseInt($("#TAREWeight_input").val())) {
        $("#Max_Gross_Weight_input").next().text("Gross weight must be larger than TARE weight")
    }  
    else if (0 > parseInt($("#Max_Gross_Weight_input").val()) || parseInt($("#Max_Gross_Weight_input").val()) > 20000) {
        $("#Max_Gross_Weight_input").next().text("Max gross weight must be between 0 and 200000")}
    // if all conditions pass add the box car to the array
    else {

        Configured_Box_Cars.push(new boxcar(
        $(this[0]).val(),
        $(this[1]).val(),
        $(this[2]).val(),
        $(this[3]).val(),
        $(this[4]).val()
        ))
        display_box_cars()
    }
}

function display_box_cars() {
    divCTableBody = $("#divC").find("tbody")
    divCTableFooter = $("#divC").find("tfoot")
    if (Configured_Box_Cars.length > 0) {
        $("#divC").show();
        divCTableBody.empty()
        divCTableFooter.empty()
        console.log(Configured_Box_Cars)
        let totalCargoWeight = 0;
        Configured_Box_Cars.forEach(Boxcar => {
            divCTableBody.append(`<tr>`);
            divCTableBody.append(`<td>${Boxcar.ID}</td>`);
            divCTableBody.append(`<td>${Boxcar.tareWeight}</td>`); 
            divCTableBody.append(`<td>${Boxcar.maxGrossWeight}</td>`); 
            divCTableBody.append(`<td>${Boxcar.cargoWeight}</td>`); 
            divCTableBody.append(`<td>${Boxcar.grossWeight}</td>`); 
            totalCargoWeight += parseInt(Boxcar.cargoWeight)
        });
        divCTableFooter.append(`total cargo weight: ${totalCargoWeight}`)
    }
} 

$(document).ready(function () {
    //main menu event listeners
    $("[name='menu']").prop('checked', false)
    $("[name='menu']").on("change", Handle_manu_button_selection)
    $(".Return_to_main_page_btn").on("click", Handle_return_to_menu)

    //divb event listeners
    $("form[name='create_boxcar'").on("submit", validate_create_boxcar)

    $("#DivB_Cargo_Weight_input").change(()=>{
        console.log("chneg")
        $("#Gross_Weight_input").val() = this.val() + parseInt($("#TAREWeight_input").val())
    })

    $('#return_to_create_box_car_btn').on('click', ()=>{
        $('#divC').hide()
        $('[name="create_boxcar"]')[0].reset()
    })
});