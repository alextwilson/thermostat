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
  });


});
