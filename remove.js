const array1= [2,3,4,5,1,5,6,6]
const new_array = []
for( var i=0 ; i<array1.length ;i++){
    var element = array1[i]
    if (new_array.indexOf(element) == -1){
        new_array.push(element)
    }
}
console.log(new_array)