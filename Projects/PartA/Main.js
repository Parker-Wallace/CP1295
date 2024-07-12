/**
 * represents a boxcar
 * @class
 */
class boxcar {
    /**
     * creates a new boxcar.
     * @param {String} Id - the Id of this boxcar in the format BX\d{3}
     * @param {number} tareWeight - the empty weight of this boxcar
     * @param {String} maxGrossWeight - the maximum weight this boxcar can carry including tareweight
     */
    constructor(Id, tareWeight, maxGrossWeight) {
        this.Id = Id
        this.tareWeight = tareWeight
        this.maxGrossWeight = maxGrossWeight
        this.maxCargoWeight = maxGrossWeight - tareWeight
        this.cargo = []
        }

        /**
         * Calculated the total weight of all the cargo on this boxcar
         * @returns {number} the total weight of all the cargo on this boxcar
         */
        cargoWeight() {
            return this.cargo.reduce(function (acc, obj) { return acc + obj.weight }, 0)
        }
        
        /**
         * Calculates the gross weight of the box car using tare weight and cargo weight
         * @returns {number} the gross weight of this boxcar using cargoweight and tareweight
         */
        grossWeight() {
            return this.cargoWeight() + this.tareWeight
        }

        /**
         * static method which generates a random instance of boxcar
         * @returns a randomized instance of boxcar
         */
        static generateRandomBoxcar() {
            return new boxcar(
                "BX" + (Math.floor(Math.random() * (999 - 100) ) + 100),
                (Math.floor(Math.random() * (500 - 100) ) + 100),
                (Math.floor(Math.random() * (999 - 500) ) + 500),
            )
        }
    }

/**
 * represents a shipment of cargo
 * @class
 */
class cargo {
    /**
     * creates a new instance of cargo
     * @param {String} transportId - the transport id of this cargo unit
     * @param {String} description - a basic description of this cargo
     * @param {number} weight - the total weight of this cargo
     * @param {String} status - the status of this cargo either "warehouse" or the @see boxcar#Id this cargo is contained in
     */
    constructor(transportId, description, weight, status) {
        this.transportId = transportId
        this.description = description
        this.weight = weight
        this.status = status
    }
}

var WAREHOUSEMANIFEST = []
var CONFIGUREDBOXCARS = []



function displayDivB () {
    $("#divB").show();
    $("#divA").hide();
    if (CONFIGUREDBOXCARS.length > 0) {
    displayDivC();
    } 
}

function displayDivC() {
    $("#divA").hide()
    $("#divC").show();
    let tbody = $("#divC").find("tbody")
    let tfoot = $("#divC").find("tfoot")
    tbody.empty()
    tfoot.empty()
    if (CONFIGUREDBOXCARS.length > 0) {    
        let totalCargoWeight = 0;
        CONFIGUREDBOXCARS.forEach(Boxcar => {
            let boxcarRow = document.createElement("tr")
            let IdCell = document.createElement("td")
            let tareWeightCell = document.createElement("td")
            let maxGrossWeightCell = document.createElement("td")
            let CargoWeightCell = document.createElement("td")
            let GrossWeightCell = document.createElement("td")
            IdCell.textContent = Boxcar.Id
            tareWeightCell.textContent = Boxcar.tareWeight
            maxGrossWeightCell.textContent = Boxcar.maxCargoWeight
            CargoWeightCell.textContent = Boxcar.cargoWeight()
            GrossWeightCell.textContent = parseInt(Boxcar.grossWeight())
            boxcarRow.append(IdCell, tareWeightCell, maxGrossWeightCell, CargoWeightCell, GrossWeightCell)
            tbody.append(boxcarRow)
            totalCargoWeight += parseInt(Boxcar.cargoWeight())
        });
        let totalCargoWeightRow = document.createElement("tr")
        let totalCargoWeightCell = document.createElement("td")
        let totalCargoWeightDescriptionCell = document.createElement("td")
        totalCargoWeightDescriptionCell.textContent = "Total Cargo Weight"
        totalCargoWeightDescriptionCell.colSpan = 3
        totalCargoWeightCell.textContent = totalCargoWeight
        totalCargoWeightRow.append(totalCargoWeightDescriptionCell, totalCargoWeightCell)
        tfoot.append(totalCargoWeightRow) 
    }
} 

