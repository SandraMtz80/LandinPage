
document.addEventListener("DOMContentLoaded", () =>{

});

const fibonacci = (n) =>{
//[0,1,2,3,4,5,6,7,]
var serie_fibonacci = [0,1];
if ( n === 0 || n === 1){
    return serie_fibonacci[n]
}
for(let i = 0; i < n; i++){
    if(i === 0 || i === 1){
        continue;
    } else {
        const n1 = serie_fibonacci[i - 1];
        const n2 = serie_fibonacci[i - 2];
        serie_fibonacci.push(n1+n2);
    } 
    console.log(1)
    console.log(serie_fibonacci);
    }
    return serie_fibonacci[n];
}