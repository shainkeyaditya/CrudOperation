//  A callback function basic understanding with example

console.log("This is tutorial 37");

const students = [
    {name:"Ayush", subject: "JavaScript"},
    {name:"Rohan", subject: "Machine learning"}
]

function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        // console.log('Student has been enrolled');
        callback();
    },8000);

}

function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student) {
            str += `<li> ${student.name}</li>`
        })
        document.getElementById('students').innerHTML = str;
        console.log('Student have been fetched');
    },4000);

}
let newStudent = {name:"Shainkey aditya jain", subject:"Python"}
enrollStudent(newStudent, getStudents);
// getStudents();


//  Above example by using promise

function enrollStudent(student){
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if(!error){
                resolve();
            }else {
                reject();
            }
        },5000);
    })

}

function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student) {
            str += `<li> ${student.name}</li>`
        })
        document.getElementById('students').innerHTML = str;
        console.log('Student have been fetched');
    },4000);

}
let newStudent = {name:"Shainkey aditya jain", subject:"Python"}
enrollStudent(newStudent).then(getStudents).catch((error)=>{
    console.log("Promise has been rejected");
})
/* important points
1- function inside then is run as promise resolve
2- function inside catch is run as promise reject
*/