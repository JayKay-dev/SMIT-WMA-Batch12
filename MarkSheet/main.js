var userName = prompt("Please enter your name:");

var totalMarks = parseInt(prompt("Enter Total Marks for Marksheet:"));

var subjectName1 = prompt("Enter the name of first subject");
var subjectMarks1 = parseInt(prompt("Enter the obtained marks for " + subjectName1 + ":"));

var subjectName2 = prompt("Enter the name of second subject");
var subjectMarks2 = parseInt(prompt("Enter the obtained marks for " + subjectName2 + ":"));

var subjectName3 = prompt("Enter the name of third subject");
var subjectMarks3 = parseInt(prompt("Enter the obtained marks for " + subjectName3 + ":"));

var obtMarks = subjectMarks1 + subjectMarks2 + subjectMarks3;
var percentage = parseInt((obtMarks / totalMarks) * 100);
var grade;
var remarks;

if (percentage > 80) {
    grade = "A+";
    remarks = "Excellent Work";
}

else if (percentage > 70) {
    grade = "A";
    remarks = "Weldone! Keep it up"
}

else if (percentage > 60) {
    grade = "B";
    remarks = "Needs Improvement"
}

else if (percentage > 50) {
    grade = "C";
    remarks = "Warning, work harder";
}

else {
    grade = "F";
    remarks = "Sorry, you have failed the exam."
}