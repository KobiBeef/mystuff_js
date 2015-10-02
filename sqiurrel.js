// var JOURNAL is the list of events and squirrel
// located at a different file

// represents he phi coefficient
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

function hasEvent(event, entry) {
  //checks whether "event" is in array
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  //how is the data store in var table[0] and table[1]??
  var table = [0, 0, 0, 0];
  
  for (var i = 0; i < journal.length; i++) {
    //traverses the journal entry
    var entry = journal[i], index = 0;
    
    if (hasEvent(event, entry))
      //event "pizza is true" in journal[i]
      //selects to table[1]
      index += 1;
    
    if (entry.squirrel) 
      //property entry.squerrel not null
      //selects table[2]
	  index += 2;
      
      //this is where it adds data in the table
      //it selects what table[index] it adds 1  
      table[index] += 1;
  }
  return table;
}

function gatherCorrelations(journal) {
// parameter journal = var JOURNAL
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
  	// you can use .length on journal since it is in list form
    var events = journal[entry].events;
    // storing the events per entry in var events
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      // storing per event in events in var event
      
      // this checks whether the event is in phis={} if not push it in phis{}
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    	// phils[event] pushes event in phis={}
    }
  }
  return phis;
}

var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);