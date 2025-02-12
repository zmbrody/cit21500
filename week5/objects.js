// Java is a prototype-based OOP lang, meaning you don't need a class to create an object.

/*
const student =
{
    // no KVs - empty
}
*/

const studentAlt =
{
    name : "Zachary Brody",
    age : 26,
    major: "CIT",
    grades :
    {
        // yo dawg, I heard you like KVs, so I put KVs in your KVs
        programming : 96,
        logic : 87,
        calc : 85
    },
    transferStudent : true,
    
    notify : function (message)
    {
        alert(`Notification am I, for ${this.name}`)
    }
}
console.log(studentAlt);

console.log(`Student, ${studentAlt.name}, is ${studentAlt.age} and is studying ${studentAlt.major}`);
console.log("" + studentAlt["grades"]["programming"]);
