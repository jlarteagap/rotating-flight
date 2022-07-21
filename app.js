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

const destinations = ["London", "Paris", "New York", "Tokyo", "Sydney", "Melbourne"]
const remarks = ["On time", "Delayed", "Cancelled", "Unknown"]

let hour = 15 


function populateTable(){
    for(const flight of flights){
        const tableRow = document.createElement('tr')

        for( const flightDetail in flight){
            const tableCell = document.createElement('td')

            const word = Array.from (flight[flightDetail])
            
            for(const [index, letter] of word.entries()){
                const letterElement = document.createElement('div')

                setTimeout(() => {
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement)
                }, 100* index)
            }

            tableRow.append(tableCell)
        }
        tableBody.append(tableRow)
    }
}

populateTable()

function generateRandomLetter(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

function generateRandomNumber(maxNumber){
    const numbers = "0123456789"
    if(maxNumber){
        const newNumbers = numbers.slice(0, maxNumber)
        return newNumbers[Math.floor(Math.random() * newNumbers.length)]

    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime(){
    let displayHour = hour

    if(hour < 24){
        hour++
    }
    if(hour >= 24){
        hour = 1
        displayHour = hour
    }
    if(hour < 10){
        displayHour = "0" + hour
    }

    return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber()
}
function shuffleUp() {
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)],
    })

    tableBody.textContent = ""
    populateTable()

}

setInterval(shuffleUp, 2000)