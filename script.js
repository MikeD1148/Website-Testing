var subjects = ["Computer Science", "Maths", "Biology", "Chemistry", "Physics", "Computer Science", "Maths", "Biology", "Chemistry", "Physics", "Computer Science", "Maths", "Biology", "Chemistry", "Physics",];
var grade = ["A", "B", "A*", "A*", "A", "A", "B", "A*", "A*", "A", "A", "B", "A*", "A*", "A",];
var year = ["2020", "2020", "2020", "2019", "2020", "2020", "2020", "2020", "2019", "2020", "2020", "2020", "2020", "2019", "2020",];
for (index in subjects) {
    var table = document.getElementById("tableArray");
    var row = table.insertRow(index);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell1.innerHTML = grade[index];
    cell2.innerHTML = subjects[index];
    cell3.innerHTML = year[index];
}
var table = document.getElementById("tableArray");
var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell1.innerHTML = "Grade:";
cell2.innerHTML = "Subject Name:";
cell3.innerHTML = "Year:";

var experience = ["Google", "Facebook", "Sony", "Samsung", "Apple", "Adobe", "SAP", "Blizzard Entertainment", "Salesforce", "Twitter", "Microsoft", "Ubisoft", "Amazon", "Nvidia", "Netflix",];
var time = ["6 months", "4 months", "3 months", "6 months", "4 months", "3 months", "6 months", "4 months", "3 months", "6 months", "4 months", "3 months", "6 months", "4 months", "3 months",];

for (index in experience) {
    var table = document.getElementById("tableArray2");
    var row = table.insertRow(index);
    cell11 = row.insertCell(0);
    cell12 = row.insertCell(1);
    cell13 = row.insertCell(2);
    cell11.innerHTML = year[index];
    cell12.innerHTML = experience[index];
    cell13.innerHTML = time[index];
}
cell11.innerHTML = "Year:";
cell12.innerHTML = "Company:";
cell13.innerHTML = "Time There:";