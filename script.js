document.getElementById('app-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const appName = document.getElementById('app-name').value;
    const appAlternative = document.getElementById('app-alternative').value;

    if (appName && appAlternative) {
        const tableRow = document.createElement('tr');

        tableRow.innerHTML = `
            <td>${appName}</td>
            <td>${appAlternative}</td>
            <td><button onclick="deleteApp(this)">Delete</button></td>
        `;

        document.getElementById('app-list').appendChild(tableRow);

        document.getElementById('app-name').value = '';
        document.getElementById('app-alternative').value = '';
    }
});

function deleteApp(button) {
    const row = button.parentNode.parentNode;
    document.getElementById('app-list').removeChild(row);
}
