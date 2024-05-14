$(document).ready(function () {
    $("#CargoProcessingForm").on("submit", (event) => {

        event.preventDefault(); // prevent form submission

        // Create a table for box car manifest if it doesn't already exist
        var boxCarID = $("#BoxCarID").val();
        if ($(`#${boxCarID}`).length === 0) {
            // Create label for the manifest table
            var manifestLabel = $("<label></label>").text(`Cargo Box Car Manifest for Box Car ${boxCarID}`);

            // Create a table with id = boxcarid
            var table = $("<table></table>").attr("id", boxCarID);

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
        DataRow.append($("<td></td>").text($("#TransportID").val()));
        DataRow.append($("<td></td>").text($("#Description").val()));
        DataRow.append($("<td></td>").text($("#CargoWeight").val()));

        // Insert the new row before the last row of the table
        $(`#${boxCarID} tr:last`).before(DataRow);
        
        //update the total weight box
        $("#totalWeight").text(parseInt($("#totalWeight").text()) + parseInt($("#CargoWeight").val()));

      
    });
});
