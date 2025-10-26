Alles klar, Benni 😎 Ich mach’s so, dass alle Flüge aus deiner Tabelle drin sind, Hin- und Rückflüge, 4 Abflugzeiten pro Flug und das PDF-Ticket (Boardpass) den Tarif anzeigt.

Hier ist das komplette Script:

// ---- FLUGDATEN ----
const flights = [
  // Palma de Mallorca
  {number:"BW730", start:"CGN", ziel:"PMI", abflug:["08:00","10:00","12:00","14:00"], landung:["10:00","12:00","14:00","16:00"], richtung:"Hin"},
  {number:"BW729", start:"PMI", ziel:"CGN", abflug:["09:00","11:00","13:00","15:00"], landung:["11:00","13:00","15:00","17:00"], richtung:"Rück"},

  // Berlin
  {number:"BW382", start:"CGN", ziel:"BER", abflug:["07:00","09:00","11:00","13:00"], landung:["08:00","10:00","12:00","14:00"], richtung:"Hin"},
  {number:"BW381", start:"BER", ziel:"CGN", abflug:["08:00","10:00","12:00","14:00"], landung:["09:00","11:00","13:00","15:00"], richtung:"Rück"},

  // Paris
  {number:"BW903", start:"CGN", ziel:"CDG", abflug:["06:00","08:00","10:00","12:00"], landung:["07:00","09:00","11:00","13:00"], richtung:"Hin"},
  {number:"BW902", start:"CDG", ziel:"CGN", abflug:["07:00","09:00","11:00","13:00"], landung:["08:00","10:00","12:00","14:00"], richtung:"Rück"},

  // Frankfurt
  {number:"BW148", start:"CGN", ziel:"FRA", abflug:["06:30","08:30","10:30","12:30"], landung:["07:00","09:00","11:00","13:00"], richtung:"Hin"},
  {number:"BW147", start:"FRA", ziel:"CGN", abflug:["07:30","09:30","11:30","13:30"], landung:["08:00","10:00","12:00","14:00"], richtung:"Rück"},

  // Hamburg
  {number:"BW564", start:"CGN", ziel:"HAM", abflug:["07:00","09:00","11:00","13:00"], landung:["08:00","10:00","12:00","14:00"], richtung:"Hin"},
  {number:"BW563", start:"HAM", ziel:"CGN", abflug:["08:00","10:00","12:00","14:00"], landung:["09:00","11:00","13:00","15:00"], richtung:"Rück"},

  // München
  {number:"BW816", start:"CGN", ziel:"MUC", abflug:["06:30","08:30","10:30","12:30"], landung:["07:30","09:30","11:30","13:30"], richtung:"Hin"},
  {number:"BW815", start:"MUC", ziel:"CGN", abflug:["07:30","09:30","11:30","13:30"], landung:["08:30","10:30","12:30","14:30"], richtung:"Rück"},

  // Budapest
  {number:"BW257", start:"CGN", ziel:"BUD", abflug:["08:00","10:00","12:00","14:00"], landung:["09:30","11:30","13:30","15:30"], richtung:"Hin"},
  {number:"BW256", start:"BUD", ziel:"CGN", abflug:["09:00","11:00","13:00","15:00"], landung:["10:30","12:30","14:30","16:30"], richtung:"Rück"},

  // Oslo
  {number:"BW691", start:"CGN", ziel:"OSL", abflug:["07:00","09:00","11:00","13:00"], landung:["09:00","11:00","13:00","15:00"], richtung:"Hin"},
  {number:"BW690", start:"OSL", ziel:"CGN", abflug:["08:00","10:00","12:00","14:00"], landung:["10:00","12:00","14:00","16:00"], richtung:"Rück"},

  // Nantes
  {number:"BW439", start:"CGN", ziel:"NTE", abflug:["06:00","08:00","10:00","12:00"], landung:["07:30","09:30","11:30","13:30"], richtung:"Hin"},
  {number:"BW438", start:"NTE", ziel:"CGN", abflug:["07:00","09:00","11:00","13:00"], landung:["08:30","10:30","12:30","14:30"], richtung:"Rück"},

  // London
  {number:"BW076", start:"CGN", ziel:"LHR", abflug:["08:00","10:00","12:00","14:00"], landung:["09:00","11:00","13:00","15:00"], richtung:"Hin"},
  {number:"BW075", start:"LHR", ziel:"CGN", abflug:["09:00","11:00","13:00","15:00"], landung:["10:00","12:00","14:00","16:00"], richtung:"Rück"},

  // Düsseldorf
  {number:"BW952", start:"CGN", ziel:"DUS", abflug:["06:30","07:30","08:30","09:30"], landung:["06:45","07:45","08:45","09:45"], richtung:"Hin"},
  {number:"BW951", start:"DUS", ziel:"CGN", abflug:["07:30","08:30","09:30","10:30"], landung:["07:45","08:45","09:45","10:45"], richtung:"Rück"},

  // Wien
  {number:"BW320", start:"CGN", ziel:"VIE", abflug:["08:00","10:00","12:00","14:00"], landung:["09:30","11:30","13:30","15:30"], richtung:"Hin"},
  {number:"BW319", start:"VIE", ziel:"CGN", abflug:["09:00","11:00","13:00","15:00"], landung:["10:30","12:30","14:30","16:30"], richtung:"Rück"},

  // Rom
  {number:"BW785", start:"CGN", ziel:"FCO", abflug:["08:00","10:00","12:00","14:00"], landung:["10:00","12:00","14:00","16:00"], richtung:"Hin"},
  {number:"BW784", start:"FCO", ziel:"CGN", abflug:["09:00","11:00","13:00","15:00"], landung:["11:00","13:00","15:00","17:00"], richtung:"Rück"},

  // Barcelona
  {number:"BW163", start:"CGN", ziel:"BCN", abflug:["08:00","10:00","12:00","14:00"], landung:["10:00","12:00","14:00","16:00"], richtung:"Hin"},
  {number:"BW162", start:"BCN", ziel:"CGN", abflug:["09:00","11:00","13:00","15:00"], landung:["11:00","13:00","15:00","17:00"], richtung:"Rück"},

  // Warschau
  {number:"BW528", start:"CGN", ziel:"WAW", abflug:["07:00","09:00","11:00","13:00"], landung:["08:30","10:30","12:30","14:30"], richtung:"Hin"},
  {number:"BW527", start:"WAW", ziel:"CGN", abflug:["08:00","10:00","12:00","14:00"], landung:["09:30","11:30","13:30","15:30"], richtung:"Rück"}
];

