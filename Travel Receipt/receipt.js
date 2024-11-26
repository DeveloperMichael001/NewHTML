function generateTicket() {
    const ticketNumber = document.getElementById("ticketNumber").value;
    const date = document.getElementById("date").value;
    const departureTime = document.getElementById("departureTime").value;
    const departure = document.getElementById("departure").value;
    const destination = document.getElementById("destination").value; 1 
    const vehicleNumber = document.getElementById("vehicleNumber").value;
    const seatNumber = document.getElementById("seatNumber").value;
    const fare = document.getElementById("fare").value;
    const passengerName = document.getElementById("passengerName").value;
    const passengerPhone = document.getElementById("passengerPhone").value;
    const servedBy = document.getElementById("servedBy").value;

    const ticketHTML = `
        <div class="ticket">
            <div class="header">
                <h2>VICTORIA SHUTTLES</h2><hr/>
                <div class="details">
                <p>Nairobi: 0722177464</p>
                <p>Nakuru: 0721600678</p>
                <p>Eldoret: 0722257014</p>
                <p>Kitale: 0722257014</p>
                <p>Kabamet: 0727048145</p><HR/>
                </div>
            </div>
            <div class="details">
                <p>Ticket No: ${ticketNumber}</p>
                <p>Date: ${date} ${departureTime}</p>
                <p>Departure: ${departure}</p>
                <p>Destination: ${destination}</p>
                <p>Vehicle: ${vehicleNumber}</p>
                <p>Seat No: ${seatNumber}</p>
                <p>Fare: ${fare}</p>
                <p>Pass Name: ${passengerName}</p>
                <p>Pass Phone: ${passengerPhone}</p>
                <p>Served By: ${servedBy}</p><br>
                <button onclick="printTicket()">Print Ticket</button>
            </div>
        </div>
    `;

    const ticketContainer = document.getElementById("ticketContainer");
    ticketContainer.innerHTML = ticketHTML;
}
function printTicket() {
    // Implement printing logic here, e.g., using window.print()
    window.print("ticketContainer");
}