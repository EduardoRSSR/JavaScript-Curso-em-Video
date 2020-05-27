let v = function(x) {

    return x*2;
}
console.log(`${v(4)}`);


function fat(n){

let fat=1;
for(let c=n ; c>1 ; c--){

    fat=fat*c;
}
return fat;
}

console.log(`${fat(5)}`);