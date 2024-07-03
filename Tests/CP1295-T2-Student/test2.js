"use strict"

var day_val = 1;
var Results = [];


$(document).ready(() => {
  $("#day_id").val(day_val);
  reset_form();

  $("#yn_input_id").change(evt => { next_day() })
  $("#precipitation_input_id").on("change", evt => { check_precipitation_input() })
});

const next_day = () => {
  var yn = $("#yn_input_id").val();
  if (yn == "Y" || yn == "y") {
    update_weather(parseInt($("#precipitation_input_id").val()))
    day_val++;
    $("#day_id").val(day_val);
  }
  if (day_val == 6) {
    $("#yn_id").hide()
    $("#data_entry_id").hide()
    $("#results_id").show()
    $("#results_id h3").append(document.createElement("ul"))
    let results_list = $("#results_id").find("ul")
    // Results.reverse()
    Results = reverseArr(Results)
    Results.forEach(element => {
      const list_element = document.createElement("li")
      list_element.innerText = element
      results_list.append(list_element)
    });
}  $("#yn_input_id").val("");
}

const check_precipitation_input = () => {
  var precipitation_input_ele = $("#precipitation_input_id");
  var precipitation_input_txt = precipitation_input_ele.val();
  var precipitation_input_val = -1;
  let error_status_p = false;
  $("#yn_id").show()
  if (isNaN(precipitation_input_txt) ||
    precipitation_input_txt == "") {
    error_status_p = true;
    precipitation_input_ele.next().text("Error - Not a Number");
    $("inches_display_id").val("0");
    $("#yn_id").hide()
  }
  else {
    precipitation_input_val = parseInt(precipitation_input_txt);

    if (precipitation_input_val < 0 ||
      precipitation_input_val > 1000) {
      error_status_p = true;
      precipitation_input_ele.next().text("Error - <0 or > 1000");
      $("#inches_display_id").val("0");
      $("#yn_id").hide()
    }
    else {
      precipitation_input_ele.next().text("");
      var inches_val = (precipitation_input_val * 0.039701).toFixed(2);
      $("#inches_display_id").val(inches_val);
      
    }
  }
}

const update_weather = (precip_value) => {
  if ($("#rain_selected_id:checked").length > 0) {
    if (isNaN(parseInt($("#rain_total_id").val()))) {
      $("#rain_total_id").val(precip_value) 
    }
    else {$("#rain_total_id").val(parseInt($("#rain_total_id").val()) + precip_value) }
    Results.push(`Day: ${day_val} Rain: ${precip_value}`)
  }
  else {
    if (isNaN(parseInt($("#snow_total_id").val()))) {
      $("#snow_total_id").val(precip_value) 
    }
    else {$("#snow_total_id").val(parseInt($("#snow_total_id").val()) + precip_value) 
  }
  Results.push(`Day: ${day_val} Snow: ${precip_value}`)
}
}
const reset_form = () => {
  $("#precipitation_input_id").val("0");
  $("#precipitation_input_id").next().text("");
  $("#inches_display_id").val("0");
  $("#rain_selected_id").checked = true;
  $("#snow_selected_id").checked = false;
  $("#snow_total_id").val("")
  $("#rain_total_id").val("")
  $("#inches_display_id").val("")
}

function reverseArr(input) {
  var ret = new Array;
  for(var i = input.length-1; i >= 0; i--) {
      ret.push(input[i]);
  }
  return ret;
}