/* 
With this function we get the current url page name, and then we return
the desired string to the main.js file which is stored to a variable 
so it can be used later on, on the other functions to signal which array 
needs to be parsed with JSON. Note that everytime you see currentArrayOfObjects
as a parameter to any function is equal to the array that we get from the local storage
so we can retrieve, edit, or save data to it.
 */
function urlFinder() {
  const currentUrl = window.location.href;
  switch (true) {
    case currentUrl.includes("course"):
      return "courses";
    case currentUrl.includes("trainer"):
      return "trainers";
    case currentUrl.includes("student"):
      return "student";
    case currentUrl.includes("assignment"):
      return "assignment";
  }
}

/* 
To achieve the creation of an object with a successful submission
we create an array with the input names and values as individual objects
in an array. After that we reduce the array to a single object with the reduce
function. Lastly the object is appended to the proper array.
*/
function submission(currentArrayOfObjects) {
  let fields = $("form").serializeArray();
  let object = fields.reduce(
    (obj, item) => ((obj[item.name] = item.value), obj),
    {}
  );
  currentArrayOfObjects.push(object);
  window.alert("Your submission has been successfull")
}

/*
To edit the desired object first, we create an array with the input names and values as 
individual objects in an array. After that we reduce the array to a single object with the 
reduce function. Next step is to find the objects index in the array that is in so we can 
splice it and then append a new object with the edited values in the array.
*/
function edit(currentArrayOfObjects) {
  let fields = $("form").serializeArray();
  let object = fields.reduce(
    (obj, item) => ((obj[item.name] = item.value), obj),
    {}
  );
  let find = currentArrayOfObjects.findIndex(
    (object) => object.objectName == $("#existing").val()
  );
  currentArrayOfObjects.splice(find, 1);
  currentArrayOfObjects.push(object);
  window.alert("Changes have been successfully saved")
}

/*
The deleteObject function is very similar to the edit function except we dont append any new
objects to the array.
*/
function deleteObject(currentArrayOfObjects) {
  let find = currentArrayOfObjects.findIndex(
    (object) => object.objectName == $("#existing").val()
  );
  currentArrayOfObjects.splice(find, 1);
  window.alert("Deletion was successfull")
}

/*
To display the existing objects the user has previously added,first we need to append 
them to the "#existing" select element by creating option elements in it. Then for each 
object in the given array we create option elements and appending them to the "#existing" 
select element from the html page. The first part of the function is used to display the 
values of the first object from the array as a "selected" value when the page first loads
up and is explained more in detail with context right below.*/
function loadCourses(currentArrayOfObjects) {
  let entries = Object.entries(currentArrayOfObjects[0]);
  $("#form *")
    .filter(":input")
    .each(function (index) {
      if ($(this).hasClass("btn")) {
        return;
      } else {
        $(this).val(entries[index][1]);
      }
    });
  currentArrayOfObjects.forEach((object) => {
    let option = document.createElement("option");
    option.text = object.objectName;
    $("#existing").append(option);
  });
}

/* 
First we get the array from the main.js file, everytime the user changes the select option 
with the "existing" id he triggers the on change function. After that we use the 'some' method
to iterate through the given array from local storage and we call the setValuesOfInputs fucntion as
as a parameter to iterate every element, until we find the objects name that matches to the users 
selected option, we have already made an entries array with all the values of the current 
object that our function iterates through. When we find the object that the user is 
looking for ("#form *") gives us an array of all the elements inside the form, filtering this array 
with the parameter (:inputs) we get a new array that includes only the input elements of the form, 
after that we iterate through them excluding the button element values and finally giving the remaining 
inputs their new values.
*/
function showExistingObjectsFromArray(currentArrayOfObjects) {
  $("#existing").change(() => {
    currentArrayOfObjects.some(setValuesOfInputs);
  });
}

function setValuesOfInputs(object) {
  let entries = Object.entries(object);
  if (object.objectName == $("#existing").val()) {
    $("#form *")
      .filter(":input")
      .each(function (index) {
        if ($(this).hasClass("btn")) {
          return false;
        } else {
          $(this).val(entries[index][1]);
        }
      });
  }
  return object.objectName == $("#existing").val();
}

