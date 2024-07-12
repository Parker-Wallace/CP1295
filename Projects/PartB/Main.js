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
        this.destination = transportId.substring(transportId.length - 3)
    }
}

class station {
    constructor(stationId) {
    this.Id = stationId
    this.warehouseManifest = []
    }

    cargoWeight() {
        return this.cargo.reduce(function (acc, obj) { return acc + obj.weight }, 0)
    }
}

var STATIONS = [new station("S01"), new station("S02"), new station("S03"), new station("S04")]
var WAREHOUSEMANIFEST = []
var TRAIN = {
    boxcars:[],
    location:STATIONS[0]
}

var CURRENTDAY = 1

function displayDivB () {
    $("#divB").show();
    $("#divA").hide();
    if (TRAIN.boxcars.length > 0) {
    displayDivC();
    } 
}

function DisplayDivC() {
    $("#divC").show();
    divCTableBody = $("#divC").find("tbody")
    divCTableFooter = $("#divC").find("tfoot")
    
    if (CONFIGUREDBOXCARS.length > 0) {
        
        divCTableBody.empty()
        divCTableFooter.empty()
        console.log(CONFIGUREDBOXCARS)
        let totalCargoWeight = 0;
        CONFIGUREDBOXCARS.forEach(Boxcar => {
            divCTableBody.append(`<tr>`);
            divCTableBody.append(`<td>${Boxcar.Id}</td>`);
            divCTableBody.append(`<td>${Boxcar.tareWeight}</td>`); 
            divCTableBody.append(`<td>${Boxcar.maxGrossWeight}</td>`); 
            divCTableBody.append(`<td>${Boxcar.cargoWeight()}</td>`); 
            divCTableBody.append(`<td>${parseInt(Boxcar.grossWeight())}</td>`); 
            totalCargoWeight += parseInt(Boxcar.cargoWeight())
        });
        divCTableFooter.append(`Total Cargo Weight: ${totalCargoWeight}`)
    }
} 

function DisplayDivD () {
    $("#divD").toggle();
    let boxCarSelectedValue = $("#Box_Car_Selected_input");
    let divDTableBody = $("#divD").find("tbody");
    let cargoEntryForm = $("#cargoForm")
    cargoEntryForm.off()
    cargoEntryForm[0].reset()
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
        $("td").off()
    })
        boxcarIdCell.textContent = Boxcar.Id
        divDTableBody.append(boxcarIdCell);
    });
    cargoEntryForm.on('submit', (event) => {
        event.preventDefault();
        const boxcar = CONFIGUREDBOXCARS.find(boxcar => boxcar.Id === boxCarSelectedValue.val())
        let Transport_ID = $("#Transport_ID_input").val()
        let Description = $("#Description_input").val()
        let Cargo_Weight = $("#DivD_Cargo_Weigh_input").val()
        const maxCargoWeight = boxcar.maxCargoWeight - boxcar.cargoWeight()
        if (parseInt(Cargo_Weight) > maxCargoWeight) {
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

function returnToCreateFreightE() {
    $("#divE, #divD").toggle()
    DisplayDivD()

}
function returnToCreateFreightF() {
    $("#divF, #divD").toggle()
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

function displayDivG() {
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
    
    )
}

$(function () {
    //main menu event listeners
    $("input:radio").on('change', ()=>{$("#divA").toggle()})
    $("[name='menu']").prop('checked', false)
    $("#Create_boxcar_radio_btn").on('change', DisplayDivB)
    $("#Add_freight_radio_btn").on("change", DisplayDivD)
    $("#Boxcar_data_radio_btn").on('change',DisplayDivC)
    $("#Warehouse_data_radio_btn").on('change',displayDivF)
    $("#All_freight_status_radio_btn").on('change',displayDivG)

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
        $('#divB').show()
    })
});