function displayDivD () {
    $("#divA").hide();
    $("#divD").show();
    let boxCarSelectedValue = $("#Box_Car_Selected_input");
    let divDTableBody = $("#divD").find("tbody");
    let cargoEntryForm = $("#cargoForm");
    cargoEntryForm[0].reset();
    $("#cargoForm :input").prop("disabled", true);
    divDTableBody.addClass("selectabletable");
    divDTableBody.empty();
    CONFIGUREDBOXCARS.forEach(Boxcar => {
        let boxcarIdCell = document.createElement("td");
        let boxcarIdRow = document.createElement("tr");
        $(boxcarIdCell).on('click', ()=>{   
            divDTableBody.prop("disabled", true);
            divDTableBody.removeClass("selectabletable");
            $("#cargoForm :input").prop("disabled", false);
            boxCarSelectedValue.val(Boxcar.Id);
            $("td").off();
        })
        boxcarIdCell.textContent = Boxcar.Id;
        boxcarIdRow.append(boxcarIdCell);
        divDTableBody.append(boxcarIdRow);
    });
  }

function displayDivE(boxcar){
    $("#divA").hide()
    $("#divE").show()
    let divETableBody = $("#divE").find("tbody");
    let divEtableFooter = $("#divE").find("tfoot")
    $("#divE").find("h1").text(`CNA BOX CAR ${boxcar.Id} Manifest`)
    createManifestTable(divETableBody, divEtableFooter, boxcar.cargo)
}

function displayDivF() { 
    $("#divA").hide()  
    $("#divF").show()
    let divFTableBody = $("#divF").find("tbody");
    let divFtableFooter = $("#divF").find("tfoot");
    $("#divF").find("h1").text(`CNA - Warehouse Manifest - Station AAAA`)
    createManifestTable(divFTableBody,divFtableFooter, WAREHOUSEMANIFEST)
}

function displayDivG() {
    $("#divA").hide()
    $("#divG").show()
    
    let divGTableBody = $("#divG").find("tbody");
    $("#divG").find("h1").text(`CNA - Warehouse Manifest - Station AAAA`)
    divGTableBody.empty()
    WAREHOUSEMANIFEST.forEach(cargo => {
        let freightStatusRow = document.createElement("tr");
        let transportIdCell = document.createElement("td");
        let descriptionCell = document.createElement("td");
        let weightCell = document.createElement("td");
        let statusCell = document.createElement("td");
        
        divGTableBody.append(freightStatusRow);
        transportIdCell.textContent = cargo.transportId
        descriptionCell.textContent = cargo.description
        weightCell.textContent = cargo.weight
        statusCell.textContent = "warehouse"
        divGTableBody.append(transportIdCell, descriptionCell, weightCell, statusCell);
    })
    CONFIGUREDBOXCARS.forEach(Boxcar => {
        Boxcar.cargo.forEach(cargo => {  
            let freightStatusRow = document.createElement("tr");
            let transportIdCell = document.createElement("td");
            let descriptionCell = document.createElement("td");
            let weightCell = document.createElement("td");
            let statusCell = document.createElement("td");
            
            divGTableBody.append(freightStatusRow);
            transportIdCell.textContent = cargo.transportId
            descriptionCell.textContent = cargo.description
            weightCell.textContent = cargo.weight
            statusCell.textContent = cargo.status
            divGTableBody.append(transportIdCell, descriptionCell, weightCell, statusCell);})
        }   
    )}

/**
 * function for creating the manifest table for Div E and F
 * @param {Node} tbody the body element of the table
 * @param {Node} tfoot the footer element of the table
 * @param {Array.<cargo>} cargoArray the array of cargo objects to be appended to the table
 */
