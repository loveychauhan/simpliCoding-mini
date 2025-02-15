
const rowsInput = document.getElementById('rows');
const columnsInput = document.getElementById('columns');
const container = document.getElementById('sliderContainer');

createSliders()

function createSliders() {
    const rows = rowsInput.value;
    const columns = columnsInput.value;
    container.innerHTML = ''; // Clear existing sliders
    count = 1;
    for (let r = 0; r < rows; r++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row')

        for (let c = 0; c < columns; c++) {
            const colDiv = document.createElement('div');
            colDiv.classList.add('cell');
            colDiv.innerText = count++;
            rowDiv.appendChild(colDiv);
        }

        container.append(rowDiv)
    }
}

rowsInput.addEventListener('input', createSliders);
columnsInput.addEventListener('input', createSliders);