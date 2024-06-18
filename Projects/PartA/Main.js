

$(document).ready(function () {
    $("[name='menu']").prop('checked', false)
    $("[name='menu']").on("change", Handle_manu_button_selection)
    $(".Return_to_main_page_btn").on("click", Handle_return_to_menu)
});

function Handle_manu_button_selection(event) {
    console.log('pressed')
    $(event.target).parent().toggle()
    $(`body div:nth-child(${event.target.getAttribute("data-index")})`).toggle()
}

function Handle_return_to_menu(event) {
    $(event.target).parent().toggle()
    $("#divA").toggle()
}