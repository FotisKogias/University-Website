import * as Utils from "./add_edit_utilities.js";

const currentPage = Utils.urlFinder();
const array = JSON.parse(localStorage.getItem(currentPage)) || [];
/* 
If the array is empty append to the section element a notifying message
*/
if (array.length == 0) {
    $(`<div class = "row mt-5 text-center"><div class="col-md mt-1"><h2 class="text-white fs-3"></h2></div></div>`).appendTo($('.card'))
    $('<h3 class="text-white fs-3 text-center">There are no available resources</h3>').appendTo($('.card'))
}

/* 
To display the objects from an array, we iterate through them, while creating
an array of key-value pairs of each object. After we iterate through the values
array and extracting the objects value except the description contents.
*/
array.forEach((elem, index) => {
    $(`<div class = "row mt-5 text-center" id=${index + 1}><div class="col-md mt-1"><h2 class="text-white fs-3">${index + 1})</h2></div></div>`).appendTo($('.card'))
    let values = Object.entries(elem)
    for (let i = 0; i < values.length; i++) {
        if (values[i][0] == "comments" || values[i][0] == "courseEnlist") {
            break;
        }
        $(`<div class="col-md mt-1"><h2 class="text-white fs-3">${values[i][1]}</h2></div>`).appendTo($(`#${index + 1}`))
    }
})