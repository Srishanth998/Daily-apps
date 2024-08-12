document.addEventListener('DOMContentLoaded', function() {
    loadApps();
});

document.getElementById('app-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const appName = document.getElementById('app-name').value;
    const appAlternative = document.getElementById('app-alternative').value;

    if (appName && appAlternative) {
        const appList = getAppList();
        appList.push({ name: appName, alternative: appAlternative });
        saveAppList(appList);
        addAppToTable(appName, appAlternative);

        document.getElementById('app-name').value = '';
        document.getElementById('app-alternative').value = '';
    }
});

function deleteApp(button) {
    const row = button.parentNode.parentNode;
    const appName = row.children[0].textContent;
    row.remove();

    let appList = getAppList();
    appList = appList.filter(app => app.name !== appName);
    saveAppList(appList);
}

function getAppList() {
    return JSON.parse(localStorage.getItem('appList')) || [];
}

function saveAppList(appList) {
    localStorage.setItem('appList', JSON.stringify(appList));
}

function loadApps() {
    const appList = getAppList();
    appList.forEach(app => addAppToTable(app.name, app.alternative));
}

function addAppToTable(name, alternative) {
    const tableRow = document.createElement('tr');

    tableRow.innerHTML = `
        <td>${name}</td>
        <td>${alternative}</td>
        <td><button onclick="deleteApp(this)">Delete</button></td>
    `;

    document.getElementById('app-list').appendChild(tableRow);
}
