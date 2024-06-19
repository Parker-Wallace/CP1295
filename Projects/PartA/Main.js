$(document).ready(function () {
    //main menu event listeners
    $("[name='menu']").prop('checked', false)
    $("[name='menu']").on("change", Handle_manu_button_selection)
    $(".Return_to_main_page_btn").on("click", Handle_return_to_menu)

    //divb event listeners
    $("form[name='create_boxcar'").on("submit", validate_create_boxcar)
});

function Handle_manu_button_selection(event) {
    console.log('pressed')
    $(this).parent().toggle()
    $(`body div:nth-child(${event.target.getAttribute("data-index")})`).toggle()
}

function Handle_return_to_menu(event) {
    $(event.target).parent().toggle()
    $("#divA").toggle()
}

function validate_create_boxcar(event){
    event.preventDefault();
    $(this).find("span").text("")
    let forminfo = {}
    if (parseInt($("#Max_Gross_Weight_input").val()) < parseInt($("#TAREWeight_input").val())) {
        console.log("bad input")
        $("#Max_Gross_Weight_input").next().text("Gross weight must be larger than TARE weight")
    }

    
    console.log(forminfo)
    console.log("form submitted")
}