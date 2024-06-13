"use strict";

const $ = selector => document.querySelector(selector);
const selAll = selector => document.querySelectorAll(selector);

var master_clock_var = 0;
var master_clock_step_var = 0;
var master_interval = null;

var power_level_var = 0;
var power_level_step_var = 0;
const max_power_level = 100;

var charge_status = 0;
var driving_status = 0;

const message = $("#message")

const drive_car_process = () => {

}


const tick = () => {
  // alert("Tick");
  master_clock_var += master_clock_step_var;
  $("#timer_id").value = master_clock_var;
  if ($("#battery_drain_id").checked) {
    if (power_level_var + (power_level_step_var * $("#speed_KMM_id").value) >= 0) {
      message.textContent = "Driving"
      power_level_var += (power_level_step_var * $("#speed_KMM_id").value)
      $("#battery_power_id").value = power_level_var
      $("#battery_min_id").value = power_level_var / $("#speed_KMM_id").value
    }
    else {
      //stop driving
      message.textContent = "Battery depleted"
      $("#battery_drain_id").unchecked

    }
  }
  if ($("#battery_charge_id").checked) {
    if (power_level_var + power_level_step_var <= 100) {
      message.textContent = "Battery Charging"
        power_level_var += power_level_step_var
        $("#battery_power_id").value = power_level_var
        $("#battery_min_id").value = power_level_var / $("#speed_KMM_id").value
    }  
    else {
      power_level_var = 100
      $("#battery_power_id").value = power_level_var
      $("#battery_charge_id").checked = false
      message.textContent = "Battery Charged"
      $("#battery_min_id").value = power_level_var / $("#speed_KMM_id").value

  }
  }}

const start_timer = () => {
  alert("Timer Started");
  // Using an Interval Timer
  message.textContent = "Simulator Started"
  master_clock_step_var = 1;
  master_interval = setInterval(tick, 500);

}


const reset_system = () => {
  clearInterval(master_interval)
  master_clock_var = 0
  $("#timer_id").value = master_clock_var;
}

const charge_battery = () => {
  driving_status = 0
  charge_status = 1;
  power_level_step_var = 12
  const driving_indicator = $("#battery_drain_id");
  const charging_indicator = $("#battery_charge_id");
  driving_indicator.checked = false;
  charging_indicator.checked = true;
}

const update_KMM = () => {
  $("#speed_KMM_id").value = ($("#speed_KMH_id").value / 60)
  $("#battery_min_id").value = power_level_var / $("#speed_KMM_id").value
}


const drive_car = () => {
  driving_status = 1;
  charge_status = 0;
  power_level_step_var = -1;
  const driving_indicator = $("#battery_drain_id");
  const charging_indicator = $("#battery_charge_id");
  driving_indicator.checked = true;
  charging_indicator.checked = false;
}

document.addEventListener("DOMContentLoaded",
  () => {
    $("#charge_battery_btn").addEventListener("click", charge_battery);
    $("#drive_car_btn").addEventListener("click", drive_car);
    $("#start_btn").addEventListener("click", start_timer);
    $("#reset_btn").addEventListener("click", reset_system);
    $("#speed_KMH_id").addEventListener("change", update_KMM);
  });
