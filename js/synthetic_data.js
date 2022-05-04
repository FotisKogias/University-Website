const courses = [{
    objectName: "PYTHON DJANGO",
    streams: "PYTHON",
    types: "Full-Time",
    startdate: "2022-01-01",
    enddate: "2022-06-30",
    comments: ""
},
{
    objectName: "REACT",
    streams: "JAVASCRIPT",
    types: "Full-Time",
    startdate: "2022-01-01",
    enddate: "2022-06-30",
    comments: ""
},
{
    objectName: "LUA",
    streams: "C#",
    types: "Part-Time",
    startdate: "2022-01-01",
    enddate: "2022-06-30",
    comments: ""
}
]

const trainers = [
    {
        objectName: "Nikos",
        last_name: "Panou",
        streams: "PYTHON",
        courseEnlist: "PYTHON DJANGO"
    },
    {
        objectName: "Maria",
        last_name: "Anagnostaki",
        streams: "C#",
        courseEnlist: "LUA"
    },
    {
        objectName: "Apostolis",
        last_name: "Nikou",
        streams: "JAVASCRIPT",
        courseEnlist: "REACT"
    },

]

const students = [
    {
        objectName: "Nikol",
        last_name: "Aggelou",
        birthDate: "1997-07-20",
        plan: "Premium Plan: 20.000$",
        courseEnlist: "REACT",
        courses: [
            "REACT",
            "PYTHON DJANGO"
        ],
        assignments: [
            "PYTHON-SERVER",
            "REACT-SERVER"
        ]
    },
    {
        objectName: "Manos",
        last_name: "Pappas",
        birthDate: "1993-01-14",
        plan: "Full Plan: 20.000$",
        courseEnlist: "PYTHON DJANGO",
        courses: [
            "PYTHON DJANGO"
        ]
    },
    {
        objectName: "Dimitris",
        last_name: "Spirou",
        birthDate: "1990-07-14",
        plan: "Full Plan: 20.000$",
        courseEnlist: "LUA",
        courses: [
            "REACT",
            "PYTHON DJANGO",
            "LUA"
        ],
        assignments: [
            "LUA-SERVER"
        ]
    }
]

const assignments = [
    {
        objectName: "PYTHON-SERVER",
        oralMark: "45",
        totalmark: "51",
        subdate: "2022-11-16",
        courseEnlist: "PYTHON DJANGO",
        comments: ""
    },
    {
        objectName: "REACT-SERVER",
        oralMark: "35",
        totalmark: "80",
        subdate: "2022-09-20",
        courseEnlist: "REACT",
        comments: ""
    },
    {
        objectName: "LUA-SERVER",
        oralMark: "15",
        totalmark: "60",
        subdate: "2022-09-25",
        courseEnlist: "LUA",
        comments: ""
    }

]
document.getElementById("synthetic").addEventListener("click",function () {
    alert("Synthetic Data have been added successfully")
    localStorage.setItem("courses", JSON.stringify(courses));
    localStorage.setItem("trainers", JSON.stringify(trainers));
    localStorage.setItem("student", JSON.stringify(students));
    localStorage.setItem("assignment", JSON.stringify(assignments));
    window.location.replace("../index.html");
})

// localStorage.setItem("courses", JSON.stringify(courses));
// localStorage.setItem("trainers", JSON.stringify(trainers));
// localStorage.setItem("student", JSON.stringify(students));
// localStorage.setItem("assignment", JSON.stringify(assignments));