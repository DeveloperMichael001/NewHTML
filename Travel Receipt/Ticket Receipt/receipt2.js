function generateTicket() {
    // Get values from form
    const ticketNo = document.getElementById("ticketNo").value;
    const date = document.getElementById("date").value;
    const departure = document.getElementById("departure").value;
    const destination = document.getElementById("destination").value;
    const vehicle = document.getElementById("vehicle").value;
    const seatNo = document.getElementById("seatNo").value;
    const fare = document.getElementById("fare").value;
    const passName = document.getElementById("passName").value;
    const passPhone = document.getElementById("passPhone").value;
    const servedBy = document.getElementById("servedBy").value;

    // Display values on ticket
    document.getElementById("ticketNoDisplay").textContent = ticketNo;
    document.getElementById("dateDisplay").textContent = date;
    document.getElementById("departureDisplay").textContent = departure;
    document.getElementById("destinationDisplay").textContent = destination;
    document.getElementById("vehicleDisplay").textContent = vehicle;
    document.getElementById("seatNoDisplay").textContent = seatNo;
    document.getElementById("fareDisplay").textContent = fare;
    document.getElementById("passNameDisplay").textContent = passName;
    document.getElementById("passPhoneDisplay").textContent = passPhone;
    document.getElementById("servedByDisplay").textContent = servedBy;

    // Show ticket container
    document.getElementById("ticketContainer").style.display = "block";
}

function printTicket() {
    // Implement printing logic here, e.g., using window.print()
    window.print();
}