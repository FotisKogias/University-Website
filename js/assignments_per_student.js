import * as Utils from "./add_edit_utilities.js";

const currentPage = Utils.urlFinder();
const students = JSON.parse(localStorage.getItem("student")) || [];
const array = JSON.parse(localStorage.getItem(currentPage)) || [];
if (students.length == 0) {
  $(`<div class = "row mt-5 text-center"><div class="col-md mt-1"><h2 class="text-white fs-3"></h2></div></div>`).appendTo($('#mid'))
  $('<h3 class="text-white fs-3 text-center">There are no available students.</h3>').appendTo($('#mid'))
}
students.forEach((elem, index) => {
  $(`<div class="card col-md- p-3">
    <div class="row mt-5 border-bottom">
      <h1 class=" text-warning text-start ">Student Info:</h1>
    </div>
   

    <div class="row mt-5 text-center">
      <div class="col-md mt-1">
      </div>
      <div class="col-md mt-1">
        <h3 class="text-white fs-3">First Name</h3>
      </div>

      <div class="col-md mt-1">
        <h3 class="text-white fs-3" id="streams">Last Name</h3>
      </div>

      <div class="col-md mt-1">
        <h3 class="text-white fs-3">Birth Date</h3>
      </div>
      <div class="col-md mt-1">
        <h3 class="text-white fs-3">Tuition Fees</h3>
      </div>
    </div>
    <div class = "row mt-5 text-center" id=${index + 1}><div class="col-md mt-1"><h2 class="text-white fs-3">${index + 1})</h2></div></div> 
   
  </div>`).appendTo($("#mid"))
  let values = Object.entries(elem)
  for (let i = 0; i < values.length; i++) {
    if (values[i][0] == "courseEnlist") {
      break;
    }
    $(`<div class="col-md mt-1"><h2 class="text-white fs-3">${values[i][1]}</h2></div>`).appendTo($(`#${index + 1}`))
  }
  $(`<div class="card col-md p-3 mb-5 ${elem.objectName.split(" ").join("")}">
    <div class="row mt-5 border-bottom ">
    <h2 class=" text-warning text-start ">${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}s of this student:</h2>
    </div>
    <div class="row mt-5 text-center ">
    
    <div class="col-md mt-1">
    <h3 class="text-white fs-3">Title</h3>
    </div>
    
    <div class="col-md mt-1">
    <h3 class="text-white fs-3">Oral Mark</h3>
    </div>
    
    <div class="col-md mt-1">
    <h3 class="text-white fs-3">Total Mark</h3>
    </div>

    <div class="col-md mt-1">
    <h3 class="text-white fs-3">Submission-Date</h3>
    </div>
    <div class="col-md mt-1">
    <h3 class="text-white fs-3">Assignments Course</h3>
    </div>
    
    </div>
    </div>`).appendTo("#mid")
  if (elem.assignments === undefined) {
    $(`<div class = "row mt-5 text-center"><div class="col-md mt-1"><h2 class="text-white fs-3"></h2></div></div>`).appendTo($(`.${elem.objectName.split(" ").join("")}`))
    $('<h3 class="text-white fs-3 text-center">Student has no assignments.</h3>').appendTo($(`.${elem.objectName.split(" ").join("")}`))
  } else {
    elem.assignments.forEach((element) => {
      let row = `<div class = "row mt-5 text-center">`
      let find = array.findIndex(
        (object) => object.objectName == element
      );
      let values = Object.entries(array[find])
      for (let i = 0; i < values.length; i++) {
        if (values[i][0] == "comments") {
          break;
        }
        row += `<div class="col-md mt-1"><h2 class="text-white fs-3">${values[i][1]}</h2></div>`
      }
      row += `</div>`
      $(`.${elem.objectName.split(" ").join("")}`).append(row)
    })
  }

})
