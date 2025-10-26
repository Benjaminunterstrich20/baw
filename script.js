
  // ---- FLUGDATEN ----
const flights = [
  // Palma de Mallorca
  {number:"BW730", start:"CGN", ziel:"PMI", abflug:["06:20","09:40","13:15","17:55"], landung:["08:20","11:40","15:15","19:55"], richtung:"Hin"},
  {number:"BW729", start:"PMI", ziel:"CGN", abflug:["07:30","10:50","14:25","18:55"], landung:["09:30","12:50","16:25","20:55"], richtung:"Rück"},

  // Berlin
  {number:"BW382", start:"CGN", ziel:"BER", abflug:["06:10","09:35","13:20","18:00"], landung:["07:10","10:35","14:20","19:00"], richtung:"Hin"},
  {number:"BW381", start:"BER", ziel:"CGN", abflug:["07:15","10:40","14:25","19:05"], landung:["08:15","11:40","15:25","20:05"], richtung:"Rück"},

  // Paris
  {number:"BW903", start:"CGN", ziel:"CDG", abflug:["06:30","10:00","13:45","18:20"], landung:["07:30","11:00","14:45","19:20"], richtung:"Hin"},
  {number:"BW902", start:"CDG", ziel:"CGN", abflug:["07:35","11:05","14:50","19:25"], landung:["08:35","12:05","15:50","20:25"], richtung:"Rück"},

  // Frankfurt
  {number:"BW148", start:"CGN", ziel:"FRA", abflug:["06:45","09:55","13:35","18:10"], landung:["07:15","10:25","14:05","18:40"], richtung:"Hin"},
  {number:"BW147", start:"FRA", ziel:"CGN", abflug:["07:50","11:00","14:40","19:15"], landung:["08:20","11:30","15:10","19:45"], richtung:"Rück"},

  // Hamburg
  {number:"BW564", start:"CGN", ziel:"HAM", abflug:["06:20","10:00","13:40","18:20"], landung:["07:20","11:00","14:40","19:20"], richtung:"Hin"},
  {number:"BW563", start:"HAM", ziel:"CGN", abflug:["07:30","11:10","14:50","19:30"], landung:["08:30","12:10","15:50","20:30"], richtung:"Rück"},

  // München
  {number:"BW816", start:"CGN", ziel:"MUC", abflug:["06:50","10:15","13:50","18:35"], landung:["07:50","11:15","14:50","19:35"], richtung:"Hin"},
  {number:"BW815", start:"MUC", ziel:"CGN", abflug:["07:55","11:20","14:55","19:40"], landung:["08:55","12:20","15:55","20:40"], richtung:"Rück"},

  // Budapest
  {number:"BW257", start:"CGN", ziel:"BUD", abflug:["06:40","10:05","13:50","18:30"], landung:["08:10","11:35","15:20","19:55"], richtung:"Hin"},
  {number:"BW256", start:"BUD", ziel:"CGN", abflug:["07:45","11:10","14:55","19:35"], landung:["09:15","12:40","16:25","21:05"], richtung:"Rück"},

  // Oslo
  {number:"BW691", start:"CGN", ziel:"OSL", abflug:["06:30","10:20","14:00","18:15"], landung:["08:30","12:20","16:00","20:15"], richtung:"Hin"},
  {number:"BW690", start:"OSL", ziel:"CGN", abflug:["07:35","11:25","15:05","19:20"], landung:["09:35","13:25","17:05","21:20"], richtung:"Rück"},

  // Nantes
  {number:"BW439", start:"CGN", ziel:"NTE", abflug:["06:10","09:50","13:25","17:40"], landung:["07:40","11:20","14:55","19:10"], richtung:"Hin"},
  {number:"BW438", start:"NTE", ziel:"CGN", abflug:["07:15","10:55","14:30","18:45"], landung:["08:45","12:25","16:00","20:15"], richtung:"Rück"},

  // London
  {number:"BW076", start:"CGN", ziel:"LHR", abflug:["06:50","10:40","14:15","18:55"], landung:["07:50","11:40","15:15","19:55"], richtung:"Hin"},
  {number:"BW075", start:"LHR", ziel:"CGN", abflug:["07:55","11:45","15:20","20:00"], landung:["08:55","12:45","16:20","21:00"], richtung:"Rück"},

  // Düsseldorf
  {number:"BW952", start:"CGN", ziel:"DUS", abflug:["06:25","09:35","13:10","17:50"], landung:["06:40","09:50","13:25","18:05"], richtung:"Hin"},
  {number:"BW951", start:"DUS", ziel:"CGN", abflug:["07:30","10:40","14:15","18:55"], landung:["07:45","10:55","14:30","19:15"], richtung:"Rück"},

  // Wien
  {number:"BW320", start:"CGN", ziel:"VIE", abflug:["06:40","10:10","13:50","18:25"], landung:["08:10","11:40","15:20","19:55"], richtung:"Hin"},
  {number:"BW319", start:"VIE", ziel:"CGN", abflug:["07:45","11:15","14:55","19:30"], landung:["09:15","12:45","16:25","21:00"], richtung:"Rück"},

  // Rom
  {number:"BW785", start:"CGN", ziel:"FCO", abflug:["06:50","10:30","14:15","18:50"], landung:["08:50","12:30","16:15","20:50"], richtung:"Hin"},
  {number:"BW784", start:"FCO", ziel:"CGN", abflug:["07:55","11:35","15:20","19:55"], landung:["09:55","13:35","17:20","21:55"], richtung:"Rück"},

  // Barcelona
  {number:"BW163", start:"CGN", ziel:"BCN", abflug:["06:15","09:55","13:40","18:10"], landung:["08:15","11:55","15:40","20:10"], richtung:"Hin"},
  {number:"BW162", start:"BCN", ziel:"CGN", abflug:["07:20","11:00","14:45","19:15"], landung:["09:20","13:00","16:45","21:15"], richtung:"Rück"},

  // Warschau
  {number:"BW528", start:"CGN", ziel:"WAW", abflug:["06:30","10:15","13:50","18:25"], landung:["08:00","11:45","15:20","19:55"], richtung:"Hin"},
  {number:"BW527", start:"WAW", ziel:"CGN", abflug:["07:35","11:20","14:55","19:30"], landung:["09:05","12:50","16:25","21:00"], richtung:"Rück"},

  // Heraklion
  {number:"BN420", start:"CGN", ziel:"HER", abflug:["06:50","10:40","14:20","18:55"], landung:["09:10","13:00","16:40","21:15"], richtung:"Hin"},
  {number:"BN421", start:"HER", ziel:"CGN", abflug:["07:55","11:45","15:25","20:00"], landung:["10:15","14:05","17:45","22:20"], richtung:"Rück"},

  // STR Stuttgart
  {number:"BN400", start:"CGN", ziel:"STR", abflug:["06:35","10:15","14:00","18:20"], landung:["07:20","11:00","14:45","19:05"], richtung:"Hin"},
  {number:"BN401", start:"STR", ziel:"CGN", abflug:["07:40","11:20","15:05","19:25"], landung:["08:25","12:05","15:50","20:10"], richtung:"Rück"},

  // Weitere coole Destinationen (z.B. LIS, MAD, PRG, LUX, CPH, TLL, HEL, SOF, BSL)
  {number:"BN402", start:"CGN", ziel:"LIS", abflug:["06:50","10:40","14:30","19:00"], landung:["08:50","12:40","16:30","21:00"], richtung:"Hin"},
  {number:"BN403", start:"LIS", ziel:"CGN", abflug:["07:55","11:45","15:35","20:05"], landung:["09:55","13:45","17:35","22:05"], richtung:"Rück"},

  {number:"BN404", start:"CGN", ziel:"MAD", abflug:["06:25","09:50","13:40","18:15"], landung:["08:55","11:20","15:10","19:45"], richtung:"Hin"},
  {number:"BN405", start:"MAD", ziel:"CGN", abflug:["07:30","10:55","14:45","19:20"], landung:["09:55","13:20","17:10","21:45"], richtung:"Rück"},

  {number:"BN406", start:"CGN", ziel:"PRG", abflug:["06:40","10:20","14:05","18:30"], landung:["07:40","11:20","15:05","19:30"], richtung:"Hin"},
  {number:"BN407", start:"PRG", ziel:"CGN", abflug:["07:45","11:25","15:10","19:35"], landung:["08:45","12:25","16:10","20:35"], richtung:"Rück"},

  {number:"BN408", start:"CGN", ziel:"LUX", abflug:["06:50","10:30","14:10","18:40"], landung:["07:20","11:00","14:40","19:10"], richtung:"Hin"},
  {number:"BN409", start:"LUX", ziel:"CGN", abflug:["07:50","11:30","15:10","19:40"], landung:["08:20","12:00","15:40","20:10"], richtung:"Rück"},

  {number:"BN410", start:"CGN", ziel:"CPH", abflug:["06:35","10:15","14:00","18:20"], landung:["08:05","11:45","15:30","19:50"], richtung:"Hin"},
  {number:"BN411", start:"CPH", ziel:"CGN", abflug:["07:40","11:20","15:05","19:25"], landung:["09:10","12:50","16:35","20:55"], richtung:"Rück"},

  {number:"BN412", start:"CGN", ziel:"TLL", abflug:["06:50","10:40","14:20","18:55"], landung:["09:10","13:00","16:40","21:15"], richtung:"Hin"},
  {number:"BN413", start:"TLL", ziel:"CGN", abflug:["07:55","11:45","15:25","20:00"], landung:["10:15","14:05","17:45","22:20"], richtung:"Rück"},

  {number:"BN414", start:"CGN", ziel:"HEL", abflug:["06:25","10:05","13:50","18:30"], landung:["08:25","12:05","15:50","20:30"], richtung:"Hin"},
  {number:"BN415", start:"HEL", ziel:"CGN", abflug:["07:30","11:10","14:55","19:35"], landung:["09:30","13:10","16:55","21:35"], richtung:"Rück"},

  {number:"BN416", start:"CGN", ziel:"SOF", abflug:["06:40","10:20","14:05","18:30"], landung:["08:10","11:50","15:35","19:50"], richtung:"Hin"},
  {number:"BN417", start:"SOF", ziel:"CGN", abflug:["07:45","11:25","15:10","19:35"], landung:["09:15","12:55","16:40","21:05"], richtung:"Rück"},

  {number:"BN418", start:"CGN", ziel:"BSL", abflug:["06:50","10:30","14:10","18:40"], landung:["08:20","12:00","15:40","20:10"], richtung:"Hin"},
  {number:"BN419", start:"BSL", ziel:"CGN", abflug:["07:55","11:35","15:15","19:55"], landung:["09:25","13:05","16:45","21:25"], richtung:"Rück"}
];
];

