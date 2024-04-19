function fetchAPI() {
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=V5QWY8Y5E73VJ2QHC2N7TK36D';
    fetch(url)
        .then((res) => res.json())
        .then(renderUI);
}
fetchAPI();

function renderUI() {
    const days = data.days;
    console.log(days);

    const row = document.createElement("tr");



    //make heading row
    const cell1 = document.createElement("th");
    cell1.innerText = 'Date';
    row.appendChild(cell1);

    const cell2 = document.createElement("th");
    cell2.innerText = 'Maximum temperature';
    row.appendChild(cell2);





    const childRow = document.createElement("tr");
    const c1 = document.createElement("td");
    cell1.innerText = 'Date';
    childRow.appendChild(c1);

    const c2 = document.createElement("th");
    c2.innerText = 'Maximum temperature';
    childRow.appendChild(c2);


    // const cell3 = document.createElement("th");
    // cell3.innerText = 'Minimum Temperature';
    // row.appendChild(cell3);

    root.append(row);
}

renderUI();