function createManifestTable(tbody, tfoot, cargoArray) {
    tbody.empty()
    tfoot.empty()
    let totalCargoWeight = 0
    cargoArray.forEach(cargoUnit => {
        let boxcarIdRow = document.createElement("tr");
        let transportIdCell = document.createElement("td");
        let descriptionCell = document.createElement("td");
        let weightCell = document.createElement("td");
        
        tbody.append(boxcarIdRow);
        transportIdCell.textContent = cargoUnit.transportId
        descriptionCell.textContent = cargoUnit.description
        weightCell.textContent = cargoUnit.weight
        totalCargoWeight += parseInt(cargoUnit.weight)
        tbody.append(transportIdCell, descriptionCell, weightCell);
    })
    let totalCargoWeightRow = document.createElement("tr")
    let totalCargoWeightCell = document.createElement("td")
    let totalCargoWeightDescriptionCell = document.createElement("td")
    totalCargoWeightDescriptionCell.textContent = "Total Cargo Weight"
    totalCargoWeightDescriptionCell.colSpan = 2
    totalCargoWeightCell.textContent = totalCargoWeight
    totalCargoWeightRow.append(totalCargoWeightDescriptionCell, totalCargoWeightCell)
    tfoot.append(totalCargoWeightRow) 
}

/**
 * validates boxcar creation form and adds the boxcar to the @see CONFIGUREDBOXCARS array
 * @param {Event} event the object which initiated the function
 */
function validateCreateBoxcar(event){
    event.preventDefault();
    $(event.currentTarget).find("span").text("");
    let boxcarId = $("#Boxcar_ID_input").val();
    let tareWeight = parseInt($("#TAREWeight_input").val());
    let maxGrossWeight = parseInt($("#Max_Gross_Weight_input").val());

    
    if (!(/BX\d{3}$/).test(boxcarId)) {
        $("#Boxcar_ID_input").next().text("Boxcar ID must be in the format BX123");
    }
    else if (0 > tareWeight || tareWeight > 200000) {
        $("#TAREWeight_input").next().text("TARE weight ust be between 0 and 200,000");
    }
    else if (maxGrossWeight < tareWeight) {
        $("#Max_Gross_Weight_input").next().text("Gross weight must be larger than TARE weight");
    }  
    else if (0 > maxGrossWeight || maxGrossWeight > 200000) {
        $("#Max_Gross_Weight_input").next().text("Max gross weight must be between 0 and 200,000")}
    else {
        CONFIGUREDBOXCARS.push(new boxcar(
        $(this[0]).val(),
        $(this[1]).val(),
        $(this[2]).val(),
        ))
        displayDivC()
    }
}

function validateCreateCargo(event) {
    event.preventDefault();
    let divDwarehouseSpan = $("#divD").find("span");
    let boxCarSelectedValue = $("#Box_Car_Selected_input");
    let Transport_ID = $("#Transport_ID_input").val()
    let Description = $("#Description_input").val()
    let Cargo_Weight = parseInt($("#DivD_Cargo_Weigh_input").val())
    console.log(typeof(Cargo_Weight))
    const boxcar = CONFIGUREDBOXCARS.find(boxcar => boxcar.Id === boxCarSelectedValue.val())
    const maxCargoWeight = boxcar.maxCargoWeight - boxcar.cargoWeight()
    divDwarehouseSpan.text('')
    if (Cargo_Weight > maxCargoWeight) {
        let newCargo = new cargo(Transport_ID, Description, Cargo_Weight, "Warehouse")
        WAREHOUSEMANIFEST.push(newCargo)
        divDwarehouseSpan.text("Weight Exceeds boxcar weight... diverting to warehouse")
        $("#divF, #divE").hide()
        displayDivF()
    }
    else {
        let newCargo = new cargo(Transport_ID, Description, Cargo_Weight, boxcar.Id)
        boxcar.cargo.push(newCargo)
        $("#divF, #divE").hide()
        displayDivE(boxcar)
    }
}

/**
 * Function for returning to the div A main menu.
 * 
 * hides any current visible div's, displays div A, and clears all radio buttons
 */
function Handle_return_to_menu() {
    $("div").hide();
    $("#divA").toggle();
    $("[name='menu']").prop('checked', false);
}

$(function () {
    //initial page load
    $("[name='menu']").prop('checked', false)
    
    //div A event listeners
    $(".Return_to_main_page_btn").on("click", Handle_return_to_menu)


    //form event listeners
    $("#createBoxcarForm").on("submit", validateCreateBoxcar)
    $("#cargoForm").on('submit', validateCreateCargo)

    $('#return_to_create_box_car_btn').on('click', ()=>{
        $('#divC').hide()
        $('#createBoxcarForm')[0].reset()
        $('#divB').show()
    })

    $(".returnToCreateFreight").on("click", (event) => {
        $(event.currentTarget).parent("div").toggle();
        $("#divD").toggle();
        displayDivD();
    })
})