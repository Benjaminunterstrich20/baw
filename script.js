const flights = [
  // CGN <-> BER
  {nummer:"BW381", start:"CGN", ziel:"BER", abflug:"08:00", landung:"09:00", richtung:"Hin"},
  {nummer:"BW382", start:"CGN", ziel:"BER", abflug:"12:00", landung:"13:00", richtung:"Hin"},
  {nummer:"BW383", start:"CGN", ziel:"BER", abflug:"17:00", landung:"18:00", richtung:"Hin"},
  {nummer:"BW384", start:"BER", ziel:"CGN", abflug:"09:30", landung:"10:30", richtung:"Rück"},
  {nummer:"BW385", start:"BER", ziel:"CGN", abflug:"14:00", landung:"15:00", richtung:"Rück"},
  {nummer:"BW386", start:"BER", ziel:"CGN", abflug:"19:00", landung:"20:00", richtung:"Rück"},

  // CGN <-> MUC
  {nummer:"BW411", start:"CGN", ziel:"MUC", abflug:"07:00", landung:"08:10", richtung:"Hin"},
  {nummer:"BW412", start:"CGN", ziel:"MUC", abflug:"13:00", landung:"14:10", richtung:"Hin"},
  {nummer:"BW413", start:"CGN", ziel:"MUC", abflug:"18:00", landung:"19:10", richtung:"Hin"},
  {nummer:"BW414", start:"MUC", ziel:"CGN", abflug:"09:00", landung:"10:10", richtung:"Rück"},
  {nummer:"BW415", start:"MUC", ziel:"CGN", abflug:"15:00", landung:"16:10", richtung:"Rück"},
  {nummer:"BW416", start:"MUC", ziel:"CGN", abflug:"20:30", landung:"21:40", richtung:"Rück"},

  // CGN <-> HAM
  {nummer:"BW421", start:"CGN", ziel:"HAM", abflug:"07:15", landung:"08:15", richtung:"Hin"},
  {nummer:"BW422", start:"CGN", ziel:"HAM", abflug:"12:00", landung:"13:00", richtung:"Hin"},
  {nummer:"BW423", start:"CGN", ziel:"HAM", abflug:"17:00", landung:"18:00", richtung:"Hin"},
  {nummer:"BW424", start:"HAM", ziel:"CGN", abflug:"08:45", landung:"09:45", richtung:"Rück"},
  {nummer:"BW425", start:"HAM", ziel:"CGN", abflug:"14:15", landung:"15:15", richtung:"Rück"},
  {nummer:"BW426", start:"HAM", ziel:"CGN", abflug:"19:45", landung:"20:45", richtung:"Rück"},

  // CGN <-> PMI
  {nummer:"BW729", start:"CGN", ziel:"PMI", abflug:"08:00", landung:"10:00", richtung:"Hin"},
  {nummer:"BW730", start:"CGN", ziel:"PMI", abflug:"12:00", landung:"14:00", richtung:"Hin"},
  {nummer:"BW731", start:"CGN", ziel:"PMI", abflug:"16:00", landung:"18:00", richtung:"Hin"},
  {nummer:"BW732", start:"PMI", ziel:"CGN", abflug:"09:00", landung:"11:00", richtung:"Rück"},
  {nummer:"BW733", start:"PMI", ziel:"CGN", abflug:"13:00", landung:"15:00", richtung:"Rück"},
  {nummer:"BW734", start:"PMI", ziel:"CGN", abflug:"17:00", landung:"19:00", richtung:"Rück"},

  // CGN <-> HER
  {nummer:"BW801", start:"CGN", ziel:"HER", abflug:"05:30", landung:"09:20", richtung:"Hin"},
  {nummer:"BW802", start:"CGN", ziel:"HER", abflug:"11:00", landung:"14:50", richtung:"Hin"},
  {nummer:"BW803", start:"CGN", ziel:"HER", abflug:"18:00", landung:"21:45", richtung:"Hin"},
  {nummer:"BW804", start:"HER", ziel:"CGN", abflug:"06:30", landung:"08:50", richtung:"Rück"},
  {nummer:"BW805", start:"HER", ziel:"CGN", abflug:"13:00", landung:"15:20", richtung:"Rück"},
  {nummer:"BW806", start:"HER", ziel:"CGN", abflug:"20:00", landung:"22:20", richtung:"Rück"},

  // CGN <-> RHO
  {nummer:"BW811", start:"CGN", ziel:"RHO", abflug:"06:00", landung:"09:40", richtung:"Hin"},
  {nummer:"BW812", start:"CGN", ziel:"RHO", abflug:"13:00", landung:"16:40", richtung:"Hin"},
  {nummer:"BW813", start:"CGN", ziel:"RHO", abflug:"19:00", landung:"22:40", richtung:"Hin"},
  {nummer:"BW814", start:"RHO", ziel:"CGN", abflug:"07:00", landung:"09:20", richtung:"Rück"},
  {nummer:"BW815", start:"RHO", ziel:"CGN", abflug:"15:00", landung:"17:20", richtung:"Rück"},
  {nummer:"BW816", start:"RHO", ziel:"CGN", abflug:"21:00", landung:"23:20", richtung:"Rück"},

  // CGN <-> ATH
  {nummer:"BW821", start:"CGN", ziel:"ATH", abflug:"07:00", landung:"10:40", richtung:"Hin"},
  {nummer:"BW822", start:"CGN", ziel:"ATH", abflug:"12:30", landung:"16:10", richtung:"Hin"},
  {nummer:"BW823", start:"CGN", ziel:"ATH", abflug:"18:30", landung:"22:10", richtung:"Hin"},
  {nummer:"BW824", start:"ATH", ziel:"CGN", abflug:"08:00", landung:"10:30", richtung:"Rück"},
  {nummer:"BW825", start:"ATH", ziel:"CGN", abflug:"14:30", landung:"17:00", richtung:"Rück"},
  {nummer:"BW826", start:"ATH", ziel:"CGN", abflug:"21:00", landung:"23:30", richtung:"Rück"},

  // CGN <-> BCN
  {nummer:"BW841", start:"CGN", ziel:"BCN", abflug:"09:00", landung:"11:10", richtung:"Hin"},
  {nummer:"BW842", start:"CGN", ziel:"BCN", abflug:"14:00", landung:"16:10", richtung:"Hin"},
  {nummer:"BW843", start:"CGN", ziel:"BCN", abflug:"19:00", landung:"21:10", richtung:"Hin"},
  {nummer:"BW844", start:"BCN", ziel:"CGN", abflug:"10:00", landung:"12:10", richtung:"Rück"},
  {nummer:"BW845", start:"BCN", ziel:"CGN", abflug:"15:00", landung:"17:10", richtung:"Rück"},
  {nummer:"BW846", start:"BCN", ziel:"CGN", abflug:"20:00", landung:"22:10", richtung:"Rück"},

  // CGN <-> LHR
  {nummer:"BW861", start:"CGN", ziel:"LHR", abflug:"08:30", landung:"09:30", richtung:"Hin"},
  {nummer:"BW862", start:"CGN", ziel:"LHR", abflug:"13:00", landung:"14:00", richtung:"Hin"},
  {nummer:"BW863", start:"CGN", ziel:"LHR", abflug:"18:00", landung:"19:00", richtung:"Hin"},
  {nummer:"BW864", start:"LHR", ziel:"CGN", abflug:"10:00", landung:"11:00", richtung:"Rück"},
  {nummer:"BW865", start:"LHR", ziel:"CGN", abflug:"15:00", landung:"16:00", richtung:"Rück"},
  {nummer:"BW866", start:"LHR", ziel:"CGN", abflug:"20:00", landung:"21:00", richtung:"Rück"},
];

