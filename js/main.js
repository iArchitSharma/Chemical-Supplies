if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then((registration) => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch((error) => {
                console.error('Service Worker registration failed:', error);
            });
    });
}



window.onload = function() {
    saveData();
    const chemicalTableBody = document.getElementById("chemicalTableBody");
    
    const savedData = localStorage.getItem("chemicalData");
    if (savedData) {
        while (chemicalTableBody.rows.length > 0) {
            chemicalTableBody.deleteRow(0);
        }
        const rows = JSON.parse(savedData);
        rows.forEach(row => {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td><input type="checkbox"></td>
                <td class="col-edit" contenteditable="true">${row.name}</td>
                <td class="col-edit" contenteditable="true">${row.vendor}</td>
                <td class="col-edit" contenteditable="true">${row.density}</td>
                <td class="col-edit" contenteditable="true">${row.viscosity}</td>
                <td class="col-edit" contenteditable="true">${row.packaging}</td>
                <td class="col-edit" contenteditable="true">${row.packSize}</td>
                <td class="col-edit" contenteditable="true">${row.unit}</td>
                <td class="col-edit" contenteditable="true">${row.quantity}</td>
            `;
            chemicalTableBody.appendChild(newRow);
        });
    }
};
  
  
  function saveData() {
    const tableRows = document.querySelectorAll("#chemicalTableBody tr");
    const data = [];
  
    tableRows.forEach(row => {
      const cells = row.querySelectorAll("td");
      data.push({
        name: cells[1].innerText.trim(),
        vendor: cells[2].innerText.trim(),
        density: cells[3].innerText.trim(),
        viscosity: cells[4].innerText.trim(),
        packaging: cells[5].innerText.trim(),
        packSize: cells[6].innerText.trim(),
        unit: cells[7].innerText.trim(),
        quantity: cells[8].innerText.trim(),
      });
    });
  
    localStorage.setItem("chemicalData", JSON.stringify(data));
    alert("Data saved successfully!");
  }
  
  
  function addRow() {
    const table = document.getElementById("chemicalTableBody");
    const newRow = document.createElement("tr");
  
    newRow.innerHTML = `
      <td><input type="checkbox"></td>
      <td class="col-edit" contenteditable="true">New Chemical</td>
      <td class="col-edit" contenteditable="true">Vendor</td>
      <td class="col-edit" contenteditable="true">0.00</td>
      <td class="col-edit" contenteditable="true">0.00</td>
      <td class="col-edit" contenteditable="true">Packaging</td>
      <td class="col-edit" contenteditable="true">0.00</td>
      <td class="col-edit" contenteditable="true">Unit</td>
      <td class="col-edit" contenteditable="true">0.00</td>
    `;
  
    table.appendChild(newRow);
  }
  
  
  function moveRowUp() {
    const table = document.getElementById("chemicalTableBody");
    const selectedRow = [...table.rows].find(
      (row) => row.querySelector("input[type='checkbox']").checked
    );
  
    if (selectedRow && selectedRow.previousElementSibling) {
      table.insertBefore(selectedRow, selectedRow.previousElementSibling);
    }
  }
  
  
  function moveRowDown() {
    const table = document.getElementById("chemicalTableBody");
    const selectedRow = [...table.rows].find(
      (row) => row.querySelector("input[type='checkbox']").checked
    );
  
    if (selectedRow && selectedRow.nextElementSibling) {
      table.insertBefore(selectedRow.nextElementSibling, selectedRow);
    }
  }
  
  
  function deleteRow() {
    const table = document.getElementById("chemicalTableBody");
    [...table.rows].forEach((row) => {
      if (row.querySelector("input[type='checkbox']").checked) {
        row.remove();
      }
    });
  }
  
  
  function toggleSelectAll() {
    const isChecked = document.getElementById("selectAll").checked;
    [
      ...document.querySelectorAll("#chemicalTableBody input[type='checkbox']"),
    ].forEach((cb) => (cb.checked = isChecked));
  }
  
  
 
function refreshData() {
    const chemicalTableBody = document.getElementById("chemicalTableBody");

    
    while (chemicalTableBody.rows.length > 0) {
        chemicalTableBody.deleteRow(0);
    }

    
    const savedData = localStorage.getItem("chemicalData");
    if (savedData) {
        const rows = JSON.parse(savedData);
        rows.forEach(row => {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td><input type="checkbox"></td>
                <td class="col-edit" contenteditable="true">${row.name}</td>
                <td class="col-edit" contenteditable="true">${row.vendor}</td>
                <td class="col-edit" contenteditable="true">${row.density}</td>
                <td class="col-edit" contenteditable="true">${row.viscosity}</td>
                <td class="col-edit" contenteditable="true">${row.packaging}</td>
                <td class="col-edit" contenteditable="true">${row.packSize}</td>
                <td class="col-edit" contenteditable="true">${row.unit}</td>
                <td class="col-edit" contenteditable="true">${row.quantity}</td>
            `;
            chemicalTableBody.appendChild(newRow);
        });
    }
    alert("Data refreshed successfully!");
}

  
  