// ---- FLÜGE SUCHEN ----
function searchFlights(){
  const start = document.getElementById("startInput").value.toUpperCase();
  const ziel = document.getElementById("zielInput").value.toUpperCase();
  const name = document.getElementById("nameInput").value;
  const seat = document.getElementById("seatInput").value;
  const tarif = document.getElementById("tarifSelect").value;
  const date = document.getElementById("dateInput").value;

  const table = document.getElementById("flightTable");
  table.innerHTML = "";

  const results = flights.filter(f=>f.start===start && f.ziel===ziel);
  if(results.length===0){
    table.innerHTML = "<tr><td colspan='9'>Keine Flüge gefunden</td></tr>";
    return;
  }

  results.forEach(f=>{
    const options = f.abflug.map((t,i)=>`<option value="${i}">${t} - ${f.landung[i]}</option>`).join('');
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td data-label="Flugnummer">${f.number}</td>
      <td data-label="Start">${f.start}</td>
      <td data-label="Ziel">${f.ziel}</td>
      <td data-label="Abflug-Zeit"><select id="timeSelect_${f.number}">${options}</select></td>
      <td data-label="Richtung">${f.richtung}</td>
      <td data-label="Datum">${date}</td>
      <td data-label="Tarif">${tarif}</td>
      <td data-label="Name">${name}</td>
      <td data-label="Ticket"><button onclick='generateTicket("${f.number}","${name}","${seat}","${tarif}","${date}")'>PDF</button></td>
    `;
    table.appendChild(tr);
  });
}

// ---- PDF GENERIEREN ----
function generateTicket(flightNumber, name, seat, tarif, date){
    const flight = flights.find(f => f.number === flightNumber);
    const select = document.getElementById(`timeSelect_${flight.number}`);
    const index = select.selectedIndex;

    const abflug = flight.abflug[index];
    const landung = flight.landung[index];

    // PDF generieren
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Benni Airways Boardpass", 20, 20);

    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 20, 35);
    doc.text(`Sitz: ${seat}`, 20, 45);
    doc.text(`Flugnummer: ${flight.number}`, 20, 55);
    doc.text(`Von: ${flight.start}   Nach: ${flight.ziel}`, 20, 65);
    doc.text(`Abflug: ${abflug}   Landung: ${landung}`, 20, 75);
    doc.text(`Richtung: ${flight.richtung}`, 20, 85);
    doc.text(`Datum: ${date}`, 20, 95);
    doc.text(`Tarif: ${tarif}`, 20, 105);

    // QR-Code mit geheimem Codewort "APPROVED"
    const qrText = `APPROVED|${flight.number}|${name}|${seat}|${tarif}|${date}`;
    new QRCode(document.createElement("div"), {
        text: qrText,
        width: 80,
        height: 80,
        correctLevel: QRCode.CorrectLevel.H
    })._oDrawing._elCanvas.toBlob(function(blob){
        const reader = new FileReader();
        reader.onload = function() {
            const imgData = reader.result;
            doc.addImage(imgData, "PNG", 150, 20, 40, 40); // QR-Code rechts oben
            doc.save(`${flight.number}_${name}.pdf`);
        };
        reader.readAsDataURL(blob);
    });
}
