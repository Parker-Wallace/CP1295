/*TODO: 
 * add functionality on divb for calculating gross weight and cargo weight
 * make it such that div c shows udirng the initla div b load if there is data
*/
var WAREHOUSEMANIFEST = []
var CONFIGUREDBOXCARS = [GENERATERANDOMBOXCAR(), GENERATERANDOMBOXCAR()]
// var Configured_Box_Cars = []

function boxcar(Id, tareWeight, maxGrossWeight) {
    this.Id = Id
    this.tareWeight = tareWeight
    this.maxGrossWeight = maxGrossWeight
    this.maxCargoWeight = maxGrossWeight - tareWeight
    this.cargo = []
    this.cargoWeight = () => {
        return this.cargo.reduce(function (acc, obj) { return acc + obj.weight; }, 0);
    }}

function cargo(transportId, description, weight, status) {
    this.transportId = transportId
    this.description = description
    this.weight = weight
    this.status = status
}

function GENERATERANDOMBOXCAR() {
    return new boxcar(
        "BX" + (Math.floor(Math.random() * (999 - 100) ) + 100),
        (Math.floor(Math.random() * (500 - 100) ) + 100),
        (Math.floor(Math.random() * (999 - 500) ) + 500),
    )
}

function Handle_return_to_menu() {
    $("div").hide();
    $("#divA").toggle();
    $("[name='menu']").prop('checked', false);

}



function DisplayDivB () {
    $("#divB").toggle();
    $("form").on("submit", validate_create_boxcar)
    DisplayDivC();
    
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

            CONFIGUREDBOXCARS.push(new boxcar(
            $(this[0]).val(),
            $(this[1]).val(),
            $(this[2]).val(),
            $(this[3]).val(),
            $(this[4]).val()
            ))
            DisplayDivC()
        }
}
}

function DisplayDivC() {
    divCTableBody = $("#divC").find("tbody")
    divCTableFooter = $("#divC").find("tfoot")
    if (CONFIGUREDBOXCARS.length > 0) {
        $("#divC").show();
        divCTableBody.empty()
        divCTableFooter.empty()
        console.log(CONFIGUREDBOXCARS)
        let totalCargoWeight = 0;
        CONFIGUREDBOXCARS.forEach(Boxcar => {
            divCTableBody.append(`<tr>`);
            divCTableBody.append(`<td>${Boxcar.Id}</td>`);
            divCTableBody.append(`<td>${Boxcar.tareWeight}</td>`); 
            divCTableBody.append(`<td>${Boxcar.maxGrossWeight}</td>`); 
            divCTableBody.append(`<td>${Boxcar.cargoWeight}</td>`); 
            divCTableBody.append(`<td>${Boxcar.grossWeight}</td>`); 
            totalCargoWeight += parseInt(Boxcar.cargoWeight)
        });
        divCTableFooter.append(`Total Cargo Weight: ${totalCargoWeight}`)
    }
} 

function DisplayDivD () {
    $("#divD").toggle();
    let boxCarSelectedValue = $("#Box_Car_Selected_input");
    let divDTableBody = $("#divD").find("tbody");
    let maxCargoWeight = 0;
    let cargoEntryForm = $("form")
    cargoEntryForm.off()
    $("#cargoForm :input").prop("disabled", true);
    divDTableBody.addClass("selectabletable");
    divDTableBody.empty();
    CONFIGUREDBOXCARS.forEach(Boxcar => {
        let boxcarIdCell = document.createElement("td");
        let boxcarIdRow = document.createElement("tr");
        divDTableBody.append(boxcarIdRow);
        $(boxcarIdCell).on('click', ()=>{   
        divDTableBody.prop("disabled", true);
        divDTableBody.removeClass("selectabletable");
        $("#cargoForm :input").prop("disabled", false);
        boxCarSelectedValue.val(Boxcar.Id)
        maxCargoWeight = Boxcar.maxCargoWeight
        $("td").off()
    })
        boxcarIdCell.textContent = Boxcar.Id
        divDTableBody.append(boxcarIdCell);
    });
    cargoEntryForm.on('submit', (event) => {
        event.preventDefault();
        let boxcar = CONFIGUREDBOXCARS.find(boxcar => boxcar.Id === boxCarSelectedValue.val())
        let Transport_ID = $("#Transport_ID_input").val()
        let Description = $("#Description_input").val()
        let Cargo_Weight = $("#DivD_Cargo_Weigh_input").val()
        if (parseInt(Cargo_Weight) > boxcar.maxCargoWeight) {
            let newCargo = new cargo(Transport_ID, Description, Cargo_Weight, "Warehouse")
            WAREHOUSEMANIFEST.push(newCargo)
            displayDivF()
        }
        else {
            let newCargo = new cargo(Transport_ID, Description, parseInt(Cargo_Weight), boxcar.Id)
            boxcar.cargo.push(newCargo)
            displayDivE(boxcar)
        }
    })

}

function displayDivE(boxcar){
    $("#divE").show()
    const cargo = boxcar.cargo
    let divETableBody = $("#divE").find("tbody");
    console.log(boxcar.cargo)
    $("#divE").find("h1").text(`CNA BOX CAR ${boxcar.Id} Manifest`)
    divETableBody.empty()
    cargo.forEach(cargo => {
        let boxcarIdRow = document.createElement("tr");
        let transportIdCell = document.createElement("td");
        let descriptionCell = document.createElement("td");
        let weightCell = document.createElement("td");
        
        divETableBody.append(boxcarIdRow);
        transportIdCell.textContent = cargo.transportId
        descriptionCell.textContent = cargo.description
        weightCell.textContent = cargo.weight
        divETableBody.append(transportIdCell, descriptionCell, weightCell);
    })
    


}

function returnToCreateFreight() {
    $("#divE, #divD").toggle()
    DisplayDivD()

}

function displayDivF() {   
    $("#divF").show()

    let divFTableBody = $("#divF").find("tbody");
    $("#divF").find("h1").text(`CNA - Warehouse Manifest - Station AAAA`)
    divFTableBody.empty()
    WAREHOUSEMANIFEST.forEach(cargo => {
        console.log(cargo)
        let boxcarIdRow = document.createElement("tr");
        let transportIdCell = document.createElement("td");
        let descriptionCell = document.createElement("td");
        let weightCell = document.createElement("td");
        
        divFTableBody.append(boxcarIdRow);
        transportIdCell.textContent = cargo.transportId
        descriptionCell.textContent = cargo.description
        weightCell.textContent = cargo.weight
        divFTableBody.append(transportIdCell, descriptionCell, weightCell);
    })
    
}

$(function () {
    //main menu event listeners
    $("input:radio").on('change', ()=>{$("#divA").toggle()})
    $("[name='menu']").prop('checked', false)
    $("#Create_boxcar_radio_btn").on('change', DisplayDivB)
    $("#Add_freight_radio_btn").on("change", DisplayDivD)
    $("#Boxcar_data_radio_btn").on('change',)
    $("#Warehouse_data_radio_btn").on('change',)
    $("#All_freight_status_radio_btn").on('change',)

    $(".Return_to_main_page_btn").on("click", Handle_return_to_menu)
    $("#returnToCreateFreight").on('click', ()=>{console.log('hello')})
    //divb event listeners
   

    $("#DivB_Cargo_Weight_input").change(()=>{
        console.log("chneg")
        $("#Gross_Weight_input").val() = this.val() + parseInt($("#TAREWeight_input").val())
    })

    $('#return_to_create_box_car_btn').on('click', ()=>{
        $('#divC').hide()
        $('[name="create_boxcar"]')[0].reset()
    })
});