// ---- FLUG SUCHEN UND ANZEIGEN ----
function searchFlights() {
    const start = document.getElementById("startInput").value.toUpperCase();
    const ziel = document.getElementById("zielInput").value.toUpperCase();
    const name = document.getElementById("nameInput").value;
    const seat = document.getElementById("seatInput").value;
    const tarif = document.getElementById("tarifSelect").value;
    const date = document.getElementById("dateInput").value;

    const table = document.getElementById("flightTable");
    table.innerHTML = "";

    const results = flights.filter(f => f.start === start && f.ziel === ziel);
    if(results.length === 0){
        table.innerHTML = "<tr><td colspan='9'>Keine Flüge gefunden</td></tr>";
        return;
    }

    results.forEach(f => {
        // Dropdown für Abflugzeiten
        const timeOptions = f.abflug.map((t,i)=>`<option value="${i}">${t} - ${f.landung[i]}</option>`).join('');
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${f.number}</td>
          <td>${f.start}</td>
          <td>${f.ziel}</td>
          <td>
            <select id="timeSelect_${f.number}">
              ${timeOptions}
            </select>
          </td>
          <td>${f.richtung}</td>
          <td>${date}</td>
          <td>${tarif}</td>
          <td>${name}</td>
          <td><button onclick='generateTicketWithTime("${f.number}", "${name}", "${seat}", "${tarif}", "${date}")'>PDF</button></td>
        `;
        table.appendChild(tr);
    });
}

// ---- PDF GENERIEREN ----
function generateTicketWithTime(flightNumber, name, seat, tarif, date){
    const flight = flights.find(f=>f.number===flightNumber);
    const select = document.getElementById(`timeSelect_${flight.number}`);
    const index = select.selectedIndex
