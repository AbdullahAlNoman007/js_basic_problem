// Use of typeof function
const nam= "sunan"
const age = 22
const friend = ['sifat','noman', 'toda','jack','kutta','bilai']
const isgood = true
const height = 7.8 
const details = {school:'barguna zilla school',college:'bhola college',Varsity:'RUET'}
function sum(a){
    return a
}
console.log(typeof(nam))
console.log(typeof(age))
console.log(typeof(friend))
console.log(typeof(isgood))
console.log(typeof(height))
console.log(typeof(details))
console.log(typeof(sum))

//check array using Array.isArray(array's name)


console.log(Array.isArray(friend))

// concat : merge two array

const array1= [2,3,44,5,1,5,6,66,79]
const array2= [1,2,3,4,5,6,7,8,9]

console.log(array1.concat(array2))