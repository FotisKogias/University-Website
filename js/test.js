import * as Utils from "./add_edit_utilities.js";

// const currentPage = Utils.urlFinder()
// const array = JSON.parse(localStorage.getItem(currentPage)) || [];
// Utils.loadCourses(array)
// Utils.showExistingObjectsFromArray(array)
// $(document).ready(function () {
//     $("#form").submit(function (event) {
//         Utils.submission(array,currentPage)
//         localStorage.setItem(currentPage, JSON.stringify(array));
//         event.preventDefault();
//         location.reload()
//     })
// })
const currentPage = Utils.urlFinder();
const array = JSON.parse(localStorage.getItem(currentPage)) || [];
Utils.loadCourses(array);
Utils.showExistingObjectsFromArray(array)
$(document).ready(function () {
  $("#form").submit(function (event) {
    // Utils.submission(array);
    Utils.edit(array)
    localStorage.setItem(currentPage, JSON.stringify(array));
    event.preventDefault();
    form.reset()
    location.reload();
  });
});
// const courses = JSON.parse(localStorage.getItem("courses")) || [];

// $("#form").submit(function (event) {

//     let fields = $("form").serializeArray();
//     let object = fields.reduce((obj, item) => (obj[item.name] = item.value, obj), {})
//     console.log(object)
//     courses.push(object)

//     localStorage.setItem("courses", JSON.stringify(courses));
//     event.preventDefault();
// });

// THIS IS STAGE ONE OF NORMAL SUBMISSION WITH IMPORTED FUNCTIONS
// const currentPage = Utils.urlFinder()
// $(document).ready(function () {
//     $("#form").submit(function (event) {
//         Utils.submission(currentPage)
//         event.preventDefault();
//     })
// })

// const currentPage = Utils.urlFinder()
// Utils.loadCourses(currentPage)
// $(document).ready(function () {
//     $("#form").submit(function (event) {
//         Utils.submission(currentPage)
//         event.preventDefault();
//         location.reload()
//     })
// })

// console.log(array[0].objectName)
// console.log($("#existing").val() == array[0].objectName)
// Utils.showExistingObjectsFromArray(currentPage)
// $("#existing").change( () => {
//     // let array = JSON.parse(localStorage.getItem(currentArrayOfObjects)) || [];
//     array.forEach((object) => {
//         let entries = Object.entries(object)
//         if (object.objectName == $("#existing").val()) {
//             $("#form *").filter(':input').each(function (index) {
//                 if ($(this).hasClass("btn")) {
//                     return
//                 } else {
//                     $(this).val(entries[index][1]);
//                     // console.log($("#form *").filter(':input'))

//                     // console.log($(this).val());
//                     // Object.values(object).forEach(val => $(this).val(val));

//                 }
//             });
//         }
//     });
// });

// console.log($(":input").serializeArray())
// $('#form *').filter(':input').each(function () {
//     if ($(this).hasClass("btn")) {
//         return
//     } else {
//         console.log($(this).val());
//         // $(this).val("monkis")
//     }
//     // console.log($(this).hasClass("btn"))
// });
// console.log($(":input"))

// const typee = "elephant"
// function submit(something) {
//     $(document).ready(function () {
//         $("#form").submit(function (event) {

//             let arr = JSON.parse(localStorage.getItem(something)) || [];
//             let fields = $("form").serializeArray();
//             let object = fields.reduce((obj, item) => (obj[item.name] = item.value, obj), {})
//             // console.log(object)
//             arr.push(object)

//             localStorage.setItem(something, JSON.stringify(arr));
//             event.preventDefault();
//         });
//     });
// }
// function keki() {
//     const currentUrl = window.location.href
//     switch (true) {
//         case (currentUrl.includes("course")):
//             console.log("courses")
//             const type = "courses"
//             Utils.submittt(type)
//             break;
//         case (currentUrl.includes("trainer")):
//             console.log("trainers")
//             break;
//         case (currentUrl.includes("course")):
//             console.log("courses")
//             break;

//     }
// }
// Utils.keki()

// $(document).ready(function () {
//     // console.log($("#stream").val())
//     $("form").submit(function (event) {
//         // console.log( $( this ).serializeArray() );
//         // let x = $( this ).serializeArray()
//         var fields = $("form").serializeArray();
//         var object = fields.reduce((obj, item) => (obj[item.name] = item.value, obj), {})
//         console.log(object)
//         event.preventDefault();
//         console.log( $( this ).serializeArray() );
//         let x = $( this ).serializeArray()
//     });

// });
