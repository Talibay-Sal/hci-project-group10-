function exportToCSV() {
    let csv = [];
    let rows = document.querySelectorAll(".trips-table tr");

    rows.forEach((row) => {
        let cols = row.querySelectorAll("td, th");
        let rowData = [];
        cols.forEach((col) => rowData.push(col.innerText));
        csv.push(rowData.join(","));
    });

    let csvFile = new Blob([csv.join("\n")], { type: "text/csv" });
    let downloadLink = document.createElement("a");
    downloadLink.download = "upcoming_trips.csv";
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

function exportToCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";
    document.querySelectorAll(".trips-table tr").forEach(function(row) {
        let rowData = Array.from(row.querySelectorAll("td, th")).map(col => `"${col.innerText.replace(/"/g, '""')}"`).join(",");
        csvContent += rowData + "\n";
    });
    let link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "upcoming_trips.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
