const tableBody = document.getElementById('table-body')
let flights = [{
    time: "08:10",
    destination: "OMAN",
    flight: "AO 1",
    gate: "OX 203",
    remarks: "ON TIME"
}, {
    time: "10:10",
    destination: "LONDON",
    flight: "AO 2",
    gate: "OX 204",
    remarks: "ON TIME"
}, {
    time: "11:10",
    destination: "INDIA",
    flight: "AO 3",
    gate: "OX 205",
    remarks: "CANCELD"
}, {
    time: "12:10",
    destination: "AMERICA",
    flight: "AO 4",
    gate: "OX 207",
    remarks: "ON TIME"
}, {
    time: "01:10",
    destination: "UK",
    flight: "AO5 ",
    gate: "OX 209",
    remarks: "ON TIME"
}, {
    time: "02:10",
    destination: "ITALLY",
    flight: "AO 6",
    gate: "OX 208",
    remarks: "CANCELD"
},
{
    time: "03:10",
    destination: "FRANCE",
    flight: "AO 8",
    gate: "OX 221",
    remarks: "CANCELD"
},]

// 



// dinamic data 
const destination = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antiguamp; Barbuda"]
const remarks = ["ONTIME", "REMARKED", "CANCELD"]
let hour = 15

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement('tr')    //table row creation

        for (const flightDetail in flight) {
            const tableCell = document.createElement('td')    //table date creation

            //     tableCell.innerText =word    //fight objs  value array


            const word = Array.from(flight[flightDetail])
            for (const [index, letter] of word.entries()) {     //entries() function for get index for array letters
                const letterElement = document.createElement('div')

                setTimeout(() => {                              //making animation time variation

                    letterElement.classList.add('flip')
                    letterElement.innerText = letter
                    tableCell.append(letterElement)
                }, 300 * index)

                tableRow.append(tableCell)

            }

        }

        tableBody.append(tableRow)

    }

}

// adding new objects to flights array
function suffle() {

    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destination[Math.floor(Math.random() * destination.length)],
        flight: generateRandomLetter() + "" + generateRandomLetter() + " " + generateRandomNumber(),
        gate: generateRandomLetter() + " " + generateRandomNumber() + "" + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })

    tableBody.textContent = ""
    populateTable()

}


//  random letter

function generateRandomLetter() {
    const alaphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alaphabets.charAt(Math.floor(Math.random() * alaphabets.length))
}
// random number

function generateRandomNumber(maxNumber) {
    const nums = "0123456789"
    if (maxNumber) {

        const newNumber = nums.slice(0, maxNumber)
        return newNumber.charAt(Math.floor(Math.random() * newNumber.length))
    }
    return nums.charAt(Math.floor(Math.random() * nums.length))
}

// time random
function generateTime() {
    let displayHour = hour
    if (hour < 24) {
        hour++
        displayHour = hour
    }
    if (hour <= 24) {
        hour = 1
        displayHour = hour
    }
    if (hour < 10) {
        displayHour = "0" + hour
    }
    return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber()
}


// function calls
populateTable()
setInterval(suffle,3000)