
function House(numberOfDoors) {
  this.numberOfDoors = numberOfDoors;
  this.numberOfWindows = numberOfWindows;
  // PLURALIZATION BRAH
// Put the WHOLE RETURN STATEMENT in the If Else Statement
 this.toString = function() {
    var doors;
    var windows;
    if(this.numberOfDoors === 0 || this.numberOfDoors > 1) {
      var doors = 'doors';
    } else {
      var doors = 'door';
    }
    if(this.numberOfWindows === 0 || this.numberOfWindows > 1) {
      var windows = 'windows';
    } else {
      var windows = 'window';
    }
    return ("The house has " + this.numberOfDoors + " " +  doors + " and " + this.numberOfWindows + " " + windows);
}
}
module.exports = House;