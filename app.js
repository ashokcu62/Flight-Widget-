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
                }, 100 * index)

                tableRow.append(tableCell)

            }



            console.log("array", word)
        }

        tableBody.append(tableRow)

    }

}
populateTable()