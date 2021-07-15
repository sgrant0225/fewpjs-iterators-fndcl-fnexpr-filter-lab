// Code your solution here

//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, stringArray) {
    return drivers.filter( nameMatch =>
      nameMatch.toLowerCase() === stringArray.toLowerCase()
    )
  }
  

  //This function takes an array of drivers and a string as arguments for querying the array, 
  //and returns all drivers whose names begin with the provided letters.
  function fuzzyMatch(drivers, stringNames) {
       return drivers.filter( names => 
        names.toLowerCase().indexOf(stringNames.toLowerCase()) === 0) 

  }
  //console.log(fuzzyMatch(drivers, 'sa'))  //filters out names that do not have letter "sa" in index postion 0
  

  //This function takes an array of drivers and a string as arguments. 
  //In this function, each element of the drivers array is a JavaScript object that has a property of name. 
  //The function should return each element whose name property matches the provided string argument.

  function matchName(drivers, stringNames) {
       return drivers.filter(getName => getName.name === stringNames)
  }


  