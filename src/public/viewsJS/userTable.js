const users = JSON.parse(document.currentScript.getAttribute("usersData"));

const tableTitle = document.querySelector(".tableTitle");
const table = document.querySelector(".userTable");
const tableRowBase = document.querySelector(".userTable .tableRow");
const tableRowTemplate = tableRowBase.cloneNode(true);
tableRowBase.remove();

if (users.length < 2) {
  tableTitle.innerText = "User";
}
for (const user of users) {
  const tableRow = tableRowTemplate.cloneNode(true);
  tableRow.querySelector(".tableId").innerText = user.id;
  tableRow.querySelector(".tableName").innerText = user.name;
  tableRow.querySelector(".tablePassword").innerText = user.password;
  tableRow.querySelector(
    ".tableUpdate form"
  ).action = `/user/${user.id}/updateButton`;
  table.appendChild(tableRow);
  tableRow.querySelector(
    ".tableRemove form"
  ).action = `/user/${user.id}/remove`;
  table.appendChild(tableRow);
}