function loadLists(currentArrayOfObjects) {
  currentArrayOfObjects.forEach((object) => {
    let option = document.createElement("option");
    option.text = object.objectName;
    $("#existing2").append(option);
  });
}
export {
  submission,
  urlFinder,
  loadCourses,
  showExistingObjectsFromArray,
  edit,
  deleteObject,
  loadLists
};
// VANILLA SUBMISSION
// function submission(listCategory) {
//   let array = JSON.parse(localStorage.getItem(listCategory)) || [];
//   let fields = $("form").serializeArray();
//   let object = fields.reduce(
//     (obj, item) => ((obj[item.name] = item.value), obj),
//     {}
//   );
//   array.push(object);
//   localStorage.setItem(listCategory, JSON.stringify(array));
// }

// function main() {
//     console.log("i made it")
// }
// function submit() {
//     $(document).ready(function () {
//         $("#form").submit(function (event) {

//             let courses = JSON.parse(localStorage.getItem("courses")) || [];
//             let fields = $("form").serializeArray();
//             let object = fields.reduce((obj, item) => (obj[item.name] = item.value, obj), {})
//             console.log(object)
//             courses.push(object)

//             localStorage.setItem("courses", JSON.stringify(courses));
//             event.preventDefault();
//         });
//     });
// }

// function keki() {
//     const currentUrl = window.location.href
//     switch (currentUrl) {
//         case (currentUrl.includes("course")):
//             console.log("yeah boi");
//             break;
//         case(lel):

//     }
// }

// function submittt() {
//     $(document).ready(function () {
//         $("#form").submit(function (event) {

//             let arr = JSON.parse(localStorage.getItem("courses")) || [];
//             let fields = $("form").serializeArray();
//             let object = fields.reduce((obj, item) => (obj[item.name] = item.value, obj), {})
//             // console.log(object)
//             arr.push(object)

//             localStorage.setItem("courses", JSON.stringify(arr));
//             event.preventDefault();
//         });
//     });
// }

// function submittt(something) {
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
//             submittt(type)
//             break;
//         case (currentUrl.includes("trainer")):
//             console.log("trainers")
//             break;
//         case (currentUrl.includes("course")):
//             console.log("courses")
//             break;

//     }
// }

// function showExistingObjectsFromArray(currentArrayOfObjects){
//     $("#existing").change = () => {
//         let array = JSON.parse(localStorage.getItem(currentArrayOfObjects)) || [];
//         array.forEach((object) => {
//             if (object.objectName == $("#existing").val()) {
//                 $('#form *').filter(':input').each(function () {
//                     if ($(this).hasClass("btn")) {
//                         return
//                     } else {
//                         Object.values(object).forEach(val => console.log(val));
//                         // $(this).val(val)
//                     }
//                 });
//             }
//         });
//     }
// }
// ONE PART ORIGINAL SHOW OBJECTS  FUNCTION
// function showExistingObjectsFromArray(currentArrayOfObjects) {
//   $("#existing").change(() => {
//     currentArrayOfObjects.forEach((object) => {
//       let entries = Object.entries(object);
//       if (object.objectName == $("#existing").val()) {
//         $("#form *")
//           .filter(":input")
//           .each(function (index) {
//             if ($(this).hasClass("btn")) {
//               return;
//             } else {
//               $(this).val(entries[index][1]);
//             }
//           });
//       }
//     });
//   });
// }
// FUNCTION EDIT WITH TRIES
// function edit(currentArrayOfObjects) {
//   let fields = $("form").serializeArray();
//   let object = fields.reduce(
//     (obj, item) => ((obj[item.name] = item.value), obj),
//     {}
//   );
//   // let find = currentArrayOfObjects.findIndex( (object) => {
//   //   console.log(object);
//   //   return object.objectName == $("#existing").val()})
//   // $("#existing").change(() => {
//   //   currentArrayOfObjects.findIndex((object, index) => {
//   //     x = index;
//   //     return object.objectName == $("#existing").val();
//   //   });
//   let find = currentArrayOfObjects.findIndex(object => object.objectName == $("#existing").val())
//   // let find = "";
//   // existing.onchange = () => {
//   //   currentArrayOfObjects.findIndex((object, index) => {
//   //     find = index;
//   //     return object.objectName == $("#existing").val();
//   //   });
//   // };
//   console.log(find);
//   currentArrayOfObjects.splice(find, 1);
//   currentArrayOfObjects.push(object);

//   //   localStorage.setItem(currentArrayOfObjects, JSON.stringify(array));
// }
