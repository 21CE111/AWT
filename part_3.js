var CSPIT = {
  departments: ["CE", "IT", "CS", "EC", "EE", "CL", "ME"],
  yearOfEstablishment: 2000,
  location: "Vadodara",
  getDetails: function() {
    console.log("CSPIT Institute Details:");
    console.log("Year of Establishment: " + this.yearOfEstablishment);
    console.log("Location: " + this.location);
  }
};

CSPIT.CE = function() {};
CSPIT.CE.prototype.totalStudents = 250;
CSPIT.CE.prototype.totalFaculty = 30;


console.log("Records from CSPIT:");
for (var key in CSPIT) {
  if (typeof CSPIT[key] !== "function") {
    console.log(key + ": " + CSPIT[key]);
  }
}


console.log("\nRecords from CSPIT CE Department:");
for (var key in CSPIT.CE.prototype) {
  if (CSPIT.CE.prototype.hasOwnProperty(key)) {
    console.log(key + ": " + CSPIT.CE.prototype[key]);
  }
}