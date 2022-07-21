const tableBody = document.getElementById("table-body");

let flights = [
  {
    time: "10:00",
    destination: "London",
    flight: "BA123",
    gate: "A1",
    remarks: "On time",
  },
];

function populateTable(){
    for(const flight of flights){
        const tableRow = document.createElement('tr')

        for( const flightDetail in flight){
            const tableCell = document.createElement('td')

            const word = Array.from (flight[flightDetail])
            for(const letter of word){
                const letterElement = document.createElement('div')
                letterElement.classList.add('flip')
                letterElement.textContent = letter
                tableCell.append(letterElement)
            }
            // tableCell.innerHTML = flight[flightDetail]

            tableRow.append(tableCell)
        }
        tableBody.append(tableRow)
    }
}

populateTable()