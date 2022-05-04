import * as Utils from "./add_edit_utilities.js";

const currentPage = Utils.urlFinder();
console.log(currentPage);
const array = JSON.parse(localStorage.getItem(currentPage)) || [];
const coursesArray = []
console.log(array);
Utils.loadCourses(array);
Utils.loadLists(JSON.parse(localStorage.getItem("courses")) || [])
Utils.showExistingObjectsFromArray(array)
$(document).ready(function () {
    $("#form").submit(function (event) {
        coursesArray.push($("#existing2").val())
        array.forEach(student => {
            if (student.objectName == $("#existing").val()) {
                if (student.courses === undefined) {
                    student.courses = [student.courseEnlist]
                }
                if (student.courses !== undefined) {
                    if (student.courses.includes(coursesArray[0])) {
                        alert("The student is already enlisted in this course!")
                    } else if (coursesArray[0] === null) {
                        alert("Course field cannot be empty")
                    }
                    else {
                        student.courses.push(coursesArray[0])
                        alert("Course has been added successfully")
                    }
                }
                if (coursesArray[0] === null) {
                    alert("Course field cannot be empty")
                }
                if (student.courses === undefined && coursesArray[0] !== null) {
                    student.courses = coursesArray
                    console.log(student.courses);
                    alert("Course has been added successfully")
                }
            }
        })
        localStorage.setItem(currentPage, JSON.stringify(array));
        event.preventDefault();
        location.reload()
    })

})
