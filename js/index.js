$(document).ready(start);

var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
var bgNames = ["nyc","sf","la","austin","sydney"];

function start() {
  $(cities).each(populateList);
  $("#city-type").change(runCitiPix);
}

function populateList(index, element) {
  var listCities = '<option>' + element + '</option>';
  $("#city-type").append(listCities);
}

function runCitiPix() {
  rawCity = $("#city-type").val();
  city = rawCity.toLowerCase();
  updateBackground(city);
}


function updateBackground(city) {
  $("body").attr('class', city);
}


function removeBackground() {
  var currentClass =  $("body").attr("class");
  if (typeof currentClass !== "undefined" && currentClass !== "") {
  $("body").removeClass(currentClass);
  }
 }
