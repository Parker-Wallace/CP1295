$(document).ready(function () {
    $("#CargoProcessingForm").on("submit", (event) => {
        $("#cargoProcessingErrorMessage").empty();
        event.preventDefault(); // prevent form submission
        if ($("#transportId").val() == "" | $("#description").val() == "" | $("#cargoWeight").val() == "") {
            $("#cargoProcessingErrorMessage").text("blank field detected, please fill all fields")
            return
        }
        else if (parseInt($("#cargoWeight")) +  parseInt($("#currentWeight")) > parseInt($("#maxWeight"))) {
            window.alert("Max weight for cargo exceeded ")
            return
        }
        else if (isNaN(parseInt($("#cargoWeight").val()))) {
            window.alert("Cargo weight is not a numeric value")
            return
        }
        
        // Create a table for box car manifest if it doesn't already exist
        var boxCarId = $("#boxCarId").val();
        if ($(`#${boxCarId}`).length === 0) {
            // Create label for the manifest table
            var manifestLabel = $("<label></label>").text(`Cargo Box Car Manifest for Box Car ${boxCarId}`);

            // Create a table with id = boxcarid
            var table = $("<table></table>").attr("id", boxCarId);

            var tableheader = $("<tr></tr>"); // Create table header

            // Create header columns
            var th1 = $("<th></th>").text("Transport ID");
            tableheader.append(th1);
            
            var th2 = $("<th></th>").text("Description");
            tableheader.append(th2);
            
            var th3 = $("<th></th>").text("Cargo Weight");
            tableheader.append(th3);

            // Create total weight row
            var totalWeightRow = $("<tr><td colspan='2'>Total Cargo Weight</td></tr>");
            totalWeightRow.append($("<td id='totalWeight'></td>").text("0"))

            // Append table elements
            table.append(tableheader);
            table.append(totalWeightRow);
            manifestLabel.append(table);
            $("#CargoProcessingForm").append(manifestLabel);
        }

        // Create a new row for the form data
        var DataRow = $("<tr></tr>");

        // Append information to row
        DataRow.append($("<td></td>").text($("#transportId").val()));
        DataRow.append($("<td></td>").text($("#description").val()));
        DataRow.append($("<td></td>").text($("#cargoWeight").val()));

        // Insert the new row before the last row of the table
        $(`#${boxCarId} tr:last`).before(DataRow);
        
        //update the total weight box
        $("#totalWeight").text(parseInt($("#totalWeight").text()) + parseInt($("#CargoWeight").val()));

      
    });
});
