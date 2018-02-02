$(document).ready(function() {
  var thermostat = new Thermostat()
  updateTemperature()

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature()
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature()
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#toggle-powersaving').click(function() {
    thermostat.togglePowerSavingMode();
    if (thermostat.powerSavingMode) {
      $('#power-saving-status').text('on');
    } else {
      $('#power-saving-status').text('off');
    };
    updateTemperature();
  });

  $('#enter-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=68d2a851cc0a640f583329890053e9f7', function(data) {
      $('#local_temperature').text(data.main.temp)
      $('#conditions').text(data.weather[0].description)
    });
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
});
