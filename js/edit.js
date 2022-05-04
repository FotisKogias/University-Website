import * as Utils from "./add_edit_utilities.js";

const currentPage = Utils.urlFinder();
const array = JSON.parse(localStorage.getItem(currentPage)) || [];
Utils.loadCourses(array);
Utils.loadLists(JSON.parse(localStorage.getItem("courses")) || [])
Utils.showExistingObjectsFromArray(array)
$(document).ready(function () {
  $("#delete").click(function () {
    Utils.deleteObject(array)
    localStorage.setItem(currentPage, JSON.stringify(array));
    form.reset()
    location.reload();
  })
  $("#form").submit(function (event) {
    Utils.edit(array)
    localStorage.setItem(currentPage, JSON.stringify(array));
    event.preventDefault();
    form.reset()
    location.reload();
  });
});