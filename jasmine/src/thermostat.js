'use strict';

function Thermostat() {
  this.temperature = 20
  this.MINIMUM_TEMPERATURE = 10
  this.powerSavingMode = true
  this.PSM_MAX = 25
  this.MAX_TEMP = 32
};

Thermostat.prototype.up = function() {
  if (this.powerSavingMode && this.temperature === this.PSM_MAX) {
    return;
  } else if (!this.powerSavingMode && this.temperature === this.MAX_TEMP) {
    return;
  } else {
    this.temperature++;
  };
};

Thermostat.prototype.down = function() {
  if (this.temperature === this.MINIMUM_TEMPERATURE) {
    return;
  } else {
    this.temperature--;
  };
};

Thermostat.prototype.togglePowerSavingMode = function() {
  if (this.powerSavingMode) {
    this.powerSavingMode = false;
  } else {
    this.powerSavingMode = true;
  };
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};
