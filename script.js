// Alle Flüge (nur Beispiele, ergänze alle wie Tabelle)
const flights = [
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
  // Füge alle weiteren Flüge aus deiner Tabelle hinzu
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
