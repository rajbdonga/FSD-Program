// Waf named firstlast that tags and array and return ands objects such that first element of array is key 
// of object and last element is it's value , display the object in terminal 

function firstlast(arr) {
    var obj = {};
    obj[arr[0]] = arr[arr.length - 1];
    return obj;
}

var array = ["a" , "b" , "c" , "d"];
var result = firstlast(array);
console.log(result);
    


