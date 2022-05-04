import * as Utils from "./add_edit_utilities.js";

const currentPage = Utils.urlFinder();
console.log(currentPage);
const array = JSON.parse(localStorage.getItem(currentPage)) || [];
const assignmentsArray = []
Utils.loadCourses(array);
Utils.loadLists(JSON.parse(localStorage.getItem("assignment")) || [])
Utils.showExistingObjectsFromArray(array)
$(document).ready(function () {
    $("#form").submit(function (event) {
        assignmentsArray.push($("#existing2").val())
        array.forEach(student => {
            if (student.objectName == $("#existing").val()) {
                if (student.assignments !== undefined) {
                    if (student.assignments.includes(assignmentsArray[0])) {
                        console.log(assignmentsArray[0]);
                        alert("The student already has this assignment!")
                    } else if (assignmentsArray[0] === null) {
                        alert("Assignment field cannot be empty")
                    }
                    else {
                        student.assignments.push(assignmentsArray[0])
                        alert("Assignment has been successfully added.")
                    }
                }
                if (assignmentsArray[0] === null) {
                    alert("Assignment field cannot be empty")
                }
                if (student.assignments === undefined && assignmentsArray[0] !== null) {
                    student.assignments = assignmentsArray
                    console.log(student.assignments);
                    alert("Assignment has been successfully added.")
                }
            }
        })
        localStorage.setItem(currentPage, JSON.stringify(array));
        event.preventDefault();
        location.reload()
    })

})
