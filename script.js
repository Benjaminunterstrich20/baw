// ---- FLUGDATEN ----
const flights = [
    {number:"BW730", start:"CGN", ziel:"PMI", abflug:["06:20","09:40","13:15","17:55"], landung:["08:20","11:40","15:15","19:55"], richtung:"Hin"},
    {number:"BW729", start:"PMI", ziel:"CGN", abflug:["07:30","10:50","14:25","18:55"], landung:["09:30","12:50","16:25","20:55"], richtung:"Rück"},
    {number:"BW382", start:"CGN", ziel:"BER", abflug:["06:10","09:35","13:20","18:00"], landung:["07:10","10:35","14:20","19:00"], richtung:"Hin"},
    {number:"BW381", start:"BER", ziel:"CGN", abflug:["07:15","10:40","14:25","19:05"], landung:["08:15","11:40","15:25","20:05"], richtung:"Rück"},
    // ... restliche Flüge
];

// ---- FLÜGE SUCHEN ----
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
        const options = f.abflug.map((t,i) => `<option value="${i}">${t} - ${f.landung[i]}</option>`).join('');
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
            <td data-label="Ticket"><button onclick='generateTicketWithTime("${f.number}","${name}","${seat}","${tarif}","${date}")'>PDF</button></td>
        `;
        table.appendChild(tr);
    });
}

// ---- QR-CODE + PDF GENERIEREN ----
function generateTicketWithTime(flightNumber, name, seat, tarif, date) {
    const flight = flights.find(f => f.number === flightNumber);
    const select = document.getElementById(`timeSelect_${flight.number}`);
    const index = select.selectedIndex;

    const abflug = flight.abflug[index];
    const landung = flight.landung[index];

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Logo einfügen
    const logo = new Image();
    logo.src = 'logo.png';
    logo.onload = () => {
        doc.addImage(logo, 'PNG', 10, 10, 40, 40);

        doc.setFontSize(18);
        doc.text("Benni Airways Boardpass", 60, 25);

        doc.setFontSize(12);
        doc.text(`Name: ${name}`, 20, 60);
        doc.text(`Sitz: ${seat}`, 20, 70);
        doc.text(`Flugnummer: ${flight.number}`, 20, 80);
        doc.text(`Von: ${flight.start}   Nach: ${flight.ziel}`, 20, 90);
        doc.text(`Abflug: ${abflug}   Landung: ${landung}`, 20, 100);
        doc.text(`Richtung: ${flight.richtung}`, 20, 110);
        doc.text(`Datum: ${date}`, 20, 120);
        doc.text(`Tarif: ${tarif}`, 20, 130);

        // QR-Code generieren
        const qrText = `APPROVED|${flight.number}|${name}|${seat}|${tarif}|${date}`;
        const tempDiv = document.createElement("div");
        new QRCode(tempDiv, { text: qrText, width: 80, height: 80, correctLevel: QRCode.CorrectLevel.H });

        const canvas = tempDiv.querySelector("canvas");
        if (canvas) {
            const imgData = canvas.toDataURL("image/png");
            doc.addImage(imgData, "PNG", 150, 20, 40, 40);
            doc.save(`${flight.number}_${name}.pdf`);
        } else {
            alert("QR-Code konnte nicht erstellt werden!");
        }
    };
}
