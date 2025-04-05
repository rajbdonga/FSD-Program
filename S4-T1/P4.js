// Caf listtoobject that tags a 2D array as input where first element of inner array becomes key and 
// second elemnts become value of and object , return and array of such objects 

var a = [["car1","bmw"],["car2","audi"],["car3","mustang"]];

// Method 1

function listtoobject(a){
    var o = {};
    for(i in a){
        o[a[i][0]] = a[i][1];
    }
    return o;
}

console.log(JSON.stringify(listtoobject(a)))

// Method 2

function listtoobject1(a){
    var arr=[];
    for(i in a){
        out = {};
        out[a[i][0]] = a[i][1];
        arr.push(out);
    }
    return arr;
}

console.log(JSON.stringify(listtoobject1(a)))
