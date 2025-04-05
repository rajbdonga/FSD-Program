//  Add Method

function add(a,b,d){
    c = a + b;
    d(c);
}
function display(ans){
    console.log(ans);
}
add(10,20,display)

//  Mul Method

function mul(a,b,d){
    c = a * b;
    d(c);
}
function display(ans){
    console.log(ans);
}
mul(10,20,display)