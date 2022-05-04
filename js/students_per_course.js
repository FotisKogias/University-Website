import * as Utils from "./add_edit_utilities.js";

const currentPage = Utils.urlFinder();
const courses = JSON.parse(localStorage.getItem("courses")) || [];
const array = JSON.parse(localStorage.getItem(currentPage)) || [];


if (courses.length == 0) {
  $(`<div class = "row mt-5 text-center"><div class="col-md mt-1"><h2 class="text-white fs-3"></h2></div></div>`).appendTo($('#mid'))
  $('<h3 class="text-white fs-3 text-center">There are no available courses.</h3>').appendTo($('#mid'))
}
courses.forEach((elem, index) => {
  $(`<div class="card col-md- p-3">
    <div class="row mt-5 border-bottom">
      <h1 class=" text-warning text-start ">Course Info:</h1>
    </div>
   

    <div class="row mt-5 text-center">
      <div class="col-md mt-1">
      </div>
      <div class="col-md mt-1">
        <h3 class="text-white fs-3">Title</h3>
      </div>

      <div class="col-md mt-1">
        <h3 class="text-white fs-3" id="streams">Stream</h3>
      </div>

      <div class="col-md mt-1">
        <h3 class="text-white fs-3">Type</h3>
      </div>
      <div class="col-md mt-1">
        <h3 class="text-white fs-3">Start Date</h3>
      </div>

      <div class="col-md mt-1">
        <h3 class="text-white fs-3">End Date</h3>
      </div>
      
    </div>
    <div class = "row mt-5 text-center" id=${index + 1}><div class="col-md mt-1"><h2 class="text-white fs-3">${index + 1})</h2></div></div> 
   
  </div>`).appendTo($("#mid"))
  let values = Object.entries(elem)
  for (let i = 0; i < values.length; i++) {
    if (values[i][0] == "comments") {
      break;
    }
    $(`<div class="col-md mt-1"><h2 class="text-white fs-3">${values[i][1]}</h2></div>`).appendTo($(`#${index + 1}`))
  }
  $(`<div class="card col-md p-3 mb-5 ${elem.objectName.split(" ").join("")}">
    <div class="row mt-5 border-bottom ">
    <h2 class=" text-warning text-start ">${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} in this Course:</h2>
    </div>
    <div class="row mt-5 text-center ">
    
    <div class="col-md mt-1">
    <h3 class="text-white fs-3">First Name</h3>
    </div>
    
    <div class="col-md mt-1">
    <h3 class="text-white fs-3">Last Name</h3>
    </div>
    
    <div class="col-md mt-1">
    <h3 class="text-white fs-3">Birth Date</h3>
    </div>

    <div class="col-md mt-1">
    <h3 class="text-white fs-3">Plan</h3>
    </div>
    <div class="col-md mt-1">
    <h3 class="text-white fs-3">Course Enlistment</h3>
    </div>
    
    </div>
    </div>`).appendTo("#mid")

})


array.forEach((element, index) => {
  let row = `<div class = "row mt-5 text-center">`
  let values = Object.entries(element)
  for (let i = 0; i < values.length; i++) {
    if (values[i][0] == "courses") {
      break;
    }
    row += `<div class="col-md mt-1"><h2 class="text-white fs-3">${values[i][1]}</h2></div>`
  }
  row += `</div>`
  $(`.${element.courseEnlist.split(" ").join("")}`).append(row)
})
