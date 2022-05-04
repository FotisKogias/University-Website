import * as Utils from "./add_edit_utilities.js";

const currentPage = Utils.urlFinder();
const array = JSON.parse(localStorage.getItem(currentPage)) || [];
Utils.loadLists(JSON.parse(localStorage.getItem("courses")) || [])
$(document).ready(function () {
  $("#form").submit(function (event) {
    Utils.submission(array);
    localStorage.setItem(currentPage, JSON.stringify(array));
    event.preventDefault();
    form.reset()
  });
});