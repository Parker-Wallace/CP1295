$(document).ready(function () {
    $("#CargoProcessingForm").on("submit", (event) => {
            event.preventDefault(); // prevent form submission
            console.log("hello");
            var DataRow = document.createElement("tr");
            var TransportID = document.createElement("td");
            var Description = document.createElement("td");
            var CargoWeight = document.createElement("td");
            TransportID.textContent = $("#TrasportID").val();
            Description.textContent = $("#Description").val();
            CargoWeight.textContent = $("#CargoWeight").val();
            DataRow.appendChild(TransportID);
            DataRow.appendChild(Description);
            DataRow.appendChild(CargoWeight);
            $("table").append(DataRow); // append the new row inside the table
});
});


document.write(`
<label>Cargo Box Car Manifest for Box Car ${$("#BoxCarID").val()}<label>
<table>
<tr>
<th>Trasport ID</th>
<th>Description</th>
<th>Manifest</th>
</tr>
</table>`)