function searchFlights() {
  const start = document.getElementById("startInput").value.toUpperCase();
  const ziel = document.getElementById("zielInput").value.toUpperCase();
  const date = document.getElementById("dateInput").value;
  const name = document.getElementById("nameInput").value || "Gast";
  const seat = document.getElementById("seatInput").value || "Unbekannt";

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
      <td><button onclick="generateTicket('${f.nummer}','${f.start}','${f.ziel}','${f.abflug}','${f.landung}','${date}','${name}','${seat}')">PDF</button></td>
    `;
    tableBody.appendChild(row);
  });
}

async function generateTicket(nummer, start, ziel, abflug, landung, datum, name, seat){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Benni Airways", 105, 20, null, null, 'center');
  doc.setFontSize(14);
  doc.text(`Name: ${name}`, 20, 40);
  doc.text(`Sitzplatz: ${seat}`, 20, 50);
  doc.text(`Flugnummer: ${nummer}`, 20, 60);
  doc.text(`Von: ${start}`, 20, 70);
  doc.text(`Nach: ${ziel}`, 20, 80);
  doc.text(`Abflug: ${abflug}`, 20, 90);
  doc.text(`Landung: ${landung}`, 20, 100);
  doc.text(`Datum: ${datum}`, 20, 110);

  const qrDiv = document.createElement('div');
  new QRCode(qrDiv, { text: `Flug:${nummer} Name:${name} Sitz:${seat} Von:${start} Nach:${ziel} Abflug:${abflug} Landung:${landung} Datum:${datum}`, width: 100, height: 100 });
  await new Promise(r => setTimeout(r,100));
  const qrImg = qrDiv.querySelector('img').src;
  doc.addImage(qrImg, 'PNG', 150, 60, 40, 40);

  doc.save(`${nummer}_${datum}_ticket.pdf`);
}
