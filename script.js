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

  // weitere Routen wie BUD, OSL, NTE, LHR, DUS, LOWW, FCO, LEBL, EPWA analog...
];

// Funktion zum Suchen der Flüge
function searchFlights() {
  const start = document.getElementById("startInput").value.toUpperCase();
  const ziel = document.getElementById("zielInput").value.toUpperCase();
  const date = document.getElementById("dateInput").value;
  const tableBody = document.getElementById("flightTable");
  tableBody.innerHTML = "";

  if(!date){
    alert("Bitte Datum auswählen!");
    return;
  }

  const results = flights.filter(f => f.start === start && f.ziel === ziel);
  if(results.length === 0){
    tableBody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:10px">Kein Flug gefunden</td></tr>`;
    return;
  }

  results.forEach(f => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${f.nummer}</td>
      <td>${f.start}</td>
      <td>${f.ziel}</td>
      <td>${f.abflug}</td>
      <td>${f.landung}</td>
      <td>${f.richtung}</td>
      <td>${date}</td>
      <td><button onclick="generateTicket('${f.nummer}','${f.start}','${f.ziel}','${f.abflug}','${f.landung}','${date}')">PDF</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Funktion zum Erstellen des PDF-Tickets mit QR
async function generateTicket(nummer, start, ziel, abflug, landung, datum){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Benni Airways", 105, 20, null, null, 'center');
  doc.setFontSize(14);
  doc.text(`Flugnummer: ${nummer}`, 20, 40);
  doc.text(`Von: ${start}`, 20, 50);
  doc.text(`Nach: ${ziel}`, 20, 60);
  doc.text(`Abflug: ${abflug}`, 20, 70);
  doc.text(`Landung: ${landung}`, 20, 80);
  doc.text(`Datum: ${datum}`, 20, 90);

  const qrDiv = document.createElement('div');
  new QRCode(qrDiv, { text: `Flug:${nummer} Von:${start} Nach:${ziel} Abflug:${abflug} Landung:${landung} Datum:${datum}`, width: 100, height: 100 });
  await new Promise(r => setTimeout(r,100));
  const qrImg = qrDiv.querySelector('img').src;
  doc.addImage(qrImg, 'PNG', 150, 50, 40, 40);

  doc.save(`${nummer}_${datum}_ticket.pdf`);
}
