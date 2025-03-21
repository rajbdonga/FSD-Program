// Write a json object which contents array of 3 objects , each objects contents 2 properties
// name and age , sort the object in desending order of age and print name and age in terminal 
// as per sorted age 

var person = [{"name" : "abc" , "age" : 15} , 
              {"name" : "xyz" , "age" : 45} , 
              {"name" : "pqr" , "age" : 35}
]

// Method 1 

for(var i=0; i<person.length; i++){
    for(var j=i+1; j<person.length; j++){
        if(person[i].age < person[j].age){
            var temp = person[i];
            person[i] = person[j];
            person[j] = temp;
        }
    }
}

for(var p of person){
    console.log(p.name + " ==> " + p.age);
}

// Method 2 

person.sort((a,b)=>b.age-a.age);
console.log(JSON.stringify(person));