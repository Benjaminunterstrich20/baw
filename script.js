const flights = [
  {nummer:"BW729", start:"CGN", ziel:"PMI", abflug:"10:00", landung:"12:00", richtung:"Hin"},
  {nummer:"BW381", start:"CGN", ziel:"BER", abflug:"12:00", landung:"13:00", richtung:"Hin"},
  {nummer:"BW902", start:"CGN", ziel:"CDG", abflug:"14:00", landung:"15:00", richtung:"Hin"},
  {nummer:"BW147", start:"CGN", ziel:"FRA", abflug:"16:00", landung:"16:30", richtung:"Hin"},
  {nummer:"BW563", start:"CGN", ziel:"HAM", abflug:"17:00", landung:"18:00", richtung:"Hin"},
  {nummer:"BW815", start:"CGN", ziel:"MUC", abflug:"18:30", landung:"19:30", richtung:"Hin"},
  {nummer:"BW256", start:"CGN", ziel:"BUD", abflug:"20:00", landung:"21:30", richtung:"Hin"},
  {nummer:"BW690", start:"CGN", ziel:"OSL", abflug:"21:00", landung:"23:00", richtung:"Hin"},
  {nummer:"BW438", start:"CGN", ziel:"NTE", abflug:"09:00", landung:"10:30", richtung:"Hin"},
  {nummer:"BW075", start:"CGN", ziel:"LHR", abflug:"11:00", landung:"12:00", richtung:"Hin"},
  {nummer:"BW951", start:"CGN", ziel:"DUS", abflug:"13:00", landung:"13:15", richtung:"Hin"},
  {nummer:"BW319", start:"CGN", ziel:"LOWW", abflug:"14:30", landung:"16:00", richtung:"Hin"},
  {nummer:"BW784", start:"CGN", ziel:"FCO", abflug:"15:00", landung:"17:00", richtung:"Hin"},
  {nummer:"BW162", start:"CGN", ziel:"LEBL", abflug:"16:00", landung:"18:00", richtung:"Hin"},
  {nummer:"BW527", start:"CGN", ziel:"EPWA", abflug:"17:30", landung:"19:00", richtung:"Hin"},
  {nummer:"BW730", start:"PMI", ziel:"CGN", abflug:"14:00", landung:"16:00", richtung:"Rück"},
  {nummer:"BW382", start:"BER", ziel:"CGN", abflug:"14:00", landung:"15:00", richtung:"Rück"},
  {nummer:"BW903", start:"CDG", ziel:"CGN", abflug:"16:00", landung:"17:00", richtung:"Rück"},
  {nummer:"BW148", start:"FRA", ziel:"CGN", abflug:"17:00", landung:"17:30", richtung:"Rück"},
  {nummer:"BW564", start:"HAM", ziel:"CGN", abflug:"18:00", landung:"19:00", richtung:"Rück"},
  {nummer:"BW816", start:"MUC", ziel:"CGN", abflug:"19:30", landung:"20:30", richtung:"Rück"},
  {nummer:"BW257", start:"BUD", ziel:"CGN", abflug:"21:30", landung:"23:00", richtung:"Rück"},
  {nummer:"BW691", start:"OSL", ziel:"CGN", abflug:"23:00", landung:"01:00", richtung:"Rück"},
  {nummer:"BW439", start:"NTE", ziel:"CGN", abflug:"10:30", landung:"12:00", richtung:"Rück"},
  {nummer:"BW076", start:"LHR", ziel:"CGN", abflug:"12:00", landung:"13:00", richtung:"Rück"},
  {nummer:"BW952", start:"DUS", ziel:"CGN", abflug:"13:15", landung:"13:30", richtung:"Rück"},
  {nummer:"BW320", start:"LOWW", ziel:"CGN", abflug:"16:00", landung:"17:30", richtung:"Rück"},
  {nummer:"BW785", start:"FCO", ziel:"CGN", abflug:"17:00", landung:"19:00", richtung:"Rück"},
  {nummer:"BW163", start:"LEBL", ziel:"CGN", abflug:"18:00", landung:"20:00", richtung:"Rück"},
  {nummer:"BW528", start:"EPWA", ziel:"CGN", abflug:"19:00", landung:"20:30", richtung:"Rück"},
];

function searchFlights() {
  const start = document.getElementById("startInput").value.toUpperCase();
  const ziel = document.getElementById("zielInput").value.toUpperCase();
  const tableBody = document.getElementById("flightTable");
  tableBody.innerHTML = "";

  const results = flights.filter(f => f.start === start && f.ziel === ziel);
  if(results.length === 0){
    tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:10px">Kein Flug gefunden</td></tr>`;
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
      <td><button onclick="generateTicket('${f.nummer}','${f.start}','${f.ziel}','${f.abflug}','${f.landung}')">PDF</button></td>
    `;
    tableBody.appendChild(row);
  });
}

async function generateTicket(nummer, start, ziel, abflug, landung){
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

  const qrDiv = document.createElement('div');
  new QRCode(qrDiv, { text: `Flug:${nummer} Von:${start} Nach:${ziel} Abflug:${abflug} Landung:${landung}`, width: 100, height: 100 });
  await new Promise(r => setTimeout(r,100));
  const qrImg = qrDiv.querySelector('img').src;
  doc.addImage(qrImg, 'PNG', 150, 50, 40, 40);

  doc.save(`${nummer}_ticket.pdf`);
}
