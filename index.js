function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (let i = 0; i <= 3; i++) {
    beatles.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return beatles;
}

function johnLennonFacts(facts) {
  var array = [];
  let i = 0;
  while (i < facts.length ) {
    array.push(facts[i++] + "!!!");
  }
  return array;
}