import student from "./student.json" with {type:"json"}
const jsobj=JSON.parse(JSON.stringify(student))// stringify-to convert json object to string, parse-to convert string to js object
console.log(jsobj.name)
console.log(jsobj.gender)
console.log(jsobj)

