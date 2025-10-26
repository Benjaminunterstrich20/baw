const flights = [
  // CGN -> PMI
  {nummer:"BW729", start:"CGN", ziel:"PMI", abflug:"08:00", landung:"10:00", richtung:"Hin"},
  {nummer:"BW730", start:"CGN", ziel:"PMI", abflug:"12:00", landung:"14:00", richtung:"Hin"},
  {nummer:"BW731", start:"CGN", ziel:"PMI", abflug:"16:00", landung:"18:00", richtung:"Hin"},
  {nummer:"BW732", start:"PMI", ziel:"CGN", abflug:"09:00", landung:"11:00", richtung:"Rück"},
  {nummer:"BW733", start:"PMI", ziel:"CGN", abflug:"13:00", landung:"15:00", richtung:"Rück"},
  {nummer:"BW734", start:"PMI", ziel:"CGN", abflug:"17:00", landung:"19:00", richtung:"Rück"},

  // CGN -> BER
  {nummer:"BW381", start:"CGN", ziel:"BER", abflug:"08:00", landung:"09:00", richtung:"Hin"},
  {nummer:"BW382", start:"CGN", ziel:"BER", abflug:"12:00", landung:"13:00", richtung:"Hin"},
  {nummer:"BW383", start:"CGN", ziel:"BER", abflug:"16:00", landung:"17:00", richtung:"Hin"},
  {nummer:"BW384", start:"BER", ziel:"CGN", abflug:"09:00", landung:"10:00", richtung:"Rück"},
  {nummer:"BW385", start:"BER", ziel:"CGN", abflug:"13:00", landung:"14:00", richtung:"Rück"},
  {nummer:"BW386", start:"BER", ziel:"CGN", abflug:"17:00", landung:"18:00", richtung:"Rück"},

  // CGN -> CDG
  {nummer:"BW902", start:"CGN", ziel:"CDG", abflug:"07:00", landung:"08:00", richtung:"Hin"},
  {nummer:"BW903", start:"CGN", ziel:"CDG", abflug:"11:00", landung:"12:00", richtung:"Hin"},
  {nummer:"BW904", start:"CGN", ziel:"CDG", abflug:"15:00", landung:"16:00", richtung:"Hin"},
  {nummer:"BW905", start:"CDG", ziel:"CGN", abflug:"08:00", landung:"09:00", richtung:"Rück"},
  {nummer:"BW906", start:"CDG", ziel:"CGN", abflug:"12:00", landung:"13:00", richtung:"Rück"},
  {nummer:"BW907", start:"CDG", ziel:"CGN", abflug:"16:00", landung:"17:00", richtung:"Rück"},

  // CGN -> FRA
  {nummer:"BW147", start:"CGN", ziel:"FRA", abflug:"06:00", landung:"06:30", richtung:"Hin"},
  {nummer:"BW148", start:"CGN", ziel:"FRA", abflug:"10:00", landung:"10:30", richtung:"Hin"},
  {nummer:"BW149", start:"CGN", ziel:"FRA", abflug:"14:00", landung:"14:30", richtung:"Hin"},
  {nummer:"BW150", start:"FRA", ziel:"CGN", abflug:"07:00", landung:"07:30", richtung:"Rück"},
  {nummer:"BW151", start:"FRA", ziel:"CGN", abflug:"11:00", landung:"11:30", richtung:"Rück"},
  {nummer:"BW152", start:"FRA", ziel:"CGN", abflug:"15:00", landung:"15:30", richtung:"Rück"},

  // CGN -> HAM
  {nummer:"BW563", start:"CGN", ziel:"HAM", abflug:"08:00", landung:"09:00", richtung:"Hin"},
  {nummer:"BW564", start:"CGN", ziel:"HAM", abflug:"12:00", landung:"13:00", richtung:"Hin"},
  {nummer:"BW565", start:"CGN", ziel:"HAM", abflug:"16:00", landung:"17:00", richtung:"Hin"},
  {nummer:"BW566", start:"HAM", ziel:"CGN", abflug:"09:00", landung:"10:00", richtung:"Rück"},
  {nummer:"BW567", start:"HAM", ziel:"CGN", abflug:"13:00", landung:"14:00", richtung:"Rück"},
  {nummer:"BW568", start:"HAM", ziel:"CGN", abflug:"17:00", landung:"18:00", richtung:"Rück"},

  // CGN -> MUC
  {nummer:"BW815", start:"CGN", ziel:"MUC", abflug:"09:00", landung:"10:00", richtung:"Hin"},
  {nummer:"BW816", start:"CGN", ziel:"MUC", abflug:"13:00", landung:"14:00", richtung:"Hin"},
  {nummer:"BW817", start:"CGN", ziel:"MUC", abflug:"17:00", landung:"18:00", richtung:"Hin"},
  {nummer:"BW818", start:"MUC", ziel:"CGN", abflug:"10:00", landung:"11:00", richtung:"Rück"},
  {nummer:"BW819", start:"MUC", ziel:"CGN", abflug:"14:00", landung:"15:00", richtung:"Rück"},
  {nummer:"BW820", start:"MUC", ziel:"CGN", abflug:"18:00", landung:"19:00", richtung:"Rück"},

  // CGN -> BUD
  {nummer:"BW256", start:"CGN", ziel:"BUD", abflug:"07:00", landung:"08:30", richtung:"Hin"},
  {nummer:"BW257", start:"CGN", ziel:"BUD", abflug:"11:00", landung:"12:30", richtung:"Hin"},
  {nummer:"BW258", start:"CGN", ziel:"BUD", abflug:"15:00", landung:"16:30", richtung:"Hin"},
  {nummer:"BW259", start:"BUD", ziel:"CGN", abflug:"08:30", landung:"10:00", richtung:"Rück"},
  {nummer:"BW260", start:"BUD", ziel:"CGN", abflug:"12:30", landung:"14:00", richtung:"Rück"},
  {nummer:"BW261", start:"BUD", ziel:"CGN", abflug:"16:30", landung:"18:00", richtung:"Rück"},

  // CGN -> OSL
  {nummer:"BW690", start:"CGN", ziel:"OSL", abflug:"06:00", landung:"08:00", richtung:"Hin"},
  {nummer:"BW691", start:"CGN", ziel:"OSL", abflug:"10:00", landung:"12:00", richtung:"Hin"},
  {nummer:"BW692", start:"CGN", ziel:"OSL", abflug:"14:00", landung:"16:00", richtung:"Hin"},
  {nummer:"BW693", start:"OSL", ziel:"CGN", abflug:"08:00", landung:"10:00", richtung:"Rück"},
  {nummer:"BW694", start:"OSL", ziel:"CGN", abflug:"12:00", landung:"14:00", richtung:"Rück"},
  {nummer:"BW695", start:"OSL", ziel:"CGN", abflug:"16:00", landung:"18:00", richtung:"Rück"},

  // CGN -> NTE
  {nummer:"BW438", start:"CGN", ziel:"NTE", abflug:"07:00", landung:"08:30", richtung:"Hin"},
  {nummer:"BW439", start:"CGN", ziel:"NTE", abflug:"11:00", landung:"12:30", richtung:"Hin"},
  {nummer:"BW440", start:"CGN", ziel:"NTE", abflug:"15:00", landung:"16:30", richtung:"Hin"},
  {nummer:"BW441", start:"NTE", ziel:"CGN", abflug:"08:30", landung:"10:00", richtung:"Rück"},
  {nummer:"BW442", start:"NTE", ziel:"CGN", abflug:"12:30", landung:"14:00", richtung:"Rück"},
  {nummer:"BW443", start:"NTE", ziel:"CGN", abflug:"16:30", landung:"18:00", richtung:"Rück"},

  // CGN -> LHR
  {nummer:"BW075", start:"CGN", ziel:"LHR", abflug:"06:00", landung:"07:00", richtung:"Hin"},
  {nummer:"BW076", start:"CGN", ziel:"LHR", abflug:"10:00", landung:"11:00", richtung:"Hin"},
  {nummer:"BW077", start:"CGN", ziel:"LHR", abflug:"14:00", landung:"15:00", richtung:"Hin"},
  {nummer:"BW078", start:"LHR", ziel:"CGN", abflug:"07:00", landung:"08:00", richtung:"Rück"},
  {nummer:"BW079", start:"LHR", ziel:"CGN", abflug:"11:00", landung:"12:00", richtung:"Rück"},
  {nummer:"BW080", start:"LHR", ziel:"CGN", abflug:"15:00", landung:"16:00", richtung:"Rück"},

  // CGN -> DUS
  {nummer:"BW951", start:"CGN", ziel:"DUS", abflug:"06:00", landung:"06:15", richtung:"Hin"},
  {nummer:"BW952", start:"CGN", ziel:"DUS", abflug:"10:00", landung:"10:15", richtung:"Hin"},
  {nummer:"BW953", start:"CGN", ziel:"DUS", abflug:"14:00", landung:"14:15", richtung:"Hin"},
  {nummer:"BW954", start:"DUS", ziel:"CGN", abflug:"06:15", landung:"06:30", richtung:"Rück"},
  {nummer:"BW955", start:"DUS", ziel:"CGN", abflug:"10:15", landung:"10:30", richtung:"Rück"},
  {nummer:"BW956", start:"DUS", ziel:"CGN", abflug:"14:15", landung:"14:30", richtung:"Rück"},

  // CGN -> LOWW (Wien)
  {nummer:"BW319", start:"CGN", ziel:"LOWW", abflug:"08:00", landung:"09:30", richtung:"Hin"},
  {nummer:"BW320", start:"CGN", ziel:"LOWW", abflug:"12:00", landung:"13:30", richtung:"Hin"},
  {nummer:"BW321", start:"CGN", ziel:"LOWW", abflug:"16:00", landung:"17:30", richtung:"Hin"},
  {nummer:"BW322", start:"LOWW", ziel:"CGN", abflug:"09:30", landung:"11:00", richtung:"Rück"},
  {nummer:"BW323", start:"LOWW", ziel:"CGN", abflug:"13:30", landung:"15:00", richtung:"Rück"},
  {nummer:"BW324", start:"LOWW", ziel:"CGN", abflug:"17:30", landung:"19:00", richtung:"Rück"},

  // CGN -> FCO (Rom)
  {nummer:"BW784", start:"CGN", ziel:"FCO", abflug:"07:00", landung:"09:00", richtung:"Hin"},
  {nummer:"BW785", start:"CGN", ziel:"FCO", abflug:"11:00", landung:"13:00", richtung:"Hin"},
  {nummer:"BW786", start:"CGN", ziel:"FCO", abflug:"15:00", landung:"17:00", richtung:"Hin"},
  {nummer:"BW787", start:"FCO", ziel:"CGN", abflug:"09:00", landung:"11:00", richtung:"Rück"},
  {nummer:"BW788", start:"FCO", ziel:"CGN", abflug:"13:00", landung:"15:00", richtung:"Rück"},
  {nummer:"BW789", start:"FCO", ziel:"CGN", abflug:"17:00", landung:"19:00", richtung:"Rück"},

  // CGN -> LEBL (Barcelona)
  {nummer:"BW162", start:"CGN", ziel:"LEBL", abflug:"08:00", landung:"10:00", richtung:"Hin"},
  {nummer:"BW163", start:"CGN", ziel:"LEBL", abflug:"12:00", landung:"14:00", richtung:"Hin"},
  {nummer:"BW164", start:"CGN", ziel:"LEBL", abflug:"16:00", landung:"18:00", richtung:"Hin"},
  {nummer:"BW165", start:"LEBL", ziel:"CGN", abflug:"10:00", landung:"12:00", richtung:"Rück"},
  {nummer:"BW166", start:"LEBL", ziel:"CGN", abflug:"14:00", landung:"16:00", richtung:"Rück"},
  {nummer:"BW167", start:"LEBL", ziel:"CGN", abflug:"18:00", landung:"20:00", richtung:"Rück"},

  // CGN -> EPWA (Warsaw)
  {nummer:"BW527", start:"CGN", ziel:"EPWA", abflug:"08:00", landung:"09:30", richtung:"Hin"},
  {nummer:"BW528", start:"CGN", ziel:"EPWA", abflug:"12:00", landung:"13:30", richtung:"Hin"},
  {nummer:"BW529", start:"CGN", ziel:"EPWA", abflug:"16:00", landung:"17:30", richtung:"Hin"},
  {nummer:"BW530", start:"EPWA", ziel:"CGN", abflug:"09:30", landung:"11:00", richtung:"Rück"},
  {nummer:"BW531", start:"EPWA", ziel:"CGN", abflug:"13:30", landung:"15:00", richtung:"Rück"},
  {nummer:"BW532", start:"EPWA", ziel:"CGN", abflug:"17:30", landung:"19:00", richtung:"Rück"},
];
