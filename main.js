const characters = [
    {
        name: "Levi Anckermann",
        gender: "Male",
        age: "30",
        group: "Scout Regiment",
        residence: "Wall Rose",
    },
    {
        name: "Mikasa Ackermann",
        gender: "Female",
        age: "19",
        group: "Scout Regiment",
        residence: "Wall Rose",
    },
    {
        name: "Rico Brzenska",
        gender: "Female",
        age: "27",
        group: "Garrison Regiment",
        residence: "Wall Rose",
    },
    {
        name: "Calvi",
        gender: "Male",
        age: "55",
        group: "Marleyan Military",
        residence: "-", 
    }
]

const tableBody = document.getElementById("table-body");
getData()

function getData() {
    tableBody.innerHTML = ""
    characters.forEach((char) => {
        const row = document.createElement("tr");

        for (const key in char) {
            const cell = document.createElement("td");
            cell.innerText = char[key];
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    });
}