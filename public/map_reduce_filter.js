var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
      local: true,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
      local: false,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 36,
      local: true,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
      local: false,
    }
  ];

  var pilotIds = pilots.map(function (pilot) {
    return pilot.id
  });
 
  console.log(pilotIds);

  const pilotIdsM = pilots.map(officer => pilots.id);

  var totalYears = pilots.reduce(function (accumulator, pilot) {
    accumulator=accumulator||0;
    return accumulator + pilot.years;
  },0);

  console.log(totalYears);

var mostExpPilot = pilots.reduce(function (oldest, pilot) {
    //return (oldest.years || 0) > pilot.years ? oldest : pilot;
        if( (oldest.years || 0) > pilot.years){
            return oldest;
        }
        else{
            return pilot;
        }
  });

  console.log(mostExpPilot.name);

  const pilotId = pilots.filter(function (pilot) {
    return pilot.id === 99;
  });

  console.log(pilotId);

  const pilotIdF = pilots.filter(pilot => pilot.id === 99);

  console.log(pilotIdF);

  var totalAge = pilots
  .filter(function (pilot) {
    return !pilot.local;
  })
  .map(function (pilot) {
    return pilot.years;
  })
 .reduce(function (acc, total) {
    return acc + total;
  }, 0);

  console.log(totalAge);
  
  var totalAgeMix = pilots
  .filter(pilot => pilot.local)
  .map(pilot =>pilot.years)
.reduce( (acc, total) => acc + total, 0);

console.log(totalAge);