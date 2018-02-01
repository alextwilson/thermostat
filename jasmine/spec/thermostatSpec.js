describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat()
  });

  describe('temperature', function() {
    it('starts at 20', function() {
      expect(thermostat.temperature).toEqual(20)
    });
  });

  describe('changing temperature', function() {
    it('increases by one when up is called', function() {
      thermostat.up()
      expect(thermostat.temperature).toEqual(21)
    });

    it('decreases by one when down is called', function() {
      thermostat.down()
      expect(thermostat.temperature).toEqual(19)
    });

    it('has a minimum temperature of ten degrees', function(){
      for (var i = 20; i > 5; i--) {
        thermostat.down();
      };
      expect(thermostat.temperature).toEqual(10)
    });

    describe('power saving mode effects', function() {
      it('has a maximum temperature of 25 when on', function() {
        for (var i = 0; i < 10; i++) {
          thermostat.up();
        };
        expect(thermostat.temperature).toEqual(25)
      });

      it('has a maximum temperature of 32 when off', function() {
        thermostat.togglePowerSavingMode()
        for (var i = 0; i < 15; i++) {
          thermostat.up();
        };
        expect(thermostat.temperature).toEqual(32)
      });
    });
  });

  describe('power saving mode', function() {
    it('is on by default', function() {
      expect(thermostat.powerSavingMode).toEqual(true);
    });

    it('toggle sets the power saving mode to off', function() {
      thermostat.togglePowerSavingMode();
      expect(thermostat.powerSavingMode).toEqual(false);
    });

    it('toggle sets power saving mode to on', function() {
      thermostat.powerSavingMode = false;
      thermostat.togglePowerSavingMode();
      expect(thermostat.powerSavingMode).toEqual(true);
    });
